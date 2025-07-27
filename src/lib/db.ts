import mongoose from "mongoose";

let isConnected = false;

export default async function dbConnect() {
    if (isConnected) return;

    const uri = process.env.DB_URI;
    if(!uri){
        throw new Error(`Error in uri`);
    };

    try {
      await mongoose.connect(uri)
      isConnected = true;
      console.log(`connected succesfully !`);
    } catch (error) {
      console.error("can not connected succesfully", error);
    }
}
