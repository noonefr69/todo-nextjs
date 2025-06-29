import { auth, signIn, signOut } from "@/auth";
import { GiftIcon, Github } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import unknown from "../../public/unknown.jpg";
import Image from "next/image";

export default async function Authentication() {
  const session = await auth();
  const user = session?.user;

  return user ? (
    <>
      <Link href={`/profile`}>
        <Avatar className="scale-110 border-2 border-transparent duration-200 hover:border-[#2e2e2e] dark:hover:border-white">
          <AvatarImage src={user?.image ?? undefined} />
          <AvatarFallback>
            <Image src={unknown} alt="kir" />
          </AvatarFallback>
        </Avatar>
      </Link>
    </>
  ) : (
    <>
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
    </>
  );
}
