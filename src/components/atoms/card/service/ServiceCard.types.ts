import React from "react"
import { StaticImageData } from "next/image"

interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string | StaticImageData
  title: string
  content?: string
  badge?: Array<string>
}

export default ServiceCardProps
