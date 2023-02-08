import React from "react"

type alertVariant = "info" | "error" | "success" | "warning" | "dark"

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  content?: string
  icon?: any
  variant?: alertVariant
  children?: React.ReactNode
  className?: string
}

export default AlertProps
