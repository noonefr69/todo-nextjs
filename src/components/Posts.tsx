import React from "react";
import Checked from "./Checked";
import { auth } from "@/auth";
import { Heart } from "lucide-react";

export default async function Posts() {
  const res = await fetch(`http://localhost:3000/api/data`);
  const datas = await res.json();
  const session = await auth();
  const user = session?.user;

  return user ? (
    <div className="flex shadow-xl flex-col justify-center border-2 rounded-xl p-5">
      <ul className="flex flex-col gap-4">
        {datas.map((data: any) => (
          <li
            className="flex items-center justify-between  gap-5"
            key={data._id}
          >
            <div className="overflow-hidden">
              <Checked data={data.text} />
            </div>
            <div className="flex items-center gap-4">
              <button>edit</button>
              <button>delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div className="flex items-center shadow-xl flex-col justify-center border-2 rounded-xl p-5 h-[8.5rem]">
      <h1 className="font-semibold text-2xl mb-4">
        For Start ToDo first Sign In
      </h1>
      <h3 className="font-semibold text-lg text-center flex flex-col items-center gap-2 dark:text-gray-400 text-black">
        You can Sign in with Sign In button in your left or navigation bar{" "}
        <Heart />
      </h3>
    </div>
  );
}
