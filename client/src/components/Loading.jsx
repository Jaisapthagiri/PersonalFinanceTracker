import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
