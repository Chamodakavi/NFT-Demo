export interface Trait {
  name: string;
  value: string;
  rarity: number; // percentage (e.g., 15 = 15%)
}

export interface HistoryEvent {
  timestamp: string;
  event: "Mint" | "Transfer" | "Sale";
  from: string;
  to: string;
  txHash: string;
  price?: string;
}

export interface NFT {
  id: string;
  title: string;
  image: string;
  price: string;
  rarity: number; // rank out of 10000
  rarityPercent: number; // e.g., 5 = top 5%
  badge: string;
  badgeColor: string;
  description: string;
  owner: string;
  views: number;
  likes: number;
  traits: Trait[];
  history: HistoryEvent[];
  metadata: {
    ipfsHash: string;
    fileSize: string;
    createdAt: string;
    standard: string;
  };
}

export const mockNfts: NFT[] = [
  {
    id: "1",
    title: "Oracle Genesis #0001",
    image: "/images/nft-1.png",
    price: "4.5",
    rarity: 45,
    rarityPercent: 0.45,
    badge: "HOT DROP",
    badgeColor: "bg-red-600",
    description:
      "The first in the Oracle Genesis collection — a rare fusion of cybernetic art and blockchain identity. Minted on Cronos with AI-enhanced traits.",
    owner: "0x1a2B...3c4D",
    views: 1240,
    likes: 312,
    traits: [
      { name: "Background", value: "Crimson Nebula", rarity: 5 },
      { name: "Eyes", value: "Laser Red", rarity: 8 },
      { name: "Mouth", value: "Chrome Grill", rarity: 12 },
      { name: "Hat", value: "Holo Crown", rarity: 3 },
      { name: "Body", value: "Titanium Armor", rarity: 7 },
      { name: "Accessory", value: "Quantum Blade", rarity: 2 },
    ],
    history: [
      { timestamp: "2026-03-20 14:30", event: "Sale", from: "0x8f9A...2b1C", to: "0x1a2B...3c4D", txHash: "0xabc123...def", price: "4.5" },
      { timestamp: "2026-03-15 09:12", event: "Transfer", from: "0x5e6F...7a8B", to: "0x8f9A...2b1C", txHash: "0x456789...abc" },
      { timestamp: "2026-03-01 18:45", event: "Mint", from: "0x0000...0000", to: "0x5e6F...7a8B", txHash: "0x111222...333" },
    ],
    metadata: { ipfsHash: "QmX7b...kL9m", fileSize: "2.4 MB", createdAt: "2026-03-01", standard: "ERC-721" },
  },
  {
    id: "2",
    title: "Cyber Sentinel #0247",
    image: "/images/nft-2.png",
    price: "2.2",
    rarity: 247,
    rarityPercent: 2.47,
    badge: "VERIFIED",
    badgeColor: "bg-green-600",
    description:
      "A sentinel-class guardian NFT with verified on-chain provenance. Built for the decentralized future.",
    owner: "0x4d5E...6f7G",
    views: 890,
    likes: 198,
    traits: [
      { name: "Background", value: "Deep Space", rarity: 18 },
      { name: "Eyes", value: "Scanner Blue", rarity: 22 },
      { name: "Mouth", value: "Rebreather", rarity: 15 },
      { name: "Hat", value: "Neural Net", rarity: 10 },
      { name: "Body", value: "Stealth Suit", rarity: 14 },
      { name: "Accessory", value: "Data Core", rarity: 9 },
    ],
    history: [
      { timestamp: "2026-03-18 11:20", event: "Sale", from: "0x2c3D...4e5F", to: "0x4d5E...6f7G", txHash: "0xdef456...ghi", price: "2.2" },
      { timestamp: "2026-02-28 16:00", event: "Mint", from: "0x0000...0000", to: "0x2c3D...4e5F", txHash: "0x444555...666" },
    ],
    metadata: { ipfsHash: "QmY8c...nM2p", fileSize: "1.8 MB", createdAt: "2026-02-28", standard: "ERC-721" },
  },
  {
    id: "3",
    title: "Neon Phantom #0512",
    image: "/images/nft-3.png",
    price: "5.8",
    rarity: 12,
    rarityPercent: 0.12,
    badge: "RARE",
    badgeColor: "bg-purple-600",
    description:
      "One of the rarest phantoms in existence. Its neon-infused traits make it a collector's grail.",
    owner: "0x7h8I...9j0K",
    views: 2100,
    likes: 567,
    traits: [
      { name: "Background", value: "Void Black", rarity: 2 },
      { name: "Eyes", value: "Phantom Glow", rarity: 1 },
      { name: "Mouth", value: "Silent Mask", rarity: 4 },
      { name: "Hat", value: "Shadow Hood", rarity: 3 },
      { name: "Body", value: "Wraith Form", rarity: 1 },
      { name: "Accessory", value: "Soul Shard", rarity: 1 },
    ],
    history: [
      { timestamp: "2026-03-22 20:15", event: "Sale", from: "0x6g7H...8i9J", to: "0x7h8I...9j0K", txHash: "0xghi789...jkl", price: "5.8" },
      { timestamp: "2026-03-10 08:30", event: "Sale", from: "0x3d4E...5f6G", to: "0x6g7H...8i9J", txHash: "0xjkl012...mno", price: "4.2" },
      { timestamp: "2026-02-20 12:00", event: "Mint", from: "0x0000...0000", to: "0x3d4E...5f6G", txHash: "0x777888...999" },
    ],
    metadata: { ipfsHash: "QmZ9d...oN3q", fileSize: "3.1 MB", createdAt: "2026-02-20", standard: "ERC-721" },
  },
  {
    id: "4",
    title: "Flux Runner #1089",
    image: "/images/nft-4.png",
    price: "3.1",
    rarity: 189,
    rarityPercent: 1.89,
    badge: "NEW",
    badgeColor: "bg-yellow-600",
    description:
      "Fresh off the mint — a speed-class avatar built for the fast lane of the Cronos ecosystem.",
    owner: "0xaB1C...dE2F",
    views: 456,
    likes: 89,
    traits: [
      { name: "Background", value: "Speed Lines", rarity: 20 },
      { name: "Eyes", value: "Turbo Visor", rarity: 11 },
      { name: "Mouth", value: "Aero Mask", rarity: 16 },
      { name: "Hat", value: "Streamline", rarity: 13 },
      { name: "Body", value: "Carbon Fiber", rarity: 9 },
      { name: "Accessory", value: "Boost Pack", rarity: 7 },
    ],
    history: [
      { timestamp: "2026-03-23 10:45", event: "Mint", from: "0x0000...0000", to: "0xaB1C...dE2F", txHash: "0xmno345...pqr" },
    ],
    metadata: { ipfsHash: "QmA1e...pO4r", fileSize: "2.0 MB", createdAt: "2026-03-23", standard: "ERC-721" },
  },
  {
    id: "5",
    title: "Void Walker #0078",
    image: "/images/nft-1.png",
    price: "6.2",
    rarity: 78,
    rarityPercent: 0.78,
    badge: "HOT DROP",
    badgeColor: "bg-red-600",
    description:
      "Traverses the void between chains. An ultra-rare walker with cross-dimensional attributes.",
    owner: "0x3F4G...5H6I",
    views: 1780,
    likes: 421,
    traits: [
      { name: "Background", value: "Dimensional Rift", rarity: 4 },
      { name: "Eyes", value: "Void Stare", rarity: 6 },
      { name: "Mouth", value: "Ether Breath", rarity: 5 },
      { name: "Hat", value: "Rift Crown", rarity: 3 },
      { name: "Body", value: "Phase Shift", rarity: 4 },
      { name: "Accessory", value: "Dimension Key", rarity: 2 },
    ],
    history: [
      { timestamp: "2026-03-21 15:00", event: "Sale", from: "0x9J0K...1L2M", to: "0x3F4G...5H6I", txHash: "0xpqr678...stu", price: "6.2" },
      { timestamp: "2026-03-05 07:20", event: "Mint", from: "0x0000...0000", to: "0x9J0K...1L2M", txHash: "0xstu901...vwx" },
    ],
    metadata: { ipfsHash: "QmB2f...qP5s", fileSize: "2.7 MB", createdAt: "2026-03-05", standard: "ERC-721" },
  },
  {
    id: "6",
    title: "Prism Architect #0334",
    image: "/images/nft-2.png",
    price: "1.8",
    rarity: 334,
    rarityPercent: 3.34,
    badge: "VERIFIED",
    badgeColor: "bg-green-600",
    description:
      "A builder-class NFT with verified smart contract interactions. Designed for the metaverse architects.",
    owner: "0x6I7J...8K9L",
    views: 620,
    likes: 145,
    traits: [
      { name: "Background", value: "Blueprint Grid", rarity: 25 },
      { name: "Eyes", value: "Architect Lens", rarity: 19 },
      { name: "Mouth", value: "Command Mic", rarity: 21 },
      { name: "Hat", value: "Hard Light", rarity: 17 },
      { name: "Body", value: "Construct Frame", rarity: 15 },
      { name: "Accessory", value: "Holo Plans", rarity: 12 },
    ],
    history: [
      { timestamp: "2026-03-19 13:40", event: "Mint", from: "0x0000...0000", to: "0x6I7J...8K9L", txHash: "0xvwx234...yza" },
    ],
    metadata: { ipfsHash: "QmC3g...rQ6t", fileSize: "1.5 MB", createdAt: "2026-03-19", standard: "ERC-721" },
  },
  {
    id: "7",
    title: "Ember Knight #0156",
    image: "/images/nft-3.png",
    price: "4.0",
    rarity: 156,
    rarityPercent: 1.56,
    badge: "HOT DROP",
    badgeColor: "bg-red-600",
    description:
      "Forged in the flames of the Cronos chain. A knight-class warrior with blazing combat traits.",
    owner: "0xmN1O...pQ2R",
    views: 980,
    likes: 267,
    traits: [
      { name: "Background", value: "Ember Field", rarity: 10 },
      { name: "Eyes", value: "Flame Sight", rarity: 8 },
      { name: "Mouth", value: "Dragon Breath", rarity: 6 },
      { name: "Hat", value: "Inferno Helm", rarity: 7 },
      { name: "Body", value: "Molten Plate", rarity: 5 },
      { name: "Accessory", value: "Flame Sword", rarity: 4 },
    ],
    history: [
      { timestamp: "2026-03-17 19:55", event: "Sale", from: "0xsT3U...vW4X", to: "0xmN1O...pQ2R", txHash: "0xyza567...bcd", price: "4.0" },
      { timestamp: "2026-03-08 14:10", event: "Mint", from: "0x0000...0000", to: "0xsT3U...vW4X", txHash: "0xbcd890...efg" },
    ],
    metadata: { ipfsHash: "QmD4h...sR7u", fileSize: "2.2 MB", createdAt: "2026-03-08", standard: "ERC-721" },
  },
  {
    id: "8",
    title: "Crystal Sage #0891",
    image: "/images/nft-4.png",
    price: "7.5",
    rarity: 8,
    rarityPercent: 0.08,
    badge: "RARE",
    badgeColor: "bg-purple-600",
    description:
      "The wisest of the Crystal lineage. Legendary rarity with traits seen in only 0.08% of the collection.",
    owner: "0x5X6Y...7Z8A",
    views: 3200,
    likes: 890,
    traits: [
      { name: "Background", value: "Crystal Cave", rarity: 1 },
      { name: "Eyes", value: "Omniscient", rarity: 1 },
      { name: "Mouth", value: "Whisper Veil", rarity: 2 },
      { name: "Hat", value: "Crystal Crown", rarity: 1 },
      { name: "Body", value: "Diamond Shell", rarity: 1 },
      { name: "Accessory", value: "Infinity Orb", rarity: 1 },
    ],
    history: [
      { timestamp: "2026-03-23 08:00", event: "Sale", from: "0xeF9G...hI0J", to: "0x5X6Y...7Z8A", txHash: "0xefg123...hij", price: "7.5" },
      { timestamp: "2026-03-14 22:30", event: "Sale", from: "0xkL1M...nO2P", to: "0xeF9G...hI0J", txHash: "0xhij456...klm", price: "5.0" },
      { timestamp: "2026-02-25 06:15", event: "Mint", from: "0x0000...0000", to: "0xkL1M...nO2P", txHash: "0xklm789...nop" },
    ],
    metadata: { ipfsHash: "QmE5i...tS8v", fileSize: "3.5 MB", createdAt: "2026-02-25", standard: "ERC-721" },
  },
  {
    id: "9",
    title: "Storm Breaker #0423",
    image: "/images/nft-1.png",
    price: "2.9",
    rarity: 423,
    rarityPercent: 4.23,
    badge: "NEW",
    badgeColor: "bg-yellow-600",
    description:
      "Channels the raw energy of on-chain transactions. A tempest-class NFT with electric traits.",
    owner: "0xqR3S...tU4V",
    views: 340,
    likes: 72,
    traits: [
      { name: "Background", value: "Thunder Cloud", rarity: 28 },
      { name: "Eyes", value: "Storm Eye", rarity: 15 },
      { name: "Mouth", value: "Lightning Bite", rarity: 18 },
      { name: "Hat", value: "Tesla Coil", rarity: 12 },
      { name: "Body", value: "Charged Armor", rarity: 20 },
      { name: "Accessory", value: "Storm Rod", rarity: 10 },
    ],
    history: [
      { timestamp: "2026-03-24 01:30", event: "Mint", from: "0x0000...0000", to: "0xqR3S...tU4V", txHash: "0xnop012...qrs" },
    ],
    metadata: { ipfsHash: "QmF6j...uT9w", fileSize: "1.9 MB", createdAt: "2026-03-24", standard: "ERC-721" },
  },
  {
    id: "10",
    title: "Shadow Weaver #0067",
    image: "/images/nft-2.png",
    price: "5.4",
    rarity: 67,
    rarityPercent: 0.67,
    badge: "RARE",
    badgeColor: "bg-purple-600",
    description:
      "Weaves between the shadows of the blockchain. An assassin-class NFT with stealth attributes.",
    owner: "0xwX5Y...zA6B",
    views: 1560,
    likes: 398,
    traits: [
      { name: "Background", value: "Midnight Fog", rarity: 6 },
      { name: "Eyes", value: "Shadow Sight", rarity: 4 },
      { name: "Mouth", value: "Silent Wrap", rarity: 7 },
      { name: "Hat", value: "Phantom Hood", rarity: 5 },
      { name: "Body", value: "Ghost Cloak", rarity: 3 },
      { name: "Accessory", value: "Shadow Dagger", rarity: 3 },
    ],
    history: [
      { timestamp: "2026-03-20 17:00", event: "Sale", from: "0xcD7E...fG8H", to: "0xwX5Y...zA6B", txHash: "0xqrs345...tuv", price: "5.4" },
      { timestamp: "2026-03-12 10:45", event: "Sale", from: "0xiJ9K...lM0N", to: "0xcD7E...fG8H", txHash: "0xtuv678...wxy", price: "3.8" },
      { timestamp: "2026-02-22 20:00", event: "Mint", from: "0x0000...0000", to: "0xiJ9K...lM0N", txHash: "0xwxy901...zab" },
    ],
    metadata: { ipfsHash: "QmG7k...vU0x", fileSize: "2.6 MB", createdAt: "2026-02-22", standard: "ERC-721" },
  },
  {
    id: "11",
    title: "Quantum Drifter #0789",
    image: "/images/nft-3.png",
    price: "1.5",
    rarity: 789,
    rarityPercent: 7.89,
    badge: "VERIFIED",
    badgeColor: "bg-green-600",
    description:
      "Drifts between quantum states. A common-tier NFT with verified authenticity and solid fundamentals.",
    owner: "0xoP1Q...rS2T",
    views: 280,
    likes: 45,
    traits: [
      { name: "Background", value: "Star Field", rarity: 35 },
      { name: "Eyes", value: "Basic Visor", rarity: 40 },
      { name: "Mouth", value: "Standard Mask", rarity: 38 },
      { name: "Hat", value: "Drift Cap", rarity: 30 },
      { name: "Body", value: "Flight Suit", rarity: 32 },
      { name: "Accessory", value: "Nav Compass", rarity: 25 },
    ],
    history: [
      { timestamp: "2026-03-16 06:30", event: "Mint", from: "0x0000...0000", to: "0xoP1Q...rS2T", txHash: "0xzab234...cde" },
    ],
    metadata: { ipfsHash: "QmH8l...wV1y", fileSize: "1.4 MB", createdAt: "2026-03-16", standard: "ERC-721" },
  },
  {
    id: "12",
    title: "Iron Vanguard #0045",
    image: "/images/nft-4.png",
    price: "8.3",
    rarity: 3,
    rarityPercent: 0.03,
    badge: "RARE",
    badgeColor: "bg-purple-600",
    description:
      "The vanguard of the entire collection. Rank #3 out of 10,000 — a true grail-tier asset.",
    owner: "0xuV3W...xY4Z",
    views: 4500,
    likes: 1120,
    traits: [
      { name: "Background", value: "Supernova", rarity: 1 },
      { name: "Eyes", value: "Omega Lens", rarity: 1 },
      { name: "Mouth", value: "Command Voice", rarity: 1 },
      { name: "Hat", value: "Vanguard Helm", rarity: 1 },
      { name: "Body", value: "Mythic Plate", rarity: 1 },
      { name: "Accessory", value: "Genesis Key", rarity: 1 },
    ],
    history: [
      { timestamp: "2026-03-22 12:00", event: "Sale", from: "0xaB5C...dE6F", to: "0xuV3W...xY4Z", txHash: "0xcde567...fgh", price: "8.3" },
      { timestamp: "2026-03-11 09:00", event: "Sale", from: "0xgH7I...jK8L", to: "0xaB5C...dE6F", txHash: "0xfgh890...ijk", price: "6.0" },
      { timestamp: "2026-03-02 15:30", event: "Sale", from: "0xmN9O...pQ0R", to: "0xgH7I...jK8L", txHash: "0xijk123...lmn", price: "3.5" },
      { timestamp: "2026-02-18 10:00", event: "Mint", from: "0x0000...0000", to: "0xmN9O...pQ0R", txHash: "0xlmn456...opq" },
    ],
    metadata: { ipfsHash: "QmI9m...xW2z", fileSize: "4.0 MB", createdAt: "2026-02-18", standard: "ERC-721" },
  },
];

