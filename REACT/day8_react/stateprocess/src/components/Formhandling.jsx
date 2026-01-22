import { useState } from "react";

const Formhandling = () => {
  const [values, setValues] = useState("");
  const [show, setShow] = useState("");

  const handleChange = (e) => {
    setValues(e.target.value);
  };

  const handleClick = () => {
    if (values >= 18) {
      setShow("You are eligible to vote");
    } else {
      setShow("Not eligible to vote");
    }
  };

  return (
    <div className="min-h-screen bg-green-400 flex flex-col items-center justify-center p-5">
      <h1 className="text-2xl font-bold text-white mb-6">Form Handling</h1>

      <div className="bg-white rounded-lg p-6 w-80 flex flex-col items-center gap-4 shadow-md">
        <input
          type="number"
          placeholder="Enter your age"
          value={values}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <button
          onClick={handleClick}
          className="bg-black text-white rounded px-4 py-2 w-full hover:bg-gray-800 transition"
        >
          Check
        </button>

        <h3 className="text-lg font-medium">Your Result:</h3>
        <h4
          className={`text-md font-semibold ${
            values >= 18 ? "text-green-600" : "text-red-600"
          }`}
        >
          {show}
        </h4>
      </div>
    </div>
  );
};

export default Formhandling;
