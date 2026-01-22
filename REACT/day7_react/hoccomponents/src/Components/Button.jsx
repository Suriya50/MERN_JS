import { useState } from "react";

const Button = ({ master }) => {
  const [top, setTop] = useState(0);

  const Jananayakan = () => {
    setTop(top + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 mt-10">
      <p className="text-xl font-semibold text-gray-700">
        Count: {top}
      </p>

      <button
        className="
          bg-black 
          text-white 
          px-6 
          py-2 
          rounded-lg 
          hover:bg-gray-800 
          transition duration-300
        "
        onClick={Jananayakan}
      >
        {master}
      </button>
    </div>
  );
};

export default Button;
