import React from "react";
import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[calc(100vh-37vh)] flex items-center justify-center">
      <Loader className="animate-spin" size={150} />
    </div>
  );
}
