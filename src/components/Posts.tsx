import React from "react";
import Checked from "./Checked";
import { auth } from "@/auth";
import { Heart, Ghost } from "lucide-react";
import axios from "axios";
import Delete from "./Delete";
import Edit from "./Edit";

export default async function Posts({ params }: any) {
  const res = await axios.get(`http://localhost:3000/api/data`);
  const datas = await res.data;
  const session = await auth();
  const user = session?.user;

  return user ? (
    datas && datas.length > 0 ? (
      <div className="flex shadow-xl flex-col border-2 rounded-xl p-5 min-h-[calc(100vh-37vh)]">
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
      <>
        <div className="flex items-center shadow-xl flex-col justify-center border-2 rounded-xl p-5 min-h-[calc(100vh-37vh)]">
          <h1 className="font-semibold text-2xl animate-bounce">
            <Ghost size={100} />
          </h1>
          <h1 className="font-semibold text-2xl mt-4 animate-pulse">
            Your ToDo is Empty
          </h1>
        </div>
      </>
    )
  ) : (
    <>
      <div className="flex items-center shadow-xl flex-col justify-center border-2 rounded-xl p-5 min-h-[calc(100vh-18vh)]">
        <h1 className="font-semibold text-2xl mb-4">
          For Start ToDo first Sign In
        </h1>
        <h3 className="font-semibold text-lg text-center flex flex-col items-center gap-2 opacity-50">
          You can Sign in with Sign In button in your left {" "}
        </h3>
        <Heart  className="mt-4 text-transparent shadow-2xl" fill="red"/>
      </div>
    </>
  );
}
