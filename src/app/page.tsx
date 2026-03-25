import { CyberNavbar } from "@/components/marketplace-v2/CyberNavbar";
import { CyberFooter } from "@/components/marketplace-v2/CyberFooter";
import CyberHero from "@/components/home-v2/CyberHero";
import CyberFeaturedCol from "@/components/home-v2/CyberFeaturedCol";
import CyberHotDrops from "@/components/home-v2/CyberHotDrops";

export default function CyberHomePage() {
  return (
    <div>
      <CyberNavbar />
      <CyberHero />
      <CyberFeaturedCol />
      <CyberHotDrops />
      <CyberFooter />
    </div>
  );
}
