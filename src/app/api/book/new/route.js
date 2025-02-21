const { connect } = require("@/database/database");
import Book from "@/models/book.model";
import { NextResponse } from "next/server";

connect();

export async function POST(request) {
  try {
    const { title, description, quantity, department, cover_page } =
      request.json();
    const book = await Book.create({
      title,
      description,
      quantity,
      department,
      cover_page,
    });
    if (book) {
      return NextResponse.json({ message: "Book  Created!" }, book, {
        status: 200,
      });
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
