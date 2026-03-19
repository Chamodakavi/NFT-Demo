import React from "react";
import { Send } from "lucide-react"; // Using Send as a placeholder for Telegram

function Footer() {
  return (
    <div className="max-w-[1440px] mx-auto px-0 md:px-20 py-1 mb-10 text-white">
      {/* Container with subtle top border and dark glass background */}
      <div className="relative group p-8 md:p-10 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-md overflow-hidden">
        {/* The Top Laser Accent Line */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side: Content with Strikethrough Header */}
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-4">
              {/* Left Laser Head */}
              <div className="h-[2px] w-6 bg-red-600 shadow-[0_0_8px_red] flex-shrink-0" />

              <h2 className="text-xl font-bold tracking-tight text-white uppercase italic">
                Join Our <span className="text-red-500">Community</span>
              </h2>

              {/* Right Striking Line (Fades into the background) */}
              <div className="h-[1px] flex-grow bg-gradient-to-r from-red-600/60 to-transparent" />
            </div>

            <p className="text-gray-400 text-sm md:text-base font-medium pl-10">
              Connect with us on Telegram for the latest updates & support.
            </p>
          </div>

          {/* Right Side: Telegram Button */}
          <button className="relative group/btn flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-b from-red-600 to-red-800 shadow-[0_10px_20px_rgba(185,28,28,0.3),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:scale-105 hover:shadow-[0_15px_30px_rgba(185,28,28,0.5)] transition-all duration-300">
            {/* Glossy Overlay for the button */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />

            <div className="relative z-10 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center bg-white/10 group-hover/btn:bg-white/20 transition-colors">
              <Send className="w-4 h-4 text-white fill-white" />
            </div>

            <span className="relative z-10 font-bold uppercase tracking-wider text-sm">
              Join Us on Telegram
            </span>
          </button>
        </div>

        {/* Bottom Red Ambient Glow */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-20 bg-red-600/10 blur-[100px] pointer-events-none" />
      </div>

      {/* The full-width separator line under the box */}
      {/* <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent mt-12 opacity-30" /> */}
    </div>
  );
}

export default Footer;
