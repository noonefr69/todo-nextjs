import handleEdit from "@/actions/handleEdit";
import { Edit } from "lucide-react";

interface Props {
  id: string;
}

export default function Delete({ id }: Props) {
  return (
    <div>
      <form action={handleEdit}>
        <input type="hidden" name="id" value={id} />
        <button className="cursor-pointer" type="submit">
          <Edit />
        </button>
      </form>
    </div>
  );
}
