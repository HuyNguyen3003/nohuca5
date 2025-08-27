// Centralized game catalog grouped by provider
// Each provider can map to a list of games with image, name, and percentage

// -----------------------------
// Mock data with cyber theme
// -----------------------------
// -----------------------------
// Types
// -----------------------------
export interface GameProvider {
  id: string;
  name: string;
  percentage: number;
  logo: string;
  winRate: number;
  status: "online" | "maintenance" | "offline";
  players: number;
  description: string;
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min: number, max: number, decimals = 1): number {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);
  return parseFloat(str);
}
export const gameProviders: GameProvider[] = [
  {
    id: "168game",
    name: "168Game",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/349_N_168G_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description:
      "Advanced AI-powered slot analysis with quantum probability calculations",
  },
  {
    id: "pg",
    name: "PG",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/200_N_PG_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description:
      "Neural network prediction system with real-time pattern recognition",
  },
  {
    id: "jili",
    name: "JILI",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/40_N_JILI_LOGO.avif",
    winRate: 89.7,
    status: "online",
    players: getRandomInt(5000, 20000),
    description:
      "Blockchain-secured gaming environment with encrypted data streams",
  },
  {
    id: "fc",
    name: "FC",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/24_N_FC_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description:
      "Machine learning algorithms optimized for maximum profit analysis",
  },
  {
    id: "mg",
    name: "MG",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/313_N_MG_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description:
      "Cybersecurity-enhanced platform with advanced threat detection",
  },
  {
    id: "pp",
    name: "PP",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/37_N_PP_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description:
      "Neural-network–driven gameplay forecasting with adaptive strategies",
  },
  {
    id: "jdb",
    name: "JDB",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/310_N_JDB_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description:
      "Blockchain-verified randomization ensuring transparent fairness",
  },
  {
    id: "tp",
    name: "TP",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/117_N_TP_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description:
      "Predictive slot engine enhanced by deep reinforcement learning",
  },
  {
    id: "ygr",
    name: "YGR",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/70_N_YGR_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description:
      "Quantum-inspired algorithm optimizing payout cycles dynamically",
  },
  {
    id: "cq9",
    name: "CQ9",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/3_N_CQ9_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "Real-time anomaly detection with cyber-defense integration",
  },
  {
    id: "ka",
    name: "KA",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/27_N_KA_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description:
      "Data-driven spin prediction using advanced statistical inference",
  },
  {
    id: "evoplay",
    name: "Evoplay",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/109_N_EP_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "Encrypted gaming streams with AI-based fraud prevention",
  },
  {
    id: "dragoon soft",
    name: "Dragoon Soft",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/118_N_DS_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description:
      "Evolutionary algorithm balancing volatility and win potential",
  },
  {
    id: "playstart",
    name: "PlayStart",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/34_N_PS_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "Smart RTP optimization powered by cloud-based neural graphs",
  },
  {
    id: "spadegaming",
    name: "Spade Gaming",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/45_N_SG_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description:
      "Self-learning win pattern recognition across millions of plays",
  },
  {
    id: "yellowbat",
    name: "Yellow Bat",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/128_N_Yesbingo_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "Adaptive reward scaling via reinforcement AI agents",
  },
  {
    id: "wg",
    name: "WG",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/13_N_WG_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "Distributed ledger mechanics securing every game session",
  },
  {
    id: "pa",
    name: "PA",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/10_N_AG_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "Predictive volatility analysis with multi-factor simulations",
  },
  {
    id: "bng",
    name: "BNG",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/33_N_BNG_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "Advanced RNG calibration backed by neural optimization",
  },
  {
    id: "hacksawgaming",
    name: "Hacksaw Gaming",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/108_N_HS_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "Cross-platform AI gaming core with seamless scaling",
  },
  {
    id: "nolimitcity",
    name: "Nolimit City",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/114_N_NolimitCity_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "Quantum probability layers driving payout curve adjustments",
  },
  {
    id: "redtiger",
    name: "Red Tiger",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/32_N_RT_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "Secure enclave–processed spins ensuring tamper-proof results",
  },
  {
    id: "va",
    name: "VA",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/326_N_VA_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "Adaptive jackpot forecasting via Bayesian networks",
  },
  {
    id: "mw",
    name: "MW",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/325_N_MW-SL_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "Predictive load balancing for real-time multiplayer fairness",
  },
  {
    id: "bgaming",
    name: "BGaming",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/342_N_BGaming_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "Blockchain-anchored proof-of-play with encrypted validation",
  },
  {
    id: "mp",
    name: "MB",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/105_N_MP_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "AI-curated bonus cycle detection for optimized playtime",
  },
  {
    id: "askmeslot",
    name: "Askmeslot",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/365_N_askmeslot_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "Reinforcement learning engine adjusting volatility live.",
  },
  {
    id: "mancala",
    name: "Mancala",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/340_N_Mancala_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "Predictive slot clustering via unsupervised deep learning",
  },
];

export interface ProviderGame {
  id: string;
  name: string;
  image: string;
  percentage: number;
  description: string;
}

export type ProviderId =
  | "168game"
  | "pg"
  | "jili"
  | "fc"
  | "mg"
  | "pp"
  | "jdb"
  | "tp"
  | "ygr"
  | "cq9"
  | "ka"
  | "evoplay"
  | "dragoon soft"
  | "playstart"
  | "spadegaming"
  | "yellowbat"
  | "wg"
  | "pa"
  | "bng"
  | "hacksawgaming"
  | "nolimitcity"
  | "redtiger"
  | "va"
  | "mw"
  | "bgaming"
  | "mp"
  | "askmeslot"
  | "mancala";

// Helper to build explicit game entries with per-game image/percentage/description
function createGames(
  providerId: ProviderId,
  items: Array<{
    name: string;
    image: string;
    percentage: number;
    description: string;
  }>
): ProviderGame[] {
  return items.map((item, index) => ({
    id: `${providerId}-${index + 1}`,
    name: item.name,
    image: item.image,
    percentage: item.percentage,
    description: item.description,
  }));
}

export function getGamesByProvider(providerId: string): ProviderGame[] {
  const key = providerId as ProviderId;
  return providerToGames[key] ?? [];
}

// Map providerId -> games
export const providerToGames: Record<ProviderId, ProviderGame[]> = {
  "168game": createGames("168game", [
    {
      name: "Ù Mạt Chược",
      image:
        "https://f1684.com/game_pictures/g/CL/349/3/3490011/default.avif?web_v=v6.4.8",
      percentage: 82,
      description: "neon quantum cascade loop protocol",
    },
    {
      name: "Ù Mạt Chược 2",
      image:
        "https://f1684.com/game_pictures/g/CL/349/3/3490012/default.avif?web_v=v6.4.8",
      percentage: 67,
      description: "cybernetic flux matrix pulse core",
    },
    {
      name: "Siêu Thủ Ace",
      image:
        "https://f1684.com/game_pictures/g/CL/349/3/3490013/default.avif?web_v=v6.4.8",
      percentage: 91,
      description: "digital vortex encryption wave cycle",
    },
    {
      name: "Sư Phụ Wada 2",
      image:
        "https://f1684.com/game_pictures/g/CL/349/3/3490002/default.avif?web_v=v6.4.8",
      percentage: 74,
      description: "synthetic neural mesh protocol sequence",
    },
    {
      name: "Sư Phụ Wada",
      image:
        "https://f1684.com/game_pictures/g/CL/349/3/3490001/default.avif?web_v=v6.4.8",
      percentage: 88,
      description: "quantum echo loop resonance hack",
    },
    {
      name: "Heo Disco",
      image:
        "https://f1684.com/game_pictures/g/CL/349/3/3490003/default.avif?web_v=v6.4.8",
      percentage: 63,
      description: "hyperdrive cascade circuit core pulse",
    },
    {
      name: "Siêu Sạc Dự Phòng",
      image:
        "https://f1684.com/game_pictures/g/CL/349/3/3490004/default.avif?web_v=v6.4.8",
      percentage: 80,
      description: "nano matrix cybernetic flow loop",
    },
    {
      name: "Thật Sảng Khoái",
      image:
        "https://f1684.com/game_pictures/g/CL/349/3/3490005/default.avif?web_v=v6.4.8",
      percentage: 69,
      description: "circuit glitch quantum feedback surge",
    },
    {
      name: "Thật Sảng Khoái 2",
      image:
        "https://f1684.com/game_pictures/g/CL/349/3/3490006/default.avif?web_v=v6.4.8",
      percentage: 95,
      description: "binary sector protocol neon wave",
    },
    {
      name: "Thật Sảng Khoái 3",
      image:
        "https://f1684.com/game_pictures/g/CL/349/3/3490007/default.avif?web_v=v6.4.8",
      percentage: 77,
      description: "echo cyber pulse matrix resonance",
    },
  ]),
  pg: createGames("pg", [
    {
      name: "Quyết Chiến Giành Tiền Thưởng",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000135/default.avif?web_v=v6.4.8",
      percentage: 84,
      description: "neon quantum loop resonance core",
    },
    {
      name: "Đường Mạt Chược",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000065/default.avif?web_v=v6.4.8",
      percentage: 76,
      description: "cybernetic pulse matrix protocol flow",
    },
    {
      name: "Đường Mạt Chược 2",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000074/default.avif?web_v=v6.4.8",
      percentage: 69,
      description: "digital cascade echo loop sequence",
    },
    {
      name: "Kho Báu Aztec",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000087/default.avif?web_v=v6.4.8",
      percentage: 92,
      description: "quantum vortex encryption pulse core",
    },
    {
      name: "Wild Đạo Tặc",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000104/default.avif?web_v=v6.4.8",
      percentage: 71,
      description: "neon flux cascade loop matrix",
    },
    {
      name: "Kỳ Lân Mách Nước",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000106/default.avif?web_v=v6.4.8",
      percentage: 85,
      description: "cyber echo pulse protocol system",
    },
    {
      name: "Neko May Mắn",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000089/default.avif?web_v=v6.4.8",
      percentage: 63,
      description: "digital glitch matrix resonance core",
    },
    {
      name: "Nữ Hoàng Tiền Thưởng",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000084/default.avif?web_v=v6.4.8",
      percentage: 79,
      description: "quantum cascade loop echo protocol",
    },
    {
      name: "Cô Bé Quàng Khăn Đỏ",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000018/default.avif?web_v=v6.4.8",
      percentage: 88,
      description: "neon cybernetic pulse vortex core",
    },
    {
      name: "Thỏ May Mắn",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2001007/default.avif?web_v=v6.4.8",
      percentage: 65,
      description: "digital resonance loop cascade core",
    },
    {
      name: "Kho Báu Ganesha",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000075/default.avif?web_v=v6.4.8",
      percentage: 90,
      description: "quantum flux cybernetic loop matrix",
    },
    {
      name: "Đêm Cocktail",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000117/default.avif?web_v=v6.4.8",
      percentage: 72,
      description: "neon cascade echo protocol loop",
    },
    {
      name: "Chiến Thắng CaiShen",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000071/default.avif?web_v=v6.4.8",
      percentage: 81,
      description: "cybernetic vortex matrix pulse core",
    },
    {
      name: "Pháo hoa Wild",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000083/default.avif?web_v=v6.4.8",
      percentage: 68,
      description: "digital quantum cascade echo loop",
    },
    {
      name: "Đại Dịch Xác Sống",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2001034/default.avif?web_v=v6.4.8",
      percentage: 77,
      description: "neon pulse matrix protocol cycle",
    },
    {
      name: "Chú Bò May Mắn",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000098/default.avif?web_v=v6.4.8",
      percentage: 73,
      description: "quantum glitch cascade loop protocol",
    },
    {
      name: "Kho Báu Của Yêu Tinh",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000060/default.avif?web_v=v6.4.8",
      percentage: 89,
      description: "cybernetic echo pulse matrix system",
    },
    {
      name: "Mỹ Nhân Kế Của Diao Chan",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000001/default.avif?web_v=v6.4.8",
      percentage: 66,
      description: "digital cascade vortex loop protocol",
    },
    {
      name: "Vị Cứu Tinh",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000002/default.avif?web_v=v6.4.8",
      percentage: 94,
      description: "quantum matrix cyber pulse loop",
    },
    {
      name: "Thần May Mắn",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000003/default.avif?web_v=v6.4.8",
      percentage: 70,
      description: "cyber echo cascade loop matrix",
    },
    {
      name: "Medusa 2: Sứ mệnh Perseus",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000006/default.avif?web_v=v6.4.8",
      percentage: 82,
      description: "digital quantum vortex pulse loop",
    },
    {
      name: "Medusa 1: Lời nguyền của Athena",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000007/default.avif?web_v=v6.4.8",
      percentage: 75,
      description: "neon cascade echo protocol core",
    },
    {
      name: "Guồng Quay Tình Yêu",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000020/default.avif?web_v=v6.4.8",
      percentage: 87,
      description: "cybernetic flux loop matrix pulse",
    },
    {
      name: "Win Win Won",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000024/default.avif?web_v=v6.4.8",
      percentage: 64,
      description: "digital glitch vortex loop protocol",
    },
    {
      name: "Plushie Frenzy",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000025/default.avif?web_v=v6.4.8",
      percentage: 91,
      description: "quantum matrix echo cascade loop",
    },
    {
      name: "Cây Tài Lộc",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000026/default.avif?web_v=v6.4.8",
      percentage: 78,
      description: "neon pulse cybernetic loop matrix",
    },
    {
      name: "Hotpot",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000028/default.avif?web_v=v6.4.8",
      percentage: 69,
      description: "digital cascade echo vortex loop",
    },
    {
      name: "Truyền Thuyết Rồng",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000029/default.avif?web_v=v6.4.8",
      percentage: 83,
      description: "cybernetic flux quantum pulse loop",
    },
    {
      name: "Gấu Trúc Hip Hop",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000033/default.avif?web_v=v6.4.8",
      percentage: 74,
      description: "neon glitch cascade quantum loop",
    },
    {
      name: "Huyền thoại Hou Yi",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000034/default.avif?web_v=v6.4.8",
      percentage: 90,
      description: "digital echo vortex matrix loop",
    },
    {
      name: "Ông Hallow-Win!",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000035/default.avif?web_v=v6.4.8",
      percentage: 68,
      description: "cyber echo cascade quantum pulse",
    },
    {
      name: "Sư Tử Vương Giả",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000036/default.avif?web_v=v6.4.8",
      percentage: 80,
      description: "neon protocol vortex loop cascade",
    },
    {
      name: "Quà Của Ông Già Noel",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000037/default.avif?web_v=v6.4.8",
      percentage: 77,
      description: "quantum pulse matrix echo loop",
    },
    {
      name: "Vị Cứu Tinh - Thanh Kiếm",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000038/default.avif?web_v=v6.4.8",
      percentage: 85,
      description: "digital cascade quantum echo loop",
    },
    {
      name: "Heo Vàng",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000039/default.avif?web_v=v6.4.8",
      percentage: 73,
      description: "neon matrix protocol pulse loop",
    },
    {
      name: "Khu Rừng Vui Nhộn",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000040/default.avif?web_v=v6.4.8",
      percentage: 91,
      description: "cybernetic glitch echo cascade loop",
    },
    {
      name: "Biểu Tượng Ai Cập",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000041/default.avif?web_v=v6.4.8",
      percentage: 67,
      description: "quantum vortex cascade pulse loop",
    },
    {
      name: "Ganesha Vàng",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000042/default.avif?web_v=v6.4.8",
      percentage: 88,
      description: "digital echo protocol matrix loop",
    },
    {
      name: "Ân Sủng Của Hoàng Đế",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000044/default.avif?web_v=v6.4.8",
      percentage: 75,
      description: "neon cascade pulse quantum loop",
    },
    {
      name: "Kho Báu Khổng Lồ",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000048/default.avif?web_v=v6.4.8",
      percentage: 82,
      description: "cyber echo matrix cascade loop",
    },
    {
      name: "Cuộc Phiêu Lưu Đến Kho Báu",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000050/default.avif?web_v=v6.4.8",
      percentage: 70,
      description: "digital vortex cascade pulse loop",
    },
    {
      name: "Băng Giá Vui Nhộn",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000053/default.avif?web_v=v6.4.8",
      percentage: 89,
      description: "quantum glitch echo cascade loop",
    },
    {
      name: "Kho Báu Của Thuyền Trưởng",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000054/default.avif?web_v=v6.4.8",
      percentage: 74,
      description: "neon matrix protocol loop cascade",
    },
    {
      name: "Long Sinh",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000057/default.avif?web_v=v6.4.8",
      percentage: 83,
      description: "cybernetic echo quantum cascade loop",
    },
    {
      name: "Bùa Ma Cà Rồng",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000058/default.avif?web_v=v6.4.8",
      percentage: 68,
      description: "digital pulse matrix vortex loop",
    },
    {
      name: "Ninja đối đầu Samurai",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000059/default.avif?web_v=v6.4.8",
      percentage: 90,
      description: "neon cascade quantum echo loop",
    },
    {
      name: "Bá Hổ Thu Hương",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000061/default.avif?web_v=v6.4.8",
      percentage: 72,
      description: "cyber echo vortex matrix loop",
    },
    {
      name: "Vị Cứu Tinh - Hành Trình",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000062/default.avif?web_v=v6.4.8",
      percentage: 86,
      description: "quantum cascade loop echo protocol",
    },
    {
      name: "Rồng Hổ May Mắn",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000063/default.avif?web_v=v6.4.8",
      percentage: 75,
      description: "digital glitch cascade quantum loop",
    },
    {
      name: "Nhà Vô Địch Muay Thái",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000064/default.avif?web_v=v6.4.8",
      percentage: 91,
      description: "neon pulse cascade echo loop",
    },
    {
      name: "Bóng Đá Thiếu Lâm",
      image:
        "https://f1684.com/game_pictures/g/CL/200/3/2000067/default.avif?web_v=v6.4.8",
      percentage: 69,
      description: "cybernetic echo matrix pulse loop",
    },
    {
      name: "Chú Chuột May Mắn",
      image:
        "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",
      percentage: 87,
      description: "digital glitch echo cascade loop",
    },
    {
      name: "Thiên Đường Bikini",
      image:
        "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",
      percentage: 73,
      description: "neon cascade vortex quantum loop",
    },
    {
      name: "Kẹo Ngọt Bùng Nổ",
      image:
        "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",
      percentage: 95,
      description: "cybernetic pulse echo cascade loop",
    },
    {
      name: "Quyển Sách Bí Ẩn Ai Cập",
      image:
        "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",
      percentage: 78,
      description: "quantum cascade protocol echo loop",
    },
    {
      name: "Giấc Mơ Ma Cao",
      image:
        "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",
      percentage: 82,
      description: "digital echo vortex cascade loop",
    },
    {
      name: "Rạp Xiếc Nhiệm Màu",
      image:
        "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",
      percentage: 70,
      description: "neon protocol cascade quantum loop",
    },
    {
      name: "Phượng Hoàng Nổi Dậy",
      image:
        "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",
      percentage: 88,
      description: "cybernetic glitch echo quantum loop",
    },
    {
      name: "3 Điều Ước Của Thần Đèn",
      image:
        "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",
      percentage: 65,
      description: "quantum cascade vortex pulse loop",
    },
    {
      name: "Đá Quý Dải Ngân Hà",
      image:
        "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",
      percentage: 93,
      description: "digital echo loop quantum cascade",
    },

    {
      name: "Trang Sức Vương Giả",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000088/default.avif?g0=1755520809",
      percentage: 82,
      description: "neon quantum flux matrix",
    },
    {
      name: "Bí Mật Của Cleopatra",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000090/default.avif?g0=1755520809",
      percentage: 73,
      description: "cyber hive pulse conduit",
    },
    {
      name: "Vệ Binh Băng & Lửa",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000091/default.avif?g0=1755520809",
      percentage: 91,
      description: "quantum cascade loop drive",
    },
    {
      name: "Kỳ Quan Sông Thái Lan",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000092/default.avif?g0=1755520809",
      percentage: 65,
      description: "neon hyperdrive data pulse",
    },
    {
      name: "Triều Đại Opera",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000093/default.avif?g0=1755520809",
      percentage: 88,
      description: "cybernetic prism echo sequence",
    },
    {
      name: "Kỳ Nghỉ Bali",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000094/default.avif?g0=1755520809",
      percentage: 76,
      description: "quantum neon vortex echo",
    },
    {
      name: "Kho Báu Hùng Vĩ",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000095/default.avif?g0=1755520809",
      percentage: 69,
      description: "matrix pulse quantum loop",
    },
    {
      name: "Mùa Đông Của Jack Frost",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000097/default.avif?g0=1755520809",
      percentage: 93,
      description: "cyber vortex cascade loop",
    },
    {
      name: "Kẹo Bonanza",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000100/default.avif?g0=1755520809",
      percentage: 61,
      description: "neon flux quantum surge",
    },
    {
      name: "Thần Apollo Trỗi Dậy",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000101/default.avif?g0=1755520809",
      percentage: 85,
      description: "quantum echo neon cascade",
    },
    {
      name: "Kho Báu Của Nàng Tiên Cá",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000102/default.avif?g0=1755520809",
      percentage: 79,
      description: "matrix neon cyber pulse",
    },
    {
      name: "Kripto Altın",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000103/default.avif?g0=1755520809",
      percentage: 67,
      description: "quantum prism echo drive",
    },
    {
      name: "Tiền Cược Vụ Cướp",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000105/default.avif?g0=1755520809",
      percentage: 90,
      description: "cyber cascade neon loop",
    },
    {
      name: "Hầu Vương Huyền Thoại",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000107/default.avif?g0=1755520809",
      percentage: 71,
      description: "neon quantum pulse conduit",
    },
    {
      name: "Ngưu Đại Chiến",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000108/default.avif?g0=1755520809",
      percentage: 64,
      description: "quantum vortex neon surge",
    },
    {
      name: "Vương quốc kỷ Jura",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000110/default.avif?g0=1755520809",
      percentage: 86,
      description: "cyber prism loop echo",
    },
    {
      name: "Phương Đông Phồn Thịnh",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000112/default.avif?g0=1755520809",
      percentage: 62,
      description: "neon cascade quantum pulse",
    },
    {
      name: "Hầm Mộ May Mắn của Jane Kẻ Trộm Mộ",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000113/default.avif?g0=1755520809",
      percentage: 95,
      description: "quantum neon echo conduit",
    },
    {
      name: "Kho Báu Cảm Xúc",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000114/default.avif?g0=1755520809",
      percentage: 77,
      description: "cyber vortex prism loop",
    },
    {
      name: "Mua Sắm Thả Ga",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000115/default.avif?g0=1755520809",
      percentage: 68,
      description: "neon quantum loop pulse",
    },
    {
      name: "Lễ Hội Mặt Nạ",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000118/default.avif?g0=1755520809",
      percentage: 80,
      description: "quantum neon cascade echo",
    },
    {
      name: "Kỳ Quan Thần Bí",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000119/default.avif?g0=1755520809",
      percentage: 72,
      description: "cyber prism quantum loop",
    },
    {
      name: "Yến Tiệc Của Hoàng Hậu",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000120/default.avif?g0=1755520809",
      percentage: 94,
      description: "neon echo vortex matrix",
    },
    {
      name: "Định Mệnh Của Mặt Trăng & Mặt Trời",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000121/default.avif?g0=1755520809",
      percentage: 66,
      description: "quantum pulse neon prism",
    },
    {
      name: "Đá Quý Garuda",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000122/default.avif?g0=1755520809",
      percentage: 89,
      description: "cyber neon vortex pulse",
    },
    {
      name: "Gà Gáy",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000123/default.avif?g0=1755520809",
      percentage: 63,
      description: "neon quantum echo loop",
    },
    {
      name: "Cuộc Chiến Hoàng Gia",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000124/default.avif?g0=1755520809",
      percentage: 75,
      description: "cyber prism quantum drive",
    },
    {
      name: "Hoa Bướm",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000125/default.avif?g0=1755520809",
      percentage: 84,
      description: "neon cascade echo conduit",
    },
    {
      name: "Hổ May Mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000126/default.avif?g0=1755520809",
      percentage: 70,
      description: "quantum neon prism echo",
    },
    {
      name: "Nhà Vô Địch Tốc Độ",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000127/default.avif?g0=1755520809",
      percentage: 92,
      description: "cyber vortex pulse drive",
    },
    {
      name: "Truyền thuyết về Perseus",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000128/default.avif?g0=1755520809",
      percentage: 78,
      description: "neon quantum echo conduit",
    },
    {
      name: "Thắng Bầu Cua Tôm Cá",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000129/default.avif?g0=1755520809",
      percentage: 81,
      description: "cyber quantum pulse matrix",
    },
    {
      name: "Heo may mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000130/default.avif?g0=1755520809",
      percentage: 65,
      description: "neon echo prism cascade",
    },
    {
      name: "Tàu Lượn Hoang Dã",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2000132/default.avif?g0=1755520809",
      percentage: 74,
      description: "quantum neon vortex loop",
    },
    {
      name: "Cây Tài Vượng",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001001/default.avif?g0=1755520809",
      percentage: 68,
      description: "cyber prism neon pulse",
    },
    {
      name: "Kỳ Quan Cổ Vật",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001002/default.avif?g0=1755520809",
      percentage: 87,
      description: "neon quantum cascade echo",
    },
    {
      name: "Vàng Giả Kim",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001003/default.avif?g0=1755520809",
      percentage: 63,
      description: "quantum vortex neon drive",
    },
    {
      name: "Bữa Tối Hân Hoan",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001004/default.avif?g0=1755520809",
      percentage: 90,
      description: "cyber echo quantum prism",
    },
    {
      name: "Asgard Trỗi Dậy",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001005/default.avif?g0=1755520809",
      percentage: 77,
      description: "neon pulse vortex matrix",
    },
    {
      name: "Kho Báu Midas",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001006/default.avif?g0=1755520809",
      percentage: 69,
      description: "quantum cascade neon echo",
    },
    {
      name: "Tiệm Bánh Phát Đạt",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001008/default.avif?g0=1755520809",
      percentage: 85,
      description: "cyber neon prism drive",
    },
    {
      name: "Tiệc Tùng Say Sưa",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001009/default.avif?g0=1755520809",
      percentage: 72,
      description: "neon quantum echo cascade",
    },
    {
      name: "Linh Hồn Thần Bí",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001010/default.avif?g0=1755520809",
      percentage: 79,
      description: "quantum pulse neon prism",
    },
    {
      name: "Lễ Hội Té Nước",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001011/default.avif?g0=1755520809",
      percentage: 66,
      description: "cyber vortex echo loop",
    },
    {
      name: "Tiki Hawaii",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001012/default.avif?g0=1755520809",
      percentage: 88,
      description: "neon prism quantum drive",
    },
    {
      name: "Cú Phát Bóng Uy Lực",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001013/default.avif?g0=1755520809",
      percentage: 70,
      description: "quantum neon cascade echo",
    },
    {
      name: "Quý Cô Cỏ Ba Lá May Mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001014/default.avif?g0=1755520809",
      percentage: 82,
      description: "cyber quantum prism loop",
    },
    {
      name: "Kẹo Trái Cây",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001015/default.avif?g0=1755520809",
      percentage: 64,
      description: "neon echo quantum pulse",
    },
    {
      name: "Du Thuyền Hoàng Gia",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001016/default.avif?g0=1755520809",
      percentage: 91,
      description: "quantum cascade neon drive",
    },
    {
      name: "Safari Hoang Dã",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001017/default.avif?g0=1755520809",
      percentage: 75,
      description: "cyber neon vortex prism",
    },
    {
      name: "Vinh Quang Của Đấu Sĩ",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001018/default.avif?g0=1755520809",
      percentage: 68,
      description: "neon quantum loop echo",
    },
    {
      name: "Ninja Gấu Mèo Điên Cuồng",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001019/default.avif?g0=1755520809",
      percentage: 83,
      description: "quantum prism neon pulse",
    },
    {
      name: "Tiền Đạo Đỉnh Cao",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001020/default.avif?g0=1755520809",
      percentage: 61,
      description: "cyber vortex echo cascade",
    },
    {
      name: "Phi Vụ Cướp Tiền Táo Bạo",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001021/default.avif?g0=1755520809",
      percentage: 90,
      description: "neon cascade quantum prism",
    },
    {
      name: "Lò Rèn Giàu Có",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001022/default.avif?g0=1755520809",
      percentage: 77,
      description: "quantum echo neon loop",
    },
    {
      name: "Băng Nhóm Mafia",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001023/default.avif?g0=1755520809",
      percentage: 69,
      description: "cyber pulse quantum prism",
    },
    {
      name: "Kho Báu Của Sa Hoàng",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001024/default.avif?g0=1755520809",
      percentage: 85,
      description: "neon quantum vortex echo",
    },
    {
      name: "Cuộc Đi Săn Của Người Sói",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001025/default.avif?g0=1755520809",
      percentage: 72,
      description: "quantum neon prism cascade",
    },
    {
      name: "Long Sinh 2",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001026/default.avif?g0=1755520809",
      percentage: 89,
      description: "cyber vortex echo quantum",
    },
    {
      name: "Chú Rồng May Mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001027/default.avif?g0=1755520809",
      percentage: 65,
      description: "neon prism cascade pulse",
    },
    {
      name: "Đá Quý Và Vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001028/default.avif?g0=1755520809",
      percentage: 67,
      description: "powered by quantum cascade loop",
    },
    {
      name: "Cơn Sốt Tiền",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001029/default.avif?g0=1755520809",
      percentage: 61,
      description: "neon matrix node drift protocol",
    },
    {
      name: "Khỉ Hoang Dã #3258",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001030/default.avif?g0=1755520809",
      percentage: 77,
      description: "core glitch vortex data pulse",
    },
    {
      name: "Chiến Thắng Pinata",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001031/default.avif?g0=1755520809",
      percentage: 75,
      description: "holo pulse matrix drift node",
    },
    {
      name: "Độc Dược Thần Bí",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001032/default.avif?g0=1755520809",
      percentage: 74,
      description: "quantum neon core glitch loop",
    },
    {
      name: "Cơn Thịnh Nộ Của Anubis",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001033/default.avif?g0=1755520809",
      percentage: 68,
      description: "vortex data quantum core node",
    },
    {
      name: "Cuộc Đua Gà Con",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001035/default.avif?g0=1755520809",
      percentage: 66,
      description: "drift neon cascade holo pulse",
    },
    {
      name: "Cơn Sốt Bóng Đá",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001036/default.avif?g0=1755520809",
      percentage: 94,
      description: "matrix protocol quantum node warp",
    },
    {
      name: "Tiền Thưởng Cá Mập",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001037/default.avif?g0=1755520809",
      percentage: 65,
      description: "glitch cascade neon data pulse",
    },
    {
      name: "Danh dự của Yakuza",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001038/default.avif?g0=1755520809",
      percentage: 87,
      description: "holo vortex core neon loop",
    },
    {
      name: "Đôi cánh của Iguazu",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001039/default.avif?g0=1755520809",
      percentage: 62,
      description: "quantum pulse drift matrix node",
    },
    {
      name: "Ba Chú Heo Tinh Quái",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001040/default.avif?g0=1755520809",
      percentage: 61,
      description: "neon core glitch cascade vortex",
    },
    {
      name: "Món Ăn Ngon Miệng",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001041/default.avif?g0=1755520809",
      percentage: 65,
      description: "data loop matrix holo glitch",
    },
    {
      name: "Bí Ẩn Viện Bảo Tàng",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001042/default.avif?g0=1755520809",
      percentage: 73,
      description: "drift pulse quantum cascade matrix",
    },
    {
      name: "Sông Ảo Mộng",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001043/default.avif?g0=1755520809",
      percentage: 74,
      description: "node neon vortex core pulse",
    },
    {
      name: "Sôcôla Hảo Hạng",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001044/default.avif?g0=1755520809",
      percentage: 92,
      description: "holo cascade data glitch node",
    },
    {
      name: "Sự Trả Thù của Geisha",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001045/default.avif?g0=1755520809",
      percentage: 61,
      description: "quantum vortex neon warp loop",
    },
    {
      name: "Rắn May Mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001046/default.avif?g0=1755520809",
      percentage: 95,
      description: "core matrix drift holo protocol",
    },
    {
      name: "Kỳ Quan Inca",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001047/default.avif?g0=1755520809",
      percentage: 72,
      description: "glitch node quantum data vortex",
    },
    {
      name: "Gia Tài Của Ngài Kho Báu",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001048/default.avif?g0=1755520809",
      percentage: 94,
      description: "neon pulse cascade core matrix",
    },
    {
      name: "Cuộc Đua Graffiti",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001049/default.avif?g0=1755520809",
      percentage: 86,
      description: "vortex drift quantum holo loop",
    },
    {
      name: "Cuộc Tàn Sát Ngày Tận Thế",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001050/default.avif?g0=1755520809",
      percentage: 74,
      description: "matrix glitch neon data drift",
    },
    {
      name: "Giàu Có Knockout",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001051/default.avif?g0=1755520809",
      percentage: 88,
      description: "quantum core vortex neon loop",
    },
    {
      name: "Của Cải Của Người Chết",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001052/default.avif?g0=1755520809",
      percentage: 77,
      description: "holo protocol drift matrix node",
    },
    {
      name: "Jack - Thợ Săn Khổng Lồ",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001053/default.avif?g0=1755520809",
      percentage: 60,
      description: "neon data quantum glitch vortex",
    },
    {
      name: "Cơn Sốt Quay Tại Quán Ăn",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001054/default.avif?g0=1755520809",
      percentage: 70,
      description: "cascade quantum core neon drift",
    },
    {
      name: "Truy Tìm Kho Báu Rồng",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001055/default.avif?g0=1755520809",
      percentage: 87,
      description: "glitch vortex data matrix pulse",
    },
    {
      name: "Thợ Mỏ Ngân Hà",
      image:
        "https://f168n.com/game_pictures/g/CL/200/3/2001056/default.avif?g0=1755520809",
      percentage: 81,
      description: "warp core neon cascade protocol",
    },
  ]),
  jili: createGames("jili", [
    {
      name: "Siêu Cấp Ace",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150049/default.avif?g0=1755520809",
      percentage: 66,
      description: "cascade quantum loop pulse cipher vector",
    },
    {
      name: "Ngọc may mắn 2",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150223/default.avif?g0=1755520809",
      percentage: 80,
      description: "circuit pulse protocol quantum cipher",
    },
    {
      name: "Quyền Vương",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150077/default.avif?g0=1755520809",
      percentage: 82,
      description: "flux circuit loop protocol neon cipher",
    },
    {
      name: "Bảo thạch Kala",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150109/default.avif?g0=1755520809",
      percentage: 64,
      description: "pulse vector flux loop cascade quantum protocol",
    },
    {
      name: "Vương bài vô hạn",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150134/default.avif?g0=1755520809",
      percentage: 75,
      description: "flux vector quantum hacker cascade",
    },
    {
      name: "Đế quốc hoàng kim",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150103/default.avif?g0=1755520809",
      percentage: 85,
      description: "loop quantum neon matrix cascade circuit vector",
    },
    {
      name: "Tiền Đến Rồi",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150051/default.avif?g0=1755520809",
      percentage: 83,
      description: "protocol cascade neon flux hacker",
    },
    {
      name: "Điên Cuồng 777",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150035/default.avif?g0=1755520809",
      percentage: 93,
      description: "flux pulse matrix neon loop cipher",
    },
    {
      name: "Ngọc may mắn 3",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150300/default.avif?g0=1755520809",
      percentage: 66,
      description: "matrix neon flux cascade cipher",
    },
    {
      name: "Super Ace Deluxe",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150403/default.avif?g0=1755520809",
      percentage: 94,
      description: "vector matrix protocol cipher cascade hacker circuit",
    },
    {
      name: "Ali Baba",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150110/default.avif?g0=1755520809",
      percentage: 75,
      description: "protocol neon loop quantum cipher cascade",
    },
    {
      name: "Trâu Rừng Xung Phong",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150047/default.avif?g0=1755520809",
      percentage: 87,
      description: "vector matrix hacker loop protocol",
    },
    {
      name: "Thần Long Đoạt Bảo",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150046/default.avif?g0=1755520809",
      percentage: 84,
      description: "circuit loop vector neon quantum",
    },
    {
      name: "Bảng Phong Thần",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150038/default.avif?g0=1755520809",
      percentage: 94,
      description: "protocol pulse loop vector hacker",
    },
    {
      name: "Báo Đốm May Mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150421/default.avif?g0=1755520809",
      percentage: 72,
      description: "hacker vector neon cascade matrix",
    },
    {
      name: "Truyền Thuyết Tần Vương",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150002/default.avif?g0=1755520809",
      percentage: 82,
      description: "flux vector loop cipher circuit pulse",
    },
    {
      name: "Quan Vân Trường",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150004/default.avif?g0=1755520809",
      percentage: 73,
      description: "cipher protocol quantum circuit pulse",
    },
    {
      name: "Quả Ớt Nóng Bỏng",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150005/default.avif?g0=1755520809",
      percentage: 72,
      description: "vector flux circuit neon hacker protocol",
    },
    {
      name: "Cây Phát Tài",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150006/default.avif?g0=1755520809",
      percentage: 66,
      description: "pulse flux cascade vector circuit quantum",
    },
    {
      name: "Vũ Long Tranh Bá",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150009/default.avif?g0=1755520809",
      percentage: 67,
      description: "protocol flux circuit cipher pulse loop hacker",
    },
    {
      name: "Vua Rừng Xanh",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150016/default.avif?g0=1755520809",
      percentage: 69,
      description: "pulse matrix cipher circuit protocol",
    },
    {
      name: "Siêu Nổ Tung",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150017/default.avif?g0=1755520809",
      percentage: 68,
      description: "pulse cipher neon circuit vector loop protocol",
    },
    {
      name: "Cực Tốc Phát Đại Tài",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150021/default.avif?g0=1755520809",
      percentage: 81,
      description: "pulse loop hacker cipher vector protocol",
    },
    {
      name: "Baby Kẹo Ngọt",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150023/default.avif?g0=1755520809",
      percentage: 75,
      description: "protocol loop hacker matrix flux pulse circuit",
    },
    {
      name: "Nhân Ngư Ngọt Ngào",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150030/default.avif?g0=1755520809",
      percentage: 66,
      description: "quantum flux pulse circuit protocol",
    },
    {
      name: "Bao Thanh Thiên",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150036/default.avif?g0=1755520809",
      percentage: 82,
      description: "circuit cipher protocol flux neon quantum hacker",
    },
    {
      name: "Điên Cuồng Phát Đại Tài",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150040/default.avif?g0=1755520809",
      percentage: 68,
      description: "hacker pulse flux cascade vector protocol matrix",
    },
    {
      name: "Niềm Vui Tràn Trề",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150043/default.avif?g0=1755520809",
      percentage: 77,
      description: "flux circuit hacker vector cascade",
    },
    {
      name: "Hoàng Kim Diễm Hậu",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150058/default.avif?g0=1755520809",
      percentage: 64,
      description: "vector quantum matrix flux circuit cascade loop",
    },
    {
      name: "Đêm Party",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150076/default.avif?g0=1755520809",
      percentage: 73,
      description: "neon quantum hacker protocol pulse cascade",
    },
    {
      name: "Bảo vật thần bí",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150078/default.avif?g0=1755520809",
      percentage: 67,
      description: "quantum neon cipher hacker matrix flux",
    },
    {
      name: "Bảo vật Pharaoh",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150085/default.avif?g0=1755520809",
      percentage: 84,
      description: "cipher flux pulse cascade loop hacker",
    },
    {
      name: "Quyển sách hoàng kim",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150087/default.avif?g0=1755520809",
      percentage: 75,
      description: "quantum vector hacker loop cipher neon",
    },
    {
      name: "Voi Thần Tài",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150091/default.avif?g0=1755520809",
      percentage: 87,
      description: "quantum flux cipher matrix pulse protocol",
    },
    {
      name: "Pháo thủ điên cuồng",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150092/default.avif?g0=1755520809",
      percentage: 80,
      description: "cipher vector flux loop circuit matrix cascade",
    },
    {
      name: "Thật là giàu",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150100/default.avif?g0=1755520809",
      percentage: 67,
      description: "matrix flux protocol quantum vector hacker loop",
    },
    {
      name: "Medusa",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150101/default.avif?g0=1755520809",
      percentage: 63,
      description: "cipher loop circuit hacker flux",
    },
    {
      name: "Roma X",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150102/default.avif?g0=1755520809",
      percentage: 82,
      description: "hacker neon loop circuit matrix cascade quantum",
    },
    {
      name: "TWIN WINS",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150106/default.avif?g0=1755520809",
      percentage: 63,
      description: "cascade circuit vector quantum cipher",
    },
    {
      name: "Aladin",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150108/default.avif?g0=1755520809",
      percentage: 75,
      description: "circuit protocol cascade flux hacker vector",
    },
    {
      name: "Đặc vụ Át Chủ Bài",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150115/default.avif?g0=1755520809",
      percentage: 84,
      description: "pulse cipher neon loop flux matrix quantum",
    },
    {
      name: "Taxi vui vẻ",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150116/default.avif?g0=1755520809",
      percentage: 82,
      description: "neon hacker cipher cascade pulse flux",
    },
    {
      name: "Tháng khánh điển",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150126/default.avif?g0=1755520809",
      percentage: 72,
      description: "cipher loop pulse cascade protocol flux",
    },
    {
      name: "Lôi Thần X",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150130/default.avif?g0=1755520809",
      percentage: 77,
      description: "vector neon circuit matrix hacker",
    },
    {
      name: "Đế quốc Maya",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150135/default.avif?g0=1755520809",
      percentage: 70,
      description: "protocol loop neon cipher circuit",
    },
    {
      name: "Lễ hội Samba",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150136/default.avif?g0=1755520809",
      percentage: 88,
      description: "cascade flux cipher protocol matrix hacker vector",
    },
    {
      name: "Cơn sốt đãi vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150137/default.avif?g0=1755520809",
      percentage: 62,
      description: "flux vector matrix protocol cipher cascade",
    },
    {
      name: "Thợ săn tiền thưởng",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150142/default.avif?g0=1755520809",
      percentage: 60,
      description: "vector flux cipher matrix cascade",
    },
    {
      name: "Thần Tài JILI",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150144/default.avif?g0=1755520809",
      percentage: 79,
      description: "protocol neon circuit flux quantum",
    },
    {
      name: "Mèo Thần Tài",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150145/default.avif?g0=1755520809",
      percentage: 78,
      description: "circuit neon matrix protocol quantum",
    },
    {
      name: "Cúp thế giới",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150146/default.avif?g0=1755520809",
      percentage: 60,
      description: "hacker loop cipher vector matrix",
    },
    {
      name: "Bingo Carnaval",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150148/default.avif?g0=1755520809",
      percentage: 71,
      description: "quantum cascade neon flux protocol",
    },
    {
      name: "Nữ hoàng hải tặc",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150164/default.avif?g0=1755520809",
      percentage: 81,
      description: "hacker cipher quantum matrix loop circuit cascade",
    },
    {
      name: "tay đua hoang dã",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150166/default.avif?g0=1755520809",
      percentage: 86,
      description: "pulse quantum matrix cascade protocol cipher loop",
    },
    {
      name: "Thành phố tội lỗi",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150171/default.avif?g0=1755520809",
      percentage: 88,
      description: "protocol vector cascade flux matrix",
    },
    {
      name: "yêu tinh Ailen",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150172/default.avif?g0=1755520809",
      percentage: 87,
      description: "cascade pulse flux cipher loop circuit",
    },
    {
      name: "Master Tiger",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150176/default.avif?g0=1755520809",
      percentage: 85,
      description: "cascade neon vector matrix loop cipher hacker",
    },
    {
      name: "Di sản của Ai Cập",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150180/default.avif?g0=1755520809",
      percentage: 77,
      description: "cascade flux matrix cipher protocol neon loop",
    },
    {
      name: "Wild Ace",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150181/default.avif?g0=1755520809",
      percentage: 82,
      description: "protocol cipher flux circuit matrix",
    },
    {
      name: "Quân J vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150183/default.avif?g0=1755520809",
      percentage: 83,
      description: "flux pulse matrix cascade loop",
    },
    {
      name: "ngôi đền vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150191/default.avif?g0=1755520809",
      percentage: 76,
      description: "quantum hacker matrix pulse circuit cipher",
    },
    {
      name: "lửa quỷ",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150193/default.avif?g0=1755520809",
      percentage: 92,
      description: "neon circuit pulse flux protocol quantum",
    },
    {
      name: "Đất Ngọt",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150198/default.avif?g0=1755520809",
      percentage: 86,
      description: "vector flux quantum neon pulse",
    },
    {
      name: "Thử Thách của Phượng Hoàng",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150208/default.avif?g0=1755520809",
      percentage: 95,
      description: "pulse quantum vector loop circuit hacker flux",
    },
    {
      name: "Nữ tu sĩ Aztec",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150209/default.avif?g0=1755520809",
      percentage: 90,
      description: "neon hacker flux matrix cipher",
    },
    {
      name: "Vua Arthur",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150214/default.avif?g0=1755520809",
      percentage: 87,
      description: "cipher circuit matrix neon protocol hacker pulse",
    },
    {
      name: "Đêm phù thủy",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150226/default.avif?g0=1755520809",
      percentage: 62,
      description: "pulse vector quantum loop flux neon cipher",
    },
    {
      name: "Chiến binh đấu trường",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150228/default.avif?g0=1755520809",
      percentage: 87,
      description: "flux cipher vector neon pulse cascade matrix",
    },
    {
      name: "Người đẹp Bangla",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150238/default.avif?g0=1755520809",
      percentage: 82,
      description: "vector pulse hacker quantum circuit loop neon",
    },
    {
      name: "Dabanggg",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150239/default.avif?g0=1755520809",
      percentage: 89,
      description: "hacker pulse neon quantum protocol",
    },
    {
      name: "Ngôi sao tiệc tùng",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150240/default.avif?g0=1755520809",
      percentage: 64,
      description: "cascade quantum hacker cipher protocol",
    },
    {
      name: "Zeus",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150252/default.avif?g0=1755520809",
      percentage: 64,
      description: "protocol cipher cascade flux vector quantum neon",
    },
    {
      name: "Lửa Quỷ 2",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150258/default.avif?g0=1755520809",
      percentage: 79,
      description: "circuit cascade neon protocol hacker matrix quantum",
    },
    {
      name: "Tính phí Buffalo Ascent",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150259/default.avif?g0=1755520809",
      percentage: 80,
      description: "cipher circuit quantum vector neon protocol",
    },
    {
      name: "Nhà lợn",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150263/default.avif?g0=1755520809",
      percentage: 61,
      description: "cascade pulse matrix hacker quantum cipher flux",
    },
    {
      name: "Ánh sáng của Ai Cập",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150264/default.avif?g0=1755520809",
      percentage: 63,
      description: "flux hacker protocol circuit vector",
    },
    {
      name: "Phù Thủy Thuốc",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150299/default.avif?g0=1755520809",
      percentage: 83,
      description: "neon vector protocol cipher cascade pulse",
    },
    {
      name: "Jackpot Joker",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150301/default.avif?g0=1755520809",
      percentage: 93,
      description: "loop cascade protocol neon matrix flux",
    },
    {
      name: "Tiền đến Mở rộng cược",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150302/default.avif?g0=1755520809",
      percentage: 77,
      description: "quantum loop cipher circuit vector",
    },
    {
      name: "Khỉ may mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150303/default.avif?g0=1755520809",
      percentage: 61,
      description: "circuit protocol cipher matrix loop quantum",
    },
    {
      name: "Nhiệm vụ tìm kho báu",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150307/default.avif?g0=1755520809",
      percentage: 90,
      description: "vector quantum cipher circuit loop cascade",
    },
    {
      name: "Nightfall Hunting",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150324/default.avif?g0=1755520809",
      percentage: 62,
      description: "circuit vector quantum protocol loop",
    },
    {
      name: "3 Ấm Rồng",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150372/default.avif?g0=1755520809",
      percentage: 93,
      description: "vector protocol hacker loop cipher pulse neon",
    },
    {
      name: "Lucky Doggy",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150374/default.avif?g0=1755520809",
      percentage: 74,
      description: "vector circuit pulse flux neon protocol",
    },
    {
      name: "Poseidon",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150375/default.avif?g0=1755520809",
      percentage: 95,
      description: "cipher vector neon pulse loop cascade flux",
    },
    {
      name: "Shōgun",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150376/default.avif?g0=1755520809",
      percentage: 70,
      description: "neon loop pulse cipher quantum flux",
    },
    {
      name: "Bí ẩn Safari",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150377/default.avif?g0=1755520809",
      percentage: 80,
      description: "matrix vector flux cipher pulse loop cascade",
    },
    {
      name: "Ngân Hàng Vàng 2",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150378/default.avif?g0=1755520809",
      percentage: 71,
      description: "circuit cascade neon loop vector",
    },
    {
      name: "Nồi Tiền",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150379/default.avif?g0=1755520809",
      percentage: 68,
      description: "matrix hacker quantum circuit loop pulse cipher",
    },
    {
      name: "Cây tiền xu",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150392/default.avif?g0=1755520809",
      percentage: 91,
      description: "pulse quantum loop protocol neon hacker",
    },
    {
      name: "3 kho báu đồng xu",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150399/default.avif?g0=1755520809",
      percentage: 64,
      description: "neon flux matrix circuit loop hacker protocol",
    },
    {
      name: "3 Con Lợn May Mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150400/default.avif?g0=1755520809",
      percentage: 93,
      description: "hacker loop vector cascade circuit",
    },
    {
      name: "Pháo thủ điên cuồng 2",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150420/default.avif?g0=1755520809",
      percentage: 66,
      description: "pulse cipher vector circuit protocol",
    },
    {
      name: "Siêu Át Hề",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150409/default.avif?g0=1755520809",
      percentage: 63,
      description: "flux vector circuit matrix cipher",
    },
    {
      name: "Vòng quay trái cây",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150422/default.avif?g0=1755520809",
      percentage: 67,
      description: "vector quantum cascade loop flux",
    },
    {
      name: "3 Đồng Xu Ngựa Hoang",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150485/default.avif?g0=1755520809",
      percentage: 63,
      description: "quantum loop matrix neon hacker",
    },
    {
      name: "Đế quốc hoàng kim 2",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150424/default.avif?g0=1755520809",
      percentage: 67,
      description: "pulse flux circuit cipher neon cascade matrix",
    },
    {
      name: "3 Trâu Tích Điện",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150460/default.avif?g0=1755520809",
      percentage: 71,
      description: "matrix vector quantum circuit pulse loop",
    },
    {
      name: "Nữ Hoàng Hải Tặc 2",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150461/default.avif?g0=1755520809",
      percentage: 61,
      description: "vector cipher cascade neon pulse loop",
    },
    {
      name: "3 Sư Tử May Mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150463/default.avif?g0=1755520809",
      percentage: 94,
      description: "protocol flux cascade circuit quantum",
    },
    {
      name: "3 kho báu đồng xu 2",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150472/default.avif?g0=1755520809",
      percentage: 94,
      description: "neon hacker loop cipher matrix flux",
    },
    {
      name: "Hề Xiếc 4096",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150518/default.avif?g0=1755520809",
      percentage: 78,
      description: "flux quantum hacker protocol circuit neon",
    },
    {
      name: "Fortune Coins",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150523/default.avif?g0=1755520809",
      percentage: 76,
      description: "vector hacker loop cipher quantum",
    },
    {
      name: "Siêu Ách 2",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150542/default.avif?g0=1755520809",
      percentage: 76,
      description: "cipher protocol matrix loop neon flux quantum",
    },
    {
      name: "Tiền Đến Rồi 2",
      image:
        "https://f168n.com/game_pictures/g/CL/315/3/3150543/default.avif?g0=1755520809",
      percentage: 80,
      description: "vector matrix protocol quantum flux neon",
    },
  ]),
  fc: createGames("fc", [
    {
      name: "Dạo Chơi Phố Đêm",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030008/default.avif?g0=1755520809",
      percentage: 84,
      description: "matrix neon loop vector circuit quantum flux",
    },
    {
      name: "Cuối Năm",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030010/default.avif?g0=1755520809",
      percentage: 90,
      description: "protocol pulse matrix neon loop flux",
    },
    {
      name: "Kim Linh Thần Đèn",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030033/default.avif?g0=1755520809",
      percentage: 65,
      description: "circuit pulse hacker cipher vector quantum",
    },
    {
      name: "Năm Mới Lộ Lộ Phát",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030059/default.avif?g0=1755520809",
      percentage: 70,
      description: "circuit vector flux cascade protocol",
    },
    {
      name: "Cuối Năm 2",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030028/default.avif?g0=1755520809",
      percentage: 65,
      description: "flux loop quantum hacker neon matrix",
    },
    {
      name: "Dạo Chơi Phố Đêm 2",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030038/default.avif?g0=1755520809",
      percentage: 87,
      description: "cascade vector matrix pulse quantum",
    },
    {
      name: "Huyền thoại Inca",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030046/default.avif?g0=1755520809",
      percentage: 80,
      description: "protocol pulse hacker loop flux cascade",
    },
    {
      name: "Bạo Kích Đường Mật",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030030/default.avif?g0=1755520809",
      percentage: 73,
      description: "matrix quantum neon loop flux",
    },
    {
      name: "Át Chủ Bài Tối Thượng",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030060/default.avif?g0=1755520809",
      percentage: 77,
      description: "neon cascade matrix pulse vector cipher hacker",
    },
    {
      name: "Bí Bảo Cổ Mộ",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030029/default.avif?g0=1755520809",
      percentage: 86,
      description: "matrix circuit cascade vector loop",
    },
    {
      name: "Nữ Chiến Binh La Mã",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030058/default.avif?g0=1755520809",
      percentage: 89,
      description: "hacker cipher neon vector pulse",
    },
    {
      name: "Nữ Hoàng Inca",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030056/default.avif?g0=1755520809",
      percentage: 64,
      description: "hacker flux vector circuit cascade",
    },
    {
      name: "Của Cải Dồi Dào",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030027/default.avif?g0=1755520809",
      percentage: 90,
      description: "pulse matrix neon protocol cipher flux circuit",
    },
    {
      name: "Tầm Bảo Biển Lớn",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030024/default.avif?g0=1755520809",
      percentage: 76,
      description: "cipher hacker protocol neon cascade loop pulse",
    },
    {
      name: "Ba Con Heo Nhỏ",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030007/default.avif?g0=1755520809",
      percentage: 78,
      description: "pulse hacker matrix cipher vector quantum",
    },
    {
      name: "Báo Kim Tiền",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030006/default.avif?g0=1755520809",
      percentage: 61,
      description: "vector matrix flux pulse cipher cascade",
    },
    {
      name: "Máy Ủi Cây Tiền",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030039/default.avif?g0=1755520809",
      percentage: 74,
      description: "matrix pulse cipher circuit vector",
    },
    {
      name: "Thuyền Rồng Gấu Trúc",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030009/default.avif?g0=1755520809",
      percentage: 67,
      description: "flux loop protocol cascade cipher pulse vector",
    },
    {
      name: "Bính Bính Hồ",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030011/default.avif?g0=1755520809",
      percentage: 91,
      description: "neon protocol vector flux quantum pulse circuit",
    },
    {
      name: "Cá Chép Tiền Tài",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030012/default.avif?g0=1755520809",
      percentage: 63,
      description: "loop vector matrix hacker flux cascade pulse",
    },
    {
      name: "Đại Nhạc Môn",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030013/default.avif?g0=1755520809",
      percentage: 84,
      description: "neon matrix hacker circuit protocol",
    },
    {
      name: "Rùa Thỏ Đua Xe",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030014/default.avif?g0=1755520809",
      percentage: 71,
      description: "neon matrix circuit loop vector",
    },
    {
      name: "Tiệc Lẩu",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030015/default.avif?g0=1755520809",
      percentage: 67,
      description: "hacker vector protocol quantum cipher",
    },
    {
      name: "Đoạt Bảo Vui Nhộn",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030016/default.avif?g0=1755520809",
      percentage: 80,
      description: "loop quantum protocol cipher vector",
    },
    {
      name: "Căng Buồm Tầm Bảo",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030017/default.avif?g0=1755520809",
      percentage: 82,
      description: "circuit cascade matrix loop protocol",
    },
    {
      name: "Tây Bộ Phong Vân",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030018/default.avif?g0=1755520809",
      percentage: 64,
      description: "circuit matrix loop pulse hacker",
    },
    {
      name: "Báo Kim Tiền Xa Hoa",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030019/default.avif?g0=1755520809",
      percentage: 94,
      description: "vector quantum hacker loop matrix",
    },
    {
      name: "Vũ Trụ Đại Chiến",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030020/default.avif?g0=1755520809",
      percentage: 82,
      description: "hacker flux loop quantum circuit",
    },
    {
      name: "Đậu Ma",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030021/default.avif?g0=1755520809",
      percentage: 84,
      description: "pulse matrix vector quantum protocol flux circuit",
    },
    {
      name: "Kiếm Tiền Vui",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030022/default.avif?g0=1755520809",
      percentage: 84,
      description: "cipher vector matrix circuit protocol cascade flux",
    },
    {
      name: "Ông Trùm Phú Quý",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030023/default.avif?g0=1755520809",
      percentage: 63,
      description: "circuit cascade cipher protocol neon",
    },
    {
      name: "Tranh Đấu La Mã",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030025/default.avif?g0=1755520809",
      percentage: 88,
      description: "cipher hacker protocol neon matrix",
    },
    {
      name: "Robin Hood",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030026/default.avif?g0=1755520809",
      percentage: 82,
      description: "protocol neon cipher cascade vector",
    },
    {
      name: "Ma Thuật Ghép",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030031/default.avif?g0=1755520809",
      percentage: 61,
      description: "flux hacker protocol matrix cipher",
    },
    {
      name: "Trâu Hoang Điên Cuồng",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030034/default.avif?g0=1755520809",
      percentage: 70,
      description: "flux pulse protocol quantum neon circuit",
    },
    {
      name: "ZEUS",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030035/default.avif?g0=1755520809",
      percentage: 65,
      description: "matrix pulse flux cipher hacker cascade protocol",
    },
    {
      name: "Mèo Tài Tầm Bảo",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030036/default.avif?g0=1755520809",
      percentage: 68,
      description: "flux quantum matrix cipher cascade vector protocol",
    },
    {
      name: "Trứng Vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030037/default.avif?g0=1755520809",
      percentage: 67,
      description: "quantum matrix protocol cipher circuit",
    },
    {
      name: "Máy Ủi Gánh Xiếc",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030040/default.avif?g0=1755520809",
      percentage: 74,
      description: "neon vector quantum flux pulse cascade",
    },
    {
      name: "Máy Ủi Của Cải",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030041/default.avif?g0=1755520809",
      percentage: 61,
      description: "circuit quantum vector cascade matrix",
    },
    {
      name: "Hồi Hộp Kịch Tính",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030042/default.avif?g0=1755520809",
      percentage: 90,
      description: "cascade circuit vector hacker matrix",
    },
    {
      name: "Game màu siêu cấp",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030043/default.avif?g0=1755520809",
      percentage: 72,
      description: "neon vector protocol quantum cipher cascade",
    },
    {
      name: "LUCKY 9",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030044/default.avif?g0=1755520809",
      percentage: 95,
      description: "pulse flux vector protocol hacker circuit loop",
    },
    {
      name: "Hướng về tiền",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030045/default.avif?g0=1755520809",
      percentage: 81,
      description: "quantum flux neon cascade cipher",
    },
    {
      name: "Nguyên Tố Dâng Trào",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030047/default.avif?g0=1755520809",
      percentage: 86,
      description: "quantum hacker flux cipher circuit loop",
    },
    {
      name: "Kho báu Ai Cập",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030049/default.avif?g0=1755520809",
      percentage: 66,
      description: "vector cascade matrix quantum circuit",
    },
    {
      name: "CHILIHUAHUA",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030050/default.avif?g0=1755520809",
      percentage: 82,
      description: "pulse neon cipher cascade loop",
    },
    {
      name: "Thần Tài Phi Dương",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030051/default.avif?g0=1755520809",
      percentage: 85,
      description: "cipher matrix quantum neon flux cascade vector",
    },
    {
      name: "Cao thủ quét mìn",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030052/default.avif?g0=1755520809",
      percentage: 72,
      description: "neon vector protocol circuit matrix quantum",
    },
    {
      name: "Cao thủ trèo tháp",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030053/default.avif?g0=1755520809",
      percentage: 71,
      description: "matrix pulse protocol vector flux loop",
    },
    {
      name: "Pháo Rồng Tài Lộc",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030054/default.avif?g0=1755520809",
      percentage: 93,
      description: "neon pulse flux cipher cascade matrix loop",
    },
    {
      name: "Của Cải Dồi Dào 3x3",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030055/default.avif?g0=1755520809",
      percentage: 94,
      description: "hacker neon circuit flux pulse loop",
    },
    {
      name: "Nữ Thần Vệ Đà",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030057/default.avif?g0=1755520809",
      percentage: 85,
      description: "cascade matrix vector quantum hacker",
    },
    {
      name: "Cú Đấm Tài Lộc",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030061/default.avif?g0=1755520809",
      percentage: 83,
      description: "quantum hacker cascade cipher circuit matrix flux",
    },
    {
      name: "Bạo Kích Đường Mật 2",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030062/default.avif?g0=1755520809",
      percentage: 88,
      description: "circuit hacker matrix vector cascade protocol",
    },
    {
      name: "Phượng Hoàng Bay Cao",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030063/default.avif?g0=1755520809",
      percentage: 83,
      description: "cipher cascade circuit pulse protocol loop",
    },
    {
      name: "Bạo Kích Rừng Rậm",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030064/default.avif?g0=1755520809",
      percentage: 85,
      description: "pulse matrix flux circuit protocol quantum cipher",
    },
    {
      name: "Kho Báu Của Odin",
      image:
        "https://f168n.com/game_pictures/g/CL/203/3/2030065/default.avif?g0=1755520809",
      percentage: 65,
      description: "pulse flux cipher loop cascade",
    },
  ]),
  mg: createGames("mg", [
    {
      name: "Tiền đạo bóng đá",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130349/default.avif?g0=1755520809",
      percentage: 74,
      description: "matrix circuit neon loop protocol",
    },
    {
      name: "cặp song sinh may mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130138/default.avif?g0=1755520809",
      percentage: 72,
      description: "quantum flux hacker cipher matrix",
    },
    {
      name: "Pháo đài cổ đại : Poseidon Megaways™",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130324/default.avif?g0=1755520809",
      percentage: 64,
      description: "cascade hacker flux vector loop pulse circuit",
    },
    {
      name: "Pháo đài cổ đại: Zeus",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130248/default.avif?g0=1755520809",
      percentage: 70,
      description: "protocol quantum circuit flux matrix",
    },
    {
      name: "Con thuyền may mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130025/default.avif?g0=1755520809",
      percentage: 81,
      description: "loop circuit protocol matrix flux pulse neon",
    },
    {
      name: "Ngôi sao bóng đá Deluxe",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130026/default.avif?g0=1755520809",
      percentage: 60,
      description: "quantum neon vector hacker cipher matrix pulse",
    },
    {
      name: "Ngôi sao bóng bầu dục Deluxe",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130029/default.avif?g0=1755520809",
      percentage: 89,
      description: "vector circuit flux quantum pulse cipher hacker",
    },
    {
      name: "Vật chất tối",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130030/default.avif?g0=1755520809",
      percentage: 66,
      description: "hacker flux neon quantum matrix pulse",
    },
    {
      name: "Vận may Long Mu",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130032/default.avif?g0=1755520809",
      percentage: 92,
      description: "flux hacker neon circuit vector",
    },
    {
      name: "9 mặt nạ lửa",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130033/default.avif?g0=1755520809",
      percentage: 88,
      description: "vector flux hacker cascade protocol matrix",
    },
    {
      name: "Thoát khỏi vùng hoang dã may mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130034/default.avif?g0=1755520809",
      percentage: 77,
      description: "pulse circuit protocol neon matrix cascade flux",
    },
    {
      name: "Jackpot cặp song sinh may mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130037/default.avif?g0=1755520809",
      percentage: 66,
      description: "quantum hacker neon loop vector cipher",
    },
    {
      name: "ngôi sao bóng bàn",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130038/default.avif?g0=1755520809",
      percentage: 63,
      description: "protocol quantum circuit pulse loop",
    },
    {
      name: "Thắng Sum Dim Sum",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130040/default.avif?g0=1755520809",
      percentage: 86,
      description: "loop matrix neon hacker cipher",
    },
    {
      name: "Bọ hung hoang dã",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130041/default.avif?g0=1755520809",
      percentage: 77,
      description: "protocol vector circuit loop cascade cipher",
    },
    {
      name: "Phương Đông hoang dã",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130042/default.avif?g0=1755520809",
      percentage: 87,
      description: "cipher protocol matrix flux circuit neon quantum",
    },
    {
      name: "Những câu chuyện độc ác: Màu đỏ sẫm",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130043/default.avif?g0=1755520809",
      percentage: 71,
      description: "vector flux pulse neon matrix circuit",
    },
    {
      name: "Thật là một trò chơi khăm",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130044/default.avif?g0=1755520809",
      percentage: 95,
      description: "loop circuit cascade matrix flux vector",
    },
    {
      name: "gấu trúc lập dị",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130045/default.avif?g0=1755520809",
      percentage: 89,
      description: "cascade hacker quantum loop vector",
    },
    {
      name: "Untamed - Gấu Trúc Khổng Lồ",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130049/default.avif?g0=1755520809",
      percentage: 64,
      description: "cipher neon flux cascade matrix protocol",
    },
    {
      name: "Kho báu của Thành phố Sư tử",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130050/default.avif?g0=1755520809",
      percentage: 71,
      description: "hacker neon circuit cipher flux",
    },
    {
      name: "Cung điện kho báu",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130051/default.avif?g0=1755520809",
      percentage: 80,
      description: "circuit protocol vector loop matrix flux cipher",
    },
    {
      name: "Mắt hổ",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130058/default.avif?g0=1755520809",
      percentage: 62,
      description: "cipher vector quantum hacker pulse circuit flux",
    },
    {
      name: "sấm sét II",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130059/default.avif?g0=1755520809",
      percentage: 70,
      description: "neon protocol hacker pulse loop",
    },
    {
      name: "sét đánh",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130060/default.avif?g0=1755520809",
      percentage: 87,
      description: "flux neon circuit pulse quantum",
    },
    {
      name: "Rạp Xiếc Xoắn",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130061/default.avif?g0=1755520809",
      percentage: 75,
      description: "quantum protocol flux circuit vector pulse",
    },
    {
      name: "kiểm hồ",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130070/default.avif?g0=1755520809",
      percentage: 64,
      description: "flux cipher protocol vector cascade hacker loop",
    },
    {
      name: "Chắc chắn thắng",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130071/default.avif?g0=1755520809",
      percentage: 88,
      description: "flux cipher matrix circuit vector",
    },
    {
      name: "mùa hè",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130075/default.avif?g0=1755520809",
      percentage: 68,
      description: "loop circuit pulse vector quantum flux cascade",
    },
    {
      name: "bạc sterling",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130078/default.avif?g0=1755520809",
      percentage: 61,
      description: "vector pulse neon protocol cipher matrix",
    },
    {
      name: "nụ hôn ánh sao",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130080/default.avif?g0=1755520809",
      percentage: 75,
      description: "protocol matrix cascade vector neon cipher",
    },
    {
      name: "Kỳ nghỉ xuân",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130082/default.avif?g0=1755520809",
      percentage: 78,
      description: "neon pulse hacker circuit matrix vector cipher",
    },
    {
      name: "Răng bạc",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130088/default.avif?g0=1755520809",
      percentage: 69,
      description: "cascade flux neon circuit loop cipher",
    },
    {
      name: "Saloon thách đấu",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130089/default.avif?g0=1755520809",
      percentage: 66,
      description: "circuit vector cipher cascade loop",
    },
    {
      name: "tướng quân của thời gian",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130090/default.avif?g0=1755520809",
      percentage: 65,
      description: "neon hacker quantum cascade matrix pulse",
    },
    {
      name: "bí mật lãng mạn",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130093/default.avif?g0=1755520809",
      percentage: 95,
      description: "cascade cipher neon matrix hacker quantum loop",
    },
    {
      name: "Người hâm mộ thầm kín",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130094/default.avif?g0=1755520809",
      percentage: 86,
      description: "neon pulse hacker matrix cascade",
    },
    {
      name: "Scrooge",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130095/default.avif?g0=1755520809",
      percentage: 90,
      description: "cipher quantum neon hacker loop circuit matrix",
    },
    {
      name: "Chuyến đi hoang dã của ông già Noel",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130096/default.avif?g0=1755520809",
      percentage: 68,
      description: "cipher protocol vector loop matrix cascade",
    },
    {
      name: "ngôi sao bóng bầu dục",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130098/default.avif?g0=1755520809",
      percentage: 83,
      description: "circuit cipher vector flux protocol pulse cascade",
    },
    {
      name: "Rhyming Reels - Trái tim & Tarts",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130102/default.avif?g0=1755520809",
      percentage: 79,
      description: "cipher quantum vector cascade protocol",
    },
    {
      name: "Cuộn phim Retro - Cực nóng",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130104/default.avif?g0=1755520809",
      percentage: 65,
      description: "cascade neon loop circuit matrix vector",
    },
    {
      name: "Cuộn Retro - Diamond Glitz",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130105/default.avif?g0=1755520809",
      percentage: 92,
      description: "protocol hacker matrix quantum neon loop",
    },
    {
      name: "Cuộn cổ điển",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130106/default.avif?g0=1755520809",
      percentage: 88,
      description: "flux cipher quantum protocol matrix circuit pulse",
    },
    {
      name: "Người tìm kiếm di tích",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130107/default.avif?g0=1755520809",
      percentage: 85,
      description: "protocol vector cascade matrix flux pulse hacker",
    },
    {
      name: "cuộn sấm sét",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130108/default.avif?g0=1755520809",
      percentage: 70,
      description: "neon vector protocol quantum hacker",
    },
    {
      name: "cuộn tài năng",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130109/default.avif?g0=1755520809",
      percentage: 86,
      description: "quantum protocol circuit hacker pulse",
    },
    {
      name: "Máy quay cuộn",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130111/default.avif?g0=1755520809",
      percentage: 68,
      description: "cipher hacker circuit loop flux quantum protocol",
    },
    {
      name: "cuộn đá quý",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130112/default.avif?g0=1755520809",
      percentage: 63,
      description: "flux loop quantum protocol neon circuit",
    },
    {
      name: "Nữ hoàng Crystal Rays™",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130114/default.avif?g0=1755520809",
      percentage: 79,
      description: "matrix protocol cipher cascade quantum flux vector",
    },
    {
      name: "bạch kim nguyên chất",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130115/default.avif?g0=1755520809",
      percentage: 92,
      description: "matrix pulse cipher hacker loop vector cascade",
    },
    {
      name: "Giải độc đắc vàng Playboy™",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130118/default.avif?g0=1755520809",
      percentage: 88,
      description: "circuit cipher matrix flux loop vector quantum",
    },
    {
      name: "ăn chơi vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130119/default.avif?g0=1755520809",
      percentage: 70,
      description: "cascade protocol matrix pulse flux vector",
    },
    {
      name: "ăn chơi",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130120/default.avif?g0=1755520809",
      percentage: 67,
      description: "quantum pulse cascade vector loop",
    },
    {
      name: "Ngày của chúng ta",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130124/default.avif?g0=1755520809",
      percentage: 61,
      description: "quantum protocol cascade neon pulse",
    },
    {
      name: "Nàng Tiên Cá Hàng Triệu",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130130/default.avif?g0=1755520809",
      percentage: 84,
      description: "pulse matrix quantum cascade circuit loop flux",
    },
    {
      name: "Hệ số nhân tiền lớn",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130132/default.avif?g0=1755520809",
      percentage: 62,
      description: "neon flux matrix vector circuit",
    },
    {
      name: "Phép thuật của Sahara",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130135/default.avif?g0=1755520809",
      percentage: 65,
      description: "matrix circuit neon cipher protocol hacker pulse",
    },
    {
      name: "Những vị thần nhỏ may mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130139/default.avif?g0=1755520809",
      percentage: 60,
      description: "matrix pulse cascade hacker cipher circuit vector",
    },
    {
      name: "yêu tinh may mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130140/default.avif?g0=1755520809",
      percentage: 60,
      description: "flux protocol cascade neon circuit pulse cipher",
    },
    {
      name: "Koi may mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130141/default.avif?g0=1755520809",
      percentage: 85,
      description: "quantum vector cascade flux hacker",
    },
    {
      name: "pháo may mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130142/default.avif?g0=1755520809",
      percentage: 82,
      description: "loop matrix protocol quantum flux pulse cipher",
    },
    {
      name: "cử nhân may mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130143/default.avif?g0=1755520809",
      percentage: 66,
      description: "vector pulse matrix loop cipher flux",
    },
    {
      name: "Truyền thuyết Lucha",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130144/default.avif?g0=1755520809",
      percentage: 75,
      description: "neon circuit cascade quantum protocol",
    },
    {
      name: "Vegas bị mất",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130145/default.avif?g0=1755520809",
      percentage: 62,
      description: "matrix vector flux pulse protocol hacker",
    },
    {
      name: "Cuộc sống giàu sang",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130149/default.avif?g0=1755520809",
      percentage: 65,
      description: "vector circuit pulse matrix hacker flux",
    },
    {
      name: "Truyền thuyết về những người yêu trăng",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130150/default.avif?g0=1755520809",
      percentage: 74,
      description: "circuit protocol flux cascade neon",
    },
    {
      name: "Lara Croft - Đền Thờ Và Lăng Mộ",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130151/default.avif?g0=1755520809",
      percentage: 65,
      description: "loop circuit matrix pulse quantum protocol",
    },
    {
      name: "quý bà đêm khuya",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130153/default.avif?g0=1755520809",
      percentage: 95,
      description: "quantum hacker cascade vector circuit",
    },
    {
      name: "Vua tiền mặt",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130155/default.avif?g0=1755520809",
      percentage: 73,
      description: "flux vector cascade quantum protocol",
    },
    {
      name: "vua ngà",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130156/default.avif?g0=1755520809",
      percentage: 93,
      description: "pulse vector cascade quantum flux",
    },
    {
      name: "Kathmandu",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130157/default.avif?g0=1755520809",
      percentage: 65,
      description: "hacker matrix pulse flux loop",
    },
    {
      name: "Jungle Jim và nhân sư bị mất tích",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130160/default.avif?g0=1755520809",
      percentage: 77,
      description: "vector hacker cascade protocol quantum circuit matrix",
    },
    {
      name: "Jungle Jim - El Dorado",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130161/default.avif?g0=1755520809",
      percentage: 64,
      description: "cipher loop hacker pulse matrix cascade neon",
    },
    {
      name: "Lãng mạn bất tử",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130163/default.avif?g0=1755520809",
      percentage: 82,
      description: "cipher flux cascade loop hacker",
    },
    {
      name: "Chim cánh cụt Holly Jolly",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130166/default.avif?g0=1755520809",
      percentage: 83,
      description: "protocol vector flux matrix pulse quantum",
    },
    {
      name: "xã hội cao",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130169/default.avif?g0=1755520809",
      percentage: 71,
      description: "protocol cascade flux cipher circuit matrix quantum",
    },
    {
      name: "ngày lễ vui vẻ",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130171/default.avif?g0=1755520809",
      percentage: 90,
      description: "vector hacker cipher quantum neon protocol pulse",
    },
    {
      name: "Halloween",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130172/default.avif?g0=1755520809",
      percentage: 84,
      description: "flux hacker pulse cipher matrix vector circuit",
    },
    {
      name: "Gopher vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130174/default.avif?g0=1755520809",
      percentage: 67,
      description: "loop protocol circuit cipher flux pulse",
    },
    {
      name: "công chúa vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130175/default.avif?g0=1755520809",
      percentage: 70,
      description: "hacker cipher flux pulse vector",
    },
    {
      name: "Kỷ nguyên vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130176/default.avif?g0=1755520809",
      percentage: 84,
      description: "cascade hacker circuit quantum vector flux",
    },
    {
      name: "Trái cây vs kẹo",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130181/default.avif?g0=1755520809",
      percentage: 83,
      description: "cascade circuit loop matrix protocol",
    },
    {
      name: "may mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130183/default.avif?g0=1755520809",
      percentage: 66,
      description: "vector quantum circuit cipher flux pulse hacker",
    },
    {
      name: "cô gái may mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130184/default.avif?g0=1755520809",
      percentage: 61,
      description: "protocol flux matrix quantum cascade",
    },
    {
      name: "ngôi sao bóng đá",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130186/default.avif?g0=1755520809",
      percentage: 86,
      description: "neon circuit cascade quantum hacker",
    },
    {
      name: "tiệc cá",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130187/default.avif?g0=1755520809",
      percentage: 72,
      description: "hacker cascade protocol matrix cipher vector",
    },
    {
      name: "mèo kỳ lạ",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130188/default.avif?g0=1755520809",
      percentage: 69,
      description: "protocol cascade cipher pulse quantum loop",
    },
    {
      name: "Hoàng đế của biển",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130189/default.avif?g0=1755520809",
      percentage: 62,
      description: "flux circuit cascade cipher neon",
    },
    {
      name: "cánh đại bàng",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130191/default.avif?g0=1755520809",
      percentage: 77,
      description: "loop hacker pulse flux circuit protocol",
    },
    {
      name: "ngày mơ ước",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130192/default.avif?g0=1755520809",
      percentage: 70,
      description: "cipher neon loop protocol quantum pulse flux",
    },
    {
      name: "rồngz",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130193/default.avif?g0=1755520809",
      percentage: 67,
      description: "quantum pulse loop protocol matrix vector",
    },
    {
      name: "mảnh rồng",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130194/default.avif?g0=1755520809",
      percentage: 65,
      description: "circuit neon hacker protocol pulse",
    },
    {
      name: "Múa rồng",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130195/default.avif?g0=1755520809",
      percentage: 89,
      description: "neon flux matrix cascade quantum",
    },
    {
      name: "đế chế kim cương",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130199/default.avif?g0=1755520809",
      percentage: 65,
      description: "protocol vector cipher pulse loop hacker",
    },
    {
      name: "Boong Halls",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130201/default.avif?g0=1755520809",
      percentage: 66,
      description: "neon loop quantum vector flux cipher",
    },
    {
      name: "Ngôi sao dế",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130203/default.avif?g0=1755520809",
      percentage: 80,
      description: "matrix quantum hacker cipher cascade pulse",
    },
    {
      name: "Sói mát mẻ",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130206/default.avif?g0=1755520809",
      percentage: 61,
      description: "quantum neon hacker protocol matrix",
    },
    {
      name: "Cool Buck - 5 Cuộn",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130207/default.avif?g0=1755520809",
      percentage: 75,
      description: "neon cipher hacker cascade flux",
    },
    {
      name: "Trung tâm tòa án",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130209/default.avif?g0=1755520809",
      percentage: 80,
      description: "cipher cascade hacker neon protocol vector pulse",
    },
    {
      name: "tiền mặt",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130213/default.avif?g0=1755520809",
      percentage: 68,
      description: "quantum cascade hacker pulse vector loop matrix",
    },
    {
      name: "Tiền mặt của Vương quốc",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130215/default.avif?g0=1755520809",
      percentage: 89,
      description: "vector quantum flux cipher neon pulse",
    },
    {
      name: "lễ hội hóa trang",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130217/default.avif?g0=1755520809",
      percentage: 91,
      description: "circuit quantum vector pulse cipher protocol",
    },
    {
      name: "phá vỡ ngân hàng",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130219/default.avif?g0=1755520809",
      percentage: 90,
      description: "quantum circuit matrix cipher cascade",
    },
    {
      name: "điện báo Bush",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130220/default.avif?g0=1755520809",
      percentage: 80,
      description: "pulse cipher neon quantum loop hacker",
    },
    {
      name: "Ham muốn cháy bỏng",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130221/default.avif?g0=1755520809",
      percentage: 64,
      description: "vector flux matrix protocol hacker circuit",
    },
    {
      name: "Break Da Bank một lần nữa Respin",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130224/default.avif?g0=1755520809",
      percentage: 70,
      description: "quantum vector hacker protocol neon matrix flux",
    },
    {
      name: "Phá vỡ ngân hàng một lần nữa",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130225/default.avif?g0=1755520809",
      percentage: 86,
      description: "circuit pulse hacker quantum loop cipher neon",
    },
    {
      name: "Phá vỡ ngân hàng",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130226/default.avif?g0=1755520809",
      percentage: 93,
      description: "vector cascade neon hacker loop quantum matrix",
    },
    {
      name: "Break Away Deluxe",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130227/default.avif?g0=1755520809",
      percentage: 63,
      description: "neon circuit matrix flux hacker protocol cascade",
    },
    {
      name: "chia tay",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130228/default.avif?g0=1755520809",
      percentage: 81,
      description: "pulse hacker neon protocol vector matrix",
    },
    {
      name: "Nhà cái tỷ lệ cược",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130229/default.avif?g0=1755520809",
      percentage: 76,
      description: "quantum protocol circuit loop vector neon",
    },
    {
      name: "Cuốn Sách Của Oz - Lock 'N Spin",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130230/default.avif?g0=1755520809",
      percentage: 91,
      description: "pulse protocol circuit matrix cascade hacker loop",
    },
    {
      name: "Sách Của Oz",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130231/default.avif?g0=1755520809",
      percentage: 94,
      description: "hacker protocol quantum flux matrix",
    },
    {
      name: "Tiệc Bikini",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130233/default.avif?g0=1755520809",
      percentage: 67,
      description: "pulse circuit cascade neon hacker",
    },
    {
      name: "đầu lớn",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130234/default.avif?g0=1755520809",
      percentage: 89,
      description: "neon protocol circuit flux quantum",
    },
    {
      name: "Kahuna lớn",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130235/default.avif?g0=1755520809",
      percentage: 86,
      description: "hacker matrix vector circuit quantum neon cipher",
    },
    {
      name: "xương đẹp",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130236/default.avif?g0=1755520809",
      percentage: 60,
      description: "cascade circuit quantum neon protocol hacker",
    },
    {
      name: "Ngôi sao bóng rổ Deluxe",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130238/default.avif?g0=1755520809",
      percentage: 76,
      description: "cascade neon quantum pulse flux vector cipher",
    },
    {
      name: "ngôi sao bóng rổ",
      image:
        "https://f168n.com/game_pictures/g/CL/313/3/3130239/default.avif?g0=1755520809",
      percentage: 71,
      description: "neon circuit cascade hacker vector pulse loop",
    },
  ]),
  pp: createGames("pp", [
    {
      name: "Sugar Rush",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010238/default.avif?g0=1755520809",
      percentage: 78,
      description: "pulse cascade quantum loop vector matrix",
    },
    {
      name: "Mahjong Wins 2",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010473/default.avif?g0=1755520809",
      percentage: 91,
      description: "loop neon vector cascade quantum matrix cipher",
    },
    {
      name: "Rise of Samurai 4",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010442/default.avif?g0=1755520809",
      percentage: 66,
      description: "protocol vector loop flux pulse neon",
    },
    {
      name: "Sugar Rush 1000",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010444/default.avif?g0=1755520809",
      percentage: 69,
      description: "matrix flux vector hacker cascade",
    },
    {
      name: "Biển Lửa",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010151/default.avif?g0=1755520809",
      percentage: 61,
      description: "circuit cipher cascade matrix vector neon",
    },
    {
      name: "Con mắt của Cleopatra",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010001/default.avif?g0=1755520809",
      percentage: 86,
      description: "protocol loop cascade pulse cipher",
    },
    {
      name: "Fire Strike 2",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010002/default.avif?g0=1755520809",
      percentage: 63,
      description: "vector pulse cipher circuit neon flux",
    },
    {
      name: "Linh hồn của cuộc phiêu lưu",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010003/default.avif?g0=1755520809",
      percentage: 81,
      description: "protocol cipher vector loop hacker neon flux",
    },
    {
      name: "Khoan vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010004/default.avif?g0=1755520809",
      percentage: 69,
      description: "flux neon loop hacker matrix",
    },
    {
      name: "Cỏ ba lá vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010005/default.avif?g0=1755520809",
      percentage: 66,
      description: "cipher vector loop circuit flux pulse cascade",
    },
    {
      name: "Wild west gold megaways",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010006/default.avif?g0=1755520809",
      percentage: 69,
      description: "cascade vector circuit flux loop cipher",
    },
    {
      name: "Bắt gà",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010007/default.avif?g0=1755520809",
      percentage: 66,
      description: "quantum vector matrix loop protocol cipher pulse",
    },
    {
      name: "Lễ hội chuồng trại",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010008/default.avif?g0=1755520809",
      percentage: 62,
      description: "loop cipher circuit protocol quantum matrix neon",
    },
    {
      name: "Queenie",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010009/default.avif?g0=1755520809",
      percentage: 62,
      description: "vector neon circuit hacker loop matrix cipher",
    },
    {
      name: "Nữ hoàng Disco",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010010/default.avif?g0=1755520809",
      percentage: 64,
      description: "hacker flux quantum pulse circuit cipher matrix",
    },
    {
      name: "Tic Tac Take",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010011/default.avif?g0=1755520809",
      percentage: 73,
      description: "protocol matrix flux neon circuit quantum",
    },
    {
      name: "Cầu vồng vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010012/default.avif?g0=1755520809",
      percentage: 71,
      description: "hacker cascade matrix protocol neon quantum loop",
    },
    {
      name: "Ra hùng mạnh",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010015/default.avif?g0=1755520809",
      percentage: 62,
      description: "pulse cascade vector cipher loop quantum circuit",
    },
    {
      name: "Cuốn sách của Vua Aztec",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010016/default.avif?g0=1755520809",
      percentage: 63,
      description: "vector hacker cipher flux cascade circuit",
    },
    {
      name: "Bữa tiệc bên bờ biển",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010017/default.avif?g0=1755520809",
      percentage: 64,
      description: "matrix cipher cascade vector quantum",
    },
    {
      name: "Spaceman",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010018/default.avif?g0=1755520809",
      percentage: 85,
      description: "protocol loop circuit vector cascade hacker flux",
    },
    {
      name: "Kẻ cuối cùng 5",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010019/default.avif?g0=1755520809",
      percentage: 75,
      description: "loop matrix cascade neon pulse vector",
    },
    {
      name: "Khu tiền mặt khổng lồ",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010020/default.avif?g0=1755520809",
      percentage: 70,
      description: "flux cascade neon circuit cipher pulse matrix",
    },
    {
      name: "Kiểm tra tiền mặt",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010021/default.avif?g0=1755520809",
      percentage: 92,
      description: "matrix neon pulse vector flux circuit loop",
    },
    {
      name: "Rock Vegas",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010022/default.avif?g0=1755520809",
      percentage: 94,
      description: "loop hacker pulse neon cascade circuit cipher",
    },
    {
      name: "Nguyên tố đá quý Megaways™",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010023/default.avif?g0=1755520809",
      percentage: 61,
      description: "protocol loop flux hacker circuit",
    },
    {
      name: "Cánh cổng của Valhalla",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010024/default.avif?g0=1755520809",
      percentage: 69,
      description: "cascade pulse neon quantum cipher hacker",
    },
    {
      name: "Bữa tiệc vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010025/default.avif?g0=1755520809",
      percentage: 70,
      description: "pulse flux cipher circuit vector hacker neon",
    },
    {
      name: "Extra Juicy Megaways",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010026/default.avif?g0=1755520809",
      percentage: 89,
      description: "loop vector matrix pulse quantum cipher",
    },
    {
      name: "Sâu thẳm",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010027/default.avif?g0=1755520809",
      percentage: 77,
      description: "pulse flux cipher cascade loop",
    },
    {
      name: "Bí mật của pháp sư",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010028/default.avif?g0=1755520809",
      percentage: 68,
      description: "quantum neon cipher hacker pulse loop circuit",
    },
    {
      name: "Hang động pha lê Megaways™",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010029/default.avif?g0=1755520809",
      percentage: 82,
      description: "protocol matrix vector pulse cascade",
    },
    {
      name: "Vùng đất của Smuggler",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010030/default.avif?g0=1755520809",
      percentage: 87,
      description: "cipher matrix loop cascade hacker vector circuit",
    },
    {
      name: "Vua Thần Tài™",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010031/default.avif?g0=1755520809",
      percentage: 67,
      description: "vector pulse cipher flux protocol hacker",
    },
    {
      name: "Năm mới may mắn - Kho báu hổ™",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010032/default.avif?g0=1755520809",
      percentage: 76,
      description: "circuit quantum pulse cipher vector",
    },
    {
      name: "Vận may của Giza™",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010033/default.avif?g0=1755520809",
      percentage: 93,
      description: "hacker cipher protocol loop quantum vector",
    },
    {
      name: "SIêu X™",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010034/default.avif?g0=1755520809",
      percentage: 89,
      description: "neon quantum loop hacker matrix protocol cascade",
    },
    {
      name: "Big Bass Bonanza Megaways™",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010035/default.avif?g0=1755520809",
      percentage: 86,
      description: "cascade circuit vector cipher hacker quantum flux",
    },
    {
      name: "Đại chiến sân băng",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010036/default.avif?g0=1755520809",
      percentage: 95,
      description: "pulse vector protocol quantum cipher flux neon",
    },
    {
      name: "Săn vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010037/default.avif?g0=1755520809",
      percentage: 71,
      description: "loop matrix cascade quantum vector pulse hacker",
    },
    {
      name: "Bong Bóng",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010038/default.avif?g0=1755520809",
      percentage: 71,
      description: "hacker cipher quantum loop matrix flux cascade",
    },
    {
      name: "Cuốn sách sa ngã",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010039/default.avif?g0=1755520809",
      percentage: 66,
      description: "quantum protocol flux cascade hacker neon",
    },
    {
      name: "Christmas Big Bass Bonanza",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010040/default.avif?g0=1755520809",
      percentage: 63,
      description: "quantum cascade protocol matrix neon flux vector",
    },
    {
      name: "Thế giới kỳ diệu của Santa",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010041/default.avif?g0=1755520809",
      percentage: 68,
      description: "protocol cipher quantum cascade matrix",
    },
    {
      name: "Juan Khổng lồ",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010042/default.avif?g0=1755520809",
      percentage: 61,
      description: "cipher loop circuit vector cascade neon",
    },
    {
      name: "John Hunter và nhiệm vụ kho báu Bermuda",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010043/default.avif?g0=1755520809",
      percentage: 68,
      description: "neon hacker pulse quantum loop",
    },
    {
      name: "Mật mã cướp biển",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010044/default.avif?g0=1755520809",
      percentage: 75,
      description: "flux matrix protocol vector hacker loop",
    },
    {
      name: "The Tweety House",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010045/default.avif?g0=1755520809",
      percentage: 67,
      description: "hacker circuit pulse protocol loop",
    },
    {
      name: "Đầu bếp bí ẩn",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010046/default.avif?g0=1755520809",
      percentage: 83,
      description: "loop neon cascade pulse flux",
    },
    {
      name: "Ngày tận thế",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010047/default.avif?g0=1755520809",
      percentage: 84,
      description: "protocol circuit cascade pulse neon hacker loop",
    },
    {
      name: "Candy Village",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010048/default.avif?g0=1755520809",
      percentage: 74,
      description: "quantum cipher cascade vector flux",
    },
    {
      name: "Hóa đơn con heo đất",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010049/default.avif?g0=1755520809",
      percentage: 70,
      description: "quantum cascade vector neon matrix flux protocol",
    },
    {
      name: "Tiền Bonanza",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010050/default.avif?g0=1755520809",
      percentage: 95,
      description: "vector neon flux hacker pulse",
    },
    {
      name: "Kho báu hoang dã",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010051/default.avif?g0=1755520809",
      percentage: 93,
      description: "flux quantum loop vector matrix cipher cascade",
    },
    {
      name: "Bigger Bass Bonanza",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010052/default.avif?g0=1755520809",
      percentage: 65,
      description: "loop circuit neon cascade cipher quantum",
    },
    {
      name: "Công chúa ánh sáng",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010053/default.avif?g0=1755520809",
      percentage: 83,
      description: "cascade protocol pulse flux matrix",
    },
    {
      name: "Con bò tót",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010054/default.avif?g0=1755520809",
      percentage: 88,
      description: "cipher vector flux circuit cascade protocol",
    },
    {
      name: "Kim tự tháp Bonanza",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010055/default.avif?g0=1755520809",
      percentage: 88,
      description: "protocol neon vector flux pulse",
    },
    {
      name: "Sự Trỗi Dậy của Giza PowerNudge",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010056/default.avif?g0=1755520809",
      percentage: 61,
      description: "cipher loop vector neon hacker protocol circuit",
    },
    {
      name: "Yum Yum Powerways",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010057/default.avif?g0=1755520809",
      percentage: 75,
      description: "cascade circuit pulse cipher loop protocol quantum",
    },
    {
      name: "Ớt Cay Megaways",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010058/default.avif?g0=1755520809",
      percentage: 86,
      description: "circuit loop quantum pulse vector flux neon",
    },
    {
      name: "May Mắn Duyên Dáng và Quyến Rũ",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010059/default.avif?g0=1755520809",
      percentage: 63,
      description: "vector quantum protocol neon circuit",
    },
    {
      name: "Vua Aztec Megaways",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010060/default.avif?g0=1755520809",
      percentage: 67,
      description: "loop flux hacker cascade vector neon",
    },
    {
      name: "Thả Gà",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010061/default.avif?g0=1755520809",
      percentage: 65,
      description: "circuit cascade loop hacker matrix quantum pulse",
    },
    {
      name: "Phượng Hoàng Lửa",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010062/default.avif?g0=1755520809",
      percentage: 70,
      description: "circuit neon cipher cascade vector flux loop",
    },
    {
      name: "Tiệc Hoa Quả 2",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010063/default.avif?g0=1755520809",
      percentage: 81,
      description: "hacker protocol loop pulse cipher",
    },
    {
      name: "Rút Cạn Ngân Hàng",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010064/default.avif?g0=1755520809",
      percentage: 84,
      description: "cascade flux circuit matrix loop vector quantum",
    },
    {
      name: "Tia Chớp May Mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010065/default.avif?g0=1755520809",
      percentage: 89,
      description: "circuit protocol flux loop hacker cipher",
    },
    {
      name: "Trái Tim của Rio",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010066/default.avif?g0=1755520809",
      percentage: 74,
      description: "pulse vector quantum cascade hacker loop matrix",
    },
    {
      name: "Rồng Lửa Giữ và Quay",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010067/default.avif?g0=1755520809",
      percentage: 63,
      description: "matrix hacker neon loop flux",
    },
    {
      name: "5 Chú Sư Tử Megaways",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010068/default.avif?g0=1755520809",
      percentage: 77,
      description: "hacker matrix pulse protocol flux",
    },
    {
      name: "Sói Hokkaido",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010069/default.avif?g0=1755520809",
      percentage: 95,
      description: "neon cipher loop protocol matrix",
    },
    {
      name: "Thang Máy Tiền Mặt",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010070/default.avif?g0=1755520809",
      percentage: 79,
      description: "protocol cipher hacker flux matrix",
    },
    {
      name: "Sự Trỗi Dậy của Samurai Megaways",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010071/default.avif?g0=1755520809",
      percentage: 94,
      description: "cipher pulse matrix hacker flux quantum circuit",
    },
    {
      name: "Chiếc Vạc Kỳ Diệu - Pha Chế Bùa Mê",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010072/default.avif?g0=1755520809",
      percentage: 70,
      description: "flux loop cipher circuit pulse cascade quantum",
    },
    {
      name: "Vua Aztec",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010073/default.avif?g0=1755520809",
      percentage: 67,
      description: "cipher cascade loop flux quantum hacker protocol",
    },
    {
      name: "Cỗ Máy Kiếm Tiền Tuyệt Hảo",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010074/default.avif?g0=1755520809",
      percentage: 95,
      description: "hacker circuit quantum cipher matrix",
    },
    {
      name: "Vận May Gấu Trúc 2",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010075/default.avif?g0=1755520809",
      percentage: 87,
      description: "flux circuit cascade cipher protocol vector loop",
    },
    {
      name: "Rồng Nổi",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010076/default.avif?g0=1755520809",
      percentage: 93,
      description: "quantum pulse matrix neon protocol loop circuit",
    },
    {
      name: "Vua Trâu Megaways",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010077/default.avif?g0=1755520809",
      percentage: 69,
      description: "circuit cascade cipher flux protocol",
    },
    {
      name: "Ngày Hội May Mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010078/default.avif?g0=1755520809",
      percentage: 65,
      description: "protocol hacker pulse loop vector flux",
    },
    {
      name: "Sức Mạnh của Thor Megaways",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010079/default.avif?g0=1755520809",
      percentage: 69,
      description: "protocol vector matrix cipher flux quantum",
    },
    {
      name: "Tăng Cường Wild",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010080/default.avif?g0=1755520809",
      percentage: 63,
      description: "quantum loop flux pulse cipher",
    },
    {
      name: "Trái Cây Ngon Ngọt",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010081/default.avif?g0=1755520809",
      percentage: 92,
      description: "hacker vector loop flux cipher cascade",
    },
    {
      name: "Kho Báu của Thành Cát Tư Hãn",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010082/default.avif?g0=1755520809",
      percentage: 73,
      description: "quantum hacker cascade flux protocol",
    },
    {
      name: "Guồng Quay Câu Cá",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010083/default.avif?g0=1755520809",
      percentage: 91,
      description: "matrix cascade vector hacker quantum protocol circuit",
    },
    {
      name: "Cổng Olympus",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010084/default.avif?g0=1755520809",
      percentage: 82,
      description: "circuit cipher cascade protocol quantum loop pulse",
    },
    {
      name: "Nóng Bỏng Giữ và Quay",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010085/default.avif?g0=1755520809",
      percentage: 69,
      description: "neon circuit cipher hacker protocol loop",
    },
    {
      name: "Vua Hề",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010086/default.avif?g0=1755520809",
      percentage: 90,
      description: "circuit quantum protocol hacker vector",
    },
    {
      name: "Bàn Tay của Midas",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010087/default.avif?g0=1755520809",
      percentage: 93,
      description: "neon circuit quantum hacker vector",
    },
    {
      name: "Mắt Bão",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010088/default.avif?g0=1755520809",
      percentage: 62,
      description: "cipher cascade quantum circuit matrix",
    },
    {
      name: "Vương Quốc Rồng Đôi Mắt Lửa Thiêng",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010089/default.avif?g0=1755520809",
      percentage: 75,
      description: "circuit vector cipher hacker neon loop",
    },
    {
      name: "Sứ Mệnh Phù Thủy Megaways",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010090/default.avif?g0=1755520809",
      percentage: 75,
      description: "cascade pulse loop flux protocol matrix",
    },
    {
      name: "Tiền Mặt Congo",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010091/default.avif?g0=1755520809",
      percentage: 90,
      description: "cipher vector matrix protocol quantum circuit",
    },
    {
      name: "Con Đường Cầu Vồng Vua Ngọc Lục Bảo",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010092/default.avif?g0=1755520809",
      percentage: 71,
      description: "cascade circuit matrix flux loop neon hacker",
    },
    {
      name: "Ai Cập Huyền Bí",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010093/default.avif?g0=1755520809",
      percentage: 87,
      description: "quantum hacker cascade vector protocol matrix",
    },
    {
      name: "Trâu Vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010094/default.avif?g0=1755520809",
      percentage: 83,
      description: "protocol pulse quantum hacker cascade circuit",
    },
    {
      name: "Voodoo Huyền Ảo",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010095/default.avif?g0=1755520809",
      percentage: 77,
      description: "cipher quantum neon pulse vector hacker",
    },
    {
      name: "Vận May Cá Vược Lớn",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010096/default.avif?g0=1755520809",
      percentage: 78,
      description: "neon protocol cipher quantum pulse",
    },
    {
      name: "John Hunter Và Các Vị Thần Maya",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010098/default.avif?g0=1755520809",
      percentage: 63,
      description: "flux hacker neon protocol vector",
    },
    {
      name: "Vua Sparta",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010099/default.avif?g0=1755520809",
      percentage: 85,
      description: "neon hacker cascade matrix circuit flux",
    },
    {
      name: "Hồn Ma Đêm Giáng Sinh Megaways",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010100/default.avif?g0=1755520809",
      percentage: 76,
      description: "cipher cascade loop hacker protocol pulse matrix",
    },
    {
      name: "Vàng Cao Bồi",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010101/default.avif?g0=1755520809",
      percentage: 82,
      description: "cipher matrix pulse loop protocol cascade",
    },
    {
      name: "Vàng Cướp Biển",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010102/default.avif?g0=1755520809",
      percentage: 94,
      description: "protocol neon cascade matrix flux cipher pulse",
    },
    {
      name: "Vua Ngọc Lục Bảo",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010103/default.avif?g0=1755520809",
      percentage: 60,
      description: "hacker protocol circuit quantum flux",
    },
    {
      name: "Long Hổ",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010104/default.avif?g0=1755520809",
      percentage: 60,
      description: "loop cascade cipher matrix protocol circuit flux",
    },
    {
      name: "Cuốn Sách Của Vương Quốc",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010105/default.avif?g0=1755520809",
      percentage: 72,
      description: "protocol neon vector cipher pulse flux cascade",
    },
    {
      name: "Trở Về Từ Cõi Chết",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010106/default.avif?g0=1755520809",
      percentage: 95,
      description: "cipher protocol vector circuit loop",
    },
    {
      name: "Ngọc Thịnh Vượng",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010107/default.avif?g0=1755520809",
      percentage: 61,
      description: "protocol flux vector cascade quantum loop",
    },
    {
      name: "Zombie nổi loạn",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010108/default.avif?g0=1755520809",
      percentage: 62,
      description: "flux matrix cascade pulse hacker",
    },
    {
      name: "Sự Trỗi Dậy Của Samurai",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010109/default.avif?g0=1755520809",
      percentage: 61,
      description: "cascade protocol circuit quantum matrix neon",
    },
    {
      name: "Vũ Điệu 5 Sư Tử",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010110/default.avif?g0=1755520809",
      percentage: 80,
      description: "loop quantum neon circuit matrix hacker pulse",
    },
    {
      name: "Phần Thưởng Từ Vì Sao",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010111/default.avif?g0=1755520809",
      percentage: 81,
      description: "pulse flux neon matrix protocol hacker loop",
    },
    {
      name: "Tê Giác Vĩ Đại Cao Cấp",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010112/default.avif?g0=1755520809",
      percentage: 67,
      description: "pulse circuit protocol vector neon cipher quantum",
    },
    {
      name: "Kho Báu Vĩ Đại",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010113/default.avif?g0=1755520809",
      percentage: 89,
      description: "protocol circuit pulse quantum flux",
    },
    {
      name: "Giữ Và Quay Siêu Cấp",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010114/default.avif?g0=1755520809",
      percentage: 85,
      description: "loop circuit hacker protocol cascade flux",
    },
    {
      name: "Lời Nguyền Ma Sói Megaways",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010115/default.avif?g0=1755520809",
      percentage: 76,
      description: "cascade circuit neon cipher protocol hacker vector",
    },
    {
      name: "Khỉ Đột Rừng Xanh",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010116/default.avif?g0=1755520809",
      percentage: 94,
      description: "matrix cipher vector neon cascade pulse circuit",
    },
    {
      name: "Đá Quý Aztec Cao Cấp",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010117/default.avif?g0=1755520809",
      percentage: 80,
      description: "hacker protocol cascade circuit flux matrix quantum",
    },
    {
      name: "Nhà Chó Megaways™",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010118/default.avif?g0=1755520809",
      percentage: 77,
      description: "pulse protocol cipher circuit matrix flux cascade",
    },
    {
      name: "Chiến Binh Hổ",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010119/default.avif?g0=1755520809",
      percentage: 73,
      description: "neon circuit flux protocol cascade",
    },
    {
      name: "Tay Đua Đường Phố",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010120/default.avif?g0=1755520809",
      percentage: 84,
      description: "neon loop pulse hacker protocol vector",
    },
    {
      name: "Fu Fu Fu",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010121/default.avif?g0=1755520809",
      percentage: 82,
      description: "hacker cipher circuit loop flux",
    },
    {
      name: "Drago-Ngọc May Mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010122/default.avif?g0=1755520809",
      percentage: 64,
      description: "quantum hacker cipher loop pulse matrix",
    },
    {
      name: "Vua Kim Tự Tháp",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010124/default.avif?g0=1755520809",
      percentage: 63,
      description: "flux pulse loop cascade circuit neon hacker",
    },
    {
      name: "Siêu Bùng Cháy",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010125/default.avif?g0=1755520809",
      percentage: 74,
      description: "quantum cascade loop neon circuit flux matrix",
    },
    {
      name: "Tiền Của Tiền Tài Tiền Bạc",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010126/default.avif?g0=1755520809",
      percentage: 93,
      description: "pulse matrix loop hacker flux circuit quantum",
    },
    {
      name: "Starz Megaways",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010127/default.avif?g0=1755520809",
      percentage: 80,
      description: "hacker quantum neon flux cipher pulse cascade",
    },
    {
      name: "Fruit Party",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010128/default.avif?g0=1755520809",
      percentage: 72,
      description: "vector cipher protocol matrix neon quantum flux",
    },
    {
      name: "John Hunter và Cuốn Sách của Tut",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010129/default.avif?g0=1755520809",
      percentage: 95,
      description: "cipher flux cascade hacker neon vector loop",
    },
    {
      name: "Ba Ngôi Sao May Mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010130/default.avif?g0=1755520809",
      percentage: 89,
      description: "circuit matrix vector pulse cascade",
    },
    {
      name: "Tê giác Khổng lồ Megaways",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010131/default.avif?g0=1755520809",
      percentage: 73,
      description: "neon flux vector cascade pulse loop matrix",
    },
    {
      name: "Nóng Bỏng",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010132/default.avif?g0=1755520809",
      percentage: 85,
      description: "cascade quantum protocol loop cipher hacker",
    },
    {
      name: "Bữa Tiệc Khiêu Vũ",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010133/default.avif?g0=1755520809",
      percentage: 81,
      description: "cascade loop cipher circuit vector",
    },
    {
      name: "Vàng Miền Tây Hoang Dã",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010134/default.avif?g0=1755520809",
      percentage: 83,
      description: "quantum circuit hacker flux matrix protocol pulse",
    },
    {
      name: "Ngọc Rồng May Mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010135/default.avif?g0=1755520809",
      percentage: 83,
      description: "cascade pulse vector hacker flux",
    },
    {
      name: "Cầu Vồng Trái Cây",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010136/default.avif?g0=1755520809",
      percentage: 70,
      description: "matrix pulse loop flux neon quantum",
    },
    {
      name: "Cỗ Máy Wild",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010137/default.avif?g0=1755520809",
      percentage: 67,
      description: "pulse quantum cipher circuit neon",
    },
    {
      name: "Aztec Phồn Thịnh",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010138/default.avif?g0=1755520809",
      percentage: 95,
      description: "cipher matrix circuit protocol loop vector pulse",
    },
    {
      name: "Thần bí",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010139/default.avif?g0=1755520809",
      percentage: 83,
      description: "cipher protocol circuit cascade flux vector",
    },
    {
      name: "Ông chủ Joker",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010141/default.avif?g0=1755520809",
      percentage: 85,
      description: "vector loop flux pulse neon quantum cascade",
    },
    {
      name: "Siêu 7s",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010142/default.avif?g0=1755520809",
      percentage: 67,
      description: "neon vector flux matrix cipher",
    },
    {
      name: "Giải Phóng Kraken",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010143/default.avif?g0=1755520809",
      percentage: 61,
      description: "matrix neon circuit flux cipher cascade",
    },
    {
      name: "Vua Trâu",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010144/default.avif?g0=1755520809",
      percentage: 83,
      description: "cascade quantum pulse cipher circuit loop matrix",
    },
    {
      name: "Hành Trình Kỳ Diệu",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010145/default.avif?g0=1755520809",
      percentage: 70,
      description: "protocol circuit neon flux hacker cascade pulse",
    },
    {
      name: "Chuột Kim Tiền",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010146/default.avif?g0=1755520809",
      percentage: 78,
      description: "circuit flux cascade pulse protocol",
    },
    {
      name: "Alladin và Lão Phù Thủy",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010147/default.avif?g0=1755520809",
      percentage: 67,
      description: "cipher matrix pulse neon quantum protocol flux",
    },
    {
      name: "Các Vị Thần Hy Lạp",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010148/default.avif?g0=1755520809",
      percentage: 79,
      description: "quantum protocol flux pulse loop",
    },
    {
      name: "Giáng Sinh May Mắn Ngọt Ngào",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010149/default.avif?g0=1755520809",
      percentage: 65,
      description: "loop vector protocol circuit cipher flux",
    },
    {
      name: "HERCULES VÀ PEGASUS",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010150/default.avif?g0=1755520809",
      percentage: 81,
      description: "quantum cascade flux neon circuit vector",
    },
    {
      name: "Mật Mật Mật",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010152/default.avif?g0=1755520809",
      percentage: 93,
      description: "vector matrix pulse cipher flux",
    },
    {
      name: "Siêu Joker",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010153/default.avif?g0=1755520809",
      percentage: 88,
      description: "hacker quantum matrix circuit flux",
    },
    {
      name: "John Hunter và Lăng Mộ của Nữ Hoàng Scarab",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010154/default.avif?g0=1755520809",
      percentage: 90,
      description: "cipher loop protocol pulse matrix flux hacker",
    },
    {
      name: "Cây Tài Phú",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010155/default.avif?g0=1755520809",
      percentage: 82,
      description: "circuit loop cipher pulse neon hacker cascade",
    },
    {
      name: "Cuộc Tẩu Thoát Vĩ Đại Của Gà",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010156/default.avif?g0=1755520809",
      percentage: 61,
      description: "circuit vector cascade loop protocol neon pulse",
    },
    {
      name: "Ma Cà Rồng vs Sói",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010157/default.avif?g0=1755520809",
      percentage: 79,
      description: "cipher loop circuit neon quantum",
    },
    {
      name: "Ớt Cay",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010158/default.avif?g0=1755520809",
      percentage: 85,
      description: "hacker loop protocol flux cascade neon cipher",
    },
    {
      name: "John Hunter và Kho Báu Aztec",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010159/default.avif?g0=1755520809",
      percentage: 71,
      description: "loop pulse circuit protocol quantum flux",
    },
    {
      name: "Chiến Binh Khỉ",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010160/default.avif?g0=1755520809",
      percentage: 66,
      description: "vector protocol cascade pulse cipher circuit neon",
    },
    {
      name: "5 Sư Tử Vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010162/default.avif?g0=1755520809",
      percentage: 60,
      description: "loop quantum flux protocol cascade neon cipher",
    },
    {
      name: "Các Nàng tiên Hoang dã",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010163/default.avif?g0=1755520809",
      percentage: 64,
      description: "flux neon cascade pulse vector",
    },
    {
      name: "Vận May Ngọt Ngào",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010164/default.avif?g0=1755520809",
      percentage: 74,
      description: "cipher matrix loop protocol cascade",
    },
    {
      name: "Tiền của Caishen",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010165/default.avif?g0=1755520809",
      percentage: 68,
      description: "circuit matrix loop pulse quantum",
    },
    {
      name: "Vàng Hải Tặc",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010166/default.avif?g0=1755520809",
      percentage: 76,
      description: "flux cipher loop hacker quantum pulse matrix",
    },
    {
      name: "Nhà Của Chó",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010167/default.avif?g0=1755520809",
      percentage: 75,
      description: "circuit pulse matrix cascade hacker loop neon",
    },
    {
      name: "Ai Cập Phồn Vinh",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010168/default.avif?g0=1755520809",
      percentage: 80,
      description: "neon circuit protocol cipher flux quantum hacker",
    },
    {
      name: "Siêu Kỳ Thú",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010169/default.avif?g0=1755520809",
      percentage: 81,
      description: "matrix circuit loop hacker flux cipher cascade",
    },
    {
      name: "Đấu Sĩ Cừ Khôi",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010171/default.avif?g0=1755520809",
      percentage: 86,
      description: "vector loop hacker protocol neon cascade",
    },
    {
      name: "Chú Heo Vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010172/default.avif?g0=1755520809",
      percentage: 76,
      description: "neon flux matrix cipher circuit",
    },
    {
      name: "Tiền Về Liền Tay",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010173/default.avif?g0=1755520809",
      percentage: 62,
      description: "flux matrix neon cipher hacker pulse circuit",
    },
    {
      name: "Chúa Tể Muôn Thú",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010174/default.avif?g0=1755520809",
      percentage: 76,
      description: "protocol circuit hacker cascade cipher flux",
    },
    {
      name: "Bài hát Giáng sinh của Yêu tinh",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010175/default.avif?g0=1755520809",
      percentage: 65,
      description: "cascade vector cipher flux matrix hacker",
    },
    {
      name: "Sự giàu có của Ngựa hoang dã",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010176/default.avif?g0=1755520809",
      percentage: 88,
      description: "cascade pulse hacker protocol loop",
    },
    {
      name: "Ba Chú rồng",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010177/default.avif?g0=1755520809",
      percentage: 91,
      description: "cascade flux protocol neon circuit quantum",
    },
    {
      name: "Ai Cập Cổ đại Cổ điển",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010179/default.avif?g0=1755520809",
      percentage: 71,
      description: "matrix protocol pulse flux neon cascade",
    },
    {
      name: "Sức lôi cuốn của Vegas",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010180/default.avif?g0=1755520809",
      percentage: 62,
      description: "flux neon pulse protocol circuit",
    },
    {
      name: "Vận mệnh của Master Chen",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010181/default.avif?g0=1755520809",
      percentage: 82,
      description: "cascade cipher circuit neon protocol",
    },
    {
      name: "Kho báu của DaVinci",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010182/default.avif?g0=1755520809",
      percentage: 84,
      description: "hacker neon cascade matrix protocol vector flux",
    },
    {
      name: "Vận may Bắc Kinh",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010183/default.avif?g0=1755520809",
      percentage: 60,
      description: "pulse matrix circuit vector loop protocol neon",
    },
    {
      name: "Bài hát Yêu tinh",
      image:
        "https://f168n.com/game_pictures/g/CL/301/3/3010184/default.avif?g0=1755520809",
      percentage: 69,
      description: "flux hacker pulse matrix cascade cipher",
    },
  ]),
  jdb: createGames("jdb", [
    {
      name: "Kho báu",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100096/default.avif?g0=1755520809",
      percentage: 92,
      description: "cascade circuit quantum protocol hacker matrix",
    },
    {
      name: "SiêuNiubi",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100091/default.avif?g0=1755520809",
      percentage: 60,
      description: "hacker pulse loop neon flux circuit cascade",
    },
    {
      name: "rồng may mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100008/default.avif?g0=1755520809",
      percentage: 65,
      description: "flux protocol cascade hacker cipher matrix loop",
    },
    {
      name: "Học giả tán tỉnh Tang",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100009/default.avif?g0=1755520809",
      percentage: 83,
      description: "neon flux pulse cipher loop cascade",
    },
    {
      name: "mặt nạ chiến thắng",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100010/default.avif?g0=1755520809",
      percentage: 68,
      description: "loop cascade pulse flux protocol matrix",
    },
    {
      name: "Ngộ Không",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100011/default.avif?g0=1755520809",
      percentage: 69,
      description: "protocol matrix loop circuit flux",
    },
    {
      name: "cuộc phiêu lưu lạc đà không bướu",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100012/default.avif?g0=1755520809",
      percentage: 93,
      description: "cascade neon protocol loop vector hacker",
    },
    {
      name: "Gấu Formosa",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100013/default.avif?g0=1755520809",
      percentage: 86,
      description: "matrix vector loop flux neon protocol cascade",
    },
    {
      name: "kho báu ánh trăng",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100016/default.avif?g0=1755520809",
      percentage: 95,
      description: "cascade pulse flux cipher circuit",
    },
    {
      name: "Năm mới",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100018/default.avif?g0=1755520809",
      percentage: 63,
      description: "protocol vector matrix flux neon hacker quantum",
    },
    {
      name: "Napoléon",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100019/default.avif?g0=1755520809",
      percentage: 88,
      description: "loop neon matrix cipher quantum pulse",
    },
    {
      name: "Tứ Bảo",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100020/default.avif?g0=1755520809",
      percentage: 62,
      description: "protocol hacker pulse neon cipher circuit matrix",
    },
    {
      name: "mở mè",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100021/default.avif?g0=1755520809",
      percentage: 62,
      description: "matrix loop flux vector hacker circuit",
    },
    {
      name: "truyện chuối",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100022/default.avif?g0=1755520809",
      percentage: 76,
      description: "matrix circuit hacker neon pulse flux",
    },
    {
      name: "mạt chược",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100023/default.avif?g0=1755520809",
      percentage: 61,
      description: "flux neon pulse matrix cascade circuit quantum",
    },
    {
      name: "Đền Olympian",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100024/default.avif?g0=1755520809",
      percentage: 95,
      description: "cipher cascade pulse protocol matrix circuit neon",
    },
    {
      name: "Người Đẹp Và Vương Quốc",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100037/default.avif?g0=1755520809",
      percentage: 92,
      description: "hacker vector cascade loop circuit",
    },
    {
      name: "Mặt nạ chiến thắng II",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100039/default.avif?g0=1755520809",
      percentage: 78,
      description: "matrix flux neon protocol cipher vector quantum",
    },
    {
      name: "mởSesameII",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100040/default.avif?g0=1755520809",
      percentage: 63,
      description: "quantum protocol loop circuit cipher matrix",
    },
    {
      name: "Tài LộcNgựa",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100042/default.avif?g0=1755520809",
      percentage: 90,
      description: "loop quantum hacker cipher circuit neon pulse",
    },
    {
      name: "XiYangYang",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100043/default.avif?g0=1755520809",
      percentage: 71,
      description: "flux vector hacker matrix neon pulse",
    },
    {
      name: "Mario cổ điển",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100044/default.avif?g0=1755520809",
      percentage: 61,
      description: "matrix loop vector circuit pulse",
    },
    {
      name: "CHÚC MỪNG NĂM MỚI",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100045/default.avif?g0=1755520809",
      percentage: 91,
      description: "cipher vector loop cascade protocol pulse neon",
    },
    {
      name: "Chim và Động vật",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100046/default.avif?g0=1755520809",
      percentage: 94,
      description: "loop circuit hacker vector cascade",
    },
    {
      name: "ông trùm bia",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100047/default.avif?g0=1755520809",
      percentage: 83,
      description: "cascade loop neon cipher circuit protocol",
    },
    {
      name: "Truyền thuyết Hoa Quốc Sơn",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100048/default.avif?g0=1755520809",
      percentage: 65,
      description: "flux pulse quantum protocol cascade",
    },
    {
      name: "siêu siêu trái cây",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100049/default.avif?g0=1755520809",
      percentage: 89,
      description: "quantum vector pulse loop cipher",
    },
    {
      name: "Vua điên Kong",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100050/default.avif?g0=1755520809",
      percentage: 95,
      description: "pulse protocol quantum neon cipher flux matrix",
    },
    {
      name: "Caisen Party",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100051/default.avif?g0=1755520809",
      percentage: 62,
      description: "circuit quantum pulse hacker vector",
    },
    {
      name: "JOGO DO BICHO",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100052/default.avif?g0=1755520809",
      percentage: 61,
      description: "quantum hacker flux vector circuit",
    },
    {
      name: "Galaxy Burst",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100053/default.avif?g0=1755520809",
      percentage: 84,
      description: "hacker flux matrix cipher loop",
    },
    {
      name: "Mines",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100054/default.avif?g0=1755520809",
      percentage: 68,
      description: "loop quantum flux protocol cascade hacker pulse",
    },
    {
      name: "Cai Shen Bingo",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100058/default.avif?g0=1755520809",
      percentage: 67,
      description: "hacker protocol vector matrix cipher pulse",
    },
    {
      name: "VàngGà TrốngXổ Số",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100059/default.avif?g0=1755520809",
      percentage: 86,
      description: "cipher vector loop quantum neon matrix",
    },
    {
      name: "Hạnh PhúcXổ Số",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100060/default.avif?g0=1755520809",
      percentage: 71,
      description: "cascade circuit quantum cipher vector neon",
    },
    {
      name: "Tỷ phú",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100066/default.avif?g0=1755520809",
      percentage: 61,
      description: "flux cascade cipher matrix neon vector",
    },
    {
      name: "chiến binh rồng",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100068/default.avif?g0=1755520809",
      percentage: 63,
      description: "quantum loop matrix circuit vector cipher flux",
    },
    {
      name: "rồng",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100069/default.avif?g0=1755520809",
      percentage: 73,
      description: "cascade hacker pulse quantum vector protocol matrix",
    },
    {
      name: "Kingsman",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100074/default.avif?g0=1755520809",
      percentage: 92,
      description: "neon loop cascade hacker pulse protocol",
    },
    {
      name: "Số bảy may mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100084/default.avif?g0=1755520809",
      percentage: 68,
      description: "cipher flux pulse neon vector protocol",
    },
    {
      name: "Phương ĐôngĐộng Vật",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100085/default.avif?g0=1755520809",
      percentage: 81,
      description: "loop cipher protocol hacker neon circuit",
    },
    {
      name: "BaKingKong",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100086/default.avif?g0=1755520809",
      percentage: 69,
      description: "circuit neon flux protocol cipher quantum",
    },
    {
      name: "ChimBên",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100088/default.avif?g0=1755520809",
      percentage: 72,
      description: "matrix cascade loop cipher flux vector",
    },
    {
      name: "GoLaiFu",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100089/default.avif?g0=1755520809",
      percentage: 60,
      description: "hacker cipher protocol cascade matrix pulse",
    },
    {
      name: "rồng thế giới",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100090/default.avif?g0=1755520809",
      percentage: 82,
      description: "loop vector neon cascade pulse quantum protocol",
    },
    {
      name: "kho báu may mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100093/default.avif?g0=1755520809",
      percentage: 91,
      description: "neon flux quantum matrix protocol loop",
    },
    {
      name: "Mjolnir",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100095/default.avif?g0=1755520809",
      percentage: 90,
      description: "protocol quantum vector cipher hacker pulse",
    },
    {
      name: "GoldenDisco",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100097/default.avif?g0=1755520809",
      percentage: 61,
      description: "loop flux pulse protocol neon",
    },
    {
      name: "Sôi NổiKingKong",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100098/default.avif?g0=1755520809",
      percentage: 81,
      description: "pulse protocol flux quantum cascade",
    },
    {
      name: "SuperNiubiDeluxe",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100099/default.avif?g0=1755520809",
      percentage: 95,
      description: "neon circuit quantum cipher pulse",
    },
    {
      name: "thợ mỏ",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100100/default.avif?g0=1755520809",
      percentage: 78,
      description: "flux cascade hacker pulse loop vector",
    },
    {
      name: "người đàn ông túi tiền",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100101/default.avif?g0=1755520809",
      percentage: 80,
      description: "cascade loop neon pulse flux hacker",
    },
    {
      name: "DoubleWilds",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100102/default.avif?g0=1755520809",
      percentage: 65,
      description: "vector cipher flux matrix circuit loop",
    },
    {
      name: "trục quay",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100104/default.avif?g0=1755520809",
      percentage: 90,
      description: "neon pulse loop quantum cipher",
    },
    {
      name: "RồngCổng",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100105/default.avif?g0=1755520809",
      percentage: 84,
      description: "flux cipher matrix protocol vector loop",
    },
    {
      name: "trục quay2",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100107/default.avif?g0=1755520809",
      percentage: 69,
      description: "neon hacker loop vector cipher matrix",
    },
    {
      name: "May MắnKim Cương",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100108/default.avif?g0=1755520809",
      percentage: 81,
      description: "quantum vector pulse circuit cascade",
    },
    {
      name: "Kông",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100109/default.avif?g0=1755520809",
      percentage: 88,
      description: "vector matrix hacker protocol pulse cascade quantum",
    },
    {
      name: "Chú voi kỳ diệu",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100112/default.avif?g0=1755520809",
      percentage: 62,
      description: "neon cascade cipher pulse hacker loop quantum",
    },
    {
      name: "MarvelousIV",
      image:
        "https://f168n.com/game_pictures/g/CL/310/3/3100113/default.avif?g0=1755520809",
      percentage: 84,
      description: "cascade loop circuit flux protocol cipher matrix",
    },
  ]),
  tp: createGames("tp", [
    {
      name: "Thành phố vàng Maya",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170052/default.avif?g0=1755520809",
      percentage: 75,
      description: "matrix flux pulse vector cipher loop neon",
    },
    {
      name: "Super King",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170276/default.avif?g0=1755520809",
      percentage: 74,
      description: "flux protocol pulse neon quantum",
    },
    {
      name: "Super Hoo Hey How",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170199/default.avif?g0=1755520809",
      percentage: 95,
      description: "circuit cipher neon vector hacker",
    },
    {
      name: "Self-draw winning 2",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170196/default.avif?g0=1755520809",
      percentage: 83,
      description: "protocol hacker flux cipher neon matrix",
    },
    {
      name: "Rồng thần tìm kho báu 1",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170126/default.avif?g0=1755520809",
      percentage: 94,
      description: "cascade neon loop quantum flux protocol matrix",
    },
    {
      name: "Rồng thần tìm kho báu 2",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170127/default.avif?g0=1755520809",
      percentage: 94,
      description: "matrix loop neon hacker pulse cascade",
    },
    {
      name: "Rồng Rồng Rồng 2",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170001/default.avif?g0=1755520809",
      percentage: 65,
      description: "pulse flux cascade protocol quantum vector",
    },
    {
      name: "Mạt Chược Đại Phát",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170004/default.avif?g0=1755520809",
      percentage: 64,
      description: "protocol circuit loop vector pulse hacker",
    },
    {
      name: "Mạt Chược Phát Tài",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170014/default.avif?g0=1755520809",
      percentage: 70,
      description: "loop vector matrix pulse quantum flux circuit",
    },
    {
      name: "Sư Tử May Mắn 7",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170016/default.avif?g0=1755520809",
      percentage: 78,
      description: "cascade flux pulse hacker protocol cipher",
    },
    {
      name: "Chép Vượt Vũ Môn 7",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170017/default.avif?g0=1755520809",
      percentage: 85,
      description: "circuit vector cascade quantum neon",
    },
    {
      name: "Kim Cương 5X 7",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170018/default.avif?g0=1755520809",
      percentage: 80,
      description: "vector circuit pulse quantum cascade matrix",
    },
    {
      name: "Tia Chớp May Mắn 7",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170019/default.avif?g0=1755520809",
      percentage: 92,
      description: "cascade loop cipher protocol circuit vector matrix",
    },
    {
      name: "Ngọn Lửa May Mắn 7",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170020/default.avif?g0=1755520809",
      percentage: 85,
      description: "flux neon quantum protocol cascade hacker",
    },
    {
      name: "Cầu Vồng May Mắn 7",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170021/default.avif?g0=1755520809",
      percentage: 73,
      description: "flux loop cascade quantum cipher neon vector",
    },
    {
      name: "Rồng Nhả Ngọc 7",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170022/default.avif?g0=1755520809",
      percentage: 70,
      description: "cascade matrix neon protocol quantum",
    },
    {
      name: "Vận May Đến 7",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170023/default.avif?g0=1755520809",
      percentage: 82,
      description: "vector pulse loop cipher matrix quantum",
    },
    {
      name: "Tiền Đầy Tay 777",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170024/default.avif?g0=1755520809",
      percentage: 93,
      description: "loop matrix circuit protocol cipher flux cascade",
    },
    {
      name: "Gấu Trúc Gom Vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170025/default.avif?g0=1755520809",
      percentage: 60,
      description: "protocol pulse vector quantum hacker",
    },
    {
      name: "Heo Nổ Hũ",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170026/default.avif?g0=1755520809",
      percentage: 87,
      description: "matrix pulse loop cascade neon",
    },
    {
      name: "Heo Rung Tiền",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170027/default.avif?g0=1755520809",
      percentage: 87,
      description: "pulse flux cascade protocol cipher matrix",
    },
    {
      name: "Thần Tài Giáng Lâm",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170029/default.avif?g0=1755520809",
      percentage: 91,
      description: "cipher cascade quantum matrix neon",
    },
    {
      name: "Kim Cương 10X 7",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170030/default.avif?g0=1755520809",
      percentage: 80,
      description: "pulse circuit cipher flux protocol",
    },
    {
      name: "Tên Lửa Cực Hạn",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170031/default.avif?g0=1755520809",
      percentage: 92,
      description: "matrix circuit neon flux cascade",
    },
    {
      name: "Muay Thái",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170032/default.avif?g0=1755520809",
      percentage: 89,
      description: "vector protocol flux cascade hacker loop neon",
    },
    {
      name: "Chọi Gà",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170033/default.avif?g0=1755520809",
      percentage: 66,
      description: "quantum matrix pulse flux vector",
    },
    {
      name: "Siêu Nổ Thưởng 7 II",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170034/default.avif?g0=1755520809",
      percentage: 60,
      description: "loop vector flux protocol matrix",
    },
    {
      name: "Tiền Vào Như Nước",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170035/default.avif?g0=1755520809",
      percentage: 95,
      description: "quantum loop flux vector matrix protocol",
    },
    {
      name: "Nữ Hoàng Ai Cập",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170036/default.avif?g0=1755520809",
      percentage: 69,
      description: "hacker vector circuit cipher flux matrix",
    },
    {
      name: "Ngôi Sao May Mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170037/default.avif?g0=1755520809",
      percentage: 82,
      description: "protocol neon flux cascade matrix pulse",
    },
    {
      name: "Tiệc Kẹo Ngọt",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170038/default.avif?g0=1755520809",
      percentage: 88,
      description: "cascade pulse quantum loop circuit",
    },
    {
      name: "Mạt Chược Phát Tài 2",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170039/default.avif?g0=1755520809",
      percentage: 81,
      description: "matrix neon cipher flux loop pulse vector",
    },
    {
      name: "Cào Trúng Thưởng",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170040/default.avif?g0=1755520809",
      percentage: 82,
      description: "cipher neon loop pulse circuit hacker",
    },
    {
      name: "Bóng bắn vui nhộn",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170041/default.avif?g0=1755520809",
      percentage: 95,
      description: "cipher neon vector protocol loop flux",
    },
    {
      name: "Kẻ Cướp Ngân Hàng",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170042/default.avif?g0=1755520809",
      percentage: 88,
      description: "matrix vector neon quantum circuit flux hacker",
    },
    {
      name: "Kim Cương 100X 7",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170043/default.avif?g0=1755520809",
      percentage: 72,
      description: "neon flux matrix loop protocol vector",
    },
    {
      name: "Sư Tử Vàng Thập Toàn",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170044/default.avif?g0=1755520809",
      percentage: 93,
      description: "matrix circuit pulse vector quantum",
    },
    {
      name: "Sư Tử Vàng Bách Phúc",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170045/default.avif?g0=1755520809",
      percentage: 66,
      description: "hacker circuit pulse neon matrix vector",
    },
    {
      name: "Thiên Đường Thú Cưng",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170046/default.avif?g0=1755520809",
      percentage: 83,
      description: "cipher protocol neon flux hacker pulse loop",
    },
    {
      name: "Kỳ Nghỉ Của Cún",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170047/default.avif?g0=1755520809",
      percentage: 82,
      description: "quantum pulse cipher loop cascade",
    },
    {
      name: "Búp Bê May Mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170048/default.avif?g0=1755520809",
      percentage: 82,
      description: "vector cipher cascade circuit protocol hacker pulse",
    },
    {
      name: "Kho báu của rồng",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170049/default.avif?g0=1755520809",
      percentage: 93,
      description: "vector circuit flux cipher loop",
    },
    {
      name: "Cua Tôm Cá",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170050/default.avif?g0=1755520809",
      percentage: 73,
      description: "neon circuit vector cascade matrix cipher",
    },
    {
      name: "Phúc Lộc Thọ",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170051/default.avif?g0=1755520809",
      percentage: 69,
      description: "matrix circuit hacker loop pulse",
    },
    {
      name: "Thần Mahjong",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170053/default.avif?g0=1755520809",
      percentage: 60,
      description: "neon vector matrix flux pulse cascade",
    },
    {
      name: "Kim cương Mogul",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170054/default.avif?g0=1755520809",
      percentage: 93,
      description: "flux pulse protocol matrix cascade",
    },
    {
      name: "Qua cổng Rồng",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170055/default.avif?g0=1755520809",
      percentage: 64,
      description: "cipher hacker circuit loop cascade matrix flux",
    },
    {
      name: "Kiếm Tiền",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170056/default.avif?g0=1755520809",
      percentage: 79,
      description: "flux hacker quantum neon circuit cipher",
    },
    {
      name: "Thế giới sư tử",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170057/default.avif?g0=1755520809",
      percentage: 66,
      description: "loop hacker quantum cipher pulse matrix circuit",
    },
    {
      name: "Kho báu siêu đẳng",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170058/default.avif?g0=1755520809",
      percentage: 87,
      description: "vector neon hacker pulse loop cascade",
    },
    {
      name: "Đền Ai Cập",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170059/default.avif?g0=1755520809",
      percentage: 83,
      description: "matrix protocol neon quantum pulse circuit cascade",
    },
    {
      name: "Caishen sắp đến",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170060/default.avif?g0=1755520809",
      percentage: 84,
      description: "vector flux pulse cascade cipher circuit hacker",
    },
    {
      name: "Kẹo Triều đại",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170061/default.avif?g0=1755520809",
      percentage: 75,
      description: "circuit cipher protocol quantum loop vector",
    },
    {
      name: "Sư Tử Giàu",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170062/default.avif?g0=1755520809",
      percentage: 67,
      description: "loop neon quantum pulse cipher",
    },
    {
      name: "Tôn Ngộ Không",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170063/default.avif?g0=1755520809",
      percentage: 68,
      description: "cascade pulse neon flux matrix circuit cipher",
    },
    {
      name: "Truy tìm kho báu",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170064/default.avif?g0=1755520809",
      percentage: 66,
      description: "vector loop pulse circuit quantum hacker",
    },
    {
      name: "5 Thiên Chúa Quái Thú",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170065/default.avif?g0=1755520809",
      percentage: 86,
      description: "loop circuit neon pulse protocol cascade",
    },
    {
      name: "Vui Mừng",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170066/default.avif?g0=1755520809",
      percentage: 74,
      description: "loop protocol vector pulse flux",
    },
    {
      name: "Ả Rập",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170067/default.avif?g0=1755520809",
      percentage: 86,
      description: "loop cascade pulse hacker protocol cipher",
    },
    {
      name: "Huyền Thoại Sói",
      image:
        "https://f168n.com/game_pictures/g/CL/117/3/1170068/default.avif?g0=1755520809",
      percentage: 66,
      description: "flux circuit protocol matrix loop",
    },
  ]),
  ygr: createGames("ygr", [
    {
      name: "Rồng Rồng Rồng 2",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700001/default.avif?g0=1755520809",
      percentage: 91,
      description: "cascade cipher loop pulse flux neon",
    },
    {
      name: "Mạt Chược Đại Phát",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700004/default.avif?g0=1755520809",
      percentage: 66,
      description: "protocol cascade vector cipher neon flux hacker",
    },
    {
      name: "Mạt Chược Phát Tài",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700016/default.avif?g0=1755520809",
      percentage: 68,
      description: "pulse flux cipher quantum matrix circuit hacker",
    },
    {
      name: "Sư Tử May Mắn 7",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700021/default.avif?g0=1755520809",
      percentage: 86,
      description: "cipher loop neon pulse flux",
    },
    {
      name: "Chép Vượt Vũ Môn 7",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700022/default.avif?g0=1755520809",
      percentage: 64,
      description: "pulse neon hacker circuit matrix quantum",
    },
    {
      name: "Kim Cương 5X 7",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700023/default.avif?g0=1755520809",
      percentage: 69,
      description: "cascade protocol pulse vector quantum loop",
    },
    {
      name: "Tia Chớp May Mắn 7",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700024/default.avif?g0=1755520809",
      percentage: 75,
      description: "quantum pulse flux cascade loop cipher hacker",
    },
    {
      name: "Ngọn Lửa May Mắn 7",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700025/default.avif?g0=1755520809",
      percentage: 65,
      description: "cascade quantum vector neon circuit",
    },
    {
      name: "Cầu Vồng May Mắn 7",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700026/default.avif?g0=1755520809",
      percentage: 62,
      description: "flux cipher cascade quantum circuit vector matrix",
    },
    {
      name: "Rồng Nhả Ngọc 7",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700027/default.avif?g0=1755520809",
      percentage: 85,
      description: "matrix circuit loop pulse protocol flux neon",
    },
    {
      name: "Vận May Đến 7",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700028/default.avif?g0=1755520809",
      percentage: 81,
      description: "pulse hacker flux cascade loop protocol",
    },
    {
      name: "Tiền Đầy Tay 777",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700029/default.avif?g0=1755520809",
      percentage: 68,
      description: "flux protocol circuit pulse vector cascade matrix",
    },
    {
      name: "Gấu Trúc Gom Vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700031/default.avif?g0=1755520809",
      percentage: 61,
      description: "cascade matrix pulse circuit flux",
    },
    {
      name: "Heo Nổ Hũ",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700032/default.avif?g0=1755520809",
      percentage: 73,
      description: "cascade protocol circuit hacker matrix",
    },
    {
      name: "Heo Rung Tiền",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700033/default.avif?g0=1755520809",
      percentage: 69,
      description: "cascade flux cipher circuit protocol",
    },
    {
      name: "Thần Tài Giáng Lâm",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700035/default.avif?g0=1755520809",
      percentage: 65,
      description: "vector hacker flux pulse neon loop circuit",
    },
    {
      name: "Kim Cương 10X 7",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700036/default.avif?g0=1755520809",
      percentage: 90,
      description: "quantum protocol cascade cipher vector hacker pulse",
    },
    {
      name: "Tên Lửa Cực Hạn",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700037/default.avif?g0=1755520809",
      percentage: 76,
      description: "vector loop circuit protocol hacker",
    },
    {
      name: "Muay Thái",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700038/default.avif?g0=1755520809",
      percentage: 79,
      description: "pulse quantum matrix cascade protocol",
    },
    {
      name: "Chọi Gà",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700039/default.avif?g0=1755520809",
      percentage: 92,
      description: "cipher circuit matrix cascade protocol neon",
    },
    {
      name: "Siêu Nổ Thưởng 7 II",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700040/default.avif?g0=1755520809",
      percentage: 95,
      description: "flux protocol quantum pulse circuit vector",
    },
    {
      name: "Tiền Vào Như Nước",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700041/default.avif?g0=1755520809",
      percentage: 81,
      description: "vector pulse loop quantum cipher neon",
    },
    {
      name: "Nữ Hoàng Ai Cập",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700042/default.avif?g0=1755520809",
      percentage: 65,
      description: "loop quantum matrix cipher flux vector pulse",
    },
    {
      name: "Ngôi Sao May Mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700043/default.avif?g0=1755520809",
      percentage: 82,
      description: "quantum protocol hacker loop circuit neon flux",
    },
    {
      name: "Tiệc Kẹo Ngọt",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700044/default.avif?g0=1755520809",
      percentage: 62,
      description: "protocol loop cascade cipher neon quantum matrix",
    },
    {
      name: "Mạt Chược Phát Tài 2",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700045/default.avif?g0=1755520809",
      percentage: 75,
      description: "protocol loop hacker neon matrix flux pulse",
    },
    {
      name: "Cào Trúng Thưởng",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700046/default.avif?g0=1755520809",
      percentage: 76,
      description: "hacker matrix quantum circuit flux pulse protocol",
    },
    {
      name: "Bóng bắn vui nhộn",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700047/default.avif?g0=1755520809",
      percentage: 79,
      description: "cascade flux cipher circuit pulse hacker",
    },
    {
      name: "Kẻ Cướp Ngân Hàng",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700048/default.avif?g0=1755520809",
      percentage: 66,
      description: "vector flux neon circuit loop pulse",
    },
    {
      name: "Kim Cương 100X 7",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700049/default.avif?g0=1755520809",
      percentage: 67,
      description: "loop flux cascade cipher hacker circuit quantum",
    },
    {
      name: "Sư Tử Vàng Thập Toàn",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700050/default.avif?g0=1755520809",
      percentage: 72,
      description: "matrix hacker vector cascade loop",
    },
    {
      name: "Sư Tử Vàng Bách Phúc",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700051/default.avif?g0=1755520809",
      percentage: 92,
      description: "vector cascade loop hacker quantum pulse",
    },
    {
      name: "Thiên Đường Thú Cưng",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700053/default.avif?g0=1755520809",
      percentage: 65,
      description: "protocol cipher hacker loop circuit neon",
    },
    {
      name: "Kỳ Nghỉ Của Cún",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700054/default.avif?g0=1755520809",
      percentage: 86,
      description: "loop protocol quantum vector matrix",
    },
    {
      name: "Búp Bê May Mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700055/default.avif?g0=1755520809",
      percentage: 65,
      description: "matrix cascade vector flux cipher neon",
    },
    {
      name: "Kho báu của rồng",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700056/default.avif?g0=1755520809",
      percentage: 80,
      description: "protocol quantum cipher cascade hacker vector loop",
    },
    {
      name: "Cua Tôm Cá",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700057/default.avif?g0=1755520809",
      percentage: 87,
      description: "flux quantum protocol cascade circuit vector hacker",
    },
    {
      name: "Phúc Lộc Thọ",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700058/default.avif?g0=1755520809",
      percentage: 89,
      description: "cascade pulse neon matrix circuit vector cipher",
    },
    {
      name: "Thành phố vàng Maya",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700062/default.avif?g0=1755520809",
      percentage: 67,
      description: "pulse neon quantum hacker loop",
    },
    {
      name: "Hoa quả và thanh BAR",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700064/default.avif?g0=1755520809",
      percentage: 92,
      description: "flux pulse neon protocol matrix",
    },
    {
      name: "Báu vật của MonteZuma",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700065/default.avif?g0=1755520809",
      percentage: 77,
      description: "cascade flux neon pulse cipher matrix",
    },
    {
      name: "Đêm của Triệu Phú",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700067/default.avif?g0=1755520809",
      percentage: 77,
      description: "matrix pulse protocol quantum loop",
    },
    {
      name: "Cà phê BONANZA",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700069/default.avif?g0=1755520809",
      percentage: 91,
      description: "neon cascade cipher circuit pulse flux",
    },
    {
      name: "Thành phố vàng Maya 2",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700071/default.avif?g0=1755520809",
      percentage: 70,
      description: "cipher hacker protocol flux quantum cascade circuit",
    },
    {
      name: "Mạo Hiểm Đền Thờ",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700072/default.avif?g0=1755520809",
      percentage: 77,
      description: "protocol matrix loop quantum pulse circuit neon",
    },
    {
      name: "Đêm Neon",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700073/default.avif?g0=1755520809",
      percentage: 94,
      description: "circuit vector cascade matrix neon cipher hacker",
    },
    {
      name: "Bounty Hải tặc",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700074/default.avif?g0=1755520809",
      percentage: 78,
      description: "quantum hacker pulse flux protocol",
    },
    {
      name: "Kẻ làm tiền",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700077/default.avif?g0=1755520809",
      percentage: 84,
      description: "cascade quantum pulse circuit flux",
    },
    {
      name: "Mèo Phát Tài",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700078/default.avif?g0=1755520809",
      percentage: 79,
      description: "loop cipher hacker matrix neon",
    },
    {
      name: "Nữ pháp sư Huyền thoại",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700079/default.avif?g0=1755520809",
      percentage: 88,
      description: "matrix loop vector protocol cipher circuit pulse",
    },
    {
      name: "Đỉnh Cao Phát Tài",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700080/default.avif?g0=1755520809",
      percentage: 63,
      description: "matrix flux pulse protocol vector neon quantum",
    },
    {
      name: "Bò Hoang Đua Tốc",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700081/default.avif?g0=1755520809",
      percentage: 71,
      description: "hacker flux pulse vector matrix",
    },
    {
      name: "Tiền Ngập Túi",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700082/default.avif?g0=1755520809",
      percentage: 62,
      description: "loop vector protocol cascade hacker",
    },
    {
      name: "Bảo Thạch Thành Roma",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700083/default.avif?g0=1755520809",
      percentage: 63,
      description: "vector hacker quantum cascade loop cipher pulse",
    },
    {
      name: "Thành phố vàng Maya 4",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700084/default.avif?g0=1755520809",
      percentage: 81,
      description: "hacker flux cipher neon vector circuit quantum",
    },
    {
      name: "G!ÀU",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700085/default.avif?g0=1755520809",
      percentage: 67,
      description: "quantum pulse matrix cascade vector",
    },
    {
      name: "Ma Dược Hoàng Kim",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700086/default.avif?g0=1755520809",
      percentage: 82,
      description: "pulse loop cipher flux hacker protocol neon",
    },
    {
      name: "GO Mèo Phát Tài",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700087/default.avif?g0=1755520809",
      percentage: 60,
      description: "loop pulse flux cipher quantum protocol",
    },
    {
      name: "Tài Lộc Dồi Dào",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700088/default.avif?g0=1755520809",
      percentage: 80,
      description: "loop quantum cipher hacker circuit",
    },
    {
      name: "Thần Tài May Mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/70/3/700089/default.avif?g0=1755520809",
      percentage: 70,
      description: "cipher cascade vector pulse circuit matrix neon",
    },
  ]),
  cq9: createGames("cq9", [
    {
      name: "Good Fortune M",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160041/default.avif?g0=1755520809",
      percentage: 87,
      description: "circuit vector matrix hacker cipher loop",
    },
    {
      name: "Nhảy cao",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160022/default.avif?g0=1755520809",
      percentage: 61,
      description: "pulse cipher cascade hacker vector protocol quantum",
    },
    {
      name: "Mê sảng",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160023/default.avif?g0=1755520809",
      percentage: 73,
      description: "loop vector matrix pulse protocol",
    },
    {
      name: "Nhảy Cao Hơn",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160024/default.avif?g0=1755520809",
      percentage: 66,
      description: "protocol vector flux loop neon matrix pulse",
    },
    {
      name: "Nhảy cao 2",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160025/default.avif?g0=1755520809",
      percentage: 61,
      description: "circuit neon hacker loop matrix",
    },
    {
      name: "Chú dơi may mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160026/default.avif?g0=1755520809",
      percentage: 79,
      description: "vector circuit hacker neon pulse protocol",
    },
    {
      name: "Bay lên",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160027/default.avif?g0=1755520809",
      percentage: 87,
      description: "neon quantum vector protocol loop",
    },
    {
      name: "Vận mệnh tốt",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160028/default.avif?g0=1755520809",
      percentage: 87,
      description: "loop quantum cascade protocol vector matrix pulse",
    },
    {
      name: "Thần chiến tranh",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160029/default.avif?g0=1755520809",
      percentage: 71,
      description: "pulse matrix hacker flux vector",
    },
    {
      name: "Thần sấm",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160030/default.avif?g0=1755520809",
      percentage: 94,
      description: "quantum matrix cipher vector hacker pulse",
    },
    {
      name: "Đêm nhạc disco",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160031/default.avif?g0=1755520809",
      percentage: 66,
      description: "hacker pulse matrix vector cipher circuit loop",
    },
    {
      name: "Di chuyển và nhảy",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160032/default.avif?g0=1755520809",
      percentage: 92,
      description: "circuit matrix protocol quantum neon flux",
    },
    {
      name: "Đêm nhạc disco M",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160033/default.avif?g0=1755520809",
      percentage: 72,
      description: "loop cascade vector protocol circuit",
    },
    {
      name: "Nhảy cao Di động",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160034/default.avif?g0=1755520809",
      percentage: 72,
      description: "flux circuit pulse loop neon quantum matrix",
    },
    {
      name: "Trò chơi Fa Cai Shen",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160035/default.avif?g0=1755520809",
      percentage: 88,
      description: "neon cipher protocol loop pulse vector quantum",
    },
    {
      name: "Thor",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160036/default.avif?g0=1755520809",
      percentage: 76,
      description: "hacker protocol quantum neon loop cascade matrix",
    },
    {
      name: "Mê sảng 2",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160037/default.avif?g0=1755520809",
      percentage: 70,
      description: "flux hacker circuit quantum vector cascade",
    },
    {
      name: "NỮ HOÀNG LỬA",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160039/default.avif?g0=1755520809",
      percentage: 83,
      description: "cipher neon matrix protocol vector quantum",
    },
    {
      name: "Sáu viên kẹo",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160040/default.avif?g0=1755520809",
      percentage: 79,
      description: "loop vector flux pulse protocol hacker matrix",
    },
    {
      name: "Trò chơi Fa Cai Shen 2",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160043/default.avif?g0=1755520809",
      percentage: 84,
      description: "loop pulse flux quantum hacker",
    },
    {
      name: "GuGuGu",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160044/default.avif?g0=1755520809",
      percentage: 94,
      description: "hacker cascade neon vector matrix quantum circuit",
    },
    {
      name: "5 Linh vật",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160045/default.avif?g0=1755520809",
      percentage: 95,
      description: "cascade circuit loop pulse quantum cipher",
    },
    {
      name: "Nữ hoàng tuyết",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160047/default.avif?g0=1755520809",
      percentage: 84,
      description: "vector pulse matrix protocol loop",
    },
    {
      name: "Thần chiến tranh M",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160048/default.avif?g0=1755520809",
      percentage: 67,
      description: "pulse quantum cipher loop protocol",
    },
    {
      name: "Thế giới nước",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160049/default.avif?g0=1755520809",
      percentage: 91,
      description: "cipher matrix protocol circuit flux quantum",
    },
    {
      name: "Chameleon",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160050/default.avif?g0=1755520809",
      percentage: 69,
      description: "matrix hacker pulse flux cipher loop protocol",
    },
    {
      name: "Thật ngọt ngào",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160051/default.avif?g0=1755520809",
      percentage: 71,
      description: "pulse neon hacker vector cascade",
    },
    {
      name: "Pháo đài hoa",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160052/default.avif?g0=1755520809",
      percentage: 91,
      description: "neon flux loop pulse quantum cipher",
    },
    {
      name: "Thần tài bay",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160054/default.avif?g0=1755520809",
      percentage: 70,
      description: "hacker cipher protocol loop flux",
    },
    {
      name: "Rave Jump mobile",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160056/default.avif?g0=1755520809",
      percentage: 85,
      description: "quantum flux cipher pulse circuit protocol neon",
    },
    {
      name: "6 bò đực",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160057/default.avif?g0=1755520809",
      percentage: 88,
      description: "vector matrix quantum neon flux cipher",
    },
    {
      name: "Thần Kronos",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160059/default.avif?g0=1755520809",
      percentage: 95,
      description: "hacker flux protocol cascade pulse circuit cipher",
    },
    {
      name: "Nhảy Cao Hơn Di động",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160062/default.avif?g0=1755520809",
      percentage: 86,
      description: "vector circuit loop pulse cascade flux",
    },
    {
      name: "Chum vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160063/default.avif?g0=1755520809",
      percentage: 86,
      description: "quantum pulse matrix vector loop circuit flux",
    },
    {
      name: "TRỨNG VÀNG",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160067/default.avif?g0=1755520809",
      percentage: 94,
      description: "pulse circuit flux neon cipher loop protocol",
    },
    {
      name: "Thần Hercules",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160068/default.avif?g0=1755520809",
      percentage: 79,
      description: "protocol neon vector flux circuit hacker",
    },
    {
      name: "Trò chơi Fa Cai Shen M",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160069/default.avif?g0=1755520809",
      percentage: 91,
      description: "cipher hacker cascade pulse flux neon",
    },
    {
      name: "Super5",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160070/default.avif?g0=1755520809",
      percentage: 61,
      description: "circuit quantum hacker protocol cascade",
    },
    {
      name: "Năm Mới Phát Tài",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160071/default.avif?g0=1755520809",
      percentage: 87,
      description: "neon vector cipher cascade loop quantum protocol",
    },
    {
      name: "Quyền anh Thái",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160073/default.avif?g0=1755520809",
      percentage: 87,
      description: "circuit pulse vector protocol hacker loop flux",
    },
    {
      name: "Fa Cai Fu Wa",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160075/default.avif?g0=1755520809",
      percentage: 94,
      description: "circuit pulse cascade matrix flux loop",
    },
    {
      name: "Shou-Xin",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160078/default.avif?g0=1755520809",
      percentage: 64,
      description: "vector matrix cipher cascade hacker",
    },
    {
      name: "Trăng sói",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160082/default.avif?g0=1755520809",
      percentage: 63,
      description: "protocol hacker loop flux pulse",
    },
    {
      name: "5 trận chiến",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160085/default.avif?g0=1755520809",
      percentage: 79,
      description: "circuit hacker loop quantum cipher pulse",
    },
    {
      name: "Nụ hôn ma cà rồng",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160086/default.avif?g0=1755520809",
      percentage: 91,
      description: "flux cascade protocol matrix cipher loop hacker",
    },
    {
      name: "Apollo",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160088/default.avif?g0=1755520809",
      percentage: 68,
      description: "hacker protocol pulse quantum neon cipher",
    },
    {
      name: "Apsaras",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160095/default.avif?g0=1755520809",
      percentage: 65,
      description: "protocol cipher flux circuit vector neon",
    },
    {
      name: "Tim rồng",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160098/default.avif?g0=1755520809",
      percentage: 81,
      description: "flux loop matrix quantum cipher hacker protocol",
    },
    {
      name: "Voi bất khả chiến bại",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160099/default.avif?g0=1755520809",
      percentage: 61,
      description: "neon protocol loop cipher quantum",
    },
    {
      name: "Quay nóng",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160101/default.avif?g0=1755520809",
      percentage: 69,
      description: "cascade neon pulse vector loop flux",
    },
    {
      name: "Pyramid Raider",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160102/default.avif?g0=1755520809",
      percentage: 61,
      description: "circuit cipher protocol quantum pulse loop vector",
    },
    {
      name: "777",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160105/default.avif?g0=1755520809",
      percentage: 93,
      description: "hacker pulse circuit cascade protocol loop vector",
    },
    {
      name: "Cuộc chiến quái thú",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160107/default.avif?g0=1755520809",
      percentage: 71,
      description: "pulse hacker neon vector cipher",
    },
    {
      name: "888",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160118/default.avif?g0=1755520809",
      percentage: 75,
      description: "cascade neon pulse loop circuit",
    },
    {
      name: "Thor 2",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160119/default.avif?g0=1755520809",
      percentage: 80,
      description: "loop circuit vector protocol flux pulse",
    },
    {
      name: "Inca Ball",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160121/default.avif?g0=1755520809",
      percentage: 75,
      description: "pulse hacker loop protocol quantum",
    },
    {
      name: "Phượng Hoàng Đỏ",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160122/default.avif?g0=1755520809",
      percentage: 67,
      description: "vector circuit protocol quantum hacker loop",
    },
    {
      name: "Đội bóng toàn ngôi sao",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160133/default.avif?g0=1755520809",
      percentage: 87,
      description: "hacker circuit cipher loop cascade matrix",
    },
    {
      name: "Tất cả vùng hoang dã",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160141/default.avif?g0=1755520809",
      percentage: 63,
      description: "cascade loop pulse flux protocol",
    },
    {
      name: "VUA THỦY TỀ",
      image:
        "https://f168n.com/game_pictures/g/CL/316/3/3160171/default.avif?g0=1755520809",
      percentage: 95,
      description: "vector hacker cipher neon cascade circuit matrix",
    },
  ]),
  ka: createGames("ka", [
    {
      name: "Giành chiến thắng bắt",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270101/default.avif?g0=1755520809",
      percentage: 92,
      description: "circuit quantum flux cipher protocol pulse vector",
    },
    {
      name: "khối ô vuông 2",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270102/default.avif?g0=1755520809",
      percentage: 85,
      description: "matrix quantum cipher hacker loop",
    },
    {
      name: "khối ô vuông",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270103/default.avif?g0=1755520809",
      percentage: 74,
      description: "cipher hacker loop protocol cascade circuit",
    },
    {
      name: "Siêu Keno",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270104/default.avif?g0=1755520809",
      percentage: 68,
      description: "hacker quantum vector cipher circuit pulse flux",
    },
    {
      name: "Tháp xung kích",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270105/default.avif?g0=1755520809",
      percentage: 74,
      description: "loop protocol cipher neon circuit",
    },
    {
      name: "Ngọc rồng",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270106/default.avif?g0=1755520809",
      percentage: 87,
      description: "matrix cascade hacker circuit neon flux pulse",
    },
    {
      name: "Siêu Video Poker",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270107/default.avif?g0=1755520809",
      percentage: 92,
      description: "neon cascade flux quantum protocol hacker",
    },
    {
      name: "bài baccarat",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270108/default.avif?g0=1755520809",
      percentage: 75,
      description: "pulse protocol loop hacker quantum flux vector",
    },
    {
      name: "Hành trình phiêu lưu của Wild Vick 2",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270109/default.avif?g0=1755520809",
      percentage: 74,
      description: "quantum pulse vector loop neon flux circuit",
    },
    {
      name: "Bữa tiệc trứng phục sinh",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270110/default.avif?g0=1755520809",
      percentage: 93,
      description: "loop quantum matrix cascade cipher circuit",
    },
    {
      name: "Phúc Thần Long",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270111/default.avif?g0=1755520809",
      percentage: 73,
      description: "neon matrix flux quantum vector pulse",
    },
    {
      name: "nhà trọ may mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270112/default.avif?g0=1755520809",
      percentage: 90,
      description: "protocol quantum flux matrix circuit loop cascade",
    },
    {
      name: "Tiền thưởng Mania",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270113/default.avif?g0=1755520809",
      percentage: 93,
      description: "cascade flux pulse hacker neon vector",
    },
    {
      name: "bát châu báu",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270114/default.avif?g0=1755520809",
      percentage: 72,
      description: "matrix cascade hacker quantum protocol cipher vector",
    },
    {
      name: "bò vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270115/default.avif?g0=1755520809",
      percentage: 69,
      description: "quantum cipher matrix vector hacker neon loop",
    },
    {
      name: "may mắn ganesha",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270116/default.avif?g0=1755520809",
      percentage: 65,
      description: "vector matrix cascade protocol circuit pulse flux",
    },
    {
      name: "may mắn88",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270117/default.avif?g0=1755520809",
      percentage: 84,
      description: "circuit protocol flux pulse matrix",
    },
    {
      name: "Vua Rồng",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270118/default.avif?g0=1755520809",
      percentage: 62,
      description: "vector matrix flux cascade pulse",
    },
    {
      name: "Cocorico",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270119/default.avif?g0=1755520809",
      percentage: 60,
      description: "neon cascade quantum cipher pulse loop",
    },
    {
      name: "bắn trúng",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270120/default.avif?g0=1755520809",
      percentage: 87,
      description: "loop protocol pulse quantum matrix",
    },
    {
      name: "quả bóng vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270121/default.avif?g0=1755520809",
      percentage: 69,
      description: "pulse circuit neon matrix hacker protocol",
    },
    {
      name: "Trái cây Joker",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270122/default.avif?g0=1755520809",
      percentage: 95,
      description: "loop matrix protocol vector circuit quantum",
    },
    {
      name: "vận mệnh pháp cai",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270123/default.avif?g0=1755520809",
      percentage: 67,
      description: "cascade vector matrix loop quantum cipher",
    },
    {
      name: "cô gái sữa",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270124/default.avif?g0=1755520809",
      percentage: 79,
      description: "circuit loop matrix cipher flux",
    },
    {
      name: "Nữ hoàng tuyết",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270125/default.avif?g0=1755520809",
      percentage: 66,
      description: "loop cipher flux quantum cascade",
    },
    {
      name: "rồng tứ phương",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270126/default.avif?g0=1755520809",
      percentage: 76,
      description: "pulse quantum loop neon hacker circuit protocol",
    },
    {
      name: "siêu cấp",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270127/default.avif?g0=1755520809",
      percentage: 65,
      description: "matrix pulse cascade hacker neon",
    },
    {
      name: "Xích Bích",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270128/default.avif?g0=1755520809",
      percentage: 87,
      description: "loop cipher protocol pulse circuit quantum",
    },
    {
      name: "Chơi kẹo nhanh",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270129/default.avif?g0=1755520809",
      percentage: 89,
      description: "flux matrix cascade loop cipher quantum",
    },
    {
      name: "nói dễ dàng",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270130/default.avif?g0=1755520809",
      percentage: 61,
      description: "vector pulse protocol loop hacker matrix cipher",
    },
    {
      name: "Hậu Nghệ",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270131/default.avif?g0=1755520809",
      percentage: 72,
      description: "pulse matrix flux cascade neon",
    },
    {
      name: "Tiến sĩ Geek",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270132/default.avif?g0=1755520809",
      percentage: 93,
      description: "neon cascade circuit protocol matrix",
    },
    {
      name: "Tiền thưởng Mania Deluxe",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270133/default.avif?g0=1755520809",
      percentage: 83,
      description: "cascade vector protocol pulse circuit hacker",
    },
    {
      name: "Vương Đại Tín",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270134/default.avif?g0=1755520809",
      percentage: 77,
      description: "hacker cipher pulse loop cascade quantum",
    },
    {
      name: "kỵ sĩ đen",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270135/default.avif?g0=1755520809",
      percentage: 95,
      description: "hacker pulse cipher protocol neon",
    },
    {
      name: "ăn nhanh",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270136/default.avif?g0=1755520809",
      percentage: 69,
      description: "neon cipher quantum protocol cascade pulse",
    },
    {
      name: "Vick hoang dã",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270137/default.avif?g0=1755520809",
      percentage: 63,
      description: "vector cascade matrix protocol hacker cipher",
    },
    {
      name: "quyền anh",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270138/default.avif?g0=1755520809",
      percentage: 68,
      description: "neon circuit hacker vector cascade",
    },
    {
      name: "Siêu tiền thưởng Mania",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270139/default.avif?g0=1755520809",
      percentage: 94,
      description: "neon quantum loop matrix cascade",
    },
    {
      name: "lực lượng bầu trời",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270140/default.avif?g0=1755520809",
      percentage: 89,
      description: "cascade flux pulse vector protocol neon hacker",
    },
    {
      name: "Mexicaliente",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270141/default.avif?g0=1755520809",
      percentage: 89,
      description: "cascade neon loop cipher pulse quantum flux",
    },
    {
      name: "nhà gương",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270142/default.avif?g0=1755520809",
      percentage: 67,
      description: "circuit quantum pulse hacker matrix vector loop",
    },
    {
      name: "khỉ cuồng",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270143/default.avif?g0=1755520809",
      percentage: 91,
      description: "flux protocol pulse loop hacker circuit matrix",
    },
    {
      name: "cá voi hoang dã",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270144/default.avif?g0=1755520809",
      percentage: 74,
      description: "neon loop flux pulse quantum protocol hacker",
    },
    {
      name: "Pied Piper",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270145/default.avif?g0=1755520809",
      percentage: 88,
      description: "pulse flux hacker matrix quantum protocol vector",
    },
    {
      name: "siêu chất nhờn",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270146/default.avif?g0=1755520809",
      percentage: 73,
      description: "protocol flux loop matrix vector",
    },
    {
      name: "Hồng Kông thập niên 60",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270147/default.avif?g0=1755520809",
      percentage: 66,
      description: "matrix loop pulse vector protocol circuit cipher",
    },
    {
      name: "Atlantide",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270148/default.avif?g0=1755520809",
      percentage: 94,
      description: "vector protocol matrix neon hacker circuit",
    },
    {
      name: "Thần Zashiki",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270149/default.avif?g0=1755520809",
      percentage: 69,
      description: "cascade neon hacker protocol cipher quantum",
    },
    {
      name: "Tiền thưởng bán hàng tự động",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270150/default.avif?g0=1755520809",
      percentage: 68,
      description: "circuit neon hacker matrix pulse flux",
    },
    {
      name: "Medusa",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270151/default.avif?g0=1755520809",
      percentage: 72,
      description: "circuit quantum cascade loop flux neon cipher",
    },
    {
      name: "Jade Power",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270152/default.avif?g0=1755520809",
      percentage: 78,
      description: "loop matrix flux neon hacker protocol",
    },
    {
      name: "Calabash Boys",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270153/default.avif?g0=1755520809",
      percentage: 76,
      description: "neon pulse hacker protocol matrix flux cipher",
    },
    {
      name: "American Burger",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270154/default.avif?g0=1755520809",
      percentage: 84,
      description: "matrix pulse vector flux protocol hacker quantum",
    },
    {
      name: "Sailor Man",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270155/default.avif?g0=1755520809",
      percentage: 65,
      description: "matrix cascade pulse flux circuit loop",
    },
    {
      name: "Owl In Forest",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270156/default.avif?g0=1755520809",
      percentage: 80,
      description: "cipher loop cascade pulse protocol vector hacker",
    },
    {
      name: "Happy Indian Chef",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270157/default.avif?g0=1755520809",
      percentage: 66,
      description: "protocol pulse matrix hacker neon circuit",
    },
    {
      name: "Love In Memory",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270158/default.avif?g0=1755520809",
      percentage: 60,
      description: "vector pulse protocol matrix circuit cipher hacker",
    },
    {
      name: "White Deer",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270159/default.avif?g0=1755520809",
      percentage: 80,
      description: "quantum flux neon cascade matrix",
    },
    {
      name: "Fu Lu Shou",
      image:
        "https://f168n.com/game_pictures/g/CL/27/3/270160/default.avif?g0=1755520809",
      percentage: 60,
      description: "loop quantum neon flux pulse",
    },
  ]),
  evoplay: createGames("evoplay", [
    {
      name: "Penalty Shoot-оut:Street",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090223/default.avif?g0=1755520809",
      percentage: 73,
      description: "neon pulse vector cipher flux quantum loop",
    },
    {
      name: "Candy Dreams",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090000/default.avif?g0=1755520809",
      percentage: 78,
      description: "matrix vector circuit cipher quantum",
    },
    {
      name: "Elven Princesses",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090001/default.avif?g0=1755520809",
      percentage: 90,
      description: "quantum protocol vector flux neon",
    },
    {
      name: "Egypt Gods",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090002/default.avif?g0=1755520809",
      percentage: 89,
      description: "cascade cipher neon pulse vector hacker",
    },
    {
      name: "Talismans of Fortune",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090003/default.avif?g0=1755520809",
      percentage: 63,
      description: "flux neon circuit hacker cipher pulse quantum",
    },
    {
      name: "Robin Hood",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090004/default.avif?g0=1755520809",
      percentage: 60,
      description: "neon hacker cipher cascade flux",
    },
    {
      name: "Chinese New Year",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090005/default.avif?g0=1755520809",
      percentage: 86,
      description: "flux cipher circuit cascade quantum matrix",
    },
    {
      name: "Indiana's Quest",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090006/default.avif?g0=1755520809",
      percentage: 90,
      description: "pulse quantum neon cascade matrix",
    },
    {
      name: "Journey to the West",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090007/default.avif?g0=1755520809",
      percentage: 66,
      description: "circuit cipher neon pulse vector",
    },
    {
      name: "The Emperor's Tomb",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090008/default.avif?g0=1755520809",
      percentage: 95,
      description: "matrix neon protocol flux quantum hacker",
    },
    {
      name: "Hot Triple Sevens",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090009/default.avif?g0=1755520809",
      percentage: 66,
      description: "matrix neon protocol hacker loop cascade vector",
    },
    {
      name: "Clash of Pirates",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090010/default.avif?g0=1755520809",
      percentage: 88,
      description: "cascade pulse protocol flux vector",
    },
    {
      name: "The Slavs",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090011/default.avif?g0=1755520809",
      percentage: 83,
      description: "hacker cascade cipher pulse circuit",
    },
    {
      name: "Basketball",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090012/default.avif?g0=1755520809",
      percentage: 74,
      description: "vector pulse loop cascade quantum hacker",
    },
    {
      name: "Red Cliff",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090013/default.avif?g0=1755520809",
      percentage: 83,
      description: "quantum flux cipher loop neon circuit cascade",
    },
    {
      name: "Epic Gladiators",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090015/default.avif?g0=1755520809",
      percentage: 78,
      description: "circuit neon loop pulse vector quantum matrix",
    },
    {
      name: "Vegas Nights",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090016/default.avif?g0=1755520809",
      percentage: 63,
      description: "pulse hacker vector flux cipher",
    },
    {
      name: "Reign Of Dragons",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090017/default.avif?g0=1755520809",
      percentage: 71,
      description: "matrix hacker loop flux quantum neon vector",
    },
    {
      name: "Dungeon Immortal Evil",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090018/default.avif?g0=1755520809",
      percentage: 87,
      description: "protocol pulse circuit matrix flux quantum hacker",
    },
    {
      name: "Fluffy Rangers",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090019/default.avif?g0=1755520809",
      percentage: 80,
      description: "loop vector cipher flux matrix quantum",
    },
    {
      name: "Battle Tanks",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090022/default.avif?g0=1755520809",
      percentage: 62,
      description: "matrix flux loop pulse neon",
    },
    {
      name: "Charming Queens",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090023/default.avif?g0=1755520809",
      percentage: 85,
      description: "flux circuit cipher matrix loop protocol pulse",
    },
    {
      name: "Ace Round",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090025/default.avif?g0=1755520809",
      percentage: 91,
      description: "vector matrix cipher neon circuit protocol",
    },
    {
      name: "Lucky Girls",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090027/default.avif?g0=1755520809",
      percentage: 79,
      description: "quantum hacker cascade protocol vector pulse",
    },
    {
      name: "Legend of Ra",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090028/default.avif?g0=1755520809",
      percentage: 73,
      description: "neon vector quantum cascade cipher matrix",
    },
    {
      name: "Jewellery store",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090031/default.avif?g0=1755520809",
      percentage: 68,
      description: "matrix circuit vector cascade loop neon pulse",
    },
    {
      name: "Fruit Burst",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090032/default.avif?g0=1755520809",
      percentage: 87,
      description: "flux neon cipher pulse cascade",
    },
    {
      name: "E.T. Lost Socks",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090035/default.avif?g0=1755520809",
      percentage: 88,
      description: "quantum neon hacker circuit pulse",
    },
    {
      name: "The Great Conflict",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090037/default.avif?g0=1755520809",
      percentage: 76,
      description: "quantum circuit loop pulse flux",
    },
    {
      name: "Naughty Girls Cabaret",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090039/default.avif?g0=1755520809",
      percentage: 64,
      description: "hacker vector circuit matrix flux",
    },
    {
      name: "Aeronauts",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090041/default.avif?g0=1755520809",
      percentage: 76,
      description: "protocol quantum loop flux hacker circuit matrix",
    },
    {
      name: "Mystery Planet",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090043/default.avif?g0=1755520809",
      percentage: 68,
      description: "neon circuit cascade hacker flux pulse cipher",
    },
    {
      name: "Nuke World",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090050/default.avif?g0=1755520809",
      percentage: 92,
      description: "neon quantum loop cascade circuit matrix",
    },
    {
      name: "Brutal Santa",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090051/default.avif?g0=1755520809",
      percentage: 70,
      description: "protocol cipher matrix flux cascade vector loop",
    },
    {
      name: "Maze: Desire for Power",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090052/default.avif?g0=1755520809",
      percentage: 74,
      description: "cipher circuit loop hacker quantum neon",
    },
    {
      name: "Book of Rest",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090053/default.avif?g0=1755520809",
      percentage: 91,
      description: "circuit neon matrix quantum hacker protocol",
    },
    {
      name: "Hungry Night",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090054/default.avif?g0=1755520809",
      percentage: 95,
      description: "neon circuit pulse cipher loop protocol hacker",
    },
    {
      name: "Season Sisters",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090055/default.avif?g0=1755520809",
      percentage: 88,
      description: "protocol circuit loop pulse flux",
    },
    {
      name: "Irish Reels",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090057/default.avif?g0=1755520809",
      percentage: 81,
      description: "hacker cascade protocol neon vector cipher pulse",
    },
    {
      name: "Rich Reels",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090058/default.avif?g0=1755520809",
      percentage: 65,
      description: "circuit cascade neon hacker cipher",
    },
    {
      name: "Rise of Horus",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090059/default.avif?g0=1755520809",
      percentage: 64,
      description: "circuit pulse cipher cascade quantum",
    },
    {
      name: "Western Reels",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090060/default.avif?g0=1755520809",
      percentage: 83,
      description: "hacker pulse neon flux matrix cipher",
    },
    {
      name: "Animal Quest",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090061/default.avif?g0=1755520809",
      percentage: 81,
      description: "pulse circuit cipher flux cascade quantum hacker",
    },
    {
      name: "Rocket Stars",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090062/default.avif?g0=1755520809",
      percentage: 90,
      description: "cascade circuit vector hacker neon matrix flux",
    },
    {
      name: "Midnight Show",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090063/default.avif?g0=1755520809",
      percentage: 94,
      description: "vector circuit cascade neon loop quantum cipher",
    },
    {
      name: "Exploding Fruits",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090064/default.avif?g0=1755520809",
      percentage: 77,
      description: "loop circuit neon hacker cascade quantum",
    },
    {
      name: "Surf Zone",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090066/default.avif?g0=1755520809",
      percentage: 66,
      description: "pulse quantum cascade protocol vector",
    },
    {
      name: "Jelly Boom",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090067/default.avif?g0=1755520809",
      percentage: 77,
      description: "cipher quantum flux circuit pulse cascade",
    },
    {
      name: "Forest Dreams",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090068/default.avif?g0=1755520809",
      percentage: 75,
      description: "matrix quantum cipher vector hacker",
    },
    {
      name: "Raccoon Tales",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090069/default.avif?g0=1755520809",
      percentage: 60,
      description: "quantum hacker pulse circuit neon flux",
    },
    {
      name: "Forgotten Fable",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090070/default.avif?g0=1755520809",
      percentage: 83,
      description: "protocol flux circuit neon matrix cipher loop",
    },
    {
      name: "Jolly Treasures",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090071/default.avif?g0=1755520809",
      percentage: 84,
      description: "pulse flux hacker protocol cascade quantum",
    },
    {
      name: "Roll The Dice",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090083/default.avif?g0=1755520809",
      percentage: 82,
      description: "cascade protocol quantum flux loop vector",
    },
    {
      name: "Scratch Match",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090084/default.avif?g0=1755520809",
      percentage: 90,
      description: "quantum flux pulse circuit hacker cascade",
    },
    {
      name: "Bomb Squad",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090085/default.avif?g0=1755520809",
      percentage: 88,
      description: "loop neon protocol hacker matrix",
    },
    {
      name: "Heads & Tails",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090086/default.avif?g0=1755520809",
      percentage: 83,
      description: "protocol flux pulse neon matrix quantum loop",
    },
    {
      name: "Magic Wheel",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090087/default.avif?g0=1755520809",
      percentage: 67,
      description: "matrix flux vector cascade hacker neon",
    },
    {
      name: "More or Less",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090088/default.avif?g0=1755520809",
      percentage: 61,
      description: "quantum neon flux cipher protocol loop",
    },
    {
      name: "Thimbles",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090090/default.avif?g0=1755520809",
      percentage: 77,
      description: "cascade hacker quantum circuit vector cipher",
    },
    {
      name: "Courier Sweeper",
      image:
        "https://f168n.com/game_pictures/g/CL/109/3/1090091/default.avif?g0=1755520809",
      percentage: 89,
      description: "pulse cascade hacker flux quantum",
    },
  ]),
  "dragoon soft": createGames("dragoon soft", [
    {
      name: "Kim cương Mogul",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183001/default.avif?g0=1755520809",
      percentage: 95,
      description: "cipher pulse neon cascade vector",
    },
    {
      name: "Qua cổng Rồng",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183002/default.avif?g0=1755520809",
      percentage: 84,
      description: "vector matrix quantum cascade loop circuit",
    },
    {
      name: "Kiếm Tiền",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183003/default.avif?g0=1755520809",
      percentage: 80,
      description: "flux cascade pulse quantum hacker circuit loop",
    },
    {
      name: "Thế giới sư tử",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183004/default.avif?g0=1755520809",
      percentage: 79,
      description: "cipher matrix flux protocol cascade",
    },
    {
      name: "Kho báu siêu đẳng",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183005/default.avif?g0=1755520809",
      percentage: 74,
      description: "protocol cipher hacker quantum matrix circuit",
    },
    {
      name: "Đền Ai Cập",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183006/default.avif?g0=1755520809",
      percentage: 82,
      description: "matrix circuit hacker pulse cipher quantum flux",
    },
    {
      name: "Caishen sắp đến",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183007/default.avif?g0=1755520809",
      percentage: 76,
      description: "cipher matrix pulse loop cascade quantum",
    },
    {
      name: "Kẹo Triều đại",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183008/default.avif?g0=1755520809",
      percentage: 81,
      description: "flux neon hacker cipher vector cascade",
    },
    {
      name: "Sư Tử Giàu",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183009/default.avif?g0=1755520809",
      percentage: 78,
      description: "circuit hacker protocol vector pulse cascade quantum",
    },
    {
      name: "Tôn Ngộ Không",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183010/default.avif?g0=1755520809",
      percentage: 86,
      description: "vector loop neon cascade hacker flux",
    },
    {
      name: "Truy tìm kho báu",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183011/default.avif?g0=1755520809",
      percentage: 88,
      description: "flux quantum cipher pulse matrix protocol loop",
    },
    {
      name: "5 Thiên Chúa Quái Thú",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183012/default.avif?g0=1755520809",
      percentage: 83,
      description: "pulse vector protocol flux cascade loop neon",
    },
    {
      name: "Vui Mừng",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183013/default.avif?g0=1755520809",
      percentage: 81,
      description: "loop quantum hacker protocol matrix cipher",
    },
    {
      name: "Ả Rập",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183014/default.avif?g0=1755520809",
      percentage: 67,
      description: "matrix flux protocol cascade loop",
    },
    {
      name: "Huyền Thoại Sói",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183015/default.avif?g0=1755520809",
      percentage: 75,
      description: "circuit flux protocol cipher neon",
    },
    {
      name: "Trái Cây Pha Lê",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183016/default.avif?g0=1755520809",
      percentage: 70,
      description: "vector cascade circuit cipher hacker quantum",
    },
    {
      name: "Golf",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183017/default.avif?g0=1755520809",
      percentage: 80,
      description: "cascade loop vector neon circuit matrix flux",
    },
    {
      name: "Chúa Tể Hổ",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183018/default.avif?g0=1755520809",
      percentage: 72,
      description: "protocol vector flux hacker neon",
    },
    {
      name: "Zeus",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183019/default.avif?g0=1755520809",
      percentage: 82,
      description: "neon circuit cipher flux protocol pulse quantum",
    },
    {
      name: "Dracula",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183020/default.avif?g0=1755520809",
      percentage: 69,
      description: "loop cipher flux neon pulse",
    },
    {
      name: "Vua hải tặc",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183021/default.avif?g0=1755520809",
      percentage: 92,
      description: "cascade loop neon circuit vector",
    },
    {
      name: "Alice",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183022/default.avif?g0=1755520809",
      percentage: 91,
      description: "protocol cipher hacker neon cascade quantum vector",
    },
    {
      name: "Người Vượn",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183023/default.avif?g0=1755520809",
      percentage: 61,
      description: "flux pulse matrix neon quantum cipher circuit",
    },
    {
      name: "Khủng Long Bạo Chúa",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183024/default.avif?g0=1755520809",
      percentage: 77,
      description: "cipher cascade loop vector neon pulse quantum",
    },
    {
      name: "Vua xiếc",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183025/default.avif?g0=1755520809",
      percentage: 65,
      description: "pulse protocol cipher flux vector matrix",
    },
    {
      name: "Biến đá thành vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183026/default.avif?g0=1755520809",
      percentage: 69,
      description: "flux matrix loop neon cascade hacker circuit",
    },
    {
      name: "Vua Maya",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183027/default.avif?g0=1755520809",
      percentage: 87,
      description: "pulse neon quantum vector cipher",
    },
    {
      name: "Bar trái cây",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183028/default.avif?g0=1755520809",
      percentage: 73,
      description: "loop hacker neon matrix circuit cascade",
    },
    {
      name: "Rồng Giàu",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183029/default.avif?g0=1755520809",
      percentage: 69,
      description: "flux hacker cipher vector protocol pulse",
    },
    {
      name: "Khỉ vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183030/default.avif?g0=1755520809",
      percentage: 63,
      description: "cascade neon hacker flux circuit cipher",
    },
    {
      name: "Phúc Thần đến",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183031/default.avif?g0=1755520809",
      percentage: 71,
      description: "flux vector protocol neon cascade circuit",
    },
    {
      name: "Hiệp sĩ gấu mèo",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183032/default.avif?g0=1755520809",
      percentage: 83,
      description: "cipher circuit quantum flux vector matrix loop",
    },
    {
      name: "Lập tức phát tài",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183033/default.avif?g0=1755520809",
      percentage: 80,
      description: "hacker quantum cascade vector matrix circuit cipher",
    },
    {
      name: "777",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183034/default.avif?g0=1755520809",
      percentage: 68,
      description: "neon cipher flux pulse cascade loop",
    },
    {
      name: "Hầu Ca gấp 3 lần",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183035/default.avif?g0=1755520809",
      percentage: 67,
      description: "neon cascade pulse loop quantum vector hacker",
    },
    {
      name: "Triệu Vân vô song",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183036/default.avif?g0=1755520809",
      percentage: 60,
      description: "loop matrix circuit hacker quantum",
    },
    {
      name: "Phượng Hoàng lửa",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183037/default.avif?g0=1755520809",
      percentage: 67,
      description: "protocol loop cascade circuit matrix neon",
    },
    {
      name: "Lữ Cơ vô song",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183038/default.avif?g0=1755520809",
      percentage: 71,
      description: "cipher quantum circuit loop matrix cascade",
    },
    {
      name: "Đảm bảo phát tài",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183039/default.avif?g0=1755520809",
      percentage: 76,
      description: "hacker cascade matrix neon quantum vector",
    },
    {
      name: "Rất nhiều cô gái",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183040/default.avif?g0=1755520809",
      percentage: 95,
      description: "cipher circuit matrix cascade neon",
    },
    {
      name: "Nhiều cô gái hơn",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183041/default.avif?g0=1755520809",
      percentage: 86,
      description: "vector quantum protocol pulse matrix neon",
    },
    {
      name: "Vọng Thần Tài",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183042/default.avif?g0=1755520809",
      percentage: 80,
      description: "circuit vector hacker cipher protocol",
    },
    {
      name: "Cho mèo tiền vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183043/default.avif?g0=1755520809",
      percentage: 60,
      description: "cascade circuit protocol pulse loop",
    },
    {
      name: "Thiên Ngoại Phi Tiên",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183044/default.avif?g0=1755520809",
      percentage: 92,
      description: "circuit flux quantum protocol hacker loop cascade",
    },
    {
      name: "Chuột Phát Tài",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183045/default.avif?g0=1755520809",
      percentage: 74,
      description: "matrix flux circuit neon loop",
    },
    {
      name: "Cô Đầu Bếp Nhỏ",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183046/default.avif?g0=1755520809",
      percentage: 60,
      description: "cipher flux circuit cascade matrix hacker",
    },
    {
      name: "Quặng Báu",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183047/default.avif?g0=1755520809",
      percentage: 67,
      description: "neon cipher loop circuit pulse vector",
    },
    {
      name: "Bar Đá Hoa Quả",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183048/default.avif?g0=1755520809",
      percentage: 85,
      description: "loop cascade quantum protocol flux cipher",
    },
    {
      name: "Mắt Vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183049/default.avif?g0=1755520809",
      percentage: 81,
      description: "flux loop vector protocol cascade",
    },
    {
      name: "Gà Bom Tấn",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183050/default.avif?g0=1755520809",
      percentage: 72,
      description: "circuit hacker flux cipher pulse protocol neon",
    },
    {
      name: "Nông Trại Gia Đình",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183051/default.avif?g0=1755520809",
      percentage: 84,
      description: "cascade neon hacker protocol cipher circuit quantum",
    },
    {
      name: "Đế Chế La Mã",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183052/default.avif?g0=1755520809",
      percentage: 90,
      description: "hacker circuit matrix loop flux cascade",
    },
    {
      name: "Kim Cương Lớn",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183053/default.avif?g0=1755520809",
      percentage: 67,
      description: "hacker protocol pulse flux vector",
    },
    {
      name: "Cú Đấm Thép",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183054/default.avif?g0=1755520809",
      percentage: 95,
      description: "quantum vector hacker flux cipher loop matrix",
    },
    {
      name: "Vương Triều Ai Cập",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183055/default.avif?g0=1755520809",
      percentage: 79,
      description: "cascade cipher quantum pulse circuit",
    },
    {
      name: "Kho Báu Rồng",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183056/default.avif?g0=1755520809",
      percentage: 66,
      description: "cipher vector protocol cascade matrix",
    },
    {
      name: "Bạn Sẽ Ù",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183057/default.avif?g0=1755520809",
      percentage: 74,
      description: "vector neon matrix cipher flux hacker",
    },
    {
      name: "Con Bò Giàu Có",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183059/default.avif?g0=1755520809",
      percentage: 65,
      description: "loop protocol quantum hacker flux neon vector",
    },
    {
      name: "Kim Cương Bảy Màu",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183060/default.avif?g0=1755520809",
      percentage: 84,
      description: "neon circuit cipher cascade pulse quantum",
    },
    {
      name: "Phát Lì Xì Cho Mèo",
      image:
        "https://f168n.com/game_pictures/g/CL/118/3/1183061/default.avif?g0=1755520809",
      percentage: 74,
      description: "protocol cipher cascade quantum neon flux pulse",
    },
  ]),
  playstart: createGames("playstart", [
    {
      name: "Võ Mỵ Nương",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340001/default.avif?g0=1755520809",
      percentage: 88,
      description: "protocol pulse cipher neon circuit",
    },
    {
      name: "Phu Nhân Caroline",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340009/default.avif?g0=1755520809",
      percentage: 70,
      description: "circuit quantum protocol loop cascade pulse hacker",
    },
    {
      name: "Đặc Vụ Giỏi Giang",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340015/default.avif?g0=1755520809",
      percentage: 91,
      description: "protocol matrix pulse cascade quantum circuit",
    },
    {
      name: "Chúc Mừng Phát Tài",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340016/default.avif?g0=1755520809",
      percentage: 61,
      description: "flux neon cipher vector protocol",
    },
    {
      name: "Thiên Tử",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340019/default.avif?g0=1755520809",
      percentage: 81,
      description: "pulse cipher cascade hacker neon protocol matrix",
    },
    {
      name: "Khỉ Fa Fa",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340024/default.avif?g0=1755520809",
      percentage: 65,
      description: "vector flux protocol cascade quantum loop pulse",
    },
    {
      name: "777",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340025/default.avif?g0=1755520809",
      percentage: 61,
      description: "neon quantum loop pulse protocol",
    },
    {
      name: "Song Hỷ",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340026/default.avif?g0=1755520809",
      percentage: 78,
      description: "vector neon flux quantum pulse protocol cascade",
    },
    {
      name: "Nữ Thần Athena",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340028/default.avif?g0=1755520809",
      percentage: 65,
      description: "quantum neon hacker cipher matrix vector",
    },
    {
      name: "Vương Quốc Vinh Quang",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340029/default.avif?g0=1755520809",
      percentage: 79,
      description: "cascade vector protocol circuit hacker matrix quantum",
    },
    {
      name: "Đại Phú Quý",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340033/default.avif?g0=1755520809",
      percentage: 91,
      description: "neon hacker cascade protocol vector circuit",
    },
    {
      name: "Người Sói",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340035/default.avif?g0=1755520809",
      percentage: 80,
      description: "neon matrix flux vector cascade",
    },
    {
      name: "Biến Diện",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340038/default.avif?g0=1755520809",
      percentage: 93,
      description: "circuit cascade hacker matrix cipher loop pulse",
    },
    {
      name: "Gà Vàng Báo Hỷ",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340044/default.avif?g0=1755520809",
      percentage: 75,
      description: "vector flux quantum neon hacker cascade",
    },
    {
      name: "Vua Voi",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340047/default.avif?g0=1755520809",
      percentage: 76,
      description: "vector pulse neon matrix loop",
    },
    {
      name: "Ngày Hội Hóa Lộ Quỷ",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340051/default.avif?g0=1755520809",
      percentage: 76,
      description: "vector flux quantum cascade circuit hacker",
    },
    {
      name: "Hoa Nở Phú Quý",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340054/default.avif?g0=1755520809",
      percentage: 91,
      description: "quantum cascade circuit hacker vector",
    },
    {
      name: "Ma Cà Rồng",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340059/default.avif?g0=1755520809",
      percentage: 69,
      description: "hacker quantum vector cascade neon cipher",
    },
    {
      name: "Giàu Có Siêu Hạng",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340065/default.avif?g0=1755520809",
      percentage: 60,
      description: "neon quantum protocol cipher circuit",
    },
    {
      name: "Tết Đoan Ngọ",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340067/default.avif?g0=1755520809",
      percentage: 77,
      description: "loop protocol vector cascade pulse cipher quantum",
    },
    {
      name: "Luyện Đơn",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340070/default.avif?g0=1755520809",
      percentage: 83,
      description: "hacker cascade protocol circuit vector flux neon",
    },
    {
      name: "Lễ Hội Trăng Rằm",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340073/default.avif?g0=1755520809",
      percentage: 86,
      description: "flux cascade circuit neon pulse quantum protocol",
    },
    {
      name: "Chiêu Tài Meo Meo",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340079/default.avif?g0=1755520809",
      percentage: 95,
      description: "loop protocol circuit quantum neon",
    },
    {
      name: "Hoàng Thượng Cát Tường",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340083/default.avif?g0=1755520809",
      percentage: 68,
      description: "circuit pulse hacker loop neon protocol vector",
    },
    {
      name: "Tiếng Hú Sói Bắc Cực",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340085/default.avif?g0=1755520809",
      percentage: 90,
      description: "cascade hacker loop flux cipher quantum protocol",
    },
    {
      name: "Tết Noel",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340086/default.avif?g0=1755520809",
      percentage: 67,
      description: "matrix quantum flux circuit loop pulse",
    },
    {
      name: "Siêu Năng Lực",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340091/default.avif?g0=1755520809",
      percentage: 83,
      description: "neon quantum loop protocol matrix",
    },
    {
      name: "Ngội Mộ Báu",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340092/default.avif?g0=1755520809",
      percentage: 84,
      description: "pulse loop circuit hacker quantum protocol",
    },
    {
      name: "Ngọt Ngào",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340093/default.avif?g0=1755520809",
      percentage: 95,
      description: "loop quantum flux cipher matrix pulse neon",
    },
    {
      name: "PS Thành Phố Không Đêm",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340094/default.avif?g0=1755520809",
      percentage: 61,
      description: "circuit flux protocol cipher hacker cascade",
    },
    {
      name: "Anh Hùng Mạt Chược",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340095/default.avif?g0=1755520809",
      percentage: 76,
      description: "vector pulse matrix protocol quantum",
    },
    {
      name: "Bò Chuyển Càn Khôn",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340096/default.avif?g0=1755520809",
      percentage: 87,
      description: "matrix protocol pulse cascade circuit",
    },
    {
      name: "Thử Thách Lớn・Lịch Mayan",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340099/default.avif?g0=1755520809",
      percentage: 77,
      description: "cipher hacker loop quantum vector",
    },
    {
      name: "Truyền Kỳ Zuma",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340100/default.avif?g0=1755520809",
      percentage: 79,
      description: "circuit hacker matrix vector pulse loop",
    },
    {
      name: "Thử Thách Lớn・Phúc Lộc Thọ Hỷ",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340101/default.avif?g0=1755520809",
      percentage: 67,
      description: "cascade circuit quantum pulse loop",
    },
    {
      name: "Tuần Vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340102/default.avif?g0=1755520809",
      percentage: 73,
      description: "flux protocol cascade pulse hacker circuit quantum",
    },
    {
      name: "Công Phu",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340104/default.avif?g0=1755520809",
      percentage: 83,
      description: "hacker cascade cipher loop protocol quantum pulse",
    },
    {
      name: "Thử Thách Lớn・Con Heo Vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340105/default.avif?g0=1755520809",
      percentage: 66,
      description: "quantum vector cascade circuit pulse hacker flux",
    },
    {
      name: "Võ Thuật Thủy Mạc",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340106/default.avif?g0=1755520809",
      percentage: 63,
      description: "circuit hacker cipher pulse vector neon quantum",
    },
    {
      name: "Siêu Bom",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340107/default.avif?g0=1755520809",
      percentage: 95,
      description: "vector hacker flux cascade quantum",
    },
    {
      name: "Chuột Vàng Nghênh Thần Tài",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340108/default.avif?g0=1755520809",
      percentage: 61,
      description: "vector flux quantum cascade hacker cipher",
    },
    {
      name: "Bậc Thầy Haha",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340110/default.avif?g0=1755520809",
      percentage: 91,
      description: "circuit flux vector protocol hacker matrix",
    },
    {
      name: "Đại Phú Quý 888",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340111/default.avif?g0=1755520809",
      percentage: 71,
      description: "vector pulse protocol hacker circuit flux",
    },
    {
      name: "Siêu Thắng",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340112/default.avif?g0=1755520809",
      percentage: 81,
      description: "flux protocol loop pulse vector cascade hacker",
    },
    {
      name: "Cá Tôm Cua",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340114/default.avif?g0=1755520809",
      percentage: 76,
      description: "cascade protocol quantum hacker vector flux pulse",
    },
    {
      name: "Mạt Chược Fa Fa Fa",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340115/default.avif?g0=1755520809",
      percentage: 87,
      description: "flux vector protocol pulse loop cascade hacker",
    },
    {
      name: "Câu Lạc Bộ Vũ Công 2",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340116/default.avif?g0=1755520809",
      percentage: 60,
      description: "cascade flux neon vector loop",
    },
    {
      name: "Lá Bài May Mắn 2",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340119/default.avif?g0=1755520809",
      percentage: 76,
      description: "vector pulse cipher circuit loop",
    },
    {
      name: "Zongzi Vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340123/default.avif?g0=1755520809",
      percentage: 77,
      description: "pulse protocol neon loop matrix",
    },
    {
      name: "Điêu Thuyền Phát Tài",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340124/default.avif?g0=1755520809",
      percentage: 86,
      description: "matrix neon pulse quantum circuit loop",
    },
    {
      name: "Tiền Thưởng Siêu Cấp",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340127/default.avif?g0=1755520809",
      percentage: 74,
      description: "pulse flux circuit matrix loop cascade quantum",
    },
    {
      name: "Kim Ngọc Mãn Đường",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340129/default.avif?g0=1755520809",
      percentage: 64,
      description: "matrix cascade protocol hacker circuit loop",
    },
    {
      name: "Đông Nam Á Huyền Ảo",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340131/default.avif?g0=1755520809",
      percentage: 62,
      description: "protocol quantum neon cascade cipher loop vector",
    },
    {
      name: "Phong Cuồng 777",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340132/default.avif?g0=1755520809",
      percentage: 64,
      description: "loop cipher vector protocol circuit cascade hacker",
    },
    {
      name: "COIN MANIAC",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340133/default.avif?g0=1755520809",
      percentage: 80,
      description: "cipher cascade vector protocol hacker matrix",
    },
    {
      name: "Mua tính năng・Con Heo Vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340135/default.avif?g0=1755520809",
      percentage: 79,
      description: "cascade cipher vector quantum hacker flux",
    },
    {
      name: "FEATURE BUY・Xe Hỏa Tốc Giáng Sinh",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340136/default.avif?g0=1755520809",
      percentage: 75,
      description: "pulse circuit flux loop matrix cipher",
    },
    {
      name: "Mua tính năng・Siêu Năng Lực",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/340137/default.avif?g0=1755520809",
      percentage: 77,
      description: "vector hacker neon cipher circuit quantum",
    },
    {
      name: "Cá Chép Tìm Báu Vật",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/342000/default.avif?g0=1755520809",
      percentage: 73,
      description: "hacker loop cipher protocol quantum neon",
    },
    {
      name: "Chuyển Vận May Mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/34/3/342001/default.avif?g0=1755520809",
      percentage: 75,
      description: "cascade matrix quantum flux hacker pulse",
    },
  ]),
  spadegaming: createGames("spadegaming", [
    {
      name: "Đội trưởng Golds Fortune",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450020/default.avif?g0=1755520809",
      percentage: 65,
      description: "cipher flux cascade quantum vector protocol",
    },
    {
      name: "Hành trình đến nơi hoang dã",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450021/default.avif?g0=1755520809",
      percentage: 84,
      description: "circuit quantum flux protocol matrix",
    },
    {
      name: "Trái cây Mania",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450022/default.avif?g0=1755520809",
      percentage: 61,
      description: "loop circuit quantum vector hacker cascade protocol",
    },
    {
      name: "Con báo vàng Maxway",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450023/default.avif?g0=1755520809",
      percentage: 94,
      description: "quantum neon circuit pulse loop protocol matrix",
    },
    {
      name: "Khám phá vũ trụ",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450024/default.avif?g0=1755520809",
      percentage: 77,
      description: "neon cascade pulse loop flux",
    },
    {
      name: "caishen",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450025/default.avif?g0=1755520809",
      percentage: 68,
      description: "protocol vector pulse hacker cipher flux",
    },
    {
      name: "Fiery Sevens độc quyền",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450026/default.avif?g0=1755520809",
      percentage: 89,
      description: "neon pulse flux cascade hacker matrix",
    },
    {
      name: "Koi may mắn độc quyền",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450027/default.avif?g0=1755520809",
      percentage: 62,
      description: "flux vector loop protocol cascade",
    },
    {
      name: "kho báu của joker độc quyền",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450028/default.avif?g0=1755520809",
      percentage: 89,
      description: "loop flux protocol cascade cipher hacker pulse",
    },
    {
      name: "múa hổ",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450029/default.avif?g0=1755520809",
      percentage: 79,
      description: "pulse protocol cipher loop vector",
    },
    {
      name: "Nhà hoàng gia",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450030/default.avif?g0=1755520809",
      percentage: 66,
      description: "matrix cascade cipher protocol loop",
    },
    {
      name: "Vegas quyến rũ",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450031/default.avif?g0=1755520809",
      percentage: 81,
      description: "quantum protocol pulse loop matrix",
    },
    {
      name: "Rô-ma",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450032/default.avif?g0=1755520809",
      percentage: 80,
      description: "pulse neon protocol matrix vector",
    },
    {
      name: "kẹo kẹo",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450033/default.avif?g0=1755520809",
      percentage: 85,
      description: "protocol matrix cipher loop cascade neon circuit",
    },
    {
      name: "cao bồi đào vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450034/default.avif?g0=1755520809",
      percentage: 91,
      description: "cipher vector protocol quantum hacker",
    },
    {
      name: "Chiến thắng ướt át hoang dã",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450035/default.avif?g0=1755520809",
      percentage: 94,
      description: "matrix cipher circuit hacker protocol vector",
    },
    {
      name: "Hoàng gia Katt",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450036/default.avif?g0=1755520809",
      percentage: 94,
      description: "loop cascade protocol flux neon circuit pulse",
    },
    {
      name: "Caishen giàu có",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450037/default.avif?g0=1755520809",
      percentage: 83,
      description: "vector flux protocol pulse cipher",
    },
    {
      name: "Võ sĩ Muay Thái",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450038/default.avif?g0=1755520809",
      percentage: 78,
      description: "vector cascade flux quantum neon",
    },
    {
      name: "Cách chơi Poker",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450039/default.avif?g0=1755520809",
      percentage: 90,
      description: "vector pulse matrix cipher quantum loop",
    },
    {
      name: "thần tượng tình yêu",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450041/default.avif?g0=1755520809",
      percentage: 69,
      description: "pulse circuit matrix quantum vector protocol",
    },
    {
      name: "Mèo thần kỳ",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450042/default.avif?g0=1755520809",
      percentage: 92,
      description: "neon vector hacker cascade flux protocol",
    },
    {
      name: "Đường Bonanza",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450043/default.avif?g0=1755520809",
      percentage: 75,
      description: "neon cipher circuit loop pulse vector",
    },
    {
      name: "Nhiệm vụ Hugon",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450045/default.avif?g0=1755520809",
      percentage: 73,
      description: "neon loop flux matrix vector",
    },
    {
      name: "Sự trỗi dậy của người sói",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450048/default.avif?g0=1755520809",
      percentage: 73,
      description: "pulse neon loop vector cipher hacker protocol",
    },
    {
      name: "đá quý của người Maya",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450049/default.avif?g0=1755520809",
      percentage: 75,
      description: "loop matrix pulse neon circuit cascade quantum",
    },
    {
      name: "Máy bay ném bom điên",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450050/default.avif?g0=1755520809",
      percentage: 93,
      description: "neon circuit cascade cipher matrix",
    },
    {
      name: "Sevens bốc lửa",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450051/default.avif?g0=1755520809",
      percentage: 93,
      description: "hacker neon protocol loop cipher",
    },
    {
      name: "Mega 7",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450052/default.avif?g0=1755520809",
      percentage: 94,
      description: "cascade cipher protocol pulse matrix flux neon",
    },
    {
      name: "Kho báu của Joker",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450053/default.avif?g0=1755520809",
      percentage: 70,
      description: "neon cipher circuit quantum matrix loop vector",
    },
    {
      name: "ngọn lửa đôi",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450054/default.avif?g0=1755520809",
      percentage: 74,
      description: "matrix cascade pulse cipher protocol",
    },
    {
      name: "Cuốn sách thần thoại",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450056/default.avif?g0=1755520809",
      percentage: 74,
      description: "circuit loop pulse vector protocol",
    },
    {
      name: "chuột tiền",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450057/default.avif?g0=1755520809",
      percentage: 83,
      description: "quantum hacker loop pulse protocol",
    },
    {
      name: "888",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450059/default.avif?g0=1755520809",
      percentage: 82,
      description: "neon hacker loop cipher pulse",
    },
    {
      name: "Ba ngôi sao may mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450060/default.avif?g0=1755520809",
      percentage: 72,
      description: "pulse flux hacker cipher matrix loop vector",
    },
    {
      name: "anh hùng",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450061/default.avif?g0=1755520809",
      percentage: 87,
      description: "cascade quantum circuit vector neon protocol",
    },
    {
      name: "tiệm bánh ngọt",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450062/default.avif?g0=1755520809",
      percentage: 79,
      description: "quantum circuit loop cipher vector hacker",
    },
    {
      name: "cơn sốt khiêu vũ",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450063/default.avif?g0=1755520809",
      percentage: 89,
      description: "flux neon pulse protocol vector hacker loop",
    },
    {
      name: "đèn thần",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450064/default.avif?g0=1755520809",
      percentage: 82,
      description: "vector protocol flux neon cipher matrix cascade",
    },
    {
      name: "Ba gấu trúc",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450065/default.avif?g0=1755520809",
      percentage: 88,
      description: "pulse quantum cascade hacker circuit protocol",
    },
    {
      name: "báo vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450066/default.avif?g0=1755520809",
      percentage: 91,
      description: "loop protocol pulse matrix vector neon",
    },
    {
      name: "Ông Chu Tycoon",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450067/default.avif?g0=1755520809",
      percentage: 72,
      description: "neon hacker loop cascade cipher",
    },
    {
      name: "vương quốc anh em",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450068/default.avif?g0=1755520809",
      percentage: 89,
      description: "cipher quantum protocol hacker pulse",
    },
    {
      name: "Thần thịnh vượng",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450069/default.avif?g0=1755520809",
      percentage: 88,
      description: "protocol vector flux cipher cascade pulse",
    },
    {
      name: "kẹo pop",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450070/default.avif?g0=1755520809",
      percentage: 83,
      description: "loop neon vector pulse hacker",
    },
    {
      name: "FaFaFa2",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450072/default.avif?g0=1755520809",
      percentage: 83,
      description: "protocol quantum cipher loop pulse matrix",
    },
    {
      name: "Vương công chúa",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450074/default.avif?g0=1755520809",
      percentage: 60,
      description: "quantum flux matrix hacker pulse loop",
    },
    {
      name: "Thịnh vượng",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450075/default.avif?g0=1755520809",
      percentage: 88,
      description: "pulse neon matrix quantum flux cipher",
    },
    {
      name: "Mối tình đầu",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450076/default.avif?g0=1755520809",
      percentage: 81,
      description: "flux matrix quantum neon protocol hacker",
    },
    {
      name: "khỉ vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450077/default.avif?g0=1755520809",
      percentage: 86,
      description: "cipher hacker protocol loop matrix cascade flux",
    },
    {
      name: "Vua rừng",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450078/default.avif?g0=1755520809",
      percentage: 71,
      description: "hacker cipher flux loop protocol circuit",
    },
    {
      name: "chiến binh hổ",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450082/default.avif?g0=1755520809",
      percentage: 78,
      description: "neon protocol pulse matrix cascade cipher",
    },
    {
      name: "ZEUS",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450084/default.avif?g0=1755520809",
      percentage: 89,
      description: "circuit loop hacker quantum protocol vector matrix",
    },
    {
      name: "Hồ Ừ Khỉ",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450085/default.avif?g0=1755520809",
      percentage: 94,
      description: "cascade neon pulse flux circuit matrix hacker",
    },
    {
      name: "gà vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450086/default.avif?g0=1755520809",
      percentage: 81,
      description: "quantum cascade vector circuit loop protocol pulse",
    },
    {
      name: "5 Tài Lộc SA",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450087/default.avif?g0=1755520809",
      percentage: 91,
      description: "circuit pulse cipher quantum flux loop neon",
    },
    {
      name: "Thịnh vượng lớn SA",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450088/default.avif?g0=1755520809",
      percentage: 61,
      description: "cascade flux circuit protocol matrix",
    },
    {
      name: "Rồng Vàng SA",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450089/default.avif?g0=1755520809",
      percentage: 88,
      description: "cascade circuit matrix quantum neon protocol hacker",
    },
    {
      name: "Những ngôi sao tuyệt vời SA",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450091/default.avif?g0=1755520809",
      percentage: 63,
      description: "protocol pulse loop quantum neon",
    },
    {
      name: "Ai-xơ-len SA",
      image:
        "https://f168n.com/game_pictures/g/CL/45/3/450092/default.avif?g0=1755520809",
      percentage: 73,
      description: "neon hacker protocol matrix quantum flux",
    },
  ]),
  yellowbat: createGames("yellowbat", [
    {
      name: "DragoNova",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280001/default.avif?g0=1755520809",
      percentage: 84,
      description: "matrix cipher cascade neon quantum circuit loop",
    },
    {
      name: "PowerFortune",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280002/default.avif?g0=1755520809",
      percentage: 70,
      description: "cascade cipher quantum hacker neon protocol",
    },
    {
      name: "PowerLion",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280003/default.avif?g0=1755520809",
      percentage: 60,
      description: "circuit cascade matrix pulse quantum vector",
    },
    {
      name: "PowerMask",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280004/default.avif?g0=1755520809",
      percentage: 71,
      description: "vector flux cipher quantum cascade loop",
    },
    {
      name: "FortuneTreasure",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280005/default.avif?g0=1755520809",
      percentage: 77,
      description: "cascade cipher protocol flux neon circuit",
    },
    {
      name: "MoneyHorse",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280006/default.avif?g0=1755520809",
      percentage: 80,
      description: "pulse vector quantum neon cipher flux",
    },
    {
      name: "FaFaDragon",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280007/default.avif?g0=1755520809",
      percentage: 76,
      description: "neon cascade vector flux hacker pulse matrix",
    },
    {
      name: "MagicLamp",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280008/default.avif?g0=1755520809",
      percentage: 70,
      description: "matrix cipher neon flux circuit",
    },
    {
      name: "Gladiator",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280009/default.avif?g0=1755520809",
      percentage: 61,
      description: "protocol flux quantum matrix circuit",
    },
    {
      name: "LuckyStar",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280010/default.avif?g0=1755520809",
      percentage: 84,
      description: "cipher flux circuit cascade hacker",
    },
    {
      name: "Rolling7",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280011/default.avif?g0=1755520809",
      percentage: 90,
      description: "vector flux protocol circuit quantum neon",
    },
    {
      name: "ThorFortune",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280012/default.avif?g0=1755520809",
      percentage: 60,
      description: "protocol pulse circuit cascade hacker",
    },
    {
      name: "FancyEgypt",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280013/default.avif?g0=1755520809",
      percentage: 68,
      description: "matrix hacker pulse cipher circuit neon flux",
    },
    {
      name: "FortuneCat",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280014/default.avif?g0=1755520809",
      percentage: 92,
      description: "matrix flux hacker protocol cipher pulse loop",
    },
    {
      name: "CasinoFantasy",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280015/default.avif?g0=1755520809",
      percentage: 89,
      description: "cipher pulse quantum vector circuit protocol",
    },
    {
      name: "GoldenBunny",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280016/default.avif?g0=1755520809",
      percentage: 86,
      description: "circuit flux quantum vector neon",
    },
    {
      name: "KingArthurGold",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280017/default.avif?g0=1755520809",
      percentage: 70,
      description: "cascade protocol quantum cipher flux vector neon",
    },
    {
      name: "Boom Boom Marmot",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280018/default.avif?g0=1755520809",
      percentage: 72,
      description: "circuit neon quantum hacker cipher",
    },
    {
      name: "Golden Aztec",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280019/default.avif?g0=1755520809",
      percentage: 61,
      description: "hacker cascade protocol neon vector",
    },
    {
      name: "Rolling Fortune",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280020/default.avif?g0=1755520809",
      percentage: 70,
      description: "hacker neon pulse vector loop matrix quantum",
    },
    {
      name: "WinCaiShen",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280022/default.avif?g0=1755520809",
      percentage: 74,
      description: "pulse matrix circuit cascade cipher neon",
    },
    {
      name: "OpenSesame",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280023/default.avif?g0=1755520809",
      percentage: 60,
      description: "matrix circuit protocol vector quantum hacker",
    },
    {
      name: "BingoBingo",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280024/default.avif?g0=1755520809",
      percentage: 84,
      description: "circuit loop cipher matrix pulse neon hacker",
    },
    {
      name: "Atlantis",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280025/default.avif?g0=1755520809",
      percentage: 91,
      description: "circuit quantum loop cipher cascade protocol matrix",
    },
    {
      name: "BingoBonanza",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280026/default.avif?g0=1755520809",
      percentage: 72,
      description: "cipher protocol circuit hacker flux",
    },
    {
      name: "BeastyBingo",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280027/default.avif?g0=1755520809",
      percentage: 84,
      description: "circuit cipher vector protocol pulse loop",
    },
    {
      name: "MoneyBingo",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280028/default.avif?g0=1755520809",
      percentage: 72,
      description: "matrix circuit protocol loop cascade quantum hacker",
    },
    {
      name: "HeatBingo",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280029/default.avif?g0=1755520809",
      percentage: 92,
      description: "neon loop hacker cipher vector",
    },
    {
      name: "LightningBingo",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280030/default.avif?g0=1755520809",
      percentage: 87,
      description: "vector circuit loop flux pulse hacker quantum",
    },
    {
      name: "Mermaid Slingo",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280031/default.avif?g0=1755520809",
      percentage: 80,
      description: "hacker quantum neon matrix protocol",
    },
    {
      name: "Royal Ace",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280032/default.avif?g0=1755520809",
      percentage: 68,
      description: "loop quantum protocol matrix cascade flux",
    },
    {
      name: "Golden Aztec Mega",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280033/default.avif?g0=1755520809",
      percentage: 88,
      description: "neon flux quantum circuit hacker loop",
    },
    {
      name: "Super Egypt",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280034/default.avif?g0=1755520809",
      percentage: 60,
      description: "circuit cascade loop protocol matrix quantum flux",
    },
    {
      name: "Crazy Money",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280041/default.avif?g0=1755520809",
      percentage: 83,
      description: "matrix loop vector quantum cipher circuit",
    },
    {
      name: "Lucky Meow",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280042/default.avif?g0=1755520809",
      percentage: 90,
      description: "loop cipher quantum vector pulse circuit",
    },
    {
      name: "Royal Hunter",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280043/default.avif?g0=1755520809",
      percentage: 65,
      description: "cascade circuit loop hacker quantum",
    },
    {
      name: "Kho Báu Rồng May Mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280044/default.avif?g0=1755520809",
      percentage: 76,
      description: "loop matrix flux cipher circuit neon",
    },
    {
      name: "Pháo Chiêu Tài",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280045/default.avif?g0=1755520809",
      percentage: 71,
      description: "matrix neon protocol loop flux quantum cascade",
    },
    {
      name: "Super 30 Bingo",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280046/default.avif?g0=1755520809",
      percentage: 65,
      description: "loop circuit matrix cipher quantum",
    },
    {
      name: "Phù Thủy Luyện Kim",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280047/default.avif?g0=1755520809",
      percentage: 86,
      description: "matrix hacker circuit vector loop flux protocol",
    },
    {
      name: "HUYỀN THOẠI CƯỚP BIỂN",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280048/default.avif?g0=1755520809",
      percentage: 63,
      description: "flux vector protocol circuit hacker",
    },
    {
      name: "Ngọn Lửa Apollo",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280049/default.avif?g0=1755520809",
      percentage: 76,
      description: "cascade hacker cipher vector pulse quantum",
    },
    {
      name: "Dragon Gems Super Buy",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280050/default.avif?g0=1755520809",
      percentage: 92,
      description: "circuit protocol matrix cipher hacker cascade",
    },
    {
      name: "Dragon Gems Super Buy",
      image:
        "https://f168n.com/game_pictures/g/CL/128/3/1280051/default.avif?g0=1755520809",
      percentage: 79,
      description: "matrix vector loop hacker cipher protocol circuit",
    },
  ]),
  wg: createGames("wg", [
    {
      name: "Máy siêu trái cây",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3001/default.avif?g0=1755520809",
      percentage: 90,
      description: "cipher hacker pulse matrix vector neon circuit",
    },
    {
      name: "Thủy Hử",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3002/default.avif?g0=1755520809",
      percentage: 95,
      description: "vector cascade pulse hacker quantum",
    },
    {
      name: "Nổ Hũ Đoạt Bảo",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3003/default.avif?g0=1755520809",
      percentage: 90,
      description: "neon circuit protocol flux quantum pulse",
    },
    {
      name: "Tiệc Kẹo Ngọt",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3004/default.avif?g0=1755520809",
      percentage: 92,
      description: "circuit cipher loop quantum matrix",
    },
    {
      name: "Đa Phúc Đa Tài",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3005/default.avif?g0=1755520809",
      percentage: 91,
      description: "flux hacker neon quantum pulse",
    },
    {
      name: "chim giàu có",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3008/default.avif?g0=1755520809",
      percentage: 78,
      description: "protocol circuit cipher vector pulse quantum flux",
    },
    {
      name: "Dragon's Treasure",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3009/default.avif?g0=1755520809",
      percentage: 68,
      description: "loop quantum cipher neon hacker circuit matrix",
    },
    {
      name: "Leopard of Gold",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3010/default.avif?g0=1755520809",
      percentage: 85,
      description: "matrix hacker quantum flux vector cipher",
    },
    {
      name: "Mr Turtle",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3011/default.avif?g0=1755520809",
      percentage: 70,
      description: "circuit protocol loop neon vector matrix",
    },
    {
      name: "World Cup",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3012/default.avif?g0=1755520809",
      percentage: 61,
      description: "pulse matrix vector loop cipher flux",
    },
    {
      name: "Lucky Dog",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3013/default.avif?g0=1755520809",
      percentage: 71,
      description: "loop neon quantum vector protocol",
    },
    {
      name: "Dragon vs Tiger",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3014/default.avif?g0=1755520809",
      percentage: 82,
      description: "vector quantum cascade flux cipher loop",
    },
    {
      name: "Treasure Marmosets",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3015/default.avif?g0=1755520809",
      percentage: 94,
      description: "flux vector protocol pulse hacker cascade neon",
    },
    {
      name: "Samba Dance",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3016/default.avif?g0=1755520809",
      percentage: 63,
      description: "neon hacker quantum pulse flux",
    },
    {
      name: "The Vault",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3017/default.avif?g0=1755520809",
      percentage: 74,
      description: "quantum flux cipher circuit pulse cascade loop",
    },
    {
      name: "Festival of the Saints",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3018/default.avif?g0=1755520809",
      percentage: 92,
      description: "matrix cascade loop protocol hacker",
    },
    {
      name: "Treasure Bowl",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3019/default.avif?g0=1755520809",
      percentage: 65,
      description: "matrix flux vector neon pulse protocol",
    },
    {
      name: "Animal Kingdom",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3020/default.avif?g0=1755520809",
      percentage: 65,
      description: "pulse circuit protocol cascade quantum loop",
    },
    {
      name: "Fishing Master",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3022/default.avif?g0=1755520809",
      percentage: 63,
      description: "hacker protocol vector flux quantum",
    },
    {
      name: "Treasure Dragon",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3023/default.avif?g0=1755520809",
      percentage: 67,
      description: "pulse loop matrix vector neon hacker",
    },
    {
      name: "Pirates Treasure",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3024/default.avif?g0=1755520809",
      percentage: 92,
      description: "protocol cipher hacker pulse flux",
    },
    {
      name: "Black Myth: Wukong",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3025/default.avif?g0=1755520809",
      percentage: 71,
      description: "neon flux loop matrix cipher circuit",
    },
    {
      name: "Crazy777",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3026/default.avif?g0=1755520809",
      percentage: 82,
      description: "hacker cipher quantum loop cascade",
    },
    {
      name: "Dragon's Treasure2",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3028/default.avif?g0=1755520809",
      percentage: 77,
      description: "flux cipher hacker protocol matrix neon",
    },
    {
      name: "Mahjong Ways",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3029/default.avif?g0=1755520809",
      percentage: 93,
      description: "cascade quantum loop cipher protocol vector pulse",
    },
    {
      name: "Super Fruits Slot 2",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3030/default.avif?g0=1755520809",
      percentage: 77,
      description: "matrix flux protocol cascade circuit loop hacker",
    },
    {
      name: "Fortune Tiger",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3031/default.avif?g0=1755520809",
      percentage: 69,
      description: "loop circuit pulse vector neon protocol",
    },
    {
      name: "Mahjong Ways2",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3032/default.avif?g0=1755520809",
      percentage: 80,
      description: "matrix hacker protocol cipher pulse",
    },
    {
      name: "Fortune Ox",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3033/default.avif?g0=1755520809",
      percentage: 78,
      description: "cipher pulse protocol matrix loop hacker",
    },
    {
      name: "Fortune Rabbit",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3035/default.avif?g0=1755520809",
      percentage: 92,
      description: "matrix neon circuit protocol hacker flux",
    },
    {
      name: "Queen of Bounty",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3036/default.avif?g0=1755520809",
      percentage: 81,
      description: "matrix circuit loop vector flux neon cascade",
    },
    {
      name: "Wild Bounty Showdown",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3037/default.avif?g0=1755520809",
      percentage: 69,
      description: "neon quantum loop cipher matrix flux",
    },
    {
      name: "Fortune Snake",
      image:
        "https://f168n.com/game_pictures/g/CL/13/3/3038/default.avif?g0=1755520809",
      percentage: 72,
      description: "cipher protocol flux quantum vector cascade",
    },
  ]),
  pa: createGames("pa", [
    {
      name: "RồngHổ",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270007/default.avif?g0=1755520809",
      percentage: 60,
      description: "loop hacker cascade matrix circuit",
    },
    {
      name: "tài xỉu",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270008/default.avif?g0=1755520809",
      percentage: 72,
      description: "quantum hacker vector neon matrix",
    },
    {
      name: "Khe trái cây",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270009/default.avif?g0=1755520809",
      percentage: 68,
      description: "hacker cipher cascade pulse flux circuit quantum",
    },
    {
      name: "Khe trái cây 2",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270010/default.avif?g0=1755520809",
      percentage: 91,
      description: "vector flux quantum pulse circuit neon matrix",
    },
    {
      name: "Tiền thưởng Deuces hoang dã",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270011/default.avif?g0=1755520809",
      percentage: 85,
      description: "circuit hacker flux cascade protocol cipher pulse",
    },
    {
      name: "Deuces hoang dã",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270012/default.avif?g0=1755520809",
      percentage: 61,
      description: "circuit loop protocol vector flux cascade hacker",
    },
    {
      name: "Video poker2 (jack hoặc cao hơn)",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270013/default.avif?g0=1755520809",
      percentage: 92,
      description: "circuit neon flux vector cascade quantum",
    },
    {
      name: "Cuộc phiêu lưu không gian",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270014/default.avif?g0=1755520809",
      percentage: 95,
      description: "matrix quantum hacker cipher vector",
    },
    {
      name: "vườn cổ điển",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270015/default.avif?g0=1755520809",
      percentage: 64,
      description: "cascade matrix cipher pulse flux hacker vector",
    },
    {
      name: "võ sĩ đạo",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270016/default.avif?g0=1755520809",
      percentage: 92,
      description: "matrix loop pulse protocol cascade",
    },
    {
      name: "Máy đánh bạc cờ tướng",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270017/default.avif?g0=1755520809",
      percentage: 78,
      description: "matrix cipher vector protocol pulse",
    },
    {
      name: "Khe mạt chược",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270018/default.avif?g0=1755520809",
      percentage: 77,
      description: "hacker protocol flux vector cipher loop",
    },
    {
      name: "Khe cờ vua",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270019/default.avif?g0=1755520809",
      percentage: 73,
      description: "quantum loop cascade flux circuit matrix",
    },
    {
      name: "Trang trại vui vẻ",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270020/default.avif?g0=1755520809",
      percentage: 88,
      description: "vector cascade neon cipher pulse protocol loop",
    },
    {
      name: "Khu cắm trại mùa hè",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270021/default.avif?g0=1755520809",
      percentage: 70,
      description: "protocol pulse cascade vector hacker",
    },
    {
      name: "Thần tài Wu",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270022/default.avif?g0=1755520809",
      percentage: 65,
      description: "cascade hacker cipher matrix flux circuit loop",
    },
    {
      name: "năm con khỉ",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270023/default.avif?g0=1755520809",
      percentage: 62,
      description: "loop pulse cascade matrix protocol hacker quantum",
    },
    {
      name: "nhiệm vụ kẹo",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270024/default.avif?g0=1755520809",
      percentage: 66,
      description: "cascade flux circuit cipher quantum matrix",
    },
    {
      name: "Nghiền đá",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270025/default.avif?g0=1755520809",
      percentage: 75,
      description: "cascade flux quantum matrix protocol",
    },
    {
      name: "Bến Thượng Hải",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270026/default.avif?g0=1755520809",
      percentage: 68,
      description: "protocol matrix flux cascade vector cipher quantum",
    },
    {
      name: "truyền thuyết về rồng",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270027/default.avif?g0=1755520809",
      percentage: 93,
      description: "protocol flux quantum pulse neon",
    },
    {
      name: "Đá quý thần bí",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270028/default.avif?g0=1755520809",
      percentage: 64,
      description: "cascade neon protocol circuit quantum",
    },
    {
      name: "Rồng Ngọc Vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270029/default.avif?g0=1755520809",
      percentage: 85,
      description: "neon hacker cascade loop circuit matrix cipher",
    },
    {
      name: "vua của vinh quang",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270031/default.avif?g0=1755520809",
      percentage: 93,
      description: "flux cascade matrix vector circuit",
    },
    {
      name: "Combo may mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270032/default.avif?g0=1755520809",
      percentage: 71,
      description: "flux vector protocol pulse neon quantum",
    },
    {
      name: "vegas vegas",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270033/default.avif?g0=1755520809",
      percentage: 92,
      description: "pulse protocol vector hacker cipher flux",
    },
    {
      name: "Ác Long",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270034/default.avif?g0=1755520809",
      percentage: 62,
      description: "pulse cascade protocol quantum matrix flux circuit",
    },
    {
      name: "Succubus gợi cảm",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270035/default.avif?g0=1755520809",
      percentage: 68,
      description: "quantum vector flux cascade protocol circuit pulse",
    },
    {
      name: "kung fu tất cả các ngôi sao",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270036/default.avif?g0=1755520809",
      percentage: 90,
      description: "circuit hacker pulse cipher matrix flux neon",
    },
    {
      name: "Át chủ bài",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270037/default.avif?g0=1755520809",
      percentage: 68,
      description: "loop cipher quantum circuit matrix pulse hacker",
    },
    {
      name: "Thần hoang dã",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270038/default.avif?g0=1755520809",
      percentage: 86,
      description: "neon hacker flux circuit quantum pulse matrix",
    },
    {
      name: "khe bingo",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270039/default.avif?g0=1755520809",
      percentage: 85,
      description: "hacker circuit cipher protocol neon",
    },
    {
      name: "may mắn giàu có",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270040/default.avif?g0=1755520809",
      percentage: 85,
      description: "hacker quantum circuit loop flux cipher",
    },
    {
      name: "Cuộc xâm lược của Kong",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270042/default.avif?g0=1755520809",
      percentage: 69,
      description: "cascade flux hacker matrix circuit",
    },
    {
      name: "Koi hoang dã",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270043/default.avif?g0=1755520809",
      percentage: 94,
      description: "hacker cascade matrix cipher loop vector",
    },
    {
      name: "Bữa tiệc kho báu",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270044/default.avif?g0=1755520809",
      percentage: 90,
      description: "vector protocol loop neon quantum pulse",
    },
    {
      name: "Công viên giải trí động vật",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270045/default.avif?g0=1755520809",
      percentage: 68,
      description: "matrix vector quantum hacker neon",
    },
    {
      name: "cướp biển ahoy",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270046/default.avif?g0=1755520809",
      percentage: 75,
      description: "circuit matrix protocol quantum pulse",
    },
    {
      name: "Lớp vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270047/default.avif?g0=1755520809",
      percentage: 84,
      description: "cipher loop flux circuit vector protocol",
    },
    {
      name: "hoang dã 777",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270048/default.avif?g0=1755520809",
      percentage: 70,
      description: "cipher circuit flux vector cascade",
    },
    {
      name: "Bữa tiệc quái thú",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270049/default.avif?g0=1755520809",
      percentage: 60,
      description: "cipher vector protocol circuit neon loop",
    },
    {
      name: "Phòng Hạng Vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270050/default.avif?g0=1755520809",
      percentage: 87,
      description: "cipher neon cascade loop circuit hacker",
    },
    {
      name: "nữ hoàng kim cương",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270053/default.avif?g0=1755520809",
      percentage: 93,
      description: "cipher quantum circuit pulse matrix",
    },
    {
      name: "alibaba",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270055/default.avif?g0=1755520809",
      percentage: 60,
      description: "pulse flux neon quantum cascade circuit",
    },
    {
      name: "Joan of Arc",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270056/default.avif?g0=1755520809",
      percentage: 92,
      description: "matrix circuit pulse cipher protocol",
    },
    {
      name: "nhà vô địch thực sự",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270057/default.avif?g0=1755520809",
      percentage: 82,
      description: "pulse quantum circuit protocol neon vector",
    },
    {
      name: "Nữ thần Manya",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270058/default.avif?g0=1755520809",
      percentage: 72,
      description: "cascade pulse matrix vector loop",
    },
    {
      name: "Vua Arthur",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270059/default.avif?g0=1755520809",
      percentage: 76,
      description: "flux cascade vector circuit quantum matrix",
    },
    {
      name: "lễ hội sư tử",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270060/default.avif?g0=1755520809",
      percentage: 60,
      description: "protocol neon quantum hacker loop circuit cascade",
    },
    {
      name: "Cuộc phiêu lưu của Alice",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270061/default.avif?g0=1755520809",
      percentage: 60,
      description: "protocol cascade quantum circuit flux cipher vector",
    },
    {
      name: "Cơn bão",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270062/default.avif?g0=1755520809",
      percentage: 87,
      description: "matrix hacker pulse cipher flux",
    },
    {
      name: "vàng của gấu trúc",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270063/default.avif?g0=1755520809",
      percentage: 62,
      description: "cipher vector cascade matrix pulse quantum",
    },
    {
      name: "nàng trăng",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270064/default.avif?g0=1755520809",
      percentage: 71,
      description: "protocol cascade vector neon hacker loop",
    },
    {
      name: "Bạch Tuyết",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270065/default.avif?g0=1755520809",
      percentage: 76,
      description: "cipher matrix pulse flux neon loop cascade",
    },
    {
      name: "Bói bài kho báu",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270066/default.avif?g0=1755520809",
      percentage: 67,
      description: "protocol cipher vector hacker cascade pulse",
    },
    {
      name: "Huluwa",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270067/default.avif?g0=1755520809",
      percentage: 95,
      description: "flux hacker protocol loop matrix cipher",
    },
    {
      name: "nụ hôn đẫm máu",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270068/default.avif?g0=1755520809",
      percentage: 95,
      description: "circuit hacker cascade flux matrix vector",
    },
    {
      name: "Joker bóng tối",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270069/default.avif?g0=1755520809",
      percentage: 95,
      description: "cipher circuit hacker cascade matrix",
    },
    {
      name: "Fengshen Yanyi",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270070/default.avif?g0=1755520809",
      percentage: 78,
      description: "circuit vector matrix pulse neon hacker",
    },
    {
      name: "Xác sống",
      image:
        "https://f168n.com/game_pictures/g/CL/127/3/1270071/default.avif?g0=1755520809",
      percentage: 85,
      description: "hacker circuit cascade quantum pulse cipher loop",
    },
  ]),
  bng: createGames("bng", [
    {
      name: "ngọc rồng",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330151/default.avif?g0=1755520809",
      percentage: 85,
      description: "neon matrix quantum cipher protocol",
    },
    {
      name: "Cuốn sách của mặt trời đa năng",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330157/default.avif?g0=1755520809",
      percentage: 74,
      description: "circuit hacker quantum pulse cipher vector neon",
    },
    {
      name: "các vị thần trên đỉnh Olympian",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330166/default.avif?g0=1755520809",
      percentage: 68,
      description: "neon hacker matrix cascade pulse",
    },
    {
      name: "mặt trời của Ai Cập",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330173/default.avif?g0=1755520809",
      percentage: 84,
      description: "vector loop hacker protocol circuit",
    },
    {
      name: "vàng con hổ",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330178/default.avif?g0=1755520809",
      percentage: 81,
      description: "vector flux neon pulse cipher quantum hacker",
    },
    {
      name: "gấu trúc lớn",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330181/default.avif?g0=1755520809",
      percentage: 66,
      description: "quantum protocol cipher matrix circuit flux neon",
    },
    {
      name: "chị em mặt trăng",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330183/default.avif?g0=1755520809",
      percentage: 84,
      description: "hacker cascade circuit pulse neon",
    },
    {
      name: "Mặt trời Aztec",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330187/default.avif?g0=1755520809",
      percentage: 78,
      description: "neon pulse protocol flux cipher hacker",
    },
    {
      name: "15 viên ngọc rồng",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330197/default.avif?g0=1755520809",
      percentage: 69,
      description: "circuit protocol matrix vector loop",
    },
    {
      name: "Sấm sét của đỉnh Olympus",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330200/default.avif?g0=1755520809",
      percentage: 62,
      description: "hacker flux neon circuit matrix",
    },
    {
      name: "đền bọ hung",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330201/default.avif?g0=1755520809",
      percentage: 73,
      description: "pulse circuit loop matrix protocol vector",
    },
    {
      name: "Mặt Trời Của Ai Cập 2",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330202/default.avif?g0=1755520809",
      percentage: 72,
      description: "matrix flux pulse cipher protocol",
    },
    {
      name: "đá hổ",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330209/default.avif?g0=1755520809",
      percentage: 77,
      description: "neon vector cascade pulse loop cipher protocol",
    },
    {
      name: "3 xu",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330212/default.avif?g0=1755520809",
      percentage: 85,
      description: "flux pulse circuit quantum matrix",
    },
    {
      name: "câu chuyện sói",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330216/default.avif?g0=1755520809",
      percentage: 72,
      description: "neon flux quantum loop cascade hacker",
    },
    {
      name: "táo ma thuật",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330219/default.avif?g0=1755520809",
      percentage: 71,
      description: "quantum loop matrix hacker protocol cascade",
    },
    {
      name: "Trúng vàng!",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330228/default.avif?g0=1755520809",
      percentage: 74,
      description: "circuit loop pulse neon matrix quantum",
    },
    {
      name: "tăng bọ hung",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330231/default.avif?g0=1755520809",
      percentage: 69,
      description: "pulse neon circuit quantum vector cascade",
    },
    {
      name: "3 xu: Ai Cập",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330236/default.avif?g0=1755520809",
      percentage: 71,
      description: "hacker vector protocol loop circuit",
    },
    {
      name: "đêm sói",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330237/default.avif?g0=1755520809",
      percentage: 86,
      description: "matrix flux vector neon cascade",
    },
    {
      name: "hổ rừng",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330242/default.avif?g0=1755520809",
      percentage: 64,
      description: "flux neon cipher quantum protocol vector",
    },
    {
      name: "vàng nhanh",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330249/default.avif?g0=1755520809",
      percentage: 91,
      description: "neon cipher loop cascade circuit flux matrix",
    },
    {
      name: "kẹo bùng nổ",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330250/default.avif?g0=1755520809",
      percentage: 79,
      description: "quantum vector hacker matrix neon",
    },
    {
      name: "Sói đen",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330254/default.avif?g0=1755520809",
      percentage: 90,
      description: "cipher vector cascade neon quantum circuit hacker",
    },
    {
      name: "Nữ Hoàng Mặt Trời",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330256/default.avif?g0=1755520809",
      percentage: 92,
      description: "protocol hacker cascade pulse loop cipher",
    },
    {
      name: "cá hạnh phúc",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330261/default.avif?g0=1755520809",
      percentage: 71,
      description: "hacker protocol loop cascade cipher",
    },
    {
      name: "Mặt Trời Ai Cập 3",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330262/default.avif?g0=1755520809",
      percentage: 87,
      description: "protocol quantum cascade neon vector matrix",
    },
    {
      name: "Quả Táo Thần Kỳ 2",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330266/default.avif?g0=1755520809",
      percentage: 79,
      description: "loop protocol circuit neon cascade vector",
    },
    {
      name: "Lotus Charm",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330270/default.avif?g0=1755520809",
      percentage: 87,
      description: "neon cipher flux circuit hacker",
    },
    {
      name: "Aztec Fire-Giữ & giành chiến thắng",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330272/default.avif?g0=1755520809",
      percentage: 93,
      description: "pulse cascade cipher hacker protocol",
    },
    {
      name: "Big Heist",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330274/default.avif?g0=1755520809",
      percentage: 80,
      description: "protocol pulse matrix loop circuit vector",
    },
    {
      name: "Green Chilli",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330276/default.avif?g0=1755520809",
      percentage: 66,
      description: "flux neon cascade circuit matrix",
    },
    {
      name: "Sticky Piggy",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330278/default.avif?g0=1755520809",
      percentage: 93,
      description: "flux hacker neon protocol loop",
    },
    {
      name: "Lượt nhiều vàng hơn",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330280/default.avif?g0=1755520809",
      percentage: 82,
      description: "loop hacker matrix circuit pulse neon cascade",
    },
    {
      name: "Đá quý Rio",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330283/default.avif?g0=1755520809",
      percentage: 77,
      description: "neon hacker vector cipher quantum protocol",
    },
    {
      name: "Goddess of Egypt",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330285/default.avif?g0=1755520809",
      percentage: 69,
      description: "loop pulse cipher quantum hacker",
    },
    {
      name: "Sunlight Princess",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330286/default.avif?g0=1755520809",
      percentage: 74,
      description: "hacker cascade loop flux matrix protocol",
    },
    {
      name: "Boom! Boom! Gold!",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330287/default.avif?g0=1755520809",
      percentage: 79,
      description: "vector cipher hacker quantum flux cascade pulse",
    },
    {
      name: "Egypt Fire",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330288/default.avif?g0=1755520809",
      percentage: 72,
      description: "vector loop pulse cascade protocol flux circuit",
    },
    {
      name: "Dragon Wealth",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330291/default.avif?g0=1755520809",
      percentage: 91,
      description: "flux protocol loop neon vector matrix",
    },
    {
      name: "mặt trời Maya",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330292/default.avif?g0=1755520809",
      percentage: 91,
      description: "neon flux pulse matrix loop protocol cipher",
    },
    {
      name: "Tiger Gems-Hold and win",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330296/default.avif?g0=1755520809",
      percentage: 88,
      description: "hacker neon loop quantum cipher cascade pulse",
    },
    {
      name: "More Magic Apple",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330297/default.avif?g0=1755520809",
      percentage: 68,
      description: "cipher matrix hacker cascade vector protocol",
    },
    {
      name: "Coin Volcano - Hold and win",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330300/default.avif?g0=1755520809",
      percentage: 70,
      description: "matrix vector hacker flux loop neon circuit",
    },
    {
      name: "Grab the Gold!",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330301/default.avif?g0=1755520809",
      percentage: 61,
      description: "pulse cipher vector loop circuit matrix",
    },
    {
      name: "Lady Fortune",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330302/default.avif?g0=1755520809",
      percentage: 80,
      description: "circuit hacker pulse vector cipher",
    },
    {
      name: "3 Hot Chillies",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330305/default.avif?g0=1755520809",
      percentage: 73,
      description: "cascade pulse circuit vector hacker",
    },
    {
      name: "Forest Spirit",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330308/default.avif?g0=1755520809",
      percentage: 93,
      description: "neon vector circuit cascade matrix loop",
    },
    {
      name: "Black Wolf 2",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330309/default.avif?g0=1755520809",
      percentage: 62,
      description: "neon cipher vector matrix cascade circuit hacker",
    },
    {
      name: "Green Chilli 2",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330312/default.avif?g0=1755520809",
      percentage: 85,
      description: "cipher loop quantum flux protocol",
    },
    {
      name: "777 Coins",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330313/default.avif?g0=1755520809",
      percentage: 73,
      description: "circuit loop neon cipher quantum protocol",
    },
    {
      name: "Little Farm",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330315/default.avif?g0=1755520809",
      percentage: 85,
      description: "cascade matrix pulse protocol vector",
    },
    {
      name: "Grab more Gold!",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330316/default.avif?g0=1755520809",
      percentage: 63,
      description: "vector quantum cipher hacker neon",
    },
    {
      name: "Aztec Fire2-Hold & Win Multi",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330317/default.avif?g0=1755520809",
      percentage: 95,
      description: "loop protocol cipher flux cascade vector",
    },
    {
      name: "Coin UP: Hot Fire",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330318/default.avif?g0=1755520809",
      percentage: 77,
      description: "flux loop pulse protocol hacker",
    },
    {
      name: "African Spirit Sticky Wilds",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330355/default.avif?g0=1755520809",
      percentage: 79,
      description: "vector matrix circuit flux hacker cipher loop",
    },
    {
      name: "Crystal Scarabs",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330356/default.avif?g0=1755520809",
      percentage: 67,
      description: "neon protocol vector flux pulse loop matrix",
    },
    {
      name: "Gold Nuggets",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330359/default.avif?g0=1755520809",
      percentage: 85,
      description: "flux pulse matrix neon cipher",
    },
    {
      name: "Sun of Egypt 4",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330360/default.avif?g0=1755520809",
      percentage: 91,
      description: "neon protocol circuit cascade pulse vector cipher",
    },
    {
      name: "3 Egypt Chests",
      image:
        "https://f168n.com/game_pictures/g/CL/33/3/330368/default.avif?g0=1755520809",
      percentage: 78,
      description: "hacker matrix neon flux quantum",
    },
  ]),
  hacksawgaming: createGames("hacksawgaming", [
    {
      name: "Toshi Video Club",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081073/default.avif?g0=1755520809",
      percentage: 81,
      description: "matrix circuit flux cascade pulse vector",
    },
    {
      name: "Rocket Reels",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081077/default.avif?g0=1755520809",
      percentage: 91,
      description: "flux cascade protocol circuit matrix cipher loop",
    },
    {
      name: "Wanted Dead or a Wild",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081079/default.avif?g0=1755520809",
      percentage: 75,
      description: "vector pulse cipher matrix flux neon",
    },
    {
      name: "Cash Quest",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081085/default.avif?g0=1755520809",
      percentage: 85,
      description: "loop protocol matrix pulse cascade circuit",
    },
    {
      name: "Tasty Treats",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081089/default.avif?g0=1755520809",
      percentage: 78,
      description: "cipher protocol matrix loop vector circuit cascade",
    },
    {
      name: "Joker Bombs",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081091/default.avif?g0=1755520809",
      percentage: 82,
      description: "neon cascade flux loop matrix",
    },
    {
      name: "King Carrot",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081095/default.avif?g0=1755520809",
      percentage: 67,
      description: "hacker pulse protocol quantum vector cascade",
    },
    {
      name: "Harvest Wilds",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081099/default.avif?g0=1755520809",
      percentage: 78,
      description: "protocol circuit pulse neon flux",
    },
    {
      name: "The Bowery Boys",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081103/default.avif?g0=1755520809",
      percentage: 74,
      description: "protocol loop hacker flux cascade neon vector",
    },
    {
      name: "Double Rainbow",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081106/default.avif?g0=1755520809",
      percentage: 83,
      description: "neon matrix vector cascade pulse quantum protocol",
    },
    {
      name: "Warrior Ways",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081110/default.avif?g0=1755520809",
      percentage: 77,
      description: "quantum protocol vector cipher flux circuit loop",
    },
    {
      name: "Gladiator Legends",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081114/default.avif?g0=1755520809",
      percentage: 81,
      description: "matrix vector circuit quantum cipher",
    },
    {
      name: "Hand of Anubis",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081118/default.avif?g0=1755520809",
      percentage: 70,
      description: "circuit flux vector hacker protocol",
    },
    {
      name: "ITERO",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081122/default.avif?g0=1755520809",
      percentage: 73,
      description: "protocol vector pulse hacker cipher loop",
    },
    {
      name: "Buffalo Stack'n'Sync",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081126/default.avif?g0=1755520809",
      percentage: 64,
      description: "protocol cascade cipher quantum neon",
    },
    {
      name: "Outlaws Inc.",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081130/default.avif?g0=1755520809",
      percentage: 77,
      description: "flux pulse matrix circuit hacker",
    },
    {
      name: "Born Wild",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081134/default.avif?g0=1755520809",
      percentage: 62,
      description: "matrix quantum vector loop neon circuit",
    },
    {
      name: "Dork Unit",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081138/default.avif?g0=1755520809",
      percentage: 84,
      description: "pulse matrix vector loop protocol",
    },
    {
      name: "Fruit Duel",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081142/default.avif?g0=1755520809",
      percentage: 77,
      description: "cascade circuit neon flux cipher",
    },
    {
      name: "Mines",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081148/default.avif?g0=1755520809",
      percentage: 75,
      description: "vector circuit cascade neon cipher loop hacker",
    },
    {
      name: "Coins",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081155/default.avif?g0=1755520809",
      percentage: 75,
      description: "flux matrix neon hacker pulse loop circuit",
    },
    {
      name: "Boxes",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081161/default.avif?g0=1755520809",
      percentage: 78,
      description: "circuit quantum neon hacker flux cascade",
    },
    {
      name: "Time Spinners",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081168/default.avif?g0=1755520809",
      percentage: 94,
      description: "vector cascade circuit matrix neon",
    },
    {
      name: "Forest Fortune",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081169/default.avif?g0=1755520809",
      percentage: 80,
      description: "pulse vector cascade circuit flux quantum cipher",
    },
    {
      name: "Alpha Eagle",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081170/default.avif?g0=1755520809",
      percentage: 88,
      description: "cipher circuit matrix vector hacker loop protocol",
    },
    {
      name: "Undead Fortune",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081171/default.avif?g0=1755520809",
      percentage: 60,
      description: "loop cascade circuit neon vector quantum protocol",
    },
    {
      name: "Break Bones",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081172/default.avif?g0=1755520809",
      percentage: 90,
      description: "quantum pulse vector matrix protocol circuit neon",
    },
    {
      name: "Pug Life",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081173/default.avif?g0=1755520809",
      percentage: 71,
      description: "flux hacker cipher quantum neon vector pulse",
    },
    {
      name: "Book of Time",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081174/default.avif?g0=1755520809",
      percentage: 65,
      description: "protocol cascade cipher matrix neon hacker",
    },
    {
      name: "Gronk's Gems",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081207/default.avif?g0=1755520809",
      percentage: 63,
      description: "vector matrix neon circuit flux",
    },
    {
      name: "Rotten",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081208/default.avif?g0=1755520809",
      percentage: 68,
      description: "cascade quantum cipher flux loop hacker pulse",
    },
    {
      name: "RIP City",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081209/default.avif?g0=1755520809",
      percentage: 90,
      description: "cipher hacker vector quantum matrix",
    },
    {
      name: "Frank's Farm",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081210/default.avif?g0=1755520809",
      percentage: 86,
      description: "flux hacker matrix neon quantum",
    },
    {
      name: "Bloodthirst",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081211/default.avif?g0=1755520809",
      percentage: 80,
      description: "vector protocol quantum cascade neon",
    },
    {
      name: "Magic Piggy",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081212/default.avif?g0=1755520809",
      percentage: 79,
      description: "vector hacker protocol loop cipher circuit",
    },
    {
      name: "Keep 'em Cool",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081216/default.avif?g0=1755520809",
      percentage: 86,
      description: "flux cipher matrix quantum hacker protocol neon",
    },
    {
      name: "Stormforged",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081220/default.avif?g0=1755520809",
      percentage: 68,
      description: "quantum pulse flux matrix circuit",
    },
    {
      name: "Fear the Dark",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081224/default.avif?g0=1755520809",
      percentage: 66,
      description: "quantum flux cascade vector matrix loop circuit",
    },
    {
      name: "Cursed Seas",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081228/default.avif?g0=1755520809",
      percentage: 95,
      description: "neon protocol circuit loop quantum",
    },
    {
      name: "Mayan Stackways",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081232/default.avif?g0=1755520809",
      percentage: 79,
      description: "flux circuit vector protocol pulse matrix loop",
    },
    {
      name: "Temple of Torment",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081236/default.avif?g0=1755520809",
      percentage: 91,
      description: "hacker matrix neon circuit cascade quantum",
    },
    {
      name: "Mighty Masks",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081240/default.avif?g0=1755520809",
      percentage: 74,
      description: "circuit loop neon hacker cipher vector protocol",
    },
    {
      name: "Plinko",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081244/default.avif?g0=1755520809",
      percentage: 76,
      description: "matrix cipher loop hacker neon",
    },
    {
      name: "Beast Below",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081248/default.avif?g0=1755520809",
      percentage: 90,
      description: "matrix protocol flux loop cascade",
    },
    {
      name: "Hi-Lo",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081256/default.avif?g0=1755520809",
      percentage: 62,
      description: "vector cascade circuit hacker quantum pulse protocol",
    },
    {
      name: "Vending Machine",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081261/default.avif?g0=1755520809",
      percentage: 73,
      description: "hacker quantum cipher circuit vector pulse neon",
    },
    {
      name: "Drop'em",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081265/default.avif?g0=1755520809",
      percentage: 76,
      description: "hacker matrix neon quantum vector cascade flux",
    },
    {
      name: "Lines",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081269/default.avif?g0=1755520809",
      percentage: 87,
      description: "cascade neon loop hacker vector pulse",
    },
    {
      name: "Ronin Stackways",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081273/default.avif?g0=1755520809",
      percentage: 82,
      description: "cascade loop vector circuit hacker",
    },
    {
      name: "Le Bandit",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081277/default.avif?g0=1755520809",
      percentage: 77,
      description: "protocol flux neon cascade quantum matrix hacker",
    },
    {
      name: "Densho",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081281/default.avif?g0=1755520809",
      percentage: 88,
      description: "loop hacker matrix protocol cascade",
    },
    {
      name: "Wheel",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081285/default.avif?g0=1755520809",
      percentage: 90,
      description: "loop matrix protocol flux quantum pulse",
    },
    {
      name: "Blocks",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081289/default.avif?g0=1755520809",
      percentage: 90,
      description: "cascade pulse cipher loop circuit flux",
    },
    {
      name: "Chaos Crew 2",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081293/default.avif?g0=1755520809",
      percentage: 78,
      description: "vector cipher pulse cascade circuit",
    },
    {
      name: "Benny The Beer",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081297/default.avif?g0=1755520809",
      percentage: 76,
      description: "cascade quantum loop protocol pulse circuit cipher",
    },
    {
      name: "Colors",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081301/default.avif?g0=1755520809",
      percentage: 92,
      description: "flux hacker vector pulse loop protocol",
    },
    {
      name: "Eye of the Panda",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081305/default.avif?g0=1755520809",
      percentage: 92,
      description: "cascade flux neon matrix hacker",
    },
    {
      name: "Immortal Desire",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081309/default.avif?g0=1755520809",
      percentage: 66,
      description: "quantum hacker vector protocol loop cascade",
    },
    {
      name: "Xmas Drop",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081313/default.avif?g0=1755520809",
      percentage: 77,
      description: "quantum protocol vector hacker cascade circuit",
    },
    {
      name: "Twenty-one",
      image:
        "https://f168n.com/game_pictures/g/CL/108/3/1081317/default.avif?g0=1755520809",
      percentage: 87,
      description: "cipher loop hacker protocol quantum cascade matrix",
    },
  ]),
  nolimitcity: createGames("nolimitcity", [
    {
      name: "Cuồng Bạo Man Rợ",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300001/default.avif?g0=1755520809",
      percentage: 67,
      description: "flux cascade loop cipher matrix pulse",
    },
    {
      name: "Benji bị hạ sát tại Vegas",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300002/default.avif?g0=1755520809",
      percentage: 60,
      description: "protocol flux pulse neon loop circuit cipher",
    },
    {
      name: "Máu & Bóng Đêm",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300003/default.avif?g0=1755520809",
      percentage: 73,
      description: "vector matrix cascade hacker neon loop circuit",
    },
    {
      name: "Thỏ Thưởng",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300004/default.avif?g0=1755520809",
      percentage: 94,
      description: "vector neon quantum cipher circuit loop hacker",
    },
    {
      name: "Quyển Sách Bóng Tối",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300005/default.avif?g0=1755520809",
      percentage: 62,
      description: "cascade flux pulse neon cipher circuit",
    },
    {
      name: "Thợ Săn Trâu Rừng",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300007/default.avif?g0=1755520809",
      percentage: 66,
      description: "cascade flux loop quantum hacker circuit pulse",
    },
    {
      name: "Võ Sĩ Đạo xNudge",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300008/default.avif?g0=1755520809",
      percentage: 61,
      description: "flux vector circuit loop neon cascade pulse",
    },
    {
      name: "Vòng Quay Chiến Thắng Sòng Bạc",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300009/default.avif?g0=1755520809",
      percentage: 87,
      description: "protocol matrix circuit pulse cipher hacker",
    },
    {
      name: "Xu May Mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300010/default.avif?g0=1755520809",
      percentage: 67,
      description: "protocol matrix hacker cipher flux cascade pulse",
    },
    {
      name: "Das xBoot",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300011/default.avif?g0=1755520809",
      percentage: 92,
      description: "quantum vector loop hacker neon",
    },
    {
      name: "Kim tước chết chóc",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300012/default.avif?g0=1755520809",
      percentage: 80,
      description: "matrix flux cascade hacker circuit loop cipher",
    },
    {
      name: "Rừng Chết xNudge",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300013/default.avif?g0=1755520809",
      percentage: 90,
      description: "vector cascade protocol matrix hacker pulse",
    },
    {
      name: "Bị làm phiền",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300014/default.avif?g0=1755520809",
      percentage: 91,
      description: "flux circuit cascade neon protocol",
    },
    {
      name: "DJ ĐIÊN",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300015/default.avif?g0=1755520809",
      percentage: 82,
      description: "neon cascade vector flux pulse",
    },
    {
      name: "Bộ Tộc Rồng",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300016/default.avif?g0=1755520809",
      percentage: 91,
      description: "hacker cipher quantum cascade protocol pulse",
    },
    {
      name: "Nhiệm Vụ Hầm Ngục",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300017/default.avif?g0=1755520809",
      percentage: 74,
      description: "neon cipher vector quantum protocol flux loop",
    },
    {
      name: "Bờ Đông Vs Bờ Tây",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300018/default.avif?g0=1755520809",
      percentage: 65,
      description: "loop hacker flux quantum vector cipher",
    },
    {
      name: "Đấu Súng El Pasa xNudge",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300019/default.avif?g0=1755520809",
      percentage: 84,
      description: "hacker cascade protocol vector circuit",
    },
    {
      name: "Yêu Tinh Gian Ác xBomb",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300020/default.avif?g0=1755520809",
      percentage: 73,
      description: "hacker loop cipher vector protocol pulse",
    },
    {
      name: "Cẩn Thận Bom Nổ xBomb",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300021/default.avif?g0=1755520809",
      percentage: 75,
      description: "matrix flux neon loop pulse cascade vector",
    },
    {
      name: "Nhà Tù Folsom",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300022/default.avif?g0=1755520809",
      percentage: 66,
      description: "quantum protocol loop circuit cipher vector matrix",
    },
    {
      name: "Trái Cây",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300023/default.avif?g0=1755520809",
      percentage: 67,
      description: "circuit quantum vector protocol cipher hacker",
    },
    {
      name: "Vàng Gaelic",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300024/default.avif?g0=1755520809",
      percentage: 69,
      description: "neon hacker circuit cascade vector protocol",
    },
    {
      name: "HAM ĂN",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300025/default.avif?g0=1755520809",
      percentage: 77,
      description: "protocol circuit neon pulse hacker",
    },
    {
      name: "Thần Đèn Bằng Vàng Và Wild Biết Đi",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300026/default.avif?g0=1755520809",
      percentage: 89,
      description: "hacker matrix vector quantum pulse neon circuit",
    },
    {
      name: "Lễ Hội Hóa Trang Harlequin",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300027/default.avif?g0=1755520809",
      percentage: 64,
      description: "circuit loop cipher cascade matrix pulse",
    },
    {
      name: "Tiền 4 Nóng",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300028/default.avif?g0=1755520809",
      percentage: 60,
      description: "matrix circuit loop quantum hacker",
    },
    {
      name: "Huých Nóng",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300029/default.avif?g0=1755520809",
      percentage: 76,
      description: "quantum cascade cipher flux matrix",
    },
    {
      name: "Người Tuyết Băng Giá",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300030/default.avif?g0=1755520809",
      percentage: 60,
      description: "pulse protocol hacker quantum loop cipher neon",
    },
    {
      name: "Trái Cây Bất Tử",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300031/default.avif?g0=1755520809",
      percentage: 80,
      description: "cascade cipher pulse hacker protocol neon flux",
    },
    {
      name: "Lây Nhiễm 5 xWays",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300032/default.avif?g0=1755520809",
      percentage: 63,
      description: "protocol flux quantum pulse matrix loop",
    },
    {
      name: "Karen Ăn Thịt Người",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300033/default.avif?g0=1755520809",
      percentage: 76,
      description: "hacker neon protocol pulse cipher",
    },
    {
      name: "Hôn Chiếc Cưa",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300034/default.avif?g0=1755520809",
      percentage: 70,
      description: "protocol cascade loop hacker pulse",
    },
    {
      name: "Drama Trong Bếp: Cuồng Bbq",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300035/default.avif?g0=1755520809",
      percentage: 74,
      description: "cascade loop vector cipher protocol neon hacker",
    },
    {
      name: "Quân Đoàn X",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300036/default.avif?g0=1755520809",
      percentage: 68,
      description: "circuit matrix protocol vector neon",
    },
    {
      name: "Linh dương nhỏ",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300037/default.avif?g0=1755520809",
      percentage: 82,
      description: "hacker neon protocol cipher loop vector quantum",
    },
    {
      name: "Manhattan Phát Điên",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300038/default.avif?g0=1755520809",
      percentage: 75,
      description: "neon flux pulse circuit vector",
    },
    {
      name: "Ma Trơi Ma Thuật Maya",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300039/default.avif?g0=1755520809",
      percentage: 69,
      description: "cascade cipher neon loop quantum vector",
    },
    {
      name: "Tâm thần",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300040/default.avif?g0=1755520809",
      percentage: 71,
      description: "hacker protocol vector neon circuit cascade loop",
    },
    {
      name: "Dải Ngân Hà",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300041/default.avif?g0=1755520809",
      percentage: 69,
      description: "circuit cascade vector quantum loop",
    },
    {
      name: "Khái Khoáng Khốn Khổ",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300042/default.avif?g0=1755520809",
      percentage: 72,
      description: "vector flux circuit cascade hacker",
    },
    {
      name: "Vàng Của Khỉ xPays",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300043/default.avif?g0=1755520809",
      percentage: 89,
      description: "vector flux cascade matrix quantum pulse loop",
    },
    {
      name: "Cú",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300044/default.avif?g0=1755520809",
      percentage: 79,
      description: "circuit hacker loop vector protocol quantum pulse",
    },
    {
      name: "Trân Châu Cảng",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300045/default.avif?g0=1755520809",
      percentage: 64,
      description: "loop hacker protocol cipher pulse neon circuit",
    },
    {
      name: "Yêu Tinh Vs Cướp Biển",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300046/default.avif?g0=1755520809",
      percentage: 84,
      description: "protocol cipher loop hacker quantum cascade pulse",
    },
    {
      name: "Eve Có Độc",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300047/default.avif?g0=1755520809",
      percentage: 91,
      description: "vector neon matrix hacker flux",
    },
    {
      name: "Tay Chơi Punk Rock",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300048/default.avif?g0=1755520809",
      percentage: 72,
      description: "protocol cipher circuit vector matrix neon",
    },
    {
      name: "Toa-lét Punk",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300049/default.avif?g0=1755520809",
      percentage: 90,
      description: "pulse cascade quantum neon matrix hacker cipher",
    },
    {
      name: "Tưởng Nhớ Gulag",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300050/default.avif?g0=1755520809",
      percentage: 71,
      description: "cipher protocol hacker pulse quantum flux matrix",
    },
    {
      name: "Con Đường Cuồng Nộ",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300051/default.avif?g0=1755520809",
      percentage: 85,
      description: "neon loop cascade hacker pulse quantum",
    },
    {
      name: "Đáy Xã Hội",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300052/default.avif?g0=1755520809",
      percentage: 94,
      description: "cascade circuit vector loop cipher neon hacker",
    },
    {
      name: "San Quentin xWays",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300053/default.avif?g0=1755520809",
      percentage: 65,
      description: "hacker cipher cascade pulse circuit vector matrix",
    },
    {
      name: "Hàng loạt",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300054/default.avif?g0=1755520809",
      percentage: 66,
      description: "loop matrix circuit flux quantum vector cipher",
    },
    {
      name: "Kẻ Xâm Lược Ngoài Hành Tinh",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300055/default.avif?g0=1755520809",
      percentage: 67,
      description: "vector quantum hacker loop cascade circuit protocol",
    },
    {
      name: "Sao Lấp Lánh",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300056/default.avif?g0=1755520809",
      percentage: 64,
      description: "circuit quantum cascade loop matrix",
    },
    {
      name: "Sốc Tesla",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300057/default.avif?g0=1755520809",
      percentage: 64,
      description: "cascade circuit cipher matrix hacker neon pulse",
    },
    {
      name: "Biên Giới",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300058/default.avif?g0=1755520809",
      percentage: 65,
      description: "circuit loop pulse hacker cipher quantum",
    },
    {
      name: "Cái Lồng",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300059/default.avif?g0=1755520809",
      percentage: 82,
      description: "protocol circuit cipher pulse vector",
    },
    {
      name: "Lễ Hội Hóa Trang Rùng Rợn",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300060/default.avif?g0=1755520809",
      percentage: 89,
      description: "matrix quantum circuit pulse protocol vector",
    },
    {
      name: "Hầm Mộ",
      image:
        "https://f168n.com/game_pictures/g/CL/130/3/1300061/default.avif?g0=1755520809",
      percentage: 83,
      description: "cipher pulse hacker loop cascade",
    },
  ]),
  redtiger: createGames("redtiger", [
    {
      name: "10001 đêm",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320001/default.avif?g0=1755520809",
      percentage: 68,
      description: "cipher neon loop matrix pulse quantum",
    },
    {
      name: "Giải Grand Prix 24 giờ",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320002/default.avif?g0=1755520809",
      percentage: 88,
      description: "cascade matrix hacker circuit protocol neon",
    },
    {
      name: "Đội 4",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320003/default.avif?g0=1755520809",
      percentage: 67,
      description: "quantum cascade vector cipher loop",
    },
    {
      name: "5 gia đình",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320004/default.avif?g0=1755520809",
      percentage: 86,
      description: "pulse neon cipher loop flux circuit matrix",
    },
    {
      name: "777 đình công",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320005/default.avif?g0=1755520809",
      percentage: 62,
      description: "quantum cascade circuit pulse flux",
    },
    {
      name: "đặc vụ hoàng gia",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320006/default.avif?g0=1755520809",
      percentage: 81,
      description: "cascade pulse protocol neon matrix flux",
    },
    {
      name: "chữ viết cổ đại",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320007/default.avif?g0=1755520809",
      percentage: 79,
      description: "hacker circuit cipher vector matrix",
    },
    {
      name: "Phước lành của người xưa",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320008/default.avif?g0=1755520809",
      percentage: 94,
      description: "quantum matrix cascade flux cipher hacker protocol",
    },
    {
      name: "Bom điện tử",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320009/default.avif?g0=1755520809",
      percentage: 64,
      description: "neon hacker loop quantum vector cascade circuit",
    },
    {
      name: "Atlantis",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320010/default.avif?g0=1755520809",
      percentage: 77,
      description: "matrix pulse vector neon flux protocol",
    },
    {
      name: "Aurum Codex",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320011/default.avif?g0=1755520809",
      percentage: 72,
      description: "quantum neon pulse cascade vector circuit",
    },
    {
      name: "Vòng quay Aztec",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320012/default.avif?g0=1755520809",
      percentage: 90,
      description: "vector cipher loop hacker matrix",
    },
    {
      name: "Betty. Boris và Boo",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320013/default.avif?g0=1755520809",
      percentage: 60,
      description: "quantum pulse neon protocol circuit matrix vector",
    },
    {
      name: "Kim cương xanh",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320014/default.avif?g0=1755520809",
      percentage: 77,
      description: "flux protocol cascade hacker circuit",
    },
    {
      name: "máy bay ném bom",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320015/default.avif?g0=1755520809",
      percentage: 90,
      description: "hacker vector cascade pulse circuit cipher",
    },
    {
      name: "Đột kích tiền thưởng",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320016/default.avif?g0=1755520809",
      percentage: 70,
      description: "neon vector cipher pulse loop hacker",
    },
    {
      name: "tiền mặt cuối cùng",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320017/default.avif?g0=1755520809",
      percentage: 66,
      description: "loop matrix vector protocol circuit",
    },
    {
      name: "tiền mặt",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320018/default.avif?g0=1755520809",
      percentage: 84,
      description: "flux matrix cascade neon protocol hacker vector",
    },
    {
      name: "Kho báu Trung Quốc",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320019/default.avif?g0=1755520809",
      percentage: 89,
      description: "loop matrix protocol vector cipher quantum circuit",
    },
    {
      name: "bóng của cô bé lọ lem",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320020/default.avif?g0=1755520809",
      percentage: 63,
      description: "cipher matrix pulse protocol neon",
    },
    {
      name: "Đoàn xiếc De La Fortune",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320021/default.avif?g0=1755520809",
      percentage: 75,
      description: "flux cascade neon pulse protocol cipher vector",
    },
    {
      name: "Cuộc đụng độ của những con thú",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320022/default.avif?g0=1755520809",
      percentage: 83,
      description: "protocol neon vector loop pulse",
    },
    {
      name: "thần đèn điên",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320023/default.avif?g0=1755520809",
      percentage: 69,
      description: "flux pulse circuit cipher vector",
    },
    {
      name: "gương pha lê",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320024/default.avif?g0=1755520809",
      percentage: 60,
      description: "matrix quantum flux pulse cipher",
    },
    {
      name: "Bí ẩn của Da Vinci",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320025/default.avif?g0=1755520809",
      percentage: 85,
      description: "hacker protocol flux pulse neon vector",
    },
    {
      name: "Con số ma quỷ",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320026/default.avif?g0=1755520809",
      percentage: 94,
      description: "vector neon flux cascade quantum",
    },
    {
      name: "kim cương chớp nhoáng",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320027/default.avif?g0=1755520809",
      percentage: 65,
      description: "cipher protocol quantum circuit flux",
    },
    {
      name: "xúc xắc xúc xắc xúc xắc",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320028/default.avif?g0=1755520809",
      percentage: 64,
      description: "pulse neon flux hacker quantum",
    },
    {
      name: "cách thần thánh",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320029/default.avif?g0=1755520809",
      percentage: 78,
      description: "quantum vector cascade pulse circuit matrix",
    },
    {
      name: "lửa rồng",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320030/default.avif?g0=1755520809",
      percentage: 69,
      description: "circuit hacker loop protocol vector cipher",
    },
    {
      name: "Rồng Lửa INFINIREELS",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320031/default.avif?g0=1755520809",
      percentage: 91,
      description: "cipher flux pulse circuit loop",
    },
    {
      name: "Dragon's Fire Megaways™",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320032/default.avif?g0=1755520809",
      percentage: 60,
      description: "neon quantum hacker vector protocol circuit cascade",
    },
    {
      name: "Rồng may mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320033/default.avif?g0=1755520809",
      percentage: 78,
      description: "circuit vector neon matrix pulse",
    },
    {
      name: "Dragon's Luck Deluxe",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320034/default.avif?g0=1755520809",
      percentage: 79,
      description: "loop matrix cascade hacker protocol circuit",
    },
    {
      name: "Dragon's Luck Megaways™",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320035/default.avif?g0=1755520809",
      percentage: 82,
      description: "cipher neon pulse loop protocol hacker",
    },
    {
      name: "Cuộn sức mạnh may mắn của rồng",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320036/default.avif?g0=1755520809",
      percentage: 76,
      description: "flux matrix protocol hacker neon",
    },
    {
      name: "Dynamite Riches MegaWays",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320037/default.avif?g0=1755520809",
      percentage: 83,
      description: "flux vector loop matrix protocol pulse quantum",
    },
    {
      name: "đại bàng giàu có",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320038/default.avif?g0=1755520809",
      percentage: 63,
      description: "pulse vector flux protocol neon cascade",
    },
    {
      name: "Yêu TinhMa Thuật",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320039/default.avif?g0=1755520809",
      percentage: 76,
      description: "matrix pulse quantum protocol loop flux neon",
    },
    {
      name: "kim cương ngọc lục bảo",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320040/default.avif?g0=1755520809",
      percentage: 70,
      description: "neon protocol vector cascade loop",
    },
    {
      name: "Hành trình sử thi",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320041/default.avif?g0=1755520809",
      percentage: 68,
      description: "hacker protocol quantum matrix pulse loop",
    },
    {
      name: "Esqueleto Mariachi",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320042/default.avif?g0=1755520809",
      percentage: 66,
      description: "loop cascade neon matrix cipher",
    },
    {
      name: "Năm sao",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320043/default.avif?g0=1755520809",
      percentage: 91,
      description: "vector flux loop pulse neon matrix quantum",
    },
    {
      name: "cuộn điện năm sao",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320044/default.avif?g0=1755520809",
      percentage: 79,
      description: "circuit hacker loop quantum matrix flux cascade",
    },
    {
      name: "cáo lửa",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320045/default.avif?g0=1755520809",
      percentage: 73,
      description: "neon cascade circuit vector matrix",
    },
    {
      name: "bùa may mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320046/default.avif?g0=1755520809",
      percentage: 73,
      description: "cipher cascade matrix quantum neon",
    },
    {
      name: "lễ hội may mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320047/default.avif?g0=1755520809",
      percentage: 66,
      description: "pulse quantum matrix cipher protocol neon",
    },
    {
      name: "Ngôi nhà may mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320048/default.avif?g0=1755520809",
      percentage: 92,
      description: "protocol quantum hacker loop matrix cascade",
    },
    {
      name: "quả khối",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320049/default.avif?g0=1755520809",
      percentage: 67,
      description: "vector cascade hacker circuit pulse neon cipher",
    },
    {
      name: "trái cây chụp",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320050/default.avif?g0=1755520809",
      percentage: 94,
      description: "loop flux cascade cipher vector",
    },
    {
      name: "đá quý đi hoang dã",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320051/default.avif?g0=1755520809",
      percentage: 65,
      description: "cipher matrix quantum neon flux",
    },
    {
      name: "Gems Gone Wild Power Reels",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320052/default.avif?g0=1755520809",
      percentage: 92,
      description: "vector pulse cascade flux matrix protocol quantum",
    },
    {
      name: "đá quý",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320053/default.avif?g0=1755520809",
      percentage: 74,
      description: "protocol cascade vector neon flux cipher",
    },
    {
      name: "Thần tài",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320054/default.avif?g0=1755520809",
      percentage: 85,
      description: "cipher hacker quantum cascade neon protocol",
    },
    {
      name: "Ngôi sao vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320055/default.avif?g0=1755520809",
      percentage: 76,
      description: "flux neon pulse loop vector cascade quantum",
    },
    {
      name: "Tiền điện tử vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320056/default.avif?g0=1755520809",
      percentage: 91,
      description: "quantum cipher hacker loop protocol vector",
    },
    {
      name: "Golden Leprechaun Megaways™",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320057/default.avif?g0=1755520809",
      percentage: 79,
      description: "cascade circuit quantum vector neon pulse hacker",
    },
    {
      name: "bông Sen Vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320058/default.avif?g0=1755520809",
      percentage: 93,
      description: "protocol circuit pulse vector cipher hacker",
    },
    {
      name: "Ưu đãi vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320059/default.avif?g0=1755520809",
      percentage: 89,
      description: "hacker flux protocol cipher neon",
    },
    {
      name: "Chùa Vàng/Chùa Vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/32/3/320060/default.avif?g0=1755520809",
      percentage: 84,
      description: "loop circuit hacker cipher cascade neon vector",
    },
  ]),
  va: createGames("va", [
    {
      name: "Dragon Treasure 4",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260001/default.avif?g0=1755520809",
      percentage: 67,
      description: "cipher flux neon hacker protocol",
    },
    {
      name: "Wild Fortune 2",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260002/default.avif?g0=1755520809",
      percentage: 74,
      description: "protocol cipher neon pulse hacker vector loop",
    },
    {
      name: "Mahjong Self-Drawn Win 3",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260003/default.avif?g0=1755520809",
      percentage: 83,
      description: "cascade loop vector hacker quantum flux",
    },
    {
      name: "Golden Empire2",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260004/default.avif?g0=1755520809",
      percentage: 76,
      description: "loop vector pulse circuit cascade",
    },
    {
      name: "Dragon’s Treasure 3 M",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260005/default.avif?g0=1755520809",
      percentage: 76,
      description: "cipher quantum vector cascade matrix circuit loop",
    },
    {
      name: "Mahjong Self-Drawn Win",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260006/default.avif?g0=1755520809",
      percentage: 83,
      description: "cascade vector protocol neon matrix flux pulse",
    },
    {
      name: "Mahjong Self-Drawn Win 2",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260007/default.avif?g0=1755520809",
      percentage: 71,
      description: "protocol quantum hacker flux circuit neon",
    },
    {
      name: "Dragon's Treasure 3",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260008/default.avif?g0=1755520809",
      percentage: 72,
      description: "neon vector matrix circuit cascade protocol pulse",
    },
    {
      name: "Wild Fortune",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260009/default.avif?g0=1755520809",
      percentage: 94,
      description: "neon quantum hacker loop pulse protocol cipher",
    },
    {
      name: "Fireworks Blessings",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260010/default.avif?g0=1755520809",
      percentage: 73,
      description: "matrix loop cascade flux cipher quantum",
    },
    {
      name: "Three Star Fortune",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260011/default.avif?g0=1755520809",
      percentage: 62,
      description: "neon matrix loop vector protocol",
    },
    {
      name: "Lion Dance",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260012/default.avif?g0=1755520809",
      percentage: 75,
      description: "hacker matrix cascade vector loop flux",
    },
    {
      name: "Hot Ace",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260013/default.avif?g0=1755520809",
      percentage: 63,
      description: "quantum pulse loop cascade neon matrix",
    },
    {
      name: "Emperor Qin Shi Huang PLUS",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260014/default.avif?g0=1755520809",
      percentage: 85,
      description: "flux vector loop protocol cascade circuit hacker",
    },
    {
      name: "Chili King",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260015/default.avif?g0=1755520809",
      percentage: 90,
      description: "loop flux vector neon circuit",
    },
    {
      name: "Candy Crush Saga",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260016/default.avif?g0=1755520809",
      percentage: 81,
      description: "pulse hacker quantum protocol matrix cipher flux",
    },
    {
      name: "Maneki Neko",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260018/default.avif?g0=1755520809",
      percentage: 72,
      description: "flux vector protocol loop circuit cascade cipher",
    },
    {
      name: "Maya Empire",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260019/default.avif?g0=1755520809",
      percentage: 82,
      description: "vector loop flux cascade cipher quantum pulse",
    },
    {
      name: "Rich roll in",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260022/default.avif?g0=1755520809",
      percentage: 83,
      description: "protocol neon cipher flux circuit matrix",
    },
    {
      name: "Rocket God of Wealth",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260024/default.avif?g0=1755520809",
      percentage: 85,
      description: "circuit pulse flux matrix loop vector",
    },
    {
      name: "Crazy Diamonds",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260025/default.avif?g0=1755520809",
      percentage: 69,
      description: "protocol matrix cipher loop neon flux pulse",
    },
    {
      name: "Gold Miner",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260026/default.avif?g0=1755520809",
      percentage: 77,
      description: "loop pulse quantum neon vector circuit hacker",
    },
    {
      name: "Legend of Phoenix",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260027/default.avif?g0=1755520809",
      percentage: 66,
      description: "cipher circuit cascade quantum flux matrix",
    },
    {
      name: "Golden Maitreya",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260029/default.avif?g0=1755520809",
      percentage: 78,
      description: "hacker quantum vector circuit protocol cascade cipher",
    },
    {
      name: "Golden Empire",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260030/default.avif?g0=1755520809",
      percentage: 73,
      description: "matrix protocol cipher cascade pulse quantum vector",
    },
    {
      name: "Wild Legends",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260032/default.avif?g0=1755520809",
      percentage: 81,
      description: "matrix cipher protocol flux neon",
    },
    {
      name: "Gem Gala",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260033/default.avif?g0=1755520809",
      percentage: 79,
      description: "cipher matrix pulse vector loop",
    },
    {
      name: "open sesame",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260034/default.avif?g0=1755520809",
      percentage: 70,
      description: "flux pulse cipher matrix neon vector",
    },
    {
      name: "The Hand of Midas",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260035/default.avif?g0=1755520809",
      percentage: 95,
      description: "quantum flux protocol matrix circuit loop",
    },
    {
      name: "Kingdom of Fire Dragon",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260039/default.avif?g0=1755520809",
      percentage: 63,
      description: "matrix cipher cascade protocol loop",
    },
    {
      name: "Robin Hood",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260041/default.avif?g0=1755520809",
      percentage: 93,
      description: "pulse cascade hacker circuit neon flux",
    },
    {
      name: "Cuộc đối đầu Vĩnh Hằng Đêm",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260043/default.avif?g0=1755520809",
      percentage: 91,
      description: "matrix circuit quantum protocol hacker vector",
    },
    {
      name: "Bậc thầy khai thác",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260044/default.avif?g0=1755520809",
      percentage: 95,
      description: "pulse circuit cipher hacker matrix neon",
    },
    {
      name: "Khủng long dã",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260045/default.avif?g0=1755520809",
      percentage: 74,
      description: "loop cascade hacker protocol quantum circuit matrix",
    },
    {
      name: "Inca Zuma",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260046/default.avif?g0=1755520809",
      percentage: 79,
      description: "vector circuit matrix cipher loop pulse neon",
    },
    {
      name: "Tự Rút Mạt Chược 4",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260047/default.avif?g0=1755520809",
      percentage: 93,
      description: "matrix protocol pulse neon circuit flux vector",
    },
    {
      name: "Đấu sĩ La Mã",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260048/default.avif?g0=1755520809",
      percentage: 66,
      description: "pulse circuit hacker loop neon flux",
    },
    {
      name: "Piñata",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260049/default.avif?g0=1755520809",
      percentage: 86,
      description: "flux cipher circuit cascade matrix",
    },
    {
      name: "Thần Rèn Lửa",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260050/default.avif?g0=1755520809",
      percentage: 64,
      description: "neon hacker vector flux cipher loop protocol",
    },
    {
      name: "Phù Thủy Rồng",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260051/default.avif?g0=1755520809",
      percentage: 90,
      description: "matrix cascade loop cipher hacker vector quantum",
    },
    {
      name: "Đại Cát Đại Lợi",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260052/default.avif?g0=1755520809",
      percentage: 72,
      description: "loop quantum matrix cascade flux hacker",
    },
    {
      name: "Đế Chế Mạt Chược",
      image:
        "https://f168n.com/game_pictures/g/CL/326/3/3260053/default.avif?g0=1755520809",
      percentage: 64,
      description: "protocol loop cipher quantum circuit vector matrix",
    },
  ]),
  mw: createGames("mw", [
    {
      name: "Cú đánh mạt chược",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250060/default.avif?g0=1755520809",
      percentage: 82,
      description: "circuit neon cipher pulse matrix protocol",
    },
    {
      name: "Cú đánh mạt chược+",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250059/default.avif?g0=1755520809",
      percentage: 88,
      description: "circuit neon protocol loop hacker",
    },
    {
      name: "Cừu Điên",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250004/default.avif?g0=1755520809",
      percentage: 93,
      description: "pulse circuit loop quantum vector cipher",
    },
    {
      name: "Nông trại Vui vẻ",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250005/default.avif?g0=1755520809",
      percentage: 78,
      description: "cipher quantum flux circuit cascade protocol",
    },
    {
      name: "MEGA Át",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250006/default.avif?g0=1755520809",
      percentage: 86,
      description: "protocol cascade quantum neon vector pulse",
    },
    {
      name: "Vũ hội rừng xanh 3",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250007/default.avif?g0=1755520809",
      percentage: 61,
      description: "matrix cascade quantum pulse protocol loop flux",
    },
    {
      name: "Vũ hội rừng xanh(H5)",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250008/default.avif?g0=1755520809",
      percentage: 70,
      description: "quantum flux circuit protocol cascade cipher pulse",
    },
    {
      name: "Cá Vàng Cá Bạc (H5)",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250009/default.avif?g0=1755520809",
      percentage: 82,
      description: "loop protocol hacker vector circuit",
    },
    {
      name: "Trái Cây Slots 2(H5)",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250010/default.avif?g0=1755520809",
      percentage: 76,
      description: "flux quantum neon loop pulse vector protocol",
    },
    {
      name: "Trái Cây Slots (H5)",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250011/default.avif?g0=1755520809",
      percentage: 89,
      description: "loop quantum vector flux circuit hacker",
    },
    {
      name: "Vua 777",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250012/default.avif?g0=1755520809",
      percentage: 82,
      description: "circuit vector cascade cipher neon",
    },
    {
      name: "Vàng 777(H5)",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250013/default.avif?g0=1755520809",
      percentage: 72,
      description: "vector circuit quantum cascade matrix pulse flux",
    },
    {
      name: "trà sữa",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250014/default.avif?g0=1755520809",
      percentage: 80,
      description: "loop cascade hacker flux matrix vector cipher",
    },
    {
      name: "Đại Phát Tài (H5)",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250015/default.avif?g0=1755520809",
      percentage: 79,
      description: "cascade loop vector circuit protocol",
    },
    {
      name: "Cá Cá Cá (H5)",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250016/default.avif?g0=1755520809",
      percentage: 81,
      description: "circuit hacker protocol flux loop neon",
    },
    {
      name: "Rogue Hero (H5)",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250017/default.avif?g0=1755520809",
      percentage: 79,
      description: "loop protocol cascade hacker quantum cipher neon",
    },
    {
      name: "Thủy Hử (H5)",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250018/default.avif?g0=1755520809",
      percentage: 71,
      description: "pulse neon hacker flux cipher",
    },
    {
      name: "Cây thông Plinko 2",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250019/default.avif?g0=1755520809",
      percentage: 63,
      description: "cipher loop matrix hacker quantum circuit",
    },
    {
      name: "C-88 Hoa Phú Quý (H5)",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250025/default.avif?g0=1755520809",
      percentage: 81,
      description: "cascade pulse circuit quantum loop",
    },
    {
      name: "C-88 Trống (H5)",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250026/default.avif?g0=1755520809",
      percentage: 85,
      description: "circuit loop cascade hacker pulse quantum flux",
    },
    {
      name: "C-88 Kim cương (H5)",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250027/default.avif?g0=1755520809",
      percentage: 76,
      description: "neon quantum matrix cascade circuit",
    },
    {
      name: "C-88 Châu báu (H5)",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250028/default.avif?g0=1755520809",
      percentage: 94,
      description: "flux cascade neon matrix pulse hacker",
    },
    {
      name: "C-88 Phát tài (H5)",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250029/default.avif?g0=1755520809",
      percentage: 66,
      description: "circuit protocol cascade cipher pulse hacker",
    },
    {
      name: "Gấu Trúc Vàng (H5)",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250030/default.avif?g0=1755520809",
      percentage: 70,
      description: "circuit cascade matrix loop cipher",
    },
    {
      name: "Mèo Tài Lộc (H5)",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250031/default.avif?g0=1755520809",
      percentage: 82,
      description: "neon cascade circuit hacker loop pulse",
    },
    {
      name: "Đấu trường Rồng",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250032/default.avif?g0=1755520809",
      percentage: 78,
      description: "cipher circuit vector hacker quantum",
    },
    {
      name: "L- 황금두꺼비",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250033/default.avif?g0=1755520809",
      percentage: 93,
      description: "protocol flux cascade hacker circuit pulse matrix",
    },
    {
      name: "L- Kho Báu Đế Vương",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250034/default.avif?g0=1755520809",
      percentage: 64,
      description: "matrix vector loop cascade protocol pulse",
    },
    {
      name: "L- Con Mắt Tiền Tài",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250035/default.avif?g0=1755520809",
      percentage: 93,
      description: "circuit protocol pulse neon matrix cipher",
    },
    {
      name: "L- Kho báu rồng",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250036/default.avif?g0=1755520809",
      percentage: 77,
      description: "cipher cascade vector pulse quantum protocol",
    },
    {
      name: "Đại Phúc Đại Tài",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250037/default.avif?g0=1755520809",
      percentage: 86,
      description: "matrix protocol pulse quantum cipher circuit vector",
    },
    {
      name: "Hành trình về phía tây",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250038/default.avif?g0=1755520809",
      percentage: 61,
      description: "quantum hacker loop vector matrix circuit",
    },
    {
      name: "Túi may mắn-Rồng",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250039/default.avif?g0=1755520809",
      percentage: 89,
      description: "matrix flux vector hacker protocol",
    },
    {
      name: "Túi may mắn-gấu trúc",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250040/default.avif?g0=1755520809",
      percentage: 69,
      description: "flux cascade vector loop protocol",
    },
    {
      name: "câu lạc bộ VIP",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250041/default.avif?g0=1755520809",
      percentage: 85,
      description: "matrix quantum circuit cipher vector",
    },
    {
      name: "G-피는 부",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250043/default.avif?g0=1755520809",
      percentage: 95,
      description: "neon circuit loop protocol hacker cascade",
    },
    {
      name: "G-Trống vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250044/default.avif?g0=1755520809",
      percentage: 69,
      description: "circuit vector cipher hacker loop quantum pulse",
    },
    {
      name: "G-Kim cương chói lọi",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250045/default.avif?g0=1755520809",
      percentage: 78,
      description: "cipher loop cascade flux protocol vector matrix",
    },
    {
      name: "G-Kho báu Bất tận",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250046/default.avif?g0=1755520809",
      percentage: 66,
      description: "loop hacker cascade pulse quantum",
    },
    {
      name: "G-Kho Báu May Mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250047/default.avif?g0=1755520809",
      percentage: 83,
      description: "loop circuit neon pulse cipher protocol matrix",
    },
    {
      name: "Cá May Mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250048/default.avif?g0=1755520809",
      percentage: 82,
      description: "protocol hacker pulse quantum vector cipher",
    },
    {
      name: "F-88 Hoa Phú Quý (H5)",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250049/default.avif?g0=1755520809",
      percentage: 85,
      description: "cascade quantum cipher neon circuit loop",
    },
    {
      name: "F-88 Trống (H5)",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250050/default.avif?g0=1755520809",
      percentage: 71,
      description: "vector cipher cascade flux quantum matrix neon",
    },
    {
      name: "F-88 Kim cương (H5)",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250051/default.avif?g0=1755520809",
      percentage: 83,
      description: "cipher flux pulse hacker protocol circuit",
    },
    {
      name: "F-88 Châu báu (H5)",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250052/default.avif?g0=1755520809",
      percentage: 86,
      description: "loop circuit cipher hacker flux",
    },
    {
      name: "F-88 Phát tài (H5)",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250053/default.avif?g0=1755520809",
      percentage: 61,
      description: "matrix cipher flux hacker circuit",
    },
    {
      name: "Cát Tường Như Ý (H5)",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250054/default.avif?g0=1755520809",
      percentage: 80,
      description: "hacker circuit loop cipher vector neon protocol",
    },
    {
      name: "Ngũ Thần Tài (H5)",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250055/default.avif?g0=1755520809",
      percentage: 80,
      description: "vector loop protocol circuit quantum flux",
    },
    {
      name: "Ngũ Long Xưng Bá (H5)",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250056/default.avif?g0=1755520809",
      percentage: 72,
      description: "matrix circuit flux quantum cipher vector cascade",
    },
    {
      name: "Cú đánh mạt chược2+",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250057/default.avif?g0=1755520809",
      percentage: 73,
      description: "cipher matrix circuit hacker neon cascade",
    },
    {
      name: "Mạt chược điên",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250058/default.avif?g0=1755520809",
      percentage: 64,
      description: "quantum flux neon vector cascade pulse",
    },
    {
      name: "hạnh phúc-loại bỏ",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250061/default.avif?g0=1755520809",
      percentage: 94,
      description: "protocol vector cascade neon circuit",
    },
    {
      name: "XiBoBa Hit",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250062/default.avif?g0=1755520809",
      percentage: 61,
      description: "flux loop quantum circuit protocol hacker matrix",
    },
    {
      name: "Cú đánh mạt chược2",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250063/default.avif?g0=1755520809",
      percentage: 83,
      description: "hacker vector matrix protocol flux pulse",
    },
    {
      name: "Loki tiền thưởng",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250064/default.avif?g0=1755520809",
      percentage: 74,
      description: "cipher loop neon cascade vector",
    },
    {
      name: "trà sữa-loại bỏ",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250065/default.avif?g0=1755520809",
      percentage: 88,
      description: "circuit pulse cipher flux cascade neon matrix",
    },
    {
      name: "Poseidon",
      image:
        "https://f168n.com/game_pictures/g/CL/325/3/3250071/default.avif?g0=1755520809",
      percentage: 87,
      description: "cascade circuit hacker neon vector",
    },
  ]),
  bgaming: createGames("bgaming", [
    {
      name: "Treasure of Anubis",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420002/default.avif?g0=1755520809",
      percentage: 62,
      description: "hacker cipher pulse matrix circuit",
    },
    {
      name: "Fortune Bells",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420003/default.avif?g0=1755520809",
      percentage: 79,
      description: "vector circuit cascade cipher loop matrix hacker",
    },
    {
      name: "Alice WonderLuck",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420004/default.avif?g0=1755520809",
      percentage: 73,
      description: "pulse loop matrix quantum flux cascade",
    },
    {
      name: "Wild Card Gang",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420005/default.avif?g0=1755520809",
      percentage: 89,
      description: "vector quantum cipher pulse neon matrix",
    },
    {
      name: "All-Star Fruits",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420007/default.avif?g0=1755520809",
      percentage: 62,
      description: "vector matrix quantum neon protocol circuit hacker",
    },
    {
      name: "Joker's Million",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420008/default.avif?g0=1755520809",
      percentage: 63,
      description: "pulse cipher vector matrix flux circuit",
    },
    {
      name: "Winter Fishing Club",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420009/default.avif?g0=1755520809",
      percentage: 92,
      description: "matrix circuit hacker flux vector neon protocol",
    },
    {
      name: "Hot Chilli Bells",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420010/default.avif?g0=1755520809",
      percentage: 78,
      description: "pulse cascade flux circuit cipher vector neon",
    },
    {
      name: "Disco Party",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420011/default.avif?g0=1755520809",
      percentage: 72,
      description: "vector pulse matrix quantum circuit protocol flux",
    },
    {
      name: "Sakura Riches 60",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420012/default.avif?g0=1755520809",
      percentage: 71,
      description: "pulse circuit cascade protocol vector loop",
    },
    {
      name: "Lucky Ducky",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420013/default.avif?g0=1755520809",
      percentage: 61,
      description: "circuit protocol cascade flux loop",
    },
    {
      name: "Wild Moon Thieves",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420014/default.avif?g0=1755520809",
      percentage: 76,
      description: "loop vector hacker flux matrix quantum",
    },
    {
      name: "Golden Pride",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420015/default.avif?g0=1755520809",
      percentage: 74,
      description: "matrix neon flux vector cipher circuit pulse",
    },
    {
      name: "Catdiana",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420016/default.avif?g0=1755520809",
      percentage: 65,
      description: "cascade cipher circuit matrix protocol flux quantum",
    },
    {
      name: "Snoop Dogg Dollars",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420017/default.avif?g0=1755520809",
      percentage: 65,
      description: "cascade hacker cipher flux neon pulse",
    },
    {
      name: "Forgotten",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420018/default.avif?g0=1755520809",
      percentage: 95,
      description: "neon loop hacker vector cipher flux",
    },
    {
      name: "Rotating Element",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420019/default.avif?g0=1755520809",
      percentage: 65,
      description: "quantum cascade neon vector flux cipher protocol",
    },
    {
      name: "Haunted Reels",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420020/default.avif?g0=1755520809",
      percentage: 84,
      description: "neon protocol matrix circuit hacker",
    },
    {
      name: "Carnival Bonanza",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420021/default.avif?g0=1755520809",
      percentage: 61,
      description: "matrix flux cascade loop pulse circuit",
    },
    {
      name: "Fortuna Trueways",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420023/default.avif?g0=1755520809",
      percentage: 81,
      description: "protocol neon cascade quantum loop",
    },
    {
      name: "Voodoo People",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420024/default.avif?g0=1755520809",
      percentage: 86,
      description: "neon vector circuit hacker cipher quantum",
    },
    {
      name: "Royal Fruits MultiLines",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420025/default.avif?g0=1755520809",
      percentage: 84,
      description: "quantum flux cascade loop matrix pulse",
    },
    {
      name: "Train to Rio Grande",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420026/default.avif?g0=1755520809",
      percentage: 86,
      description: "flux cipher circuit protocol cascade",
    },
    {
      name: "Kraken's hunger",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420027/default.avif?g0=1755520809",
      percentage: 79,
      description: "matrix protocol hacker cipher flux cascade",
    },
    {
      name: "Catch The Gold Hold And Win",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420028/default.avif?g0=1755520809",
      percentage: 93,
      description: "flux protocol neon cascade quantum",
    },
    {
      name: "Wild West TRUEWAYS",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420030/default.avif?g0=1755520809",
      percentage: 68,
      description: "cipher flux matrix loop hacker pulse",
    },
    {
      name: "Secret Bar MultiDice X",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420032/default.avif?g0=1755520809",
      percentage: 90,
      description: "pulse loop cascade circuit cipher neon hacker",
    },
    {
      name: "Gold Magnate",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420033/default.avif?g0=1755520809",
      percentage: 87,
      description: "hacker cipher loop neon circuit",
    },
    {
      name: "Alien Fruits 2",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420034/default.avif?g0=1755520809",
      percentage: 89,
      description: "quantum cipher pulse neon matrix",
    },
    {
      name: "Dragon Age",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420035/default.avif?g0=1755520809",
      percentage: 73,
      description: "quantum protocol vector matrix pulse neon",
    },
    {
      name: "Fishing Club",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420036/default.avif?g0=1755520809",
      percentage: 78,
      description: "circuit quantum hacker pulse neon cascade",
    },
    {
      name: "Gold of Minos",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420037/default.avif?g0=1755520809",
      percentage: 84,
      description: "vector circuit protocol flux quantum cascade cipher",
    },
    {
      name: "Panda Luck",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420038/default.avif?g0=1755520809",
      percentage: 61,
      description: "flux quantum cascade matrix cipher hacker",
    },
    {
      name: "Chicken Rush",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420039/default.avif?g0=1755520809",
      percentage: 73,
      description: "vector neon pulse matrix flux cipher",
    },
    {
      name: "OOF The Goldmine Planet",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420040/default.avif?g0=1755520809",
      percentage: 86,
      description: "neon circuit vector hacker protocol flux",
    },
    {
      name: "Lucky Dragon MultiDice X",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420041/default.avif?g0=1755520809",
      percentage: 62,
      description: "vector hacker pulse protocol cipher circuit flux",
    },
    {
      name: "Diamond Of Jungle",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420042/default.avif?g0=1755520809",
      percentage: 92,
      description: "pulse quantum vector matrix protocol hacker",
    },
    {
      name: "Lucky 8 Merge Up",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420043/default.avif?g0=1755520809",
      percentage: 84,
      description: "quantum matrix protocol neon cascade",
    },
    {
      name: "Pop Zen",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420044/default.avif?g0=1755520809",
      percentage: 85,
      description: "quantum cascade neon vector protocol cipher",
    },
    {
      name: "Aztec Clusters",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420045/default.avif?g0=1755520809",
      percentage: 76,
      description: "protocol pulse loop cascade cipher circuit",
    },
    {
      name: "Wild Heart",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420046/default.avif?g0=1755520809",
      percentage: 76,
      description: "neon cascade hacker pulse cipher protocol",
    },
    {
      name: "God of Wealth Hold And Win",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420047/default.avif?g0=1755520809",
      percentage: 70,
      description: "flux neon cascade protocol quantum matrix",
    },
    {
      name: "Wild Tiger",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420048/default.avif?g0=1755520809",
      percentage: 72,
      description: "protocol circuit loop flux matrix vector",
    },
    {
      name: "Gemza",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420049/default.avif?g0=1755520809",
      percentage: 74,
      description: "neon flux cascade loop vector quantum hacker",
    },
    {
      name: "Slot Machine",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420050/default.avif?g0=1755520809",
      percentage: 89,
      description: "loop vector circuit flux pulse cipher",
    },
    {
      name: "Tramp Day",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420052/default.avif?g0=1755520809",
      percentage: 90,
      description: "circuit flux hacker pulse loop matrix",
    },
    {
      name: "Book of Panda Megaways",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420053/default.avif?g0=1755520809",
      percentage: 73,
      description: "flux circuit vector matrix protocol cipher pulse",
    },
    {
      name: "Mummy's Gold",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420054/default.avif?g0=1755520809",
      percentage: 80,
      description: "quantum cascade cipher neon hacker circuit",
    },
    {
      name: "Merge Up",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420055/default.avif?g0=1755520809",
      percentage: 69,
      description: "matrix hacker quantum vector neon protocol",
    },
    {
      name: "Monster Hunt",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420056/default.avif?g0=1755520809",
      percentage: 81,
      description: "loop cipher pulse matrix circuit",
    },
    {
      name: "Mice&Magic",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420057/default.avif?g0=1755520809",
      percentage: 80,
      description: "loop vector circuit neon quantum",
    },
    {
      name: "Bone Bonanza",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420058/default.avif?g0=1755520809",
      percentage: 60,
      description: "hacker vector circuit matrix protocol cipher flux",
    },
    {
      name: "Maneki 88 Fortunes",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420059/default.avif?g0=1755520809",
      percentage: 94,
      description: "protocol hacker flux pulse cipher vector neon",
    },
    {
      name: "Wild Cash Dice",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420060/default.avif?g0=1755520809",
      percentage: 76,
      description: "flux quantum neon vector protocol cipher",
    },
    {
      name: "Savage Buffalo Spirit Megaways",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420061/default.avif?g0=1755520809",
      percentage: 72,
      description: "cascade quantum vector neon circuit matrix",
    },
    {
      name: "Dice Million",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420062/default.avif?g0=1755520809",
      percentage: 65,
      description: "hacker flux cascade vector protocol circuit",
    },
    {
      name: "Luck and Magic",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420063/default.avif?g0=1755520809",
      percentage: 63,
      description: "protocol circuit loop hacker cascade",
    },
    {
      name: "Dice Bonanza",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420064/default.avif?g0=1755520809",
      percentage: 89,
      description: "cipher pulse matrix quantum vector cascade flux",
    },
    {
      name: "Beast Band",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420065/default.avif?g0=1755520809",
      percentage: 68,
      description: "flux cascade quantum loop vector",
    },
    {
      name: "Wild Chicago",
      image:
        "https://f168n.com/game_pictures/g/CL/342/3/3420066/default.avif?g0=1755520809",
      percentage: 77,
      description: "matrix circuit quantum flux neon",
    },
  ]),
  mp: createGames("mp", [
    {
      name: "88FA JACKPOT",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470002/default.avif?g0=1755520809",
      percentage: 78,
      description: "cascade cipher quantum matrix vector flux",
    },
    {
      name: "Fortune Tree JACKPOT",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470003/default.avif?g0=1755520809",
      percentage: 80,
      description: "cipher cascade circuit vector loop",
    },
    {
      name: "Lion Dance JACKPOT",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470004/default.avif?g0=1755520809",
      percentage: 73,
      description: "cipher pulse quantum protocol hacker",
    },
    {
      name: "Golden Dragon JACKPOT",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470005/default.avif?g0=1755520809",
      percentage: 61,
      description: "matrix neon hacker loop cipher protocol",
    },
    {
      name: "Mega Fruit JACKPOT",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470006/default.avif?g0=1755520809",
      percentage: 89,
      description: "cascade loop protocol flux circuit pulse cipher",
    },
    {
      name: "Mouse Gold2 JACKPOT",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470007/default.avif?g0=1755520809",
      percentage: 63,
      description: "cipher matrix protocol loop circuit",
    },
    {
      name: "Diamond 777 JACKPOT",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470008/default.avif?g0=1755520809",
      percentage: 83,
      description: "neon protocol cascade loop flux",
    },
    {
      name: "Double Dolphin JACKPOT",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470009/default.avif?g0=1755520809",
      percentage: 77,
      description: "vector protocol pulse cascade circuit flux",
    },
    {
      name: "Bikini Queen Dating",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470010/default.avif?g0=1755520809",
      percentage: 82,
      description: "circuit loop flux protocol vector quantum pulse",
    },
    {
      name: "Công chúa đá quý",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470011/default.avif?g0=1755520809",
      percentage: 79,
      description: "quantum vector cascade protocol pulse cipher circuit",
    },
    {
      name: "POSEIDON THE GOLD OF SEA",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470012/default.avif?g0=1755520809",
      percentage: 91,
      description: "quantum circuit matrix pulse cascade vector",
    },
    {
      name: "Gold Rush",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470013/default.avif?g0=1755520809",
      percentage: 64,
      description: "neon pulse protocol cipher hacker loop circuit",
    },
    {
      name: "Legend of Horus",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470014/default.avif?g0=1755520809",
      percentage: 95,
      description: "pulse hacker matrix cascade neon loop",
    },
    {
      name: "Fortune Baby",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470015/default.avif?g0=1755520809",
      percentage: 82,
      description: "pulse cipher cascade vector matrix flux quantum",
    },
    {
      name: "Bikini Dreams",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470016/default.avif?g0=1755520809",
      percentage: 88,
      description: "pulse cipher flux protocol circuit",
    },
    {
      name: "Royal Ganesha",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470017/default.avif?g0=1755520809",
      percentage: 70,
      description: "quantum pulse matrix neon hacker circuit cipher",
    },
    {
      name: "BINGO GO",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470018/default.avif?g0=1755520809",
      percentage: 61,
      description: "flux pulse quantum hacker cascade vector",
    },
    {
      name: "SUPER MEGA Fruits",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470019/default.avif?g0=1755520809",
      percentage: 72,
      description: "hacker cascade cipher pulse neon loop circuit",
    },
    {
      name: "Dragon Phoenix",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470020/default.avif?g0=1755520809",
      percentage: 62,
      description: "protocol pulse loop flux cascade quantum hacker",
    },
    {
      name: "Gold of Egypt",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470021/default.avif?g0=1755520809",
      percentage: 71,
      description: "cipher quantum circuit neon pulse vector flux",
    },
    {
      name: "Turbo Gems",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470022/default.avif?g0=1755520809",
      percentage: 95,
      description: "matrix quantum cascade protocol pulse circuit flux",
    },
    {
      name: "Tinh Linh May Mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470023/default.avif?g0=1755520809",
      percentage: 81,
      description: "cascade neon flux cipher matrix",
    },
    {
      name: "Ganesha May Mắn",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470024/default.avif?g0=1755520809",
      percentage: 69,
      description: "protocol circuit loop matrix neon quantum",
    },
    {
      name: "Cơn Bão Hải Tặc Bản Nâng Cao",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470025/default.avif?g0=1755520809",
      percentage: 70,
      description: "hacker matrix pulse circuit loop quantum",
    },
    {
      name: "Ai Cập vàng",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470026/default.avif?g0=1755520809",
      percentage: 89,
      description: "pulse cascade protocol flux neon circuit loop",
    },
    {
      name: "Tokyo Sweeties",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470027/default.avif?g0=1755520809",
      percentage: 92,
      description: "loop circuit cascade pulse quantum",
    },
    {
      name: "ĐOẠT BẢO THUYỀN KỲ",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470028/default.avif?g0=1755520809",
      percentage: 73,
      description: "protocol vector loop matrix quantum circuit",
    },
    {
      name: "vương quốc Tinh linh",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470029/default.avif?g0=1755520809",
      percentage: 66,
      description: "cipher hacker flux loop matrix protocol",
    },
    {
      name: "trò chơi võ sĩ Taisho",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470030/default.avif?g0=1755520809",
      percentage: 85,
      description: "circuit loop pulse cascade matrix",
    },
    {
      name: "làng yêu quái",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470031/default.avif?g0=1755520809",
      percentage: 76,
      description: "loop pulse quantum protocol cascade vector",
    },
    {
      name: "Ninja Master",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470032/default.avif?g0=1755520809",
      percentage: 68,
      description: "circuit pulse matrix quantum flux",
    },
    {
      name: "Bingo Fun",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470033/default.avif?g0=1755520809",
      percentage: 86,
      description: "flux quantum cipher hacker vector matrix neon",
    },
    {
      name: "Carnival Beats",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470034/default.avif?g0=1755520809",
      percentage: 94,
      description: "cipher hacker circuit pulse loop",
    },
    {
      name: "Thợ săn tiền thưởng",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470035/default.avif?g0=1755520809",
      percentage: 70,
      description: "vector neon flux loop pulse",
    },
    {
      name: "Treasure Comet",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470036/default.avif?g0=1755520809",
      percentage: 78,
      description: "pulse vector hacker circuit quantum",
    },
    {
      name: "DIỄM HẬU GIẢI MÃ",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470037/default.avif?g0=1755520809",
      percentage: 89,
      description: "cipher vector pulse hacker cascade circuit",
    },
    {
      name: "Bikini Queens",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470038/default.avif?g0=1755520809",
      percentage: 91,
      description: "vector circuit cascade pulse quantum protocol neon",
    },
    {
      name: "GOLDEN MOUSE",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470039/default.avif?g0=1755520809",
      percentage: 77,
      description: "flux hacker pulse loop matrix circuit",
    },
    {
      name: "ALICE ẢO MỘNG",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470040/default.avif?g0=1755520809",
      percentage: 62,
      description: "loop circuit pulse neon quantum",
    },
    {
      name: "NÚI TRÁI CÂY PHÚN TRÀO",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470041/default.avif?g0=1755520809",
      percentage: 93,
      description: "pulse quantum flux loop circuit",
    },
    {
      name: "TIẾNG RỐNG SƯ TỬ",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470042/default.avif?g0=1755520809",
      percentage: 71,
      description: "cipher hacker circuit vector protocol",
    },
    {
      name: "KHO BÁU KIM CƯƠNG",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470043/default.avif?g0=1755520809",
      percentage: 84,
      description: "matrix pulse flux neon circuit",
    },
    {
      name: "BIKINI QUEENS XMAS",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470044/default.avif?g0=1755520809",
      percentage: 75,
      description: "pulse neon matrix cipher circuit cascade",
    },
    {
      name: "GOLD of Horus",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470045/default.avif?g0=1755520809",
      percentage: 84,
      description: "hacker quantum loop vector cascade protocol flux",
    },
    {
      name: "CÀNG NỐI CÀNG NHIỀU",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470046/default.avif?g0=1755520809",
      percentage: 95,
      description: "quantum protocol cascade neon matrix",
    },
    {
      name: "SUSHI CHIÊU TÀI MIÊU",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470047/default.avif?g0=1755520809",
      percentage: 77,
      description: "quantum vector pulse loop hacker protocol",
    },
    {
      name: "NGÔI NHÀ BÁNH KẸO",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470048/default.avif?g0=1755520809",
      percentage: 72,
      description: "cipher protocol vector pulse neon flux hacker",
    },
    {
      name: "Huyền thoại Atlantis",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470049/default.avif?g0=1755520809",
      percentage: 91,
      description: "loop circuit pulse flux cipher protocol",
    },
    {
      name: "Rồng X Hổ",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470050/default.avif?g0=1755520809",
      percentage: 76,
      description: "pulse neon circuit protocol cipher",
    },
    {
      name: "Bull FaFa",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470051/default.avif?g0=1755520809",
      percentage: 94,
      description: "cascade neon pulse circuit vector cipher",
    },
    {
      name: "GEM HUNTER",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470052/default.avif?g0=1755520809",
      percentage: 88,
      description: "vector loop matrix circuit flux quantum neon",
    },
    {
      name: "Ganesha Shine",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470053/default.avif?g0=1755520809",
      percentage: 72,
      description: "flux cascade matrix quantum cipher protocol",
    },
    {
      name: "Rồng tài lộc II",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470054/default.avif?g0=1755520809",
      percentage: 81,
      description: "hacker loop cipher quantum vector",
    },
    {
      name: "88FA",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470055/default.avif?g0=1755520809",
      percentage: 87,
      description: "vector pulse flux cascade neon loop quantum",
    },
    {
      name: "Muay Thái không giới hạn",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470056/default.avif?g0=1755520809",
      percentage: 66,
      description: "protocol loop quantum vector cipher circuit",
    },
    {
      name: "Bikini Queen Hẹn hò",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470057/default.avif?g0=1755520809",
      percentage: 67,
      description: "neon protocol matrix quantum circuit",
    },
    {
      name: "GEM HUNTER",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470058/default.avif?g0=1755520809",
      percentage: 79,
      description: "cipher matrix neon pulse loop cascade circuit",
    },
    {
      name: "Dragon Reborn",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470059/default.avif?g0=1755520809",
      percentage: 81,
      description: "loop circuit pulse neon matrix",
    },
    {
      name: "FUFU FA JP",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470060/default.avif?g0=1755520809",
      percentage: 82,
      description: "protocol vector circuit quantum flux",
    },
    {
      name: "Choi Sun Yeah JP",
      image:
        "https://f168n.com/game_pictures/g/CL/347/3/3470061/default.avif?g0=1755520809",
      percentage: 60,
      description: "quantum cascade cipher flux protocol neon",
    },
  ]),
  askmeslot: createGames("askmeslot", [
    {
      name: "Subway Runner",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650001/default.avif?g0=1755520809",
      percentage: 60,
      description: "loop flux vector hacker cascade",
    },
    {
      name: "The Monkey King",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650002/default.avif?g0=1755520809",
      percentage: 60,
      description: "matrix protocol cascade quantum hacker",
    },
    {
      name: "Blessing of the Dragon",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650003/default.avif?g0=1755520809",
      percentage: 90,
      description: "vector quantum protocol flux cascade",
    },
    {
      name: "Mahjong Legend Xmas",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650004/default.avif?g0=1755520809",
      percentage: 83,
      description: "cipher loop flux protocol matrix hacker circuit",
    },
    {
      name: "Alice's Wonders",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650005/default.avif?g0=1755520809",
      percentage: 75,
      description: "neon protocol vector quantum circuit",
    },
    {
      name: "Mahjong Legend",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650006/default.avif?g0=1755520809",
      percentage: 91,
      description: "circuit cascade loop quantum vector",
    },
    {
      name: "Epic of Aztec",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650007/default.avif?g0=1755520809",
      percentage: 79,
      description: "neon protocol hacker pulse flux",
    },
    {
      name: "Blessing of the Tiger",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650008/default.avif?g0=1755520809",
      percentage: 73,
      description: "circuit vector quantum cipher pulse cascade hacker",
    },
    {
      name: "Dino Gems",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650009/default.avif?g0=1755520809",
      percentage: 91,
      description: "protocol vector neon cipher quantum matrix",
    },
    {
      name: "Moe Moe Cute",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650010/default.avif?g0=1755520809",
      percentage: 74,
      description: "hacker quantum loop neon matrix circuit cascade",
    },
    {
      name: "Fishing's Paradise",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650011/default.avif?g0=1755520809",
      percentage: 67,
      description: "flux cascade loop matrix neon pulse quantum",
    },
    {
      name: "Government Disco",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650012/default.avif?g0=1755520809",
      percentage: 73,
      description: "quantum cipher protocol matrix hacker vector pulse",
    },
    {
      name: "Mafia Ways",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650013/default.avif?g0=1755520809",
      percentage: 67,
      description: "protocol loop neon flux circuit cipher",
    },
    {
      name: "Mermaid's Market",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650014/default.avif?g0=1755520809",
      percentage: 66,
      description: "flux quantum pulse matrix loop vector",
    },
    {
      name: "Veggies Bonanza",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650015/default.avif?g0=1755520809",
      percentage: 63,
      description: "matrix flux quantum protocol cascade pulse",
    },
    {
      name: "Kingdom Z",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650016/default.avif?g0=1755520809",
      percentage: 70,
      description: "cascade cipher circuit vector pulse flux neon",
    },
    {
      name: "Roma Plus",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650017/default.avif?g0=1755520809",
      percentage: 74,
      description: "neon pulse loop cascade protocol cipher flux",
    },
    {
      name: "Centillion Gods",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650018/default.avif?g0=1755520809",
      percentage: 89,
      description: "quantum neon hacker pulse loop",
    },
    {
      name: "Wonder Cuisine",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650019/default.avif?g0=1755520809",
      percentage: 70,
      description: "flux loop protocol cascade matrix vector",
    },
    {
      name: "Cupid Garden",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650020/default.avif?g0=1755520809",
      percentage: 91,
      description: "cipher flux matrix hacker vector quantum",
    },
    {
      name: "Royal Thai Dessert",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650021/default.avif?g0=1755520809",
      percentage: 78,
      description: "quantum cipher hacker neon protocol flux",
    },
    {
      name: "Lucky Nangkwak",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650022/default.avif?g0=1755520809",
      percentage: 86,
      description: "loop vector pulse cascade cipher",
    },
    {
      name: "Lab 19 Mania",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650023/default.avif?g0=1755520809",
      percentage: 68,
      description: "protocol neon hacker cascade flux",
    },
    {
      name: "Pet Ranger",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650024/default.avif?g0=1755520809",
      percentage: 70,
      description: "neon cipher loop protocol pulse vector",
    },
    {
      name: "Squid Toon",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650025/default.avif?g0=1755520809",
      percentage: 75,
      description: "matrix cascade pulse cipher neon circuit hacker",
    },
    {
      name: "Punk Star",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650026/default.avif?g0=1755520809",
      percentage: 64,
      description: "matrix flux vector pulse loop",
    },
    {
      name: "Dino Pops",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650027/default.avif?g0=1755520809",
      percentage: 85,
      description: "hacker vector pulse protocol cascade matrix",
    },
    {
      name: "Blessing of the Ox",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650028/default.avif?g0=1755520809",
      percentage: 72,
      description: "circuit neon cipher matrix flux",
    },
    {
      name: "Wrath of Egypt",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650029/default.avif?g0=1755520809",
      percentage: 78,
      description: "cascade circuit flux neon pulse hacker",
    },
    {
      name: "Kraken Treasure",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650030/default.avif?g0=1755520809",
      percentage: 95,
      description: "loop flux cascade pulse quantum",
    },
    {
      name: "Grand Shine",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650031/default.avif?g0=1755520809",
      percentage: 87,
      description: "protocol neon hacker circuit flux quantum cascade",
    },
    {
      name: "Shiba Mogul",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650032/default.avif?g0=1755520809",
      percentage: 82,
      description: "neon quantum cipher loop pulse vector cascade",
    },
    {
      name: "Zushi Prime",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650033/default.avif?g0=1755520809",
      percentage: 89,
      description: "cascade vector loop cipher flux quantum matrix",
    },
    {
      name: "Rich Rich Water",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650034/default.avif?g0=1755520809",
      percentage: 90,
      description: "circuit cipher matrix loop flux",
    },
    {
      name: "Hungry Krahung",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650035/default.avif?g0=1755520809",
      percentage: 89,
      description: "protocol flux quantum cipher neon vector cascade",
    },
    {
      name: "The King Joker",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650036/default.avif?g0=1755520809",
      percentage: 81,
      description: "flux protocol hacker pulse neon loop",
    },
    {
      name: "Vampire Hunter",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650037/default.avif?g0=1755520809",
      percentage: 74,
      description: "cascade matrix protocol pulse vector",
    },
    {
      name: "Little Monster",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650038/default.avif?g0=1755520809",
      percentage: 63,
      description: "cascade circuit loop hacker matrix",
    },
    {
      name: "Ghost House",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650039/default.avif?g0=1755520809",
      percentage: 92,
      description: "circuit vector hacker loop protocol quantum pulse",
    },
    {
      name: "Wizard Dice",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650040/default.avif?g0=1755520809",
      percentage: 62,
      description: "flux circuit matrix protocol hacker pulse",
    },
    {
      name: "Rabbit Mines",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650041/default.avif?g0=1755520809",
      percentage: 88,
      description: "matrix hacker flux cascade neon",
    },
    {
      name: "Mafia Ways II: Metro Haven Heist",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650042/default.avif?g0=1755520809",
      percentage: 74,
      description: "circuit cipher flux loop protocol",
    },
    {
      name: "Guardian Wealth",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650043/default.avif?g0=1755520809",
      percentage: 88,
      description: "vector loop neon hacker flux protocol",
    },
    {
      name: "Tiki Paradise",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650044/default.avif?g0=1755520809",
      percentage: 60,
      description: "flux protocol hacker cascade circuit neon matrix",
    },
    {
      name: "Clash of War",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650045/default.avif?g0=1755520809",
      percentage: 62,
      description: "loop flux cascade cipher protocol pulse circuit",
    },
    {
      name: "Natural Ace",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650046/default.avif?g0=1755520809",
      percentage: 78,
      description: "matrix protocol loop cipher circuit",
    },
    {
      name: "Aztec Legend",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650047/default.avif?g0=1755520809",
      percentage: 82,
      description: "cascade quantum protocol neon pulse matrix",
    },
    {
      name: "Mahjong Legacy",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650048/default.avif?g0=1755520809",
      percentage: 60,
      description: "loop protocol quantum vector cipher flux matrix",
    },
    {
      name: "Super Ace X",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650049/default.avif?g0=1755520809",
      percentage: 75,
      description: "loop neon matrix flux cascade",
    },
    {
      name: "Mahjong of the Phoenix",
      image:
        "https://f168n.com/game_pictures/g/CL/365/3/3650050/default.avif?g0=1755520809",
      percentage: 92,
      description: "vector cascade pulse quantum hacker cipher",
    },
  ]),
  mancala: createGames("mancala", [
    {
      name: "Cherry Bombs",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400003/default.avif?g0=1755520809",
      percentage: 87,
      description: "vector cascade neon cipher loop protocol",
    },
    {
      name: "Portal Master",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400004/default.avif?g0=1755520809",
      percentage: 74,
      description: "matrix vector neon cascade circuit flux",
    },
    {
      name: "Spirit of the Lake",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400006/default.avif?g0=1755520809",
      percentage: 90,
      description: "quantum protocol flux hacker cascade loop vector",
    },
    {
      name: "The Twin Wins Mystery",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400007/default.avif?g0=1755520809",
      percentage: 68,
      description: "pulse quantum cascade matrix circuit",
    },
    {
      name: "Hot Fruits on Fire",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400008/default.avif?g0=1755520809",
      percentage: 95,
      description: "matrix protocol circuit cascade cipher quantum loop",
    },
    {
      name: "Superb Cup",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400009/default.avif?g0=1755520809",
      percentage: 74,
      description: "matrix pulse circuit vector quantum neon",
    },
    {
      name: "Fruityliner 5",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400010/default.avif?g0=1755520809",
      percentage: 77,
      description: "quantum loop neon hacker protocol",
    },
    {
      name: "Fruit Factory",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400011/default.avif?g0=1755520809",
      percentage: 61,
      description: "hacker neon cipher flux cascade",
    },
    {
      name: "Reel Reel Hot",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400012/default.avif?g0=1755520809",
      percentage: 65,
      description: "hacker protocol neon pulse flux loop matrix",
    },
    {
      name: "Hot Fruits on Ice",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400013/default.avif?g0=1755520809",
      percentage: 78,
      description: "cascade hacker pulse matrix loop",
    },
    {
      name: "Seth vs Horus",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400014/default.avif?g0=1755520809",
      percentage: 82,
      description: "cipher cascade circuit quantum loop pulse",
    },
    {
      name: "Candy Clash",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400015/default.avif?g0=1755520809",
      percentage: 92,
      description: "loop pulse circuit matrix flux",
    },
    {
      name: "BarsandBells",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400016/default.avif?g0=1755520809",
      percentage: 70,
      description: "quantum pulse cipher hacker cascade loop",
    },
    {
      name: "Era of Jinlong",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400017/default.avif?g0=1755520809",
      percentage: 84,
      description: "hacker pulse cipher protocol circuit quantum",
    },
    {
      name: "Astro Jewels",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400018/default.avif?g0=1755520809",
      percentage: 83,
      description: "pulse loop cascade quantum cipher protocol",
    },
    {
      name: "Mighty Egypt Riches",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400019/default.avif?g0=1755520809",
      percentage: 82,
      description: "loop cascade matrix vector quantum flux protocol",
    },
    {
      name: "Fruits and Bombs",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400020/default.avif?g0=1755520809",
      percentage: 93,
      description: "cipher neon circuit quantum hacker pulse",
    },
    {
      name: "Neon Light Fruits",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400021/default.avif?g0=1755520809",
      percentage: 83,
      description: "cascade cipher matrix vector neon loop protocol",
    },
    {
      name: "Lucky Foxglove",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400022/default.avif?g0=1755520809",
      percentage: 71,
      description: "cascade vector hacker quantum loop",
    },
    {
      name: "Wild Velvet",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400023/default.avif?g0=1755520809",
      percentage: 87,
      description: "loop matrix flux cascade circuit",
    },
    {
      name: "Goldie at Oktoberfest",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400024/default.avif?g0=1755520809",
      percentage: 75,
      description: "vector flux neon hacker circuit",
    },
    {
      name: "777 Vegas Showtime",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400025/default.avif?g0=1755520809",
      percentage: 86,
      description: "flux cascade hacker pulse loop cipher protocol",
    },
    {
      name: "Seance: Mysterious Attic",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400026/default.avif?g0=1755520809",
      percentage: 67,
      description: "cascade matrix hacker neon cipher flux vector",
    },
    {
      name: "Fruit Collector",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400027/default.avif?g0=1755520809",
      percentage: 76,
      description: "matrix quantum cipher circuit protocol hacker",
    },
    {
      name: "Book of Wealth",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400028/default.avif?g0=1755520809",
      percentage: 83,
      description: "circuit hacker protocol matrix cascade",
    },
    {
      name: "Book of Runes",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400029/default.avif?g0=1755520809",
      percentage: 88,
      description: "vector circuit cascade cipher flux protocol",
    },
    {
      name: "Fruityliner 40",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400030/default.avif?g0=1755520809",
      percentage: 74,
      description: "hacker cascade cipher circuit protocol pulse flux",
    },
    {
      name: "Fruityliner 100",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400031/default.avif?g0=1755520809",
      percentage: 66,
      description: "matrix circuit quantum flux pulse protocol vector",
    },
    {
      name: "Buccaneer Royale",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400032/default.avif?g0=1755520809",
      percentage: 75,
      description: "hacker cipher quantum pulse cascade",
    },
    {
      name: "Mio and Neko Rock",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400033/default.avif?g0=1755520809",
      percentage: 92,
      description: "matrix vector loop cascade neon",
    },
    {
      name: "The Last Quack",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400034/default.avif?g0=1755520809",
      percentage: 62,
      description: "circuit flux cascade matrix hacker quantum",
    },
    {
      name: "Bounty Chasers",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400035/default.avif?g0=1755520809",
      percentage: 95,
      description: "flux quantum loop matrix pulse neon",
    },
    {
      name: "Rumble Masters",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400036/default.avif?g0=1755520809",
      percentage: 89,
      description: "loop protocol neon flux vector",
    },
    {
      name: "Buffalo Goes Wild",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400037/default.avif?g0=1755520809",
      percentage: 66,
      description: "neon cipher flux loop circuit hacker cascade",
    },
    {
      name: "Money Pipe",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400038/default.avif?g0=1755520809",
      percentage: 88,
      description: "flux pulse circuit loop quantum matrix cascade",
    },
    {
      name: "Santa the Slayer",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400039/default.avif?g0=1755520809",
      percentage: 66,
      description: "pulse loop quantum cascade cipher",
    },
    {
      name: "Mustang Rush",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400040/default.avif?g0=1755520809",
      percentage: 75,
      description: "protocol loop hacker matrix pulse flux circuit",
    },
    {
      name: "Caishen Gold: Dragon Awakes",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400041/default.avif?g0=1755520809",
      percentage: 62,
      description: "hacker matrix loop protocol neon flux",
    },
    {
      name: "Mariachi Afortunado",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400042/default.avif?g0=1755520809",
      percentage: 83,
      description: "flux neon hacker pulse circuit quantum",
    },
    {
      name: "Record Breaker",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400043/default.avif?g0=1755520809",
      percentage: 71,
      description: "cascade loop vector quantum neon flux pulse",
    },
    {
      name: "Cash Legion",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400044/default.avif?g0=1755520809",
      percentage: 90,
      description: "vector pulse neon protocol flux quantum",
    },
    {
      name: "Sharky Frenzy",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400045/default.avif?g0=1755520809",
      percentage: 75,
      description: "circuit vector pulse hacker matrix flux",
    },
    {
      name: "Monkey King: Path of Treasure",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400046/default.avif?g0=1755520809",
      percentage: 88,
      description: "circuit protocol cipher matrix hacker loop",
    },
    {
      name: "Book of Wealth II",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400047/default.avif?g0=1755520809",
      percentage: 78,
      description: "loop vector pulse cascade hacker neon",
    },
    {
      name: "Wicked Wanda",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400048/default.avif?g0=1755520809",
      percentage: 70,
      description: "neon cipher matrix hacker pulse cascade",
    },
    {
      name: "Eternal Dynasty",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400049/default.avif?g0=1755520809",
      percentage: 88,
      description: "cascade circuit protocol neon matrix pulse cipher",
    },
    {
      name: "Epic Tower",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400050/default.avif?g0=1755520809",
      percentage: 84,
      description: "protocol cascade vector matrix quantum",
    },
    {
      name: "Fruityliner X",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400051/default.avif?g0=1755520809",
      percentage: 72,
      description: "hacker matrix pulse vector flux",
    },
    {
      name: "Boost the Wheel!",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400052/default.avif?g0=1755520809",
      percentage: 89,
      description: "vector circuit loop quantum protocol neon cipher",
    },
    {
      name: "Fruityliner Joker",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400053/default.avif?g0=1755520809",
      percentage: 71,
      description: "pulse loop matrix cascade cipher vector circuit",
    },
    {
      name: "CoinSpin Fever",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400054/default.avif?g0=1755520809",
      percentage: 61,
      description: "pulse circuit vector cipher protocol neon cascade",
    },
    {
      name: "GemBlitz Bonanza",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400055/default.avif?g0=1755520809",
      percentage: 78,
      description: "quantum vector hacker pulse circuit",
    },
    {
      name: "Majestic Wolf",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400056/default.avif?g0=1755520809",
      percentage: 77,
      description: "loop neon hacker protocol quantum flux",
    },
    {
      name: "Code of Fortune",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400057/default.avif?g0=1755520809",
      percentage: 68,
      description: "flux matrix hacker quantum vector circuit cascade",
    },
    {
      name: "Catch 'n Cash",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400058/default.avif?g0=1755520809",
      percentage: 77,
      description: "cascade matrix loop pulse hacker",
    },
    {
      name: "Jin Yun Man Man",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400059/default.avif?g0=1755520809",
      percentage: 71,
      description: "loop quantum neon matrix flux",
    },
    {
      name: "Draco's Gold",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400060/default.avif?g0=1755520809",
      percentage: 77,
      description: "protocol flux matrix pulse cipher vector loop",
    },
    {
      name: "Asgard Legends",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400061/default.avif?g0=1755520809",
      percentage: 83,
      description: "hacker matrix pulse neon vector cascade",
    },
    {
      name: "Golden Mine",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400062/default.avif?g0=1755520809",
      percentage: 82,
      description: "vector loop hacker protocol flux",
    },
    {
      name: "Juicy Fever",
      image:
        "https://f168n.com/game_pictures/g/CL/340/3/3400063/default.avif?g0=1755520809",
      percentage: 86,
      description: "quantum matrix pulse protocol cipher neon hacker",
    },
  ]),
};
