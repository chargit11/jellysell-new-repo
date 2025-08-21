import { authMiddleware } from "@/backend/middlewares/authMiddleware";
import { logMiddleware } from "@/backend/middlewares/logMiddleware";
import { NextResponse } from "next/server";

export const config = {
  matcher: "/api/:path*",
};

export default function middleware(request: Request) {
  if (request.url.includes("/api/blogs")) {
    const logResult = logMiddleware(request);
    console.log(logResult.response);
  }

  const authResult = authMiddleware(request);
  if (!authResult?.isValid) {
    return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }
  return NextResponse.next();
}