export const marketplaceStats = {
  floorPrice: "1.5",
  floorChange: "+12.3",
  volume24h: "245.8",
  volumeChange: "+8.7",
  activeListings: 156,
  listingsChange: "-3.2",
  owners: 892,
  uniqueItems: 1247,
  avgPrice: "4.1",
  avgChange: "+5.4",
};

// Flywheel economy data
export const flywheelData = {
  feePercent: 3,
  treasurySplit: {
    liquidity: { percent: 50, label: "Liquidity Pool", color: "#00f0ff" },
    buybacks: { percent: 30, label: "$HUB Buybacks", color: "#C026D3" },
    ops: { percent: 20, label: "Operations & Rewards", color: "#ff0040" },
  },
  impactMetrics: {
    totalFeesCollected: "1.2M",
    totalBuybacks: "360K",
    liquidityAdded: "600K",
  },
  transparencyBullets: [
    "All fees are routed on-chain via audited smart contracts",
    "Treasury wallet is publicly viewable on Cronoscan",
    "Monthly transparency reports published to community",
    "Buyback burns are verifiable on-chain",
  ],
};

// Price history data for Analytics tab
export const priceHistoryData = [
  { date: "Feb 18", price: 2.1 },
  { date: "Feb 22", price: 2.4 },
  { date: "Feb 25", price: 2.8 },
  { date: "Feb 28", price: 3.2 },
  { date: "Mar 01", price: 3.0 },
  { date: "Mar 05", price: 3.5 },
  { date: "Mar 08", price: 3.3 },
  { date: "Mar 10", price: 4.2 },
  { date: "Mar 12", price: 3.8 },
  { date: "Mar 14", price: 5.0 },
  { date: "Mar 15", price: 4.5 },
  { date: "Mar 17", price: 4.0 },
  { date: "Mar 18", price: 4.8 },
  { date: "Mar 19", price: 4.6 },
  { date: "Mar 20", price: 5.4 },
  { date: "Mar 21", price: 6.2 },
  { date: "Mar 22", price: 5.8 },
  { date: "Mar 23", price: 7.5 },
  { date: "Mar 24", price: 8.3 },
];

