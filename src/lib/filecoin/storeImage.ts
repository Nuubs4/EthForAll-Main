import { Web3Storage } from "web3.storage"

import { namePrefix } from "../../utils/constants/filecoin"
import { FILECOIN_API_KEY } from "../../utils/constants/variables"
import jsonFile from "../../utils/helpers/jsonFile"
import makeGatewayURL from "../../utils/helpers/makeGatewayURL"

// We use this to identify our uploads in the client.list response.

/**
 * Stores an image file on Web3.Storage, along with a small metadata.json that includes a caption & filename.
 * @param {File} imageFile a File object containing image data
 * @param {string} caption a string that describes the image
 *
 * @typedef StoreImageResult
 * @property {string} cid the Content ID for an directory containing the image and metadata
 * @property {string} imageURI an ipfs:// URI for the image file
 * @property {string} metadataURI an ipfs:// URI for the metadata file
 * @property {string} imageGatewayURL an HTTP gateway URL for the image
 * @property {string} metadataGatewayURL an HTTP gateway URL for the metadata file
 *
 * @returns {Promise<StoreImageResult>} an object containing links to the uploaded content
 */
const storeImage = async (imageFile: File, caption: string): Promise<StoreImageResult | null> => {
  const token = FILECOIN_API_KEY || ""

  // The name for our upload includes a prefix we can use to identify our files later
  const uploadName = [namePrefix, caption].join("|")

  // We store some metadata about the image alongside the image file.
  // The metadata includes the file path, which we can use to generate
  // a URL to the full image.
  const metadataFile = jsonFile("metadata.json", {
    path: imageFile.name,
    caption,
  })

  if (!token) {
    console.log("> ❗️ no API token found for Web3.Storage")
    return null
  }
  const web3storage = new Web3Storage({ token })
  console.log(`> 🤖 calculating content ID for ${imageFile.name}`)
  const cid = await web3storage.put([imageFile, metadataFile], {
    // the name is viewable at https://web3.storage/files and is included in the status and list API responses
    name: uploadName,

    // onRootCidReady will be called as soon as we've calculated the Content ID locally, before uploading
    onRootCidReady: (localCid) => {
      console.log(`> 🔑 locally calculated Content ID: ${localCid} `)
      console.log("> 📡 sending files to web3.storage ")
    },

    // onStoredChunk is called after each chunk of data is uploaded
    onStoredChunk: (bytes) =>
      console.log(`> 🛰 sent ${bytes.toLocaleString()} bytes to web3.storage`),
  })

  const metadataGatewayURL = makeGatewayURL(cid, "metadata.json")
  const imageGatewayURL = makeGatewayURL(cid, imageFile.name)
  const imageURI = `ipfs://${cid}/${imageFile.name}`
  const metadataURI = `ipfs://${cid}/metadata.json`

  return { cid, metadataGatewayURL, imageGatewayURL, imageURI, metadataURI }
}

export default storeImage
