import React from "react";

function Hero() {
  const stats = [
    { value: "12.5K+", label: "Drops" },
    { value: "275K+", label: "NFTs" },
    { value: "98.2K+", label: "Creators" },
  ];

  return (
    <div className="hero-section relative overflow-hidden">
      <div className="m-5 md:m-25">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h1 className="text-5xl">
              Own the Future on{" "}
              <span className="font-extrabold text-red-900">Cronos</span>
            </h1>
            <div className="block ml-20 w-full h-[3px] overflow-hidden">
              <div className="h-full  bg-gradient-to-r from-transparent via-red-500/50 to-transparent animate-grow-width " />
            </div>
            <p className="mt-5">
              Discover, Create and Trade the Best NFTs & Digital Assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <button
                className="bg-red-700 shadow-[0px_6px_4px_0px_rgba(0,0,0,0.5),0px_8px_16px_0px_rgba(179,9,4,0.6)] rounded-[9px] px-6 py-2.5 text-md md:text-xl font-bold tracking-[0.02em] hover:scale-105 hover:shadow-[0px_6px_4px_0px_rgba(0,0,0,0.5),0px_12px_24px_0px_rgba(179,9,4,0.8)] transition-all w-full sm:w-auto text-white animate-fade-in-up"
                style={{ animationDelay: "0.35s" }}
              >
                Mint Now
              </button>
              <div>
                <div className="block w-full h-[2px] overflow-hidden shadow-[0px_6px_4px_0px_rgba(0,0,0,0.5),0px_8px_16px_0px_rgba(179,9,4,0.6)]">
                  <div className="h-full  bg-gradient-to-r from-transparent via-red-500/50 to-transparent animate-grow-width " />
                </div>
                <button
                  className="bg-brand-dark shadow-[inset_0px_2px_8px_0px_rgba(0,0,0,0.5)] rounded-[9px] px-6 py-2.5 text-md md:text-xl font-bold tracking-[0.02em] hover:bg-white/5 hover:scale-105 transition-all w-full sm:w-auto text-white animate-fade-in-up"
                  style={{ animationDelay: "0.45s" }}
                >
                  Explore Marketplace
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex justify-center object-contain -mt-10 ">
            <div className="w-[100%] h-[80%]">
              {" "}
              <img
                src="/images/transformer.png"
                className="object-contain "
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto relative lg:mt-1 xl:-mt-25">
          {/* Top Animated Line */}
          <div className="absolute -top-4 left-0 w-full h-[1px] overflow-hidden opacity-50">
            <div className="h-full bg-gradient-to-r from-transparent via-red-500 to-transparent animate-grow-width" />
          </div>

          {/* Main Stats Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 px-4 border border-white/5 rounded-xl backdrop-blur-md mt-15 lg:w-3/4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative group flex items-center justify-center gap-3 py-3 px-10 bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-lg overflow-hidden transition-all hover:bg-white/[0.07]"
              >
                {/* The "Value" (12.5K+) */}
                <span className="text-lg lg:text-3xl  font-bold text-white tracking-tight">
                  {stat.value}
                </span>

                {/* The "Label" (Drops) */}
                <span className="text-sm lg:text-base font-medium text-gray-400 uppercase tracking-wide">
                  {stat.label}
                </span>

                {/* Red Bottom Glow Effect */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.8)]" />
              </div>
            ))}
          </div>

          {/* Bottom Animated Line */}
        </div>
      </div>
      <div className="block bottom-0 left-0 w-full h-[1px] overflow-hidden opacity-50 md:-mt-20">
        <div className="h-full bg-gradient-to-r from-transparent via-red-500 to-transparent animate-grow-width" />
      </div>
    </div>
  );
}

export default Hero;
