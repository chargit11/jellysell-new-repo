import { NextResponse } from "next/server";
import passport from "@/backend/lib/passport";

export async function GET(req: Request): Promise<Response> {
  return new Promise<Response>((resolve) => {
    passport.authenticate("google", { scope: ["profile", "email"] })(
      req as any,
      {} as any,
      () => {
        resolve(
          NextResponse.json(
            { success: false, error: "Google redirect not triggered" },
            { status: 500 }
          )
        );
      }
    );
  });
}