// Chart data for StatsBar Recharts mini-charts
export const floorHistoryData = [
  { date: "Mon", price: 1.2 },
  { date: "Tue", price: 1.1 },
  { date: "Wed", price: 1.3 },
  { date: "Thu", price: 1.25 },
  { date: "Fri", price: 1.4 },
  { date: "Sat", price: 1.35 },
  { date: "Sun", price: 1.5 },
];

export const volumeHistoryData = [
  { date: "Mon", volume: 180 },
  { date: "Tue", volume: 220 },
  { date: "Wed", volume: 195 },
  { date: "Thu", volume: 250 },
  { date: "Fri", volume: 210 },
  { date: "Sat", volume: 230 },
  { date: "Sun", volume: 245 },
];

export const listingsHistoryData = [
  { date: "Mon", count: 170 },
  { date: "Tue", count: 165 },
  { date: "Wed", count: 162 },
  { date: "Thu", count: 160 },
  { date: "Fri", count: 158 },
  { date: "Sat", count: 155 },
  { date: "Sun", count: 156 },
];

export const traitCategories = {
  Background: [
    "Crimson Nebula", "Deep Space", "Void Black", "Speed Lines",
    "Dimensional Rift", "Blueprint Grid", "Ember Field", "Crystal Cave",
    "Thunder Cloud", "Midnight Fog", "Star Field", "Supernova",
  ],
  Eyes: [
    "Laser Red", "Scanner Blue", "Phantom Glow", "Turbo Visor",
    "Void Stare", "Architect Lens", "Flame Sight", "Omniscient",
    "Storm Eye", "Shadow Sight", "Basic Visor", "Omega Lens",
  ],
  Mouth: [
    "Chrome Grill", "Rebreather", "Silent Mask", "Aero Mask",
    "Ether Breath", "Command Mic", "Dragon Breath", "Whisper Veil",
    "Lightning Bite", "Silent Wrap", "Standard Mask", "Command Voice",
  ],
  Hat: [
    "Holo Crown", "Neural Net", "Shadow Hood", "Streamline",
    "Rift Crown", "Hard Light", "Inferno Helm", "Crystal Crown",
    "Tesla Coil", "Phantom Hood", "Drift Cap", "Vanguard Helm",
  ],
};
