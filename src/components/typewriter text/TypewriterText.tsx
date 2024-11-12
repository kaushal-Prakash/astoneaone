import React from 'react';

interface TypewriterProps {
  s: string;
}

const TypewriterText: React.FC<TypewriterProps> = ({ s }) => {
  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold">
          {s}
        </h1>
      </div>
    </div>
  );
};

export default TypewriterText;
