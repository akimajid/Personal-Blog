"use client";
import { useEffect, useState } from "react";
import api from "../../utils/api";
import Link from "next/link";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get("/blog/blogs");
        setBlogs(response.data.blogs);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">List of Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105"
          >
            <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>

            <span className="inline-block bg-teal-500 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
              {blog.category}
            </span>

            <p className="text-gray-700 mb-4">
              {blog.content.slice(0, 100)}...
            </p>

            <Link href={`/blogs/${blog.id}`}>
              <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                Read More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
