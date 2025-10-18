import React, { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";

const App: React.FC = () => {
  const [data, setData] = useState<string[]>([]);
  const [currentText, setCurrentText] = useState("");

  const handleAdd = () => {
    if (currentText.trim() !== "") {
      setData((prev) => [...prev, currentText]);
      setCurrentText(""); 
    }
  };

  const handleDelete = (index: number) => {
    setData((prev) => prev.filter((_, i) => i !== index));
  };
  

  return (
    <div className="w-80 max-w-full p-4 space-y-4 rounded-lg"> {/* Fixed width for Chrome popup */}
      <Input placeholder="Enter text..." onChange={setCurrentText} />
      <Button label="Add to List" onClick={handleAdd} />
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Stored Data:</h2>
        <ul className="list-disc ml-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2"
            >
              <span className="truncate max-w-[200px]">{item}</span> {/* Truncate long text */}
              <Button label="X" onClick={() => handleDelete(index)} />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
