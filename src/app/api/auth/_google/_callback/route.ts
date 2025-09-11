import { NextResponse } from "next/server";
import passport from "@/backend/lib/passport";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export async function GET(req: Request): Promise<Response> {
  return new Promise<Response>((resolve) => {
    passport.authenticate("google", { session: false }, (err, user) => {
      if (err || !user) {
        return resolve(
          NextResponse.json(
            { success: false, error: "Google login failed" },
            { status: 401 }
          )
        );
      }

      const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
        expiresIn: "1d",
      });
      const origin = process.env.NEXT_PUBLIC_APP_URL || new URL(req.url).origin;

      resolve(NextResponse.redirect(`${origin}/newdashboard?token=${token}`));
    })(req as any, {} as any, () => {});
  });
}
