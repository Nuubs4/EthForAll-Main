import React from "react"

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  className?: string
}

export default TextProps
