import dbConnect from "@/lib/db";
import User from "@/lib/model/User";

export async function GET() {
  await dbConnect();

  const users = await User.find({}); // fetch all users

  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
