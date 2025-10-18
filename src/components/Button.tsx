import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" bg-purple-500 text-white font-medium px-4 py-2 rounded-full shadow-md hover:bg-purple-700 active:scale-95 transition-transform duration-150"
    >
      {label}
    </button>
  );
};

export default Button;
