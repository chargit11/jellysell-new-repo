import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
// import dbConnect from "@/backend/lib/db";
// import UserModel from "@/backend/lib/models/User.model";
import prisma from "@/backend/lib/prisma";
import { authenticateJWT } from "@/backend/lib/authMiddleware";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  console.log("Headers:", Object.fromEntries(req.headers.entries()));

  const { id } = await params;

  try {
    await authenticateJWT(req);
  } catch (err) {
    return err as NextResponse;
  }

  // await dbConnect();
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found", data: null },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: user });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message, data: null },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    await authenticateJWT(req);
  } catch (err) {
    return err as NextResponse;
  }

  // await dbConnect();
  try {
    const { username, email, password } = await req.json();

    const updateData: Record<string, any> = {};
    if (username) updateData.username = username;
    if (email) updateData.email = email;
    if (password) updateData.password = await bcrypt.hash(password, 12);

    const user = await prisma.user.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json({ success: true, data: user });
  } catch (error: any) {
    if (error.code === "P2002") {
      return NextResponse.json(
        {
          success: false,
          error: "Username or email already exists",
          data: null,
        },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: error.message, data: null },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    await authenticateJWT(req);
  } catch (err) {
    return err as NextResponse;
  }

  // await dbConnect();
  try {
    await prisma.user.delete({ where: { id } });

    return NextResponse.json({ success: true, data: null });
  } catch (error: any) {
    if (error.code === "P2025") {
      return NextResponse.json(
        { success: false, error: "User not found", data: null },
        { status: 404 }
      );
    }
  }
}
