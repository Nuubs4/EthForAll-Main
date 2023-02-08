import React from "react"

import HomeHero from "../components/home/hero"
import Navbar from "../components/layout/navbar/Navbar"

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="center h-screen w-screen">
        <HomeHero />
      </div>
    </>
  )
}

export default HomePage
