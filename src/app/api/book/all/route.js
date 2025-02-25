import { NextResponse } from "next/server";
import Book from "@/models/book.model";

const { connect } = require("@/database/database");

connect();

export async function GET(request) {
  const foundBooks = await Book.find({});
  if (foundBooks) {
    return NextResponse.json(
      { message: "Found Books", foundBooks },
      { status: 201 }
    );
  }
  try {
  } catch (error) {
    return NextResponse.json(
      { message: "error while fetching books information" },
      { status: 500 },
      { error }
    );
  }
}
