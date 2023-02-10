declare type StoreImageResult = {
  cid: string
  imageURI: string
  metadataURI: string
  imageGatewayURL: string
  metadataGatewayURL: string
}

declare type ImageMetadata = {
  cid: string
  path: string
  caption: string
  gatewayURL: string
  uri: string
}
