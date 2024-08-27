"use client";
import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <svg
          className="w-12 h-12 mb-4 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 0114.6-4.2L19 9a8 8 0 00-15.2 4.2L4 12z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loading;
