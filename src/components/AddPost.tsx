"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

export default function AddPost() {
  const [post, setPost] = useState();
  return (
    <div className="flex shadow-xl flex-col justify-center items-center border-2 rounded-xl h-40">
      <form className="flex items-center">
        <input className="border-b-3 w-full" type="text" required placeholder="Enter Your Post" />
        <button className="cursor-pointer" type="submit">
          <Plus />
        </button>
      </form>
    </div>
  );
}
