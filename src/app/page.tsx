import LilProf from "@/components/LilProf";

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-7">
      <div className="col-span-3">
        <LilProf />
      </div>
      <div className="col-span-6">world</div>
    </div>
  );
}
