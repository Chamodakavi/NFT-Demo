import { Navbar } from "@/components/NavBar";
import Footer from "@/components/Footer";
import { MarketplaceContent } from "@/components/marketplace/MarketplaceContent";

export default function MarketplacePage() {
  return (
    <div className="mx-4 md:mx-15">
      <Navbar />
      <MarketplaceContent />
      <Footer />
    </div>
  );
}
