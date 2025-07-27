"use client";

import handleDelete from "@/actions/handleDelete";
import { Loader, Trash } from "lucide-react";
import { useTransition } from "react";

export default function Delete({ id }: any) {
  const [isPending, startTransition] = useTransition();

  function onSubmit(formData: FormData) {
    startTransition(() => {
      handleDelete(formData);
    });
  }
  return (
    <div>
      <form action={onSubmit}>
        <input type="hidden" name="id" value={id} />
        <button className="cursor-pointer" type="submit">
          {isPending ? (
            <Loader className="animate-spin" size={24} />
          ) : (
            <Trash />
          )}
        </button>
      </form>
    </div>
  );
}
