"use client";

import { useTransition, useState } from "react";
import { Loader, Plus } from "lucide-react";
import { handlePost } from "@/actions/handlePost";

export default function AddPostForm() {
  const [isPending, startTransition] = useTransition();
  const [inputValue, setInputValue] = useState("");

  function onSubmit(formData: FormData) {
    startTransition(() => {
      handlePost(formData);
      setInputValue("");
    });
  }

  return (
    <div className="flex shadow-xl flex-col justify-center items-center border-2 rounded-xl h-40">
      <form
        className="flex items-center w-full px-5 space-x-5"
        action={onSubmit}
      >
        <input
          name="todo"
          className="border-b-3 border-r-3 outline-none w-full py-3  duration-200 focus:border-[#8a8989]"
          type="text"
          required
          placeholder="Enter Your ToDo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isPending}
        />
        <button className="cursor-pointer" type="submit" disabled={isPending}>
          {isPending ? (
            <Loader className="animate-spin" size={24} />
          ) : (
            <Plus size={24} />
          )}
        </button>
      </form>
    </div>
  );
}
