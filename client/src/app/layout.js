// app/layout.js
import Navbar from "../components/Navbar";
import "../app/globals.css";
import Footer from "@/components/Footer";
import { AuthProvider } from "../contexts/AuthContext";

export const metadata = {
  title: "Personal Blog",
  description: "A simple Personal blog with authentication",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <AuthProvider>
          <Navbar />
          <main className="flex-grow container mx-auto">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
