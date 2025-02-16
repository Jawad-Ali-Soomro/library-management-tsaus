import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "username is required!"],
  },
  email: {
    type: String,
    required: [true, "email is required!"],
    unique: [true, "this email is associated with another account!"],
  },
  phone_number: {
    type: Number,
    default: 0,
  },
  identity_card: {
    type: Number,
    default: 0,
  },
  password: {
    type: String,
    required: [true, "password is required!"],
    select: false,
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
  batch: {
    type: Number,
    default: 1,
  },
  roll_number: {
    type: String,
    default: "",
  },
  semester: {
    type: Number,
  },
  avatar: {
    type: String,
    default: "",
  },
  is_verified: {
    type: Boolean,
    default: false,
  },
  is_admin: {
    type: Boolean,
    default: false,
  },
  borrowed_books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Borrow",
    },
  ],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
