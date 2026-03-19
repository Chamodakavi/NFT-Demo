import React from "react";
import { Shield, Cpu, Lock, Rocket } from "lucide-react"; // Example icons

function FeaturedCol() {
  const features = [
    {
      icon: <Lock className="w-4 h-4 text-white" />,
      title: "Presentation",
      sub: "Engage",
    },
    {
      icon: <Cpu className="w-4 h-4 text-white" />,
      title: "Advanced Tech",
      sub: "Innovate",
    },
    {
      icon: <Shield className="w-4 h-4 text-white" />,
      title: "Proven Trust",
      sub: "Verify",
    },
    {
      icon: <Rocket className="w-4 h-4 text-white" />,
      title: "Business Growth",
      sub: "Earn",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto md:px-20 bg-transparent text-white mt-10">
      {/* Section Header with Red Line */}
      <div className="flex items-center gap-4 mb-6">
        <div className="h-[2px] w-8 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
        <h2 className="text-sm uppercase tracking-[0.2em] font-bold text-gray-100">
          Featured Collection
        </h2>
      </div>

      {/* Change this line */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Left Card: Oracle Genesis */}
        <div className="relative w-full lg:flex-1 group overflow-hidden rounded-xl border border-white/10 bg-[#050304] lg:mt-0">
          {/* Main Image/BG Area */}
          <div className="relative h-48 overflow-hidden">
            <img
              src="/images/transformer.png" // Replace with your image
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Oracle Genesis"
            />
            {/* Dark Overlay with Red Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050304] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/40 via-transparent to-transparent" />

            {/* Title Overlay */}
            <div className="absolute bottom-4 left-6">
              <h3 className="text-3xl font-black italic tracking-tight uppercase italic">
                Oracle <span className="text-white">Genesis</span>
              </h3>
              {/* The "Lens Flare" under text */}
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-orange-400 to-transparent blur-[1px] mt-1 opacity-70" />
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 divide-x divide-white/10 py-4 bg-black/40 backdrop-blur-sm border-t border-white/5">
            <div className="flex flex-col items-center">
              <span className="text-[10px] text-gray-500 uppercase">Price</span>
              <span className="text-sm font-bold">
                3.2 <span className="text-[10px] text-red-500">CRO</span>
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[10px] text-gray-500 uppercase">
                Owners
              </span>
              <span className="text-sm font-bold">1.8K</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[10px] text-gray-500 uppercase">
                Volume
              </span>
              <span className="text-sm font-bold">
                12.4K <span className="text-[10px] text-red-500">CRO</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Section: Features Grid */}
        <div className="w-full lg:flex-[1.5] grid grid-cols-2 md:grid-cols-4 gap-0 rounded-xl border border-red-900/30 bg-black/40 backdrop-blur-md overflow-hidden relative lg:-mt-12 shadow-2xl">
          {/* Subtle Outer Glow for the feature box */}
          <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(153,27,27,0.2)] pointer-events-none" />

          {features.map((item, idx) => (
            <div
              key={idx}
              className={`
                flex flex-col items-center justify-center py-10 px-8 transition-colors group
                /* Right border: Always on, except for the last item in each row */
                border-r border-white/10
                md:last:border-r-0 
                ${idx % 2 === 1 ? "border-r-0 md:border-r" : ""} 

                /* Bottom border: On for mobile, Off for desktop */
                border-b border-white/10
                md:border-b-0

                /* Remove bottom border for the last row on mobile (items 3 and 4) */
                ${idx >= 2 ? "border-b-0" : "md:border-b-0"}

                hover:bg-white/[0.02]
                `}
            >
              {/* Hexagon Icon Container */}
              <div className="relative w-12 h-12 flex items-center justify-center mb-4">
                <div className="absolute inset-0 bg-red-700 rotate-45 rounded-sm group-hover:rotate-90 transition-transform duration-500 shadow-[0_0_15px_rgba(185,28,28,0.5)]" />
                <div className="relative z-10">{item.icon}</div>
              </div>

              <span className="text-[11px] font-bold uppercase tracking-wider text-center mb-1">
                {item.title}
              </span>

              {/* Sub-label with red dashes */}
              <div className="flex items-center gap-2">
                <div className="w-2 h-[1px] bg-red-600" />
                <span className="text-[9px] text-gray-500 uppercase tracking-[0.2em]">
                  {item.sub}
                </span>
                <div className="w-2 h-[1px] bg-red-600" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Separator (The long glowing line from your screenshot) */}
      <div className="w-full h-[5px] bg-gradient-to-r from-transparent via-red-600 to-transparent mt-5 mb-3 opacity-50 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-full bg-white blur-[2px] opacity-30" />
      </div>
    </div>
  );
}

export default FeaturedCol;
