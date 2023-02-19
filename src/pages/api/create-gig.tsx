import type { NextApiRequest, NextApiResponse } from "next"

import Gig from "../../model/Gig"
import { APITypes } from "../../types/api"

const handler = (req: NextApiRequest, res: NextApiResponse<APITypes>) => {
  if (req.method === "GET") {
    try {
      const data = new Gig({
        title: "Nextjs gatsby or react website with firebase or headless cms sanity strapi",
        description:
          "Welcome to my gig! In this gig, I create a customized website for you from scratch. The website is built using the most advanced and latest tools and uses the principle of Static Site Generation (SSG) and Server Side Rendering (SSR). The websites built get a 95+ score on Lighthouse and great SEO and Search Engine ranking. The websites load blazingly fast unlike other React sites.",
        price: 100,
        image:
          "https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV4dGpzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        freelancer: "Shashank",
        rating: 4,
      })
      res.status(200).json({
        message: "Successfully connected",
        data: data,
        error: undefined,
      })
    } catch (e) {
      res.status(200).json({
        message: "Error fetching gigs",
        data: undefined,
        error: e,
      })
    }
  }
}

export default handler
