import dbConnect from "@/lib/db";
import Post from "@/lib/model/Post";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();

  const { id } = params;

  const post = await Post.findById(id);

  if (!post) {
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(post), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();

  const { id } = params;

  const deletedPost = await Post.findByIdAndDelete(id);

  if (!deletedPost) {
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(deletedPost), {
    status: 200,
  });
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();

  const { id } = params;
  const body = await req.json();

  const updatedPost = await Post.findByIdAndUpdate(
    id,
    { $set: body },
    { new: true } 
  );

  if (!updatedPost) {
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(updatedPost), {
    status: 200,
  });
}