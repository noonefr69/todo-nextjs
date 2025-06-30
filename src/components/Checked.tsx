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
        className="cursor-pointer"
      />{" "}
      <p
        className={`${
          check ? `line-through ` : ""
        } text-lg font-semibold break-words overflow-hidden`}
      >
        {params.data}
      </p>
    </div>
  );
}
