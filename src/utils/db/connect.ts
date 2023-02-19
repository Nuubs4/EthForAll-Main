import mongoose from "mongoose"

import { MONGO_URI } from "../constants/variables"

const connect = async () => {
  mongoose.connect(MONGO_URI)
}

export default connect
