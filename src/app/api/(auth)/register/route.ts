import { NextResponse } from "next/server";
import connect from "@/backend/lib/db";
import User from "@/backend/lib/modals/user";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    await connect();

    // encrypt password

    // store user
    const newUser = new User(body);
    await newUser.save();

    return new NextResponse(
      JSON.stringify({ message: "User is created", user: newUser }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse("Error in creating user" + error.message, {
      status: 500,
    });
  }
};
