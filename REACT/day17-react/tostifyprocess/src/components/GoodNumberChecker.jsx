// src/components/GoodNumberChecker.jsx
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GoodNumberChecker = () => {
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const num = parseInt(number);

    // Check if number is 10, 20, ..., 100
    if (num >= 10 && num <= 100 && num % 10 === 0) {
      toast.success("Good Number!");
    } else {
      toast.error("Not a Good Number!");
    }

    setNumber(""); // Clear input after submit
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Good Number Checker</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter a number"
          className="p-2 border border-gray-400 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Check
        </button>
      </form>

      {/* Toast Container */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />
    </div>
  );
};

export default GoodNumberChecker;
