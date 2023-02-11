import { configureChains, createClient, WagmiConfig } from "wagmi"
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet"
import { InjectedConnector } from "wagmi/connectors/injected"
import { MetaMaskConnector } from "wagmi/connectors/metaMask"
import { WalletConnectConnector } from "wagmi/connectors/walletConnect"
import { publicProvider } from "wagmi/providers/public"

import { ArcanaConnector } from "@arcana/auth-wagmi"
import {
  Chain,
  filecoin,
  goerli,
  mainnet,
  optimism,
  polygon,
  polygonMumbai,
} from "@wagmi/core/chains"

import { ARCANA_APP_ID } from "../utils/constants/variables"

const connector = (chains: Chain[]) => {
  return new ArcanaConnector({
    chains: chains,
    options: {
      appId: `${ARCANA_APP_ID}`,
      alwaysVisible: false,
      position: "left",
    },
  })
}

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, filecoin, polygonMumbai, goerli],
  [publicProvider()]
)

const client = createClient({
  autoConnect: true,
  connectors: [
    connector(chains),
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "wagmi",
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: "Injected",
        shimDisconnect: true,
      },
    }),
  ],
  provider,
})

const WagmiProvider = ({ children }: ProviderProps) => {
  return <WagmiConfig client={client}>{children}</WagmiConfig>
}

export default WagmiProvider
