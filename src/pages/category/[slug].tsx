import React from "react"
import { useRouter } from "next/router"

import Location from "../../components/atoms/location/Location"
import Navbar from "../../components/layout/navbar/Navbar"

const CategorySlugPage = () => {
  const router = useRouter()

  const { slug } = router.query

  return (
    <div>
      <Navbar />
      <div className="px-4 md:px-32">
        <Location className="mt-4" />
      </div>
    </div>
  )
}

export default CategorySlugPage
