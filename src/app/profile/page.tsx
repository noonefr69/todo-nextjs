import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import React from "react";
import unknown from "../../../public/unknown.jpg";

export default async function Profile() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }
  return (
    <div>
      <Image
        src={session?.user?.image ?? unknown}
        alt="f"
        width={300}
        height={300}
      />
    </div>
  );
}
