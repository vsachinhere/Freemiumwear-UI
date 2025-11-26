import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function AppRouter() {
  return (
    <div className="min-h-screen bg-linear-to-r from-[#c0b29f] to-[#e6e0da] flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
