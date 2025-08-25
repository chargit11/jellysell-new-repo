import { NextResponse } from "next/server";
import passport from "@/backend/lib/passport";
import { User } from "@/backend/lib/models/User.model";

export function authenticateJWT(req: Request): Promise<User> {
  return new Promise((resolve, reject) => {
    passport.authenticate(
      "jwt",
      { session: false },
      (
        err: Error | null,
        user: User | false,
        info: { message?: string } | undefined
      ) => {
        if (err) {
          return reject(
            NextResponse.json(
              { error: "Authentication error", details: err.message },
              { status: 500 }
            )
          );
        }
        if (!user) {
          return reject(
            NextResponse.json(
              {
                error: "Unauthorized",
                details: info?.message || "Invalid token",
              },
              { status: 401 }
            )
          );
        }
        resolve(user);
      }
    )(req as any);
  });
}
