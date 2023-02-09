import { ReactElement } from "react"

export interface SiteLinkProps {
  title: string
  path?: string
  className?: string
  append?: ReactElement
  onClick?: () => void
  prepend?: ReactElement
}
