"use client";
import { useState, useEffect } from "react";

export default function FetchPostsPage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/external")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPosts(data.data);
        } else {
          setError(data.message);
        }
      })
      .catch((err) => setError("An expected error"))
      .finally(() => setLoading(false));
  }, []);
  // if(loading) return <p>loading</p>

  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-center text-4xl font-extrabold text-blue-600 mb-6 underline decoration-blue-400">
        Posts Coming From API
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post: { id: number; title: string }) => (
          <div
            key={post.id}
            className="flex flex-col items-start bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <span className="text-lg font-semibold text-blue-500">
              Post ID: {post.id}
            </span>
            <p className="mt-2 text-gray-800 font-medium">{post.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
