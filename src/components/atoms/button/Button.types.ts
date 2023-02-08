import React from "react"

import ButtonVariants from "./Button.variants"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  variant?: keyof typeof ButtonVariants
}

export default ButtonProps
