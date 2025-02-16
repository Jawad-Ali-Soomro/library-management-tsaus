import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connect } from "@/database/database";
import User from "@/models/user.model";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

connect();

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return NextResponse.json(
        { message: "Invalid credentials!" },
        { status: 400 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid credentials!" },
        { status: 400 }
      );
    }
    const token = jwt.sign({ user }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    const response = NextResponse.json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

    response.headers.set(
      "Set-Cookie",
      serialize("authToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      })
    );

    return response;
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
