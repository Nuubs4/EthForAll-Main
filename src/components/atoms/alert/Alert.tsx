import React from "react"

import AlertProps from "./Alert.types"
import AlertVariants from "./Alert.variants"

const Alert = ({ icon, variant = "info", title, content, children, className }: AlertProps) => {
  const BASECLASS = " rounded-lg border px-4 py-1 w-full"

  return (
    <>
      <div className={BASECLASS + " " + AlertVariants[variant] + "  " + className} role="alert">
        <div className="flex items-center gap-1">
          {icon}
          <div className="flex flex-col gap-0">
            <h3 className="text-lg font-medium">{title}</h3>
            {content && <div className="text-sm">{content}</div>}
          </div>
          <span className="sr-only">Info</span>
        </div>
        {children && <div className="flex">{children}</div>}
      </div>
    </>
  )
}

export default Alert
