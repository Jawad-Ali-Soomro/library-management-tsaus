import mongoose from "mongoose";
const borrowSchema = new mongoose.Schema({
  issued_to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  issued_book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
  },
  issued_date: {
    type: Date,
    default: date.now,
  },
  return_date: {
    type: Date,
    default: date.now,
  },
  is_returned: {
    type: Boolean,
    default: false,
  },
});

const Borrow =
  mongoose.models.borrows || mongoose.model("Borrow", borrowSchema);
module.exports = Borrow;
