import React from 'react';
import bgImage from '../assets/background.png';

function ImgSection() {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Center"
        className="w-full h-full object-cover brightness-50 "
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 md:px-10">
        <h1 className="text-3xl sm:text-5xl font-extrabold">Unlimited movies, TV</h1>
        <h3 className="text-3xl sm:text-5xl font-extrabold mt-2">shows and more</h3>
        <h4 className="text-lg sm:text-2xl font-medium mt-4">Starts at ₹149. Cancel at any time.</h4>
        <p className="text-xs sm:text-base font-bold mt-2 mb-4">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        {/* Input and Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 p-3 rounded-full bg-gray-600 text-white placeholder-amber-100 outline-none"
          />
          <button className="bg-red-600 hover:bg-red-800 text-white font-bold p-3 px-6 rounded-full text-sm sm:text-base">
            Get Started &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImgSection;
