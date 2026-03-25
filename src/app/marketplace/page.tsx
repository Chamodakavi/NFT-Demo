import { CyberNavbar } from "@/components/marketplace-v2/CyberNavbar";
import { CyberFooter } from "@/components/marketplace-v2/CyberFooter";
import { CyberMarketplaceContent } from "@/components/marketplace-v2/CyberMarketplaceContent";

export default function V2MarketplacePage() {
  return (
    <div>
      <CyberNavbar />
      <CyberMarketplaceContent />
      <CyberFooter />
    </div>
  );
}
