import AddPost from "@/components/AddPost";
import LilProf from "@/components/LilProf";
import Posts from "@/components/Posts";

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-7">
      <div className="col-span-3">
        <LilProf />
      </div>
      <div className="col-span-6 space-y-5">
        <AddPost />
        <Posts />
      </div>
    </div>
  );
}
