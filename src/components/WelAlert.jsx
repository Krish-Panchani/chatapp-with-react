import React from "react";

export default function WelAlert() {
  return (
    <a href="#" className="flex justify-center drop-shadow-lg">
      <div className="inline-flex justify-center items-center py-2 px-2 pr-4 my-4 text-sm rounded-full bg-blue-900 text-blue-300 hover:bg-blue-800 mx-auto">
        <span className="text-xs bg-white rounded-full text-blue-600 font-bold px-4 py-1.5 mr-3">
          New!
        </span>
        <span className="text-xs font-medium sm:text-sm">
          ⚡ The Thunder Develops just Launched their First Chat App. 🔥Explore
          Now!
        </span>
        <svg
          aria-hidden="true"
          className="ml-2 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    </a>
  );
}
