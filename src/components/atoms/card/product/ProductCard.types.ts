import React from "react"
import { StaticImageData } from "next/image"

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string | StaticImageData
  title: string
  content?: string
  href: string

  [key: string]: any
}

export default ProductCardProps
