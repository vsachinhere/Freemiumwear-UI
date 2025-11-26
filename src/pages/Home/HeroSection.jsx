import React from 'react'
import { Link } from "react-router-dom";
import man from "./image/man.png"

export default function HeroSection() {
  return (
    <section className="text-[#8a6c50] bg-linear-to-r from-[#c4bcb1] to-[#d5cdc2] p-6 md:p-12 rounded-lg flex flex-col md:flex-row items-center justify-between gap-8">

      {/* Text Section */}
      <div className="text-center md:text-left font-medium">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          <span className="block">The</span>
          <span className="block">Fall 2025</span>
          <span className="block">Collection</span>
        </h2>
        <p>Luxury fashion redesigned for the modern era.</p>
        <a
          href="#Categories"
          className="inline-block bg-linear-to-r from-[#c5c0ba] to-[#e2e0dd] px-6 py-3 mt-6 rounded-lg text-base sm:text-lg hover:opacity-80 transition"
        >
          Shop Now
        </a>
      </div>

      {/* Image */}
      <div className="flex justify-center md:justify-end w-full md:w-1/2">
        <img
          src={man}
          alt="Fashion Model"
          className="w-48 sm:w-60 md:w-72 lg:w-80 object-contain"
        />
      </div>

    </section>
  )
}
