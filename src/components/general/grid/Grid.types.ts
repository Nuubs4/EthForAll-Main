import React from "react"

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  titleDecorator?: string
  node: React.ComponentType<any>
  items?: Array<any>
}

export default GridProps
