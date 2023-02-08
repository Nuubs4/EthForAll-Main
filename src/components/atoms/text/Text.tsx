import React from "react"

import TextProps from "./Text.types"

const Text = (props: TextProps) => {
  return <span className={props.className}>{props.text}</span>
}

export default Text
