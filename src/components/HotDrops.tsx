"use client";

import { useInView } from "@/hooks/useInView";
import React from "react";

const nfts = [
  {
    id: 1,
    img: "/images/nft-1.png",
    price: "4.5",
    badge: "HOT DROP",
    badgeColor: "bg-red-600",
  },
  {
    id: 2,
    img: "/images/nft-2.png",
    price: "2.2",
    badge: "VERIFIED",
    badgeColor: "bg-green-600",
  },
  {
    id: 3,
    img: "/images/nft-3.png",
    price: "5.8",
    badge: "NEW",
    badgeColor: "bg-yellow-600",
  },
  {
    id: 4,
    img: "/images/nft-4.png",
    price: "3.1",
    badge: "RARE",
    badgeColor: "bg-purple-600",
  },
];

function HotDrops() {
  const { ref, inView } = useInView();
  return (
    <div className="max-w-[1440px] mx-auto md:px-20 bg-transparent text-white">
      {/* Header with Laser Line */}
      <div
        ref={ref}
        className="flex items-center gap-4 mb-8 w-full overflow-hidden"
      >
        {/* Left Laser Segment */}
        <div
          className={`h-[1px] w-6 bg-red-600 shadow-[0_0_8px_red] flex-shrink-0 ${
            inView ? "animate-fade-in" : "opacity-0"
          }`}
        ></div>

        {/* The Title Text (Phrase) */}
        <h2
          className={`text-lg md:text-xl font-bold italic tracking-tight uppercase whitespace-nowrap ${
            inView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.1s" }}
        >
          Hot Drops{" "}
          <span className="text-gray-400 font-normal lowercase italic ml-1">
            on the Marketplace
          </span>
        </h2>

        {/* Right Extending Line (Fills remaining space) */}
        <div
          className={`flex-grow h-[3px] bg-gradient-to-r from-red-600 to-transparent opacity-50 ${
            inView ? "animate-grow-width" : "opacity-0"
          }`}
          style={{ animationDelay: "0.2s", transformOrigin: "left" }}
        ></div>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 items-start">
        {/* Left Section: NFT Grid */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 border border-white/5 bg-white/[0.02] rounded-xl -mt-5">
          {nfts.map((nft) => (
            <div key={nft.id} className="group cursor-pointer">
              <div className="relative aspect-square rounded-lg overflow-hidden border border-white/10">
                <img
                  src={nft.img}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Badge Overlay */}
                <div
                  className={`absolute top-2 left-2 px-2 py-0.5 rounded text-[9px] font-black uppercase ${nft.badgeColor}`}
                >
                  {nft.badge}
                </div>
              </div>
              {/* Bottom Price Bar */}
              <div className=" flex items-center gap-2 bg-black/40 p-2 rounded-md border border-white/5">
                <div className="w-4 h-4 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-yellow-500 rotate-45" />
                </div>
                <span className="font-bold text-sm">
                  {nft.price}{" "}
                  <span className="text-[10px] text-gray-400">CRO</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section: Info Box */}
        <div className="w-full xl:w-[400px] grid grid-cols-2 gap-0 border border-red-900/30 bg-black/60 backdrop-blur-md rounded-xl overflow-hidden divide-x divide-white/5 lg:-mt-10">
          {/* How It Works Column */}
          <div className="p-8 py-9">
            <h3 className="text-sm font-bold mb-6">How It Works</h3>
            <ul className="space-y-4">
              {["Create & Mint", "Build Profile", "Trade & Earn"].map(
                (text, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-xs text-gray-300"
                  >
                    <span className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center text-[10px] font-bold shadow-[0_0_10px_rgba(220,38,38,0.5)]">
                      {i + 1}
                    </span>
                    {text}
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Low Fees Column */}
          <div className="p-6">
            <h3 className="text-sm font-bold mb-6 text-orange-400">
              Our Low Fees
            </h3>
            <ul className="space-y-4">
              {[
                "Low 2% Trading Fee",
                "No Listing Fees",
                "Transparent Payouts",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-xs text-gray-300"
                >
                  <span className="w-5 h-5 rounded-full border border-red-600 flex items-center justify-center text-[10px] font-bold text-red-500">
                    {i + 1}
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Laser Line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent mt-12 opacity-50" />
    </div>
  );
}

export default HotDrops;
