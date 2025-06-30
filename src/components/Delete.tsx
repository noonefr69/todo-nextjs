import handleDelete from "@/actions/handleDelete";
import { Trash } from "lucide-react";

export default function Delete({id} : any) {
  return (
    <div>
      <form action={handleDelete}>
        <input type="hidden" name="id" value={id} />
        <button className="cursor-pointer" type="submit">
          <Trash />
        </button>
      </form>
    </div>
  );
}
