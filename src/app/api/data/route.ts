import dbConnect from "@/lib/db";
import Post from "@/lib/model/Post";

export async function GET() {
  await dbConnect();
  const users = await Post.find({});
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: Request) {
  await dbConnect();

  const body = await req.json();

  if (!body.text) {
    return new Response(JSON.stringify({ error: "Text is required." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const newPost = await Post.create({
    text: body.text,
  });

  return new Response(JSON.stringify(newPost), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
