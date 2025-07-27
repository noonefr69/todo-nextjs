import { auth, signIn, signOut } from "@/auth";
import { Github, Smile } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import unknown from "../../public/unknown.jpg";

export default async function LilProf() {
  const session = await auth();
  const user = session?.user;
  return user ? (
    <div className="flex shadow-xl flex-col justify-center items-center border-2 rounded-xl h-80">
      <Link href={`/profile`}>
        <Image
          className="rounded-full my-5 shadow-xs scale-110 border-2 border-transparent duration-200 hover:border-[#2e2e2e] dark:hover:border-white"
          src={user?.image || unknown}
          alt={user?.name || "UnKnown UserName"}
          width={100}
          height={100}
        />
      </Link>
      <h1 className="font-semibold text-lg mb-2">{user?.name}</h1>
      <h3 className="text-gray-500 mb-4">{user?.email}</h3>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button
          className="cursor-pointer mb-5 text-white bg-black dark:bg-white dark:text-black rounded-full px-4 justify-center py-2 font-semibold flex items-center gap-4 duration-200 hover:opacity-75"
          type="submit"
        >
          Sign Out
        </button>
      </form>
    </div>
  ) : (
    <div className="flex shadow-xl flex-col justify-center items-center border-2 rounded-xl h-80">
      <h1 className="flex items-center gap-2 font-semibold text-xl mb-2">Welcome To ToDo <Smile /></h1>
      <p className="font-semibold text-xl text-center mb-6">Let’s sign in to begin the journey</p>
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <button
          className="cursor-pointer text-white bg-black dark:bg-white dark:text-black rounded-full px-4 justify-center py-2 font-semibold flex items-center gap-4 duration-200 hover:opacity-75"
          type="submit"
        >
          Sign In with <Github />
        </button>
      </form>
    </div>
  );
}
