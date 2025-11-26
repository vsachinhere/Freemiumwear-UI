import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useri from '../assets/icons/user.png'
import carti from '../assets/icons/shopping-bag.png'
import magnifyingi from '../assets/icons/magnifying-glass.png'

export default function Navbar() {
   const [showSearch, setShowSearch] = useState(false);
  return (
    <header className="bg-linear-to-r from-[#f3ece6] to-[#f2ebe5] p-4 shadow-sm text-[#8a6c50] ">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">

        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide">AURA</h1>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <NavLink to="" className={({ isActive }) => `hover:text-gray-500 ${isActive ? "text-[#814004]" : ""}`}>
               Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/newArrival" className={({ isActive }) => `hover:text-gray-500 ${isActive ? "text-[#814004]" : ""}`}>
              New Arrivals
            </NavLink>
          </li>
          <li>
            <NavLink to="/Collections" className={({ isActive }) => `hover:text-gray-500 ${isActive ? "text-[#814004]" : ""}`}>
              Collections
            </NavLink>
          </li>
          <li>
            <NavLink to="/sale" className={({ isActive }) => `hover:text-gray-500 ${isActive ? "text-[#814004]" : ""}`}>

              Sale
            </NavLink>
          </li>
        </ul>

        {/* Icons */}
        <ul className="hidden md:flex gap-6 mb-0 hover:text-gray-500">
          <li>
        {/* Search Icon */}
        <a onClick={() => setShowSearch(!showSearch)} className="cursor-pointer">
          <img src={magnifyingi} alt="" className="w-6 h-6" />
        </a>

        {/* Search Input (shows when icon clicked) */}
        {showSearch && (
          <div className="mt-2">
            <input
              type="text"
              placeholder="Search..."
              className="text-black py-2 px-3 w-40 outline-none text-sm border border-gray-300 rounded-lg"
            />
          </div>
        )}
      </li>

            

          <li><a href="">
            <img src={useri} alt=""  className="w-5 h-5 text-[#8a6c50]" />
            </a></li>

          <li><a href="">
            <img src={carti} alt=""  className="w-5.5 h-5.5 text-[#8a6c50]" />
            </a></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl cursor-pointer">
          ☰
        </div>

      </nav>
    </header>
  );
}
