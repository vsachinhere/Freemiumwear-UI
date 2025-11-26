import React from "react";
import { Star } from "lucide-react";  

export default function CategoryCard({ title, image, rating, purchased, description }) {
  return (
    <div className="bg-white/30 backdrop-blur-md border border-white/40 shadow-xl rounded-2xl p-6 
    hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer max-w-[260px] text-center">

      {/* Image */}
      <div className="w-full flex justify-center mb-4">
     {title.length>10?title.substring(0,10)+"...":title}

      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-[#432f21] mb-2 tracking-wide">
       <img src={image} alt="" className="w-36 h-36 object-contain drop-shadow-lg"/>
      </h2>

      {/* Description */}
      <p className="text-sm text-[#5a4a3d] mb-3 opacity-90">
        {description.length>20?description.substring(0,20)+"...":description}
      </p>

      {/* Rating */}
      <div className="flex items-center justify-center gap-2 text-sm text-[#614a38] font-medium">
        {rating.rate} Star  {rating.count}k Globle rating       
      </div>

      {/* Button */}
      <button className="mt-4 w-full bg-[#6f5844] text-[#efe7db] py-2 rounded-xl 
      hover:bg-[#5d4636] active:scale-95 transition-all duration-200">
        Shop Now
      </button>
    </div>
  );
}
