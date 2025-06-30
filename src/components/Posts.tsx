import React from "react";
import Checked from "./Checked";
import { auth } from "@/auth";
import { Heart } from "lucide-react";
import axios from "axios";
import Delete from "./Delete";
import Edit from "./Edit";

export default async function Posts({params} : any) {
  const res = await axios.get(`http://localhost:3000/api/data`);
  const datas = await res.data;
  const session = await auth();
  const user = session?.user;

  console.log(params)

  return user ? (
    <div className="flex shadow-xl flex-col border-2 rounded-xl p-5 min-h-screen">
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
              {/* <Edit id={data._id}/> */}
              <Delete id={data._id} />
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
