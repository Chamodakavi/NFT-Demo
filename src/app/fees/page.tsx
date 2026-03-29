import { CyberNavbar } from "@/components/marketplace-v2/CyberNavbar";
import { CyberFooter } from "@/components/marketplace-v2/CyberFooter";
import { CyberFeesContent } from "@/components/marketplace-v2/CyberFeesContent";

export default function FeesPage() {
  return (
    <div>
      <CyberNavbar />

      <section className="hero-section relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-16">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-3">
              <div
                className="h-[2px] w-10 bg-[#ffcc00]"
                style={{ boxShadow: "0 0 10px rgba(255,204,0,0.8), 0 0 30px rgba(255,204,0,0.4)" }}
              />
              <h1 className="text-sm uppercase tracking-[0.3em] font-bold text-[#ffcc00] font-mono cyber-glow-yellow">
                :: FEE_TRANSPARENCY
              </h1>
              <div
                className="h-[1px] flex-grow bg-gradient-to-r from-[#ffcc00]/60 to-transparent"
                style={{ boxShadow: "0 0 8px rgba(255,204,0,0.3)" }}
              />
            </div>
            <p className="text-sm text-[#7dd3fc]/50 font-mono leading-relaxed max-w-2xl">
              Simple, transparent fees with no surprises. Every CRO collected fuels the ecosystem flywheel.
            </p>
          </div>

          {/* Fees Content */}
          <CyberFeesContent />
        </div>
      </section>

      <CyberFooter />
    </div>
  );
}
