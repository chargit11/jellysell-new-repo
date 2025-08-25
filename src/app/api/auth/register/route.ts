import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/backend/lib/db";
import UserModel from "@/backend/lib/models/User.model";

export async function POST(req: Request) {
  await dbConnect();
  try {
    const { username, email, password } = await req.json();

    if (!username || !email || !password) {
      return NextResponse.json(
        { success: false, error: "All fields are required", data: null },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await UserModel.create({
      username,
      email,
      password: hashedPassword,
    });

    const { password: _, ...userResponse } = user.toObject();
    return NextResponse.json(
      { success: true, data: userResponse },
      { status: 201 }
    );
  } catch (error: any) {
    if (error.code === 11000) {
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
