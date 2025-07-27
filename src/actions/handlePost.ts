"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

export async function handlePost(formData: FormData) {
  const text = formData.get("todo");

  if (!text) {
    throw new Error(`there is no input`);
  }

  await axios.post("http://localhost:3000/api/data", { text });
  
  revalidatePath("/");
}
