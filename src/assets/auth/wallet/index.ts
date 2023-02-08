import { StaticImageData } from "next/image"

import coinbase from "./coinbase.png"
import ledger from "./ledger.png"
import metamask from "./metamask.png"
import trustwallet from "./trustwallet.png"
import walletconnect from "./walletconnect.png"

interface WalletLogoInterface {
  [key: string]: StaticImageData
}

const WalletLogo: WalletLogoInterface = {
  CoinBase: coinbase,
  MetaMask: metamask,
  Ledger: ledger,
  TrustWallet: trustwallet,
  WalletConnect: walletconnect,
}

export default WalletLogo
