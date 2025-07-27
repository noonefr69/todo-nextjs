"use server";

import dbConnect from "@/lib/db";
import Post from "@/lib/model/Post";
import { revalidatePath } from "next/cache";

export default async function handleDelete(formData: FormData) {
  await dbConnect();

  const id = formData.get("id") as string;

  if (!id) {
    throw new Error("No ID provided");
  }

  await Post.findByIdAndDelete(id);

  revalidatePath("/");
}
