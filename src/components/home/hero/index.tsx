import React from "react"
import Image from "next/image"

import BlobDesign from "../../../assets/design/blob-1.png"
import HeroImage from "../../../assets/image/HomeHero.png"

const HomeHero = () => {
  return (
    <div className="relative grid grid-cols-1 items-center gap-6 px-4 md:grid-cols-2">
      <Image src={BlobDesign} alt={"Blob"} className="absolute scale-50 opacity-25 md:ml-56" />
      <div className="m-auto w-full space-y-3 md:w-4/5">
        <h1 className="text-hero-gradient text-5xl font-extrabold">Hello, world!</h1>
        <h1 className="text-2xl">Heading here</h1>
        <p className="text-justify md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore voluptate iusto
          quisquam? Error blanditiis laborum fugiat. Distinctio harum libero modi, error, eum
          praesentium iste dolores, quisquam adipisci nesciunt repellendus minima. Suscipit
          praesentium placeat tempore eveniet.
        </p>
        <em className="inline-block text-[#40364c]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, officiis?
        </em>
      </div>
      <div className="">
        <Image src={HeroImage} alt="Hero Image" />
      </div>
    </div>
  )
}

export default HomeHero
