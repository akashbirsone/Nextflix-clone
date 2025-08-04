import React from "react";

function Footer() {
  return (
    <div className="bg-black text-white px-4 py-10">
      {/* Ready to watch section */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <p className="text-sm sm:text-base font-bold mb-4">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 w-full sm:w-auto p-3 rounded-full bg-gray-600 text-white placeholder-amber-100 outline-none"
          />
          <button className="bg-red-600 hover:bg-red-800 text-white font-bold px-6 py-3 rounded-full text-sm sm:text-base">
            Get Started &gt;
          </button>
        </div>
      </div>

      {/* Footer links */}
      <footer className="text-gray-400 text-sm">
        <div className="max-w-6xl mx-auto">
          <p className="mb-6 text-center sm:text-left">
            Questions? Call <span className="underline">000-800-919-1694</span>
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6 text-center sm:text-left">
            <a href="#" className="hover:underline">FAQ</a>
            <a href="#" className="hover:underline">Help Centre</a>
            <a href="#" className="hover:underline">Account</a>
            <a href="#" className="hover:underline">Media Centre</a>
            <a href="#" className="hover:underline">Investor Relations</a>
            <a href="#" className="hover:underline">Jobs</a>
            <a href="#" className="hover:underline">Ways to Watch</a>
            <a href="#" className="hover:underline">Terms of Use</a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <button className="border border-gray-500 px-3 py-1 bg-transparent text-white rounded-md">
              🌐 English
            </button>
            <p className="text-xs">Netflix India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
