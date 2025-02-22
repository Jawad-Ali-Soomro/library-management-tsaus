import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "please enter book title"],
  },
  description: {
    type: String,
    required: [true, "please enter book description"],
  },
  quantity: {
    type: Number,
    default: 0,
  },

  department: {
    type: String,
    enum: [
      "Computer Science",
      "Information Technology",
      "Mathematics",
      "Business Administration",
      "Commerce",
      "Education",
      "English",
    ],
  },
  cover_page: {
    type: String,
    default: "",
  },
  issuance: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Borrow",
    },
  ],
});

const Book = mongoose.models.Book || mongoose.model("Book", bookSchema);
export default Book;
