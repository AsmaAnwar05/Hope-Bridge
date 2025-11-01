"use client";
import React, { useState } from "react";
import Link from "next/link";

const categories = ["Fund", "Food", "Clothing", "Medicine"];

export default function Donate() {
    const [showCatagory, setShowCatagory] = useState(false);
    
  return (
    <div className="relative p-2 shadow-md w-fit ">
      <h1  className="text-xl font-semibold mb-4 cursor-pointer flex items-center align-middle justify-between "
        onClick={() => setShowCatagory(!showCatagory)}
      >
        Donate
        <span className="text-sm text-blue pl-6">
          {showCatagory ? "▲ Hide" : "▼ Show"}
        </span></h1>
        {showCatagory &&(
             <div className="donation-box w-full bg-gray-900 p-3 rounded-lg absolute z-50">
     <ul className="space-y-2">
  {categories.map((category) => (
    <li 
      key={category} 
      className="font-semibold border rounded hover:bg-slate-800 cursor-pointer p-2"
    >
      <Link 
        href={`/Donate/${category.toLowerCase()}`} 
        target="_blank"
        className="block w-full h-full"
      >
        {category}
      </Link>
    </li>
  ))}
</ul>
      </div>
        )}
    </div>
  );
}
