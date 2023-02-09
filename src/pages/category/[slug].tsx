import React from "react"
import { useRouter } from "next/router"

import ProductCard from "../../components/atoms/card/product/ProductCard"
import Location from "../../components/atoms/location/Location"
import Grid from "../../components/general/grid/Grid"
import Navbar from "../../components/layout/navbar/Navbar"

const CategorySlugPage = () => {
  const router = useRouter()

  const { slug } = router.query

  return (
    <div>
      <Navbar />
      <div className="px-4 md:px-32">
        <Location className="mt-4" />
        <Grid node={ProductCard}></Grid>
      </div>
    </div>
  )
}

export default CategorySlugPage
