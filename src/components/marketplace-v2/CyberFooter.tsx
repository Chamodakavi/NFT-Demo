import { Send, ExternalLink, Github, Twitter } from "lucide-react";

export function CyberFooter() {
  return (
    <div className="max-w-[1440px] mx-auto px-0 md:px-20 py-1 mb-10 text-[#e0f0ff]">
      {/* Main container */}
      <div
        className="relative p-8 md:p-10 bg-[#080812]/80 cyber-border overflow-hidden"
        style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))" }}
      >
        {/* Scanline overlay */}
        <div className="absolute inset-0 cyber-scanline pointer-events-none" />

        {/* Top neon line */}
        <div
          className="absolute inset-x-0 top-0 h-[2px] bg-[#00f0ff]"
          style={{ boxShadow: "0 0 15px rgba(0,240,255,0.8), 0 0 40px rgba(0,240,255,0.3)", animation: "neon-pulse 3s infinite" }}
        />

        {/* Corner accent marks */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#00f0ff]/40" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#00f0ff]/40" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#00f0ff]/40" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#00f0ff]/40" />

        <div className="relative z-10">
          {/* CTA Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            {/* Left: Content */}
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-4">
                <div
                  className="h-[2px] w-8 bg-[#00f0ff]"
                  style={{ boxShadow: "0 0 8px rgba(0,240,255,0.8), 0 0 20px rgba(0,240,255,0.4)" }}
                />
                <h2
                  className="text-sm md:text-base font-bold tracking-[0.2em] text-[#00f0ff] font-mono uppercase cyber-glow"
                >
                  {":: JOIN_NETWORK"}
                </h2>
                <div
                  className="h-[1px] flex-grow bg-gradient-to-r from-[#00f0ff]/60 to-transparent"
                  style={{ boxShadow: "0 0 8px rgba(0,240,255,0.3)" }}
                />
              </div>
              <p className="text-[#7dd3fc]/40 text-xs font-mono pl-12">
                {"// Connect with us on Telegram for the latest updates & support."}
              </p>
            </div>

            {/* Right: Telegram Button */}
            <button
              className="flex items-center gap-3 px-8 py-3.5 bg-[#00f0ff]/10 border border-[#00f0ff]/60 hover:bg-[#00f0ff]/20 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300"
              style={{
                clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                boxShadow: "0 0 15px rgba(0,240,255,0.3)",
                animation: "neon-pulse 3s infinite",
              }}
            >
              <div
                className="w-8 h-8 border border-[#00f0ff]/40 flex items-center justify-center"
                style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
              >
                <Send className="w-4 h-4 text-[#00f0ff]" style={{ filter: "drop-shadow(0 0 4px rgba(0,240,255,0.6))" }} />
              </div>
              <span className="font-bold uppercase tracking-[0.15em] text-xs text-[#00f0ff] font-mono cyber-glow">
                JOIN TELEGRAM
              </span>
            </button>
          </div>

          {/* Separator */}
          <div
            className="w-full h-[1px] bg-[#00f0ff]/20 mb-8"
            style={{ boxShadow: "0 0 6px rgba(0,240,255,0.3)" }}
          />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo + Copyright */}
            <div className="flex items-center gap-3">
              <div
                className="w-6 h-6 bg-[#00f0ff]/20 border border-[#00f0ff]/40 rotate-45 flex items-center justify-center"
                style={{ boxShadow: "0 0 8px rgba(0,240,255,0.3)" }}
              >
                <div className="-rotate-45 font-bold text-[#00f0ff] text-[8px] font-mono">C</div>
              </div>
              <span className="text-xs font-mono text-[#7dd3fc]/30">
                {"CRO212HUB // "}
                <span className="text-[#00f0ff]/40">{new Date().getFullYear()}</span>
                {" // ALL_RIGHTS_RESERVED"}
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: Twitter, label: "Twitter" },
                { icon: Github, label: "Github" },
                { icon: Send, label: "Telegram" },
                { icon: ExternalLink, label: "Website" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="w-8 h-8 flex items-center justify-center border border-[#00f0ff]/20 text-[#7dd3fc]/30 hover:text-[#00f0ff] hover:border-[#00f0ff]/50 hover:shadow-[0_0_10px_rgba(0,240,255,0.3)] transition-all"
                  style={{ clipPath: "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))" }}
                  aria-label={label}
                >
                  <Icon className="w-3.5 h-3.5" />
                </button>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-6">
              {["Terms", "Privacy", "Docs"].map((link) => (
                <button
                  key={link}
                  className="text-[10px] text-[#7dd3fc]/30 hover:text-[#00f0ff] transition-colors font-mono uppercase tracking-widest"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom neon line */}
        <div
          className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00f0ff]"
          style={{ boxShadow: "0 0 15px rgba(0,240,255,0.8), 0 0 40px rgba(0,240,255,0.3)", animation: "neon-pulse 3s infinite" }}
        />

        {/* Ambient glow */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-20 bg-[#00f0ff]/5 blur-[80px] pointer-events-none" />
      </div>
    </div>
  );
}
