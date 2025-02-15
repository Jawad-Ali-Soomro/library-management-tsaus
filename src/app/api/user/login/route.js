import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connect } from "@/database/database";
import User from "@/models/user.model";
import jwt from "jsonwebtoken";

connect();

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials!" },
        { status: 400 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid credentials!" },
        { status: 400 }
      );
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return NextResponse.json({ success: true, token, user }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
