import React from 'react';

interface BackgroundProps {
  children?: React.ReactNode;
}

function Background({ children }: BackgroundProps) {
  return (
    <div className="flex-grow flex">
      <div className="bg-white dark:bg-gray-800 w-full shadow-lg">
        {children}
      </div>
    </div>
  );
}

export { Background };