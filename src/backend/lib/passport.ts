import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import bcrypt from "bcryptjs";
// import dbConnect from "@/backend/lib/db";
// import UserModel, { User } from "@/backend/lib/models/User.model";
import prisma from "@/backend/lib/prisma";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;

passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email: string, password: string, done) => {
      // await dbConnect();
      try {
        // const user = await UserModel.findOne({ email });
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return done(null, false, { message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return done(null, false, { message: "Invalid credentials" });
        }

        return done(null, user);
      } catch (err) {
        return done(err as Error);
      }
    }
  )
);

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: (req) => {
        let token: string | null = null;
        const authHeader =
          (req as any)?.headers?.get?.("authorization") ||
          (req as any)?.headers?.authorization;

        if (authHeader && authHeader.startsWith("Bearer ")) {
          token = authHeader.substring(7);
        }

        console.log("Extracted token:", token);
        return token;
      },
      secretOrKey: JWT_SECRET,
    },
    async (payload: { id: string }, done) => {
      console.log("JWT payload received:", payload);
      // await dbConnect();
      try {
        // const user = await UserModel.findById(payload.id).select("-password");
        const user = await prisma.user.findUnique({
          where: { id: payload.id },
          select: { id: true, email: true, username: true, role: true },
        });
        console.log("User from DB:", user);
        if (!user) return done(null, false);
        return done(null, user);
      } catch (err) {
        console.error("JWT strategy error:", err);
        return done(err as Error, false);
      }
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      // await dbConnect();
      try {
        // Check if user already exists
        // let user = await UserModel.findOne({
        //   email: profile.emails?.[0].value,
        // });
        let user = await prisma.user.findUnique({
          where: { email: profile.emails?.[0].value },
        });

        if (!user) {
          user = await prisma.user.create({
            data: {
              username: profile.displayName,
              email: profile.emails?.[0].value!,
              password: "google-oauth", // placeholder, not used
              role: "USER",
            },
          });
        }

        return done(null, user);
      } catch (err) {
        return done(err as Error, false);
      }
    }
  )
);
export default passport;
