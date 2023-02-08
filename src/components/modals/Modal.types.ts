import React from "react"

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean
  updateStatus?: (set: any, toggle?: any) => void
  currentStatus?: Callback
}

export default ModalProps
