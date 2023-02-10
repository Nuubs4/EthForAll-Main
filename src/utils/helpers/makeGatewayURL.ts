const makeGatewayURL = (cid: string, path: string) => {
  return `https://w3s.link/ipfs/${cid}/${encodeURIComponent(path)}`
}

export default makeGatewayURL
