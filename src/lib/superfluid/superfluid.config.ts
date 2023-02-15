import BigNumber from "bignumber.js"

export const fUSDC_address = "0xbe49ac1EadAc65dccf204D4Df81d650B50122aB2"
export const fUSDCx_address = "0x42bb40bF79730451B11f6De1CbA222F17b87Afd7"

export const calculateFlowRate = (amount: number) => {
  const fraction = amount / (86400 * 30)
  return Math.floor(fraction)
}

export const calculateStream = (flowRate: number) => {
  const stream = new BigNumber(flowRate * (86400 * 30)).shiftedBy(-18)
  return stream.toFixed(2)
}

export const calculateEndDate = (bal: any, outflow: any) => {
  const t = Number(bal) / (Number(outflow) * -1)
  const secondsLeft = t * 86400 * 30
  const end = new Date(Date.now() + secondsLeft * 1000)
  const endDay = end.toLocaleString()
  return endDay
}

export const calculateStreamPerSecond = (amount: number) => {
  const streamSecond = amount / (86400 * 30)
  return streamSecond
}
