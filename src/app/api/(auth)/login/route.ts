import { NextResponse } from "next/server";
import connect from "@/backend/lib/db";
import User from "@/backend/lib/models/user";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    await connect();

    // find user

    // check match user password

    // create refresh and access jwt token

    // return the tokens in response
    return new NextResponse(JSON.stringify({}), { status: 200 });
  } catch (error: any) {
    return new NextResponse("Error in creating user" + error.message, {
      status: 500,
    });
  }
};
