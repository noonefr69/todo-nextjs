"use client";

import handleDelete from "@/actions/handleDelete";
import { Loader, Trash } from "lucide-react";
import { useTransition } from "react";

interface Props {
  id: string;
}

export default function Delete({ id }: Props) {
  const [isPending, startTransition] = useTransition();

  function onSubmit(formData: FormData) {
    // if (!confirm("Are you sure you want to delete this task?")) return;

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
