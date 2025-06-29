import mongoose from "mongoose";

export default async function dbConnect() {
    const uri = process.env.DB_URI;
    if(!uri){
        throw new Error(`Error in uri`);
    };

  try {
    mongoose.connect(uri)
    console.log(`connected succesfully`);
  } catch (error) {
    console.log(error);
  }
}
