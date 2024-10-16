"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "../../../utils/api";
import Link from "next/link";

export default function BlogDetail({ params }) {
  const [blog, setBlog] = useState(null);
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        try {
          const response = await api.get(`blog/blogs/${id}`);
          console.log(response);
          setBlog(response.data.blog);
        } catch (error) {
          console.error("Failed to fetch blog:", error);
        }
      };
      fetchBlog();
    }
  }, [id]);

  if (!blog) return <p className="text-center text-gray-500">Loading...</p>;

  const handleDelete = async () => {
    try {
      await api.delete(`blog/blogs/${id}`);
      router.push("/");
    } catch (error) {
      console.error("Failed to delete blog:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{blog.title}</h1>
        <p className="text-gray-700 mb-8">{blog.content}</p>
        <div className="flex space-x-4">
          <Link href={`/edit/${blog.id}`}>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
              Edit Blog
            </button>
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
          >
            Delete Blog
          </button>
        </div>
      </div>
    </div>
  );
}
