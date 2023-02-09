import React from "react"

import ServiceCard from "../components/atoms/card/service/ServiceCard"
import HomeHero from "../components/home/hero"
import PatnerShip from "../components/home/patnership/Patnership"
import Navbar from "../components/layout/navbar/Navbar"
import AuthModal from "../components/modals/AuthModal"
import PopularServices from "../data/popular-services"

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
      <div className="center w-screen flex-col">
        <HomeHero />
        <PatnerShip />
        <div className="mt-16 w-full px-4 text-left md:px-24">
          <h1 className="mb-4 text-center text-5xl md:text-left">Our Popular Services</h1>
        </div>
        <div className="center flex-col gap-4 md:flex-row">
          {PopularServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              content={service.content}
              image={service.image}
              title={service.title}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default HomePage
