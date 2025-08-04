import React from 'react';
import bgImage from '../assets/background.png';

function Navbar() {
  return (
    <div className="bg-opacity-60 w-full fixed top-0 z-40">
      <div className="max-w-[1240px] mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between">

        <div className="flex items-center justify-between w-full md:w-auto">
          <h1 className="text-red-600 font-extrabold text-3xl cursor-pointer">NETFLIX</h1>

          <div className="flex items-center space-x-3 md:hidden">
            <select className="bg-black text-white text-sm border border-gray-500 px-2 py-1 rounded">
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
            </select>
            <button className="bg-white text-black text-sm px-4 py-1 rounded-md font-medium hover:bg-gray-200">
              Sign In
            </button>
          </div>
        </div>

        <div className="overflow-x-auto no-scrollbar mt-[15px] md:mt-0">
          <ul className="flex min-w-max space-x-6 border-2 border-gray-600 rounded-full px-4 py-2 text-gray-300 text-sm whitespace-nowrap bg-black/60 backdrop-blur-sm">
            {["Home", "TV Shows", "Movies", "Latest", "My List"].map((item, index) => (
              <li
                key={index}
                className="relative group cursor-pointer hover:text-white"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex items-center space-x-3">
          <select className="bg-black text-white text-sm border border-gray-500 px-2 py-1 rounded cursor-pointer">
            <option  value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>
          <button className="bg-red-700 text-white text-sm px-4 py-1 rounded-md font-medium hover:bg-gray-200 cursor-pointer">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
