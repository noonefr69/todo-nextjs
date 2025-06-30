"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export default function Checked(params: any) {
  const [check, setCheck] = useState(false);
  return (
    <div className="flex items-center gap-4">
      <Checkbox
        checked={check}
        onCheckedChange={() => setCheck(!check)}
        className="cursor-pointer duration-200"
      />{" "}
      <p
        className={`${
          check ? `line-through opacity-55 ` : ""
        } text-lg font-semibold break-words overflow-hidden duration-200`}
      >
        {params.data}
      </p>
    </div>
  );
}
