"use client";

import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-white border border-gray-400 text-gray-800 p-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="text-xl font-bold text-black hover:text-[#02939e] transition-colors duration-300"
          >
            Personal Blog
          </Link>
          {isAuthenticated && (
            <Link
              href="/blogs/create"
              className="text-white bg-[#02939e] hover:bg-white hover:text-[#02939e] hover:border hover:border-[#02939e] font-semibold text-xs py-2 px-4 rounded-md transition-colors duration-300"
            >
              + Add New Blog
            </Link>
          )}
        </div>
        <nav className="space-x-4 flex items-center">
          {!isAuthenticated ? (
            <>
              <Link
                href="/auth/login"
                className="text-white bg-[#02939e] hover:bg-white hover:text-[#02939e] hover:border hover:border-[#02939e] font-semibold text-xs py-2 px-4 rounded-md transition-colors duration-300"
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                className="text-white bg-[#02939e] hover:bg-white hover:text-[#02939e] hover:border hover:border-[#02939e] font-semibold text-xs py-2 px-4 rounded-md transition-colors duration-300"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <button
              onClick={logout}
              className="text-white bg-[#02939e] hover:bg-white hover:text-[#02939e] hover:border hover:border-[#02939e] font-semibold text-xs py-2 px-4 rounded-md transition-colors duration-300"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
