import React from "react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  current: number
  setCurrent: React.Dispatch<React.SetStateAction<any>>
}

export default SidebarProps
