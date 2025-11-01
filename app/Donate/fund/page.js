"use client";
import React, { useState } from "react";

const Fund = () => {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleDonate = () => {
    if (!amount || !paymentMethod) {
      alert("Please enter amount and select payment method");
      return;
    }
    alert(`You will donate ${amount} Tk via ${paymentMethod}`);
    // TODO: API call or database save
    setAmount("");
    setPaymentMethod("");
  };

  return (
    <div className="w-fit mx-auto mt-10 p-6 border rounded shadow-lg bg-gray-900">
      <h1 className="text-2xl font-bold mb-4">Fund Donation</h1>

      <label className="block mt-2 mb-1 font-medium">Amount (Tk):</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 rounded w-full text-slate-900"
        placeholder="Enter amount"
      />

      <label className="block mt-4 mb-1 font-medium">Payment Method:</label>
      <select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
        className="border p-2 rounded w-full text-slate-800"
      >
        <option value="">Select Payment Method</option>
        <option value="cash">Cash</option>
        <option value="mobile">Mobile Banking</option>
        <option value="card">Bank Transfer</option>
      </select>

      <button
        onClick={handleDonate}
        type="button" className="text-white bg-gradient-to-r from-purple-500 to-cyan-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 text-sm px-5 py-2.5 text-center me-2 mb-2  mt-6 font-bold p-2 rounded w-full" >
        Donate
      </button>
    </div>
  );
};

export default Fund;
