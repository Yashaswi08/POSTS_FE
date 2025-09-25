"use client";
import { useParams } from "next/navigation";
import useSWR from "swr";
import api from "../../../lib/api";

const fetcher = (url: string) => api.get(url).then((res) => res.data);

export default function PostDetailPage() {
  const { id } = useParams();
  const { data: post, error, isLoading, mutate } = useSWR(`/posts/${id}`, fetcher);

  if (error) return <p className="text-red-500">Failed to load post</p>;
  if (isLoading) return <p>Loading...</p>;

  const toggleFav = async () => {
    await api.patch(`/posts/${id}/fav`);
    mutate();
  };

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="mt-2 text-gray-600">{post.content}</p>
      <button
        onClick={toggleFav}
        className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg"
      >
        {post.isFav ? "Unfavorite ⭐" : "Favorite ☆"}
      </button>
    </main>
  );
}
