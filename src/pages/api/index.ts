import type { NextApiRequest, NextApiResponse } from "next"

import { APITypes } from "../../types/api"

const handler = (req: NextApiRequest, res: NextApiResponse<APITypes>) => {
  res.status(200).json({
    message: "Successfully connected",
    data: undefined,
    error: undefined,
  })
}

export default handler
