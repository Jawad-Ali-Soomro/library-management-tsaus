import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request) {
  try {
    const token = request.cookies.get("authToken")?.value;
    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return NextResponse.json({ success: true, user: decoded });
  } catch (error) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
}
