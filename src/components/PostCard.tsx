"use client";
import { useRouter } from "next/navigation";

export default function PostCard({ post }: { post: any }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/posts/${post.id}`)}
      className="p-4 border rounded-2xl shadow hover:shadow-lg cursor-pointer transition"
    >
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p className="text-gray-600">{post.content}</p>
      <span className="text-sm text-blue-500">
        {post.isFav ? "⭐ Favorite" : "☆ Not Favorite"}
      </span>
    </div>
  );
}
