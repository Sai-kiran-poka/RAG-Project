// Components/Loader.jsx

import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="w-4 h-4 rounded-full animate-spin border-2 border-t-transparent border-blue-500"></div>
      <div className="w-4 h-4 rounded-full animate-spin border-2 border-t-transparent border-blue-500"></div>
      <div className="w-4 h-4 rounded-full animate-spin border-2 border-t-transparent border-blue-500"></div>
    </div>
  );
};

export default Loader;
