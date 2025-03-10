import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("mongoDB connected!");
    });
    connection.on("error", (err) => {
      console.log("Error while connecting with mongDB!");
      process.exit();
    });
  } catch (error) {
    console.log("Error", error.message);
  }
}
