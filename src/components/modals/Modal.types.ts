import React from "react"

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean
  set?: Callback
  toggle?: Callback
  updateStatus?: (set: any, toggle?: any) => void
  currentStatus?: Callback
}

export default ModalProps
