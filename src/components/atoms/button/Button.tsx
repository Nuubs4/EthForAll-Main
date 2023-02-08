import React from "react"

import ButtonProps from "./Button.types"
import ButtonVariants from "./Button.variants"

const Button = ({ className = "", variant, children, ...props }: ButtonProps) => {
  const BASE_CLASS = "font-bold flex flex-row justify-center items-center gap-2 rounded-xl"

  return (
    <button
      className={`${BASE_CLASS} ${variant && ButtonVariants[variant]} ${className}`}
      {...props}
    >
      {children && children}
    </button>
  )
}

export default Button
