import { CyberNavbar } from "@/components/marketplace-v2/CyberNavbar";
import { CyberFooter } from "@/components/marketplace-v2/CyberFooter";
import { CyberFlywheelTab } from "@/components/marketplace-v2/CyberFlywheelTab";

export default function FlywheelPage() {
  return (
    <div>
      <CyberNavbar />

      <section className="hero-section relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-16">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-3">
              <div
                className="h-[2px] w-10 bg-[#C026D3]"
                style={{ boxShadow: "0 0 10px rgba(192,38,211,0.8), 0 0 30px rgba(192,38,211,0.4)" }}
              />
              <h1 className="text-sm uppercase tracking-[0.3em] font-bold text-[#C026D3] font-mono cyber-glow-neon-purple">
                :: FLYWHEEL_ECONOMICS
              </h1>
              <div
                className="h-[1px] flex-grow bg-gradient-to-r from-[#C026D3]/60 to-transparent"
                style={{ boxShadow: "0 0 8px rgba(192,38,211,0.3)" }}
              />
            </div>
            <p className="text-sm text-[#7dd3fc]/50 font-mono leading-relaxed max-w-2xl">
              Every trade fuels the CRO212HUB ecosystem. See how your fees power liquidity, buybacks, and rewards.
            </p>
          </div>

          {/* Flywheel Content */}
          <CyberFlywheelTab />
        </div>
      </section>

      <CyberFooter />
    </div>
  );
}
