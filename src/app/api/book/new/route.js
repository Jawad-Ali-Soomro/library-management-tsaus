import { connect } from "@/database/database";
import Book from "@/models/book.model";
import { NextResponse } from "next/server";

connect();

export async function POST(request) {
  try {
    const { title, description, quantity, department, cover_page } =
      await request.json();

    const book = await Book.create({
      title,
      description,
      quantity,
      department,
      cover_page,
    });

    return NextResponse.json(
      { message: "Book Created!", book },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
