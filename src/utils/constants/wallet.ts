import WalletLogo from "../../assets/auth/wallet"

const Wallets = [
  {
    id: 0,
    name: "MetaMask",
    logo: WalletLogo.MetaMask,
    connector: "MetaMask",
  },
  {
    id: 1,
    name: "CoinBase",
    logo: WalletLogo.CoinBase,
    connector: "Coinbase Wallet",
  },
  {
    id: 2,
    name: "Ledger",
    logo: WalletLogo.Ledger,
    connector: "Injected",
  },
  {
    id: 3,
    name: "Trust Wallet",
    logo: WalletLogo.TrustWallet,
    connector: "Injected",
  },
  {
    id: 4,
    name: "Wallet Connect",
    logo: WalletLogo.WalletConnect,
    connector: "WalletConnect",
  },
]

export default Wallets
