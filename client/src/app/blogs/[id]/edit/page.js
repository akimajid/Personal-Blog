"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "../../../../utils/api";

export default function EditBlog({ params }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) {
        console.error("Blog ID is not defined");
        return;
      }
      try {
        const response = await api.get(`/blog/blogs/${id}`);
        console.log("API Response:", response);
        if (response && response.data) {
          setTitle(response.data.blog.title || "");
          setContent(response.data.blog.content || "");
        } else {
          console.error("Data not found in the response");
        }
      } catch (error) {
        console.error("Failed to fetch blog:", error);
        setError("Failed to fetch blog. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/blog/blogs/${id}`, { title, content });
      router.push("/blogs");
    } catch (error) {
      console.error("Failed to update blog:", error);
      setError("Failed to update blog. Please try again.");
    }
  };

  if (loading) {
    return <p className="text-center mt-8">Loading blog data...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Edit Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-medium mb-2">Title</label>
          <input
            type="text"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">Content</label>
          <textarea
            placeholder="Write your blog content..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg h-40"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
}
