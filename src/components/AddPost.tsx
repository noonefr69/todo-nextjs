import { auth } from "@/auth";
import AddPostForm from "./AddPostForm";

export default async function AddPost() {
  const session = await auth();
  const user = session?.user;

  return user ? <AddPostForm /> : null;
}
