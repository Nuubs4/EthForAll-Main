import React from "react"

import HomeHero from "../components/home/hero"
import Navbar from "../components/layout/navbar/Navbar"
import AuthModal from "../components/modals/AuthModal"

const HomePage = () => {
  let setModal: Callback | null = null,
    toggleModal: Callback | null = null

  const handleModal = (set: Callback, toggle: Callback) => {
    setModal = set
    toggleModal = toggle
  }

  return (
    <>
      <Navbar
        handleModal={() => {
          if (toggleModal) toggleModal()
        }}
      />
      {/* @ts-ignore */}
      <AuthModal updateStatus={handleModal} />
      <div className="center h-screen w-screen">
        <HomeHero />
      </div>
    </>
  )
}

export default HomePage
