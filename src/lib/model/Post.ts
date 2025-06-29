import { model, models, Schema } from "mongoose";

const PostSchema = new Schema({
  text: { type: String, required: true }
});

const Post = models.Post || model("Post", PostSchema);

export default Post;
