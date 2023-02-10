import { Web3Storage } from "web3.storage"

/**
 * Checks if the given API token is valid by issuing a request.
 * @param {string} token
 * @returns {Promise<boolean>} resolves to true if the token is valid, false if invalid.
 */
const validateToken = async (token: string): Promise<boolean> => {
  console.log("validating token", token)
  const web3storage = new Web3Storage({ token })

  try {
    for await (const _ of web3storage.list({ maxResults: 1 })) {
      break
    }

    return true
  } catch (e: any) {
    if (e.message.includes("401") || e.message.includes("403")) {
      console.log("invalid token", e.message)
      return false
    }

    throw e
  }
}

export default validateToken
