import { CyberNavbar } from "@/components/marketplace-v2/CyberNavbar";
import { CyberFooter } from "@/components/marketplace-v2/CyberFooter";
import { CyberNFTDetailContent } from "@/components/marketplace-v2/CyberNFTDetailContent";
import { mockNfts } from "@/data/mockNfts";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ nftId: string }>;
}

export default async function CyberNFTDetailPage({ params }: PageProps) {
  const { nftId } = await params;
  const nft = mockNfts.find((n) => n.id === nftId);

  if (!nft) {
    notFound();
  }

  return (
    <div>
      <CyberNavbar />
      <CyberNFTDetailContent nft={nft} />
      <CyberFooter />
    </div>
  );
}

export function generateStaticParams() {
  return mockNfts.map((nft) => ({
    nftId: nft.id,
  }));
}
