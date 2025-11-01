"use client";
import React, { useState } from "react";

const Donation_history = ({donations}) => {
  const [showHistory, setShowHistory] = useState(false);

  if (!donations || donations.length === 0) {
    return <p className="text-gray-500">No donations yet.</p>;
  }

  return (
    <div className="relative p-2 shadow-md w-fit">
     <h2
        className="text-xl font-semibold mb-4 cursor-pointer flex items-center align-middle justify-between "
        onClick={() => setShowHistory(!showHistory)}
      >
        Donation History
        <span className="text-sm text-blue pl-6">
          {showHistory ? "▲ Hide" : "▼ Show"}
        </span>
      </h2>

    {showHistory && (
      <div className="absolute z-50 donation-box w-fit bg-gray-900 p-3 rounded-lg">
      <ul className="space-y-3 ">
        {donations.map((donation, index) => (
          <li key={index} className=" hover:bg-slate-800 p-2">
            <span className="font-semibold">{index + 1}.</span>{" "}
            <span>
              Date:{" "}
              {new Date(donation.date).toLocaleDateString("en-GB")} 
              {" "}Donated <span className="font-bold">{donation.amount} tk</span> 
            </span>
          </li>
        ))}
      </ul>
      </div>
    )}
    </div>
  );
}

export default Donation_history
