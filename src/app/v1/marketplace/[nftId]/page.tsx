import { Navbar } from "@/components/NavBar";
import Footer from "@/components/Footer";
import { NFTDetailContent } from "@/components/marketplace/NFTDetailContent";
import { mockNfts } from "@/data/mockNfts";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ nftId: string }>;
}

export default async function NFTDetailPage({ params }: PageProps) {
  const { nftId } = await params;
  const nft = mockNfts.find((n) => n.id === nftId);

  if (!nft) {
    notFound();
  }

  return (
    <div className="mx-4 md:mx-15">
      <Navbar />
      <NFTDetailContent nft={nft} />
      <Footer />
    </div>
  );
}

export function generateStaticParams() {
  return mockNfts.map((nft) => ({
    nftId: nft.id,
  }));
}
