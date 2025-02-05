import React from "react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-white dark:bg-gray-900 z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-600 border-opacity-75"></div>
      <p className="mt-4 text-lg font-semibold text-purple-700 dark:text-purple-400">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Preloader;
