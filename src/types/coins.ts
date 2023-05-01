export type GSCoin =
  | "polkadot"
  | "kusama"
  | "moonbeam"
  | "moonriver"
  | "acala"
  | "karura"
  | "statemine"
  | "statemint"
  | "astar"
  | "shiden"
  | "shibuya"
  | "bifrost"
  | "khala"
  | "phala"
  | "calamari"
  | "gm"
  | "subsocial"
  | "efinity"
  | "rococo"
  | "interlay"
  | "hydraDX";
export interface GSCoinProps {
  name: string;
  ws: string;
  logo: string;
  chainId: number;
  iseth: boolean;
  graphql: string;
}
export const GSCoinsMap: Record<GSCoin, GSCoinProps> = {
  polkadot: {
    name: "Polkadot",
    ws: "wss://rpc.polkadot.io",
    logo: "https://raw.githubusercontent.com/subsquid/archive-registry/main/ui/logos/networks/polkadot.png",
    chainId: 0,
    iseth: false,
    graphql: "https://squid.subsquid.io/gs-explorer-polkadot/graphql",
  },
  kusama: {
    name: "Kusama",
    ws: "wss://kusama-rpc.polkadot.io",
    logo: "https://raw.githubusercontent.com/subsquid/archive-registry/main/ui/logos/networks/kusama.png",
    chainId: 2,
    iseth: false,
    graphql: "https://squid.subsquid.io/gs-explorer-kusama/graphql",
  },
  moonbeam: {
    name: "Moonbeam",
    ws: "wss://wss.api.moonbeam.network",
    logo: "https://raw.githubusercontent.com/subsquid/archive-registry/main/ui/logos/networks/moonbeam.png",
    chainId: 1284,
    iseth: true,
    graphql: "https://squid.subsquid.io/gs-explorer-moonbeam/graphql",
  },
  moonriver: {
    name: "Moonriver",
    ws: "wss://wss.moonriver.moonbeam.network",
    logo: "https://raw.githubusercontent.com/subsquid/archive-registry/main/ui/logos/networks/moonriver.png",
    chainId: 1285,
    iseth: true,
    graphql: "https://squid.subsquid.io/gs-explorer-moonriver/graphql",
  },
  acala: {
    name: "Acala",
    ws: "wss://acala-polkadot.api.onfinality.io/public-ws",
    logo: "https://raw.githubusercontent.com/subsquid/archive-registry/main/ui/logos/networks/acala.png",
    chainId: 0,
    iseth: false,
    graphql: "https://squid.subsquid.io/gs-explorer-acala/graphql",
  },
  karura: {
    name: "Karura",
    ws: "wss://karura.api.onfinality.io/public-ws",
    logo: "https://raw.githubusercontent.com/subsquid/archive-registry/main/ui/logos/networks/karura.png",
    chainId: 0,
    iseth: false,
    graphql: "https://squid.subsquid.io/gs-explorer-karura/graphql",
  },
  statemine: {
    name: "Statemine",
    ws: "wss://statemine.api.onfinality.io/public-ws",
    logo: "https://raw.githubusercontent.com/subsquid/archive-registry/main/ui/logos/networks/statemine.png",
    chainId: 0,
    iseth: false,
    graphql: "https://squid.subsquid.io/gs-explorer-statemine/graphql",
  },
  statemint: {
    name: "Statemint",
    ws: "wss://statemint-rpc.polkadot.io",
    logo: "https://raw.githubusercontent.com/subsquid/archive-registry/main/ui/logos/networks/statemint.png",
    chainId: 0,
    iseth: false,
    graphql: "https://squid.subsquid.io/gs-explorer-statemint/graphql",
  },
  astar: {
    name: "Astar",
    ws: "wss://astar.api.onfinality.io/public-ws",
    logo: "https://raw.githubusercontent.com/subsquid/archive-registry/main/ui/logos/networks/astar.png",
    chainId: 0,
    iseth: false,
    graphql: "https://squid.subsquid.io/gs-explorer-astar/graphql",
  },
  shiden: {
    name: "Shiden",
    ws: "wss://shiden.api.onfinality.io/public-ws",
    logo: "https://raw.githubusercontent.com/subsquid/archive-registry/main/ui/logos/networks/shiden.png",
    chainId: 0,
    iseth: false,
    graphql: "https://squid.subsquid.io/gs-explorer-shiden/graphql",
  },
  shibuya: {
    name: "Shibuya",
    ws: "wss://rpc.shibuya.astar.network",
    logo: "https://raw.githubusercontent.com/subsquid/archive-registry/main/ui/logos/networks/astar.png",
    chainId: 0,
    iseth: false,
    graphql: "https://squid.subsquid.io/gs-explorer-shibuya/graphql",
  },
  bifrost: {
    name: "Bifrost",
    ws: "wss://bifrost-rpc.liebi.com/ws",
    logo: "https://raw.githubusercontent.com/subsquid/archive-registry/main/ui/logos/networks/bifrost.png",
    chainId: 0,
    iseth: false,
    graphql: "https://squid.subsquid.io/gs-explorer-bifrost/graphql",
  },
  khala: {
    name: "Khala",
    ws: "wss://khala.api.onfinality.io/public-ws",
    logo: "https://raw.githubusercontent.com/subsquid/archive-registry/main/ui/logos/networks/khala.png",
    chainId: 0,
    iseth: false,
    graphql: "https://squid.subsquid.io/gs-explorer-khala/graphql",
  },
  phala: {
    name: "Phala",
    ws: "wss://phala.api.onfinality.io/public-ws",
    logo: "https://raw.githubusercontent.com/subsquid/archive-registry/main/ui/logos/networks/phala.png",
    chainId: 0,
    iseth: false,
    graphql: "https://squid.subsquid.io/gs-explorer-phala/graphql",
  },
  calamari: {
    name: "Calamari",
    ws: "wss://ws.calamari.systems",
    logo: "https://raw.githubusercontent.com/subsquid/archive-registry/main/ui/logos/networks/calamari.png",
    chainId: 0,
    iseth: false,
    graphql: "https://squid.subsquid.io/gs-explorer-calamari/graphql",
  },
  gm: {
    name: "GM",
    ws: "wss://ws.gm.bldnodes.org",
    logo: "https://raw.githubusercontent.com/subsquid/archive-registry/main/ui/logos/networks/gmordie.png",
    chainId: 0,
    iseth: false,
    graphql: "https://squid.subsquid.io/gs-explorer-gmordie/graphql",
  },
  subsocial: {
    name: "Subsocial",
    ws: "wss://para.f3joule.space",
    logo: "https://raw.githubusercontent.com/subsquid/archive-registry/main/ui/logos/networks/subsocial.png",
    chainId: 0,
    iseth: false,
    graphql: "https://squid.subsquid.io/gs-explorer-subsocial/graphql",
  },
  efinity: {
    name: "Efinity",
    ws: "wss://efinity.api.onfinality.io/public-ws",
    logo: "https://raw.githubusercontent.com/subsquid/archive-registry/main/ui/logos/networks/efinity.png",
    chainId: 0,
    iseth: false,
    graphql: "https://squid.subsquid.io/gs-explorer-efinity/graphql",
  },
  rococo: {
    name: "Rococo",
    ws: "wss://rococo-rpc.polkadot.io",
    logo: "https://raw.githubusercontent.com/subsquid/archive-registry/main/ui/logos/networks/rococo.png",
    chainId: 0,
    iseth: false,
    graphql: "https://squid.subsquid.io/gs-explorer-rococo/graphql",
  },
  interlay: {
    name: "Interlay",
    ws: "wss://interlay.api.onfinality.io/public-ws",
    logo: "https://raw.githubusercontent.com/subsquid/archive-registry/main/ui/logos/networks/interlay.png",
    chainId: 0,
    iseth: false,
    graphql: "https://squid.subsquid.io/gs-explorer-interlay/graphql",
  },
  hydraDX: {
    name: "HydraDX",
    ws: "wss://hydradx.api.onfinality.io/public-ws",
    logo: "https://raw.githubusercontent.com/subsquid/archive-registry/main/ui/logos/networks/hydradx.png",
    chainId: 0,
    iseth: false,
    graphql: "https://squid.subsquid.io/gs-explorer-hydradx/graphql",
  },
};

export const GSCoins: GSCoin[] = [
  "polkadot",
  "kusama",
  "moonbeam",
  "moonriver",
  "acala",
  "karura",
  "statemine",
  "statemint",
  "astar",
  "shiden",
  "shibuya",
  "bifrost",
  "khala",
  "phala",
  "calamari",
  "gm",
  "subsocial",
  "efinity",
  "rococo",
  "interlay",
  "hydraDX",
];
