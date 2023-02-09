import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

import toTitleCase from "../../../utils/functions/toTitleCase"
import Text from "../text/Text"

import LocationProps from "./Location.types"

const Location = ({ className, currentTitle }: LocationProps) => {
  const router = useRouter()
  const path = router.pathname
    .slice(0)
    .replaceAll("/", " > ")
    .replaceAll("-", " ")
    .replaceAll("[slug]", currentTitle || "")
  const Titlepath = toTitleCase(path).split(" > ")
  let current = ""

  return (
    <>
      <Link href="/">
        <Text className={className} text={`EthForAll `} />
      </Link>
      {Titlepath.map((p: string, index: number) => {
        current += `${p.toLowerCase()}/`

        return p.length ? (
          <Link href={index === Titlepath.length - 1 ? router.asPath : current} key={index}>
            <Text className={className} text={`> ${p} `} />
          </Link>
        ) : (
          <span key={index}></span>
        )
      })}
    </>
  )
}

export default Location
