import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connect } from "@/database/database";
import User from "@/models/user.model";

connect();

export async function POST(request) {
  try {
    const { username, email, password } = await request.json();
    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json(
        { error: "user exists already!" },
        { status: 400 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      username,
      password: hashedPassword,
    });

    return NextResponse.json({ success: true, user: newUser }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
