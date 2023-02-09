import React from "react"
import Image from "next/image"
import { AiFillStar } from "react-icons/ai"

import ProductCardProps from "./ProductCard.types"

const ProductCard = ({
  id,
  color,
  price,
  image,
  title,
  href,
  rating,
  description,
  category,
}: ProductCardProps) => {
  return (
    <div key={id} className="group relative">
      <div className="center absolute right-4 top-2 z-10 cursor-pointer flex-row rounded bg-typo px-2 py-[0.25px] opacity-75 ring-1 ring-black hover:opacity-100">
        <AiFillStar size={18} className="text-gold" />
        <span className="text-sm font-semibold text-gold"> {rating.rate} &nbsp;</span>
        <span className="text-sm font-light text-gray-500"> ({rating.count})</span>
      </div>
      <div className="aspect-w-1 aspect-h-1 lg:aspect-none h-80 max-h-80 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-80">
        <Image
          src={image}
          alt={title}
          fill
          className="max-h-80 rounded bg-gradient-to-b from-black to-transparent object-cover object-center "
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-typo hover:underline">
            <a href={href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {title}
            </a>
          </h3>
          <p className="line-clamp-1 mt-1 text-sm text-typo/40">{description}</p>
        </div>
        <p className="whitespace-nowrap text-sm font-medium text-typo">Rs {price}</p>
      </div>
    </div>
  )
}

export default ProductCard
