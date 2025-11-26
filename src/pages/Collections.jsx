import React, { useState, useEffect } from "react";
import CategoryCard from "../components/CategoryCard";
import axios from "axios";

export default function Collections() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setCategories(res.data); 
        console.log(res.data[0].title);
      })
      .catch((err) => console.log("API Error:", err));
  }, []);

  return (
    <section className="bg-linear-to-r from-[#b6a99a] to-[#cabfb2] py-14 px-6 md:px-20 ">
      <h1 className="text-3xl font-bold text-[#433529] text-center mb-10 tracking-wide">
        Collections
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
         {categories.map((item)=>(
          <CategoryCard
          key={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          description={item.description}
          category={item.category}
          rating={item.rating}
          />))}
      </div>
    </section>
  );
}
