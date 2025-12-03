import React from "react";

interface OutputDisplayProps {
  output: string;
}

const OutputDisplay: React.FC<OutputDisplayProps> = ({ output }) => {
  // if (!output) return null; 

  return (
    <div className="output-container">
      <p>{output}</p>
    </div>
  );
};

export default OutputDisplay;
