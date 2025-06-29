import React from "react";

export default async function Posts() {
  const res = await fetch(`http://localhost:3000/api/data`);
  const datas = await res.json();
  return (
    <div className="flex shadow-xl flex-col justify-center border-2 rounded-xl p-5">
      {datas.map((data: any) => (
        <li key={data._id}>{data.text}</li>
      ))}
    </div>
  );
}
