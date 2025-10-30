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
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Fund Donation</h1>

      <label className="block mt-2 mb-1">Amount (Tk):</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 rounded w-full"
        placeholder="Enter amount"
      />

      <label className="block mt-4 mb-1">Payment Method:</label>
      <select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
        className="border p-2 rounded w-full"
      >
        <option value="">Select Payment Method</option>
        <option value="cash">Cash</option>
        <option value="mobile">Mobile Banking</option>
        <option value="card">Card</option>
      </select>

      <button
        onClick={handleDonate}
        className="mt-6 bg-blue-500 text-white font-bold p-2 rounded w-full hover:bg-blue-600"
      >
        Donate
      </button>
    </div>
  );
};

export default Fund;
