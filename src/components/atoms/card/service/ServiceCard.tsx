import React from "react"
import Image from "next/image"

import ServiceCardProps from "./ServiceCard.types"

const ServiceCard = ({ title, image, content, badge }: ServiceCardProps) => {
  return (
    <div className="relative h-80 w-full cursor-pointer overflow-hidden rounded border border-white bg-gradient-to-b from-black/50 to-transparent py-4 px-2 ring-heroGradient-300 hover:ring-1 md:w-64">
      <p>{content}</p>
      <h1 className="text-2xl font-bold">{title}</h1>
      <Image src={image} alt={title} fill className="-z-10 object-cover object-center" />
    </div>
  )
}

export default ServiceCard
