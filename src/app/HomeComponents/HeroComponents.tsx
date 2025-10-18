import React from "react";

export default function HeroComponents() {
  return (
    <section className="bg-[#F8F6F4] w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl w-full">
        <div className=" rounded-[32px] shadow-sm p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Section */}
          <div className="flex-1 space-y-6 lg:pr-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F8F6F4] rounded-full border border-gray-200">
              <div className="w-5 h-5 bg-[#8B6F47] rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">A</span>
              </div>
              <span className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                Athos 2.0 - Free Framer Template Portfolio
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight text-gray-900">
              Your Strategic Partner
              <br />
              for Digital Solutions
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Helping startups and brands to craft expressive
              and engaging solutions for their software needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 shadow-lg">
                Remix Template
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="bg-white border border-gray-300 text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-all duration-300">
                Get Dark Mode
              </button>
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="bg-[#C17B5C] rounded-3xl overflow-hidden shadow-lg w-full max-w-md aspect-[3/4] relative">
              <img
                src="/zain.jpg"
                alt="Professional portrait"
                className="w-full h-full object-cover"
              />
              {/* Pro Version Badge */}
              <div className="absolute bottom-6 right-6 bg-white px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-medium text-gray-900">Get Pro Version</span>
              </div>
            </div>
          </div>
        </div>

        {/* Figma Version Link */}
        <div className="flex justify-end mt-4 pr-4">
          <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Get Figma Version
          </button>
        </div>
      </div>
    </section>
  );
}