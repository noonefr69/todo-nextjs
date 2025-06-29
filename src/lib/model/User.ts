import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  post: String
});

// Prevent model overwrite in dev/watch mode
const User = models.User || model("User", UserSchema);

export default User;
