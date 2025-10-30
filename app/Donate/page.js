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
             <div className="donation-box w-fit bg-gray-900 p-3 rounded-lg absolute z-50">
      <ul className=" space-y-2">
        {categories.map((catagory) => (
          <li key={catagory} className="font-semibold border rounded cursor-pointer hover:bg-slate-800 p-2">
            <Link href={`/donate/${catagory.toLowerCase()}`}>{catagory}</Link>
          </li>
        ))}
      </ul>
      </div>
        )}
    </div>
  );
}
