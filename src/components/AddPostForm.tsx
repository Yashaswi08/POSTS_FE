"use client";
import { useState } from "react";
import api from "../lib/api";
import useSWR from "swr";

export default function AddPostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { mutate } = useSWR("/posts");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;
    await api.post("/posts", { title, content });
    setTitle("");
    setContent("");
    mutate(); // refresh posts
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 p-4 border rounded-xl shadow">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
        className="w-full p-2 border rounded"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Post content"
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Add Post
      </button>
    </form>
  );
}
