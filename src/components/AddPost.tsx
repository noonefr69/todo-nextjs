import { handlePost } from "@/actions/handlePost";
import axios from "axios";
import { Plus } from "lucide-react";

export default function AddPost() {
  return (
    <div className="flex shadow-xl flex-col justify-center items-center border-2 rounded-xl h-40">
      <form
        className="flex items-center w-full px-5 space-x-5"
        action={handlePost}
      >
        <input
          name="todo"
          className="border-b-3 border-r-3 outline-none w-full py-3  duration-200 focus:border-[#8a8989]"
          type="text"
          required
          placeholder="Enter Your ToDo"
        />
        <button className="cursor-pointer" type="submit">
          <Plus />
        </button>
      </form>
    </div>
  );
}
