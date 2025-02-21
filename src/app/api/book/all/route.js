import { NextResponse } from "next/server";
import Book from "@/models/book.model";

const { connect } = require("@/database/database");

connect();

export async function GET(request) {
  const foundBooks = await Book.get({});
  if (foundBooks) {
    return NextResponse.json(
      { message: "Found Books" },
      { status: 201 },
      { foundBooks }
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
