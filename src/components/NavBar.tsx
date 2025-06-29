import Link from "next/link";
import React from "react";
import { Toggler } from "./Toggler";
import Authentication from "./Authentication";

export default function NavBar() {
  return (
    <div className="mb-9">
      <nav className="flex justify-between items-center px-5 py-8 border-b-2">
        <Link className="font-semibold text-2xl" href={`/`}>
          Twit
        </Link>
        <div className="flex items-center gap-8">
          <Authentication />
          <Toggler />
        </div>
      </nav>
    </div>
  );
}
