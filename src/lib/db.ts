import mongoose from "mongoose";

export default async function dbConnect() {
  try {
    mongoose.connect(process.env.DB_URI)
    console.log(`connected succesfully`);
  } catch (error) {
    console.log(error);
  }
}
