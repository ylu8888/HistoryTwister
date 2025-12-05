import React from "react";

interface OutputDisplayProps {
  output: React.ReactNode;
}

const OutputDisplay: React.FC<OutputDisplayProps> = ({ output }) => {
  //console.log(output)
  if (!output || React.Children.count(output) === 0) return null;

  return (
    <div className="output-container">
      <p>{output}</p>
    </div>
  );
};

export default OutputDisplay;
