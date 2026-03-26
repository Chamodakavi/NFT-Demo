import { CyberNavbar } from "@/components/marketplace-v2/CyberNavbar";
import { CyberFooter } from "@/components/marketplace-v2/CyberFooter";
import { CyberAdBanner } from "@/components/marketplace-v2/CyberAdBanner";
import CyberHero from "@/components/home-v2/CyberHero";
import CyberFeaturedCol from "@/components/home-v2/CyberFeaturedCol";
import CyberHotDrops from "@/components/home-v2/CyberHotDrops";

export default function CyberHomePage() {
  return (
    <div>
      <CyberNavbar />
      <CyberHero />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-4">
        <CyberAdBanner />
      </div>
      <CyberFeaturedCol />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-4">
        <CyberAdBanner />
      </div>
      <CyberHotDrops />
      <CyberFooter />
    </div>
  );
}
