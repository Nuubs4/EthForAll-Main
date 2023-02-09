import React from "react"
import Link from "next/link"

import Text from "../text/Text"

import { SiteLinkProps } from "./SiteLink.types"

const SiteLink = ({ title, path, className, append, prepend, onClick }: SiteLinkProps) => {
  return (
    <Link href={path || ""} onClick={onClick} className={`group flex items-center  ` + className}>
      {prepend}
      <Text className="font-poppins  z-10" text={title} />
      {append}
    </Link>
  )
}

export default SiteLink
