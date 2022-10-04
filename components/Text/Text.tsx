import React from "react";

interface TextProps {
  lines: string[];
}

const Text: React.FC<TextProps> = ({ lines }) => {
  return (
    <div>
      {lines.map((line) => (
        <p key={Math.random().toString(36).substring(2, 9)}>{line}</p>
      ))}
    </div>
  );
};

export default Text;
