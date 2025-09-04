import { NextResponse } from "next/server";
// import dbConnect from "@/backend/lib/db";
// import UserModel from "@/backend/lib/models/User.model";
import prisma from "@/backend/lib/prisma";
import { authenticateJWT } from "@/backend/lib/authMiddleware";

export async function GET(req: Request) {
  try {
    await authenticateJWT(req);
  } catch (err) {
    return err as NextResponse;
  }

  // await dbConnect();

  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);

    const skip = (page - 1) * limit;
    const total = await prisma.user.count();

    const users = await prisma.user.findMany({
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    const totalPages = Math.ceil(total / limit);

    const baseUrl = `${req.url.split("?")[0]}`;

    const nextPage =
      page < totalPages ? `${baseUrl}?page=${page + 1}&limit=${limit}` : null;
    const prevPage =
      page > 1 ? `${baseUrl}?page=${page - 1}&limit=${limit}` : null;

    return NextResponse.json({
      success: true,
      data: users,
      pagination: {
        total,
        page,
        limit,
        totalPages,
        nextPage,
        prevPage,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message, data: null },
      { status: 500 }
    );
  }
}
