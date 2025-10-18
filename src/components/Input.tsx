import React, { useState } from "react";

interface InputProps {
  placeholder: string;
  onChange?: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, onChange }) => {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      className="border border-gray-300 rounded-full p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={text}
      onChange={handleChange}
    />
  );
};

export default Input;
