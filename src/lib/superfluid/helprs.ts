import { BigNumber, ethers, Signer } from "ethers"

import { SuperToken, WrapperSuperToken } from "@superfluid-finance/sdk-core"

import { Daix } from "../../contract/fDaix"

export const CONTRACT_ADDRESS = "0x42bb40bF79730451B11f6De1CbA222F17b87Afd7"

export const getBalanceOfUSDx = async (
  signer: ethers.Signer | ethers.providers.Provider | undefined,
  wallet: any
) => {
  const contract = new ethers.Contract(CONTRACT_ADDRESS, Daix, signer)
  const result = await contract.balanceOf(wallet)
  return ethers.utils.formatEther(result)
}

export const transferUSDCX = async (
  provider: ethers.providers.JsonRpcProvider,
  sender: string,
  amount: any,
  receiver: string
) => {
  const signer = provider.getSigner(sender)
  const contract = new ethers.Contract(CONTRACT_ADDRESS, Daix, signer)
  const tokens = ethers.utils.parseUnits(amount.toString(), 18)
  const result = await contract.transfer(receiver, tokens)
  return result
}

export const upgradeTokens = async ({
  sfToken,
  sfSigner,
  upgrading,
}: {
  sfToken: SuperToken
  sfSigner: Signer
  upgrading: number
}) => {
  try {
    const upgradeTokenOperation = (sfToken as WrapperSuperToken).upgrade({
      amount: BigNumber.from(upgrading).toString(),
    })
    await upgradeTokenOperation.exec(sfSigner)
  } catch (e) {
    console.log(e)
  }
}

export const downgradeTokens = async ({
  sfToken,
  sfSigner,
  downgrading,
}: {
  sfToken: SuperToken
  sfSigner: Signer
  downgrading: BigNumber
}) => {
  try {
    const downgradeTokenOperation = (sfToken as WrapperSuperToken).downgrade({
      amount: BigNumber.from(downgrading).toString(),
    })
    await downgradeTokenOperation.exec(sfSigner)
  } catch (e) {
    console.log(e)
  }
}
