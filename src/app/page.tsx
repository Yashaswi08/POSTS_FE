"use client";
import useSWR from "swr";
import api from "../lib/api";
import PostCard from "../components/PostCard";
import AddPostForm from "../components/AddPostForm";

const fetcher = (url: string) => api.get(url).then((res) => res.data);

export default function HomePage() {
  const { data: posts, error, isLoading } = useSWR("/posts", fetcher);

  if (error) return <p className="text-red-500">Failed to load posts</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">📚 Posts</h1>
      <AddPostForm />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post: any) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
