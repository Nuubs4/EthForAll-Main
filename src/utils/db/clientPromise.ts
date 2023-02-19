import { MongoClient } from "mongodb"

import { MONGO_URI } from "../constants/variables"

const uri = MONGO_URI

console.log(uri)
const options = {}

let client
let clientPromise: any

if (!uri) {
  throw new Error("Please add your Mongo URI to .env")
}

if (process.env.NODE_ENV === "development") {
  // @ts-ignore
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    // @ts-ignore
    global._mongoClientPromise = client.connect()
  }

  // @ts-ignore
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise
