import React from "react"
import Image from "next/image"

import BlobDesign from "../../../assets/design/blob-1.png"
import HeroImage from "../../../assets/image/HomeHero.png"

const HomeHero = () => {
  return (
    <div className="relative mt-16 grid grid-cols-1 items-center gap-6 px-4 md:grid-cols-2">
      <Image src={BlobDesign} alt={"Blob"} className="absolute scale-50 opacity-25 md:ml-56" />
      <div className="m-auto w-full space-y-3 md:w-4/5">
        <h1 className="text-hero-gradient text-5xl font-extrabold">Welcome to Decentralance</h1>
        <h1 className="text-2xl">Empowering Talent, Decentralizing Hiring</h1>
        <p className="text-justify md:text-left">
          Decentralance lets you hire talent from around the world, and pay them in crypto. We are a
          community of freelancers, developers, designers, and more. We are Decentralance.
        </p>
        <em className="inline-block text-[#40364c]">Start hiring talent.</em>
      </div>
      <div className="">
        <Image src={HeroImage} alt="Hero Image" />
      </div>
    </div>
  )
}

export default HomeHero
