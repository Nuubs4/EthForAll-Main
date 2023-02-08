import React from "react"

import HomeHero from "../components/home/hero"
import Navbar from "../components/layout/navbar/Navbar"
import AuthModal from "../components/modals/AuthModal"

const HomePage = () => {
  return (
    <>
      <Navbar />
      {/* @ts-ignore */}
      <AuthModal />
      <div className="center h-screen w-screen">
        <HomeHero />
      </div>
    </>
  )
}

export default HomePage
