import Link from "next/link";
import React from "react";
import { Toggler } from "./Toggler";

export default function NavBar() {
  return (
    <div>
      <nav className="flex justify-between items-center px-5 py-8">
        <Link className="font-semibold text-2xl" href={`/`}>
          Twit
        </Link>
        <div className="flex items-center gap-8">
          <h1>signIn</h1>
          <Toggler />
        </div>
      </nav>
    </div>
  );
}
