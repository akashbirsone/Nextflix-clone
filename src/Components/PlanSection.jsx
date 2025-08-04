import React from "react";

function PlanSection() {
  return (
    <main className="bg-black py-10 px-4">
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-10">
        A plan to suit your needs
      </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 py-8">
  {/* Mobile Plan */}
  <div className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] p-6 rounded-2xl border-2 border-blue-400 text-left text-white space-y-2 shadow-lg hover:scale-105 transition-transform duration-300">
    <h4 className="font-extrabold text-xl">Mobile</h4>
    <h5 className="text-gray-200 font-bold">480p</h5>
    <p className="text-gray-200">Fair video quality</p>
    <p className="text-gray-200">For your phone or tablet</p>
    <p className="pt-4 text-white font-bold text-lg">₹149 /mo</p>
  </div>

  {/* Basic Plan */}
  <div className="bg-gradient-to-br from-[#1f1c2c] via-[#928dab] to-[#1f1c2c] p-6 rounded-2xl border-2 border-purple-400 text-left text-white space-y-2 shadow-lg hover:scale-105 transition-transform duration-300">
    <h4 className="font-extrabold text-xl">Basic</h4>
    <h5 className="text-gray-200 font-bold">720p</h5>
    <p className="text-gray-200">Good video quality</p>
    <p className="text-gray-200">For phone, tablet, laptop and TV</p>
    <p className="pt-4 text-white font-bold text-lg">₹199 /mo</p>
  </div>

  {/* Standard Plan */}
  <div className="bg-gradient-to-br from-[#4568dc] to-[#b06ab3] p-6 rounded-2xl border-2 border-pink-400 text-left text-white space-y-2 shadow-lg hover:scale-105 transition-transform duration-300">
    <h4 className="font-extrabold text-xl">Standard</h4>
    <h5 className="text-gray-200 font-bold">1080p</h5>
    <p className="text-gray-200">Great video quality</p>
    <p className="text-gray-200">For phone or tablet</p>
    <p className="pt-4 text-white font-bold text-lg">₹499 /mo</p>
  </div>

  {/* Premium Plan */}
  <div className="bg-gradient-to-br from-[#e50914] via-[#221f1f] to-black p-6 rounded-2xl border-2 border-yellow-400 text-left text-white space-y-2 shadow-lg hover:scale-105 transition-transform duration-300 relative">
    <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
      Most Popular
    </div>
    <h4 className="font-extrabold text-xl">Premium</h4>
    <h5 className="text-gray-200 font-bold">4K + HDR</h5>
    <p className="text-gray-200">Best video quality</p>
    <p className="text-gray-200">Immersive sound (spatial audio)</p>
    <p className="text-gray-200">For phone or tablet</p>
    <p className="pt-4 text-white font-bold text-lg">₹649 /mo</p>
  </div>
</div>

    </main>
  );
}

export default PlanSection;
