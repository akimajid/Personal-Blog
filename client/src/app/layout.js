// app/layout.js
import Navbar from "../components/Navbar";
import "../app/globals.css";
import Footer from "@/components/Footer";
import { AuthProvider } from "../contexts/AuthContext";

export const metadata = {
  title: "Todo App",
  description: "A simple todo app with authentication",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          <div className="container mx-auto">{children}</div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
