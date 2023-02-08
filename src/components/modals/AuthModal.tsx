import React from "react"

import useModal from "../../hooks/useModal"
import useReadyState from "../../hooks/useReadyState"
import createPortal from "../../utils/hof/createPortal"
import Overlay from "../atoms/overlay/Overlay"

import Modal from "./Modal"
import ModalProps from "./Modal.types"

const AuthModal = ({ updateStatus, currentStatus }: ModalProps) => {
  const ready = useReadyState()
  const { isModal, toggle, close, set } = useModal(currentStatus, false)

  const [AuthModal, setAuthModel] = React.useState<React.ReactPortal | null>(null)
  const [AuthOverlay, setAuthOverlay] = React.useState<React.ReactPortal | null>(null)

  React.useEffect(() => {
    const Element = <Modal isOpen={isModal} />
    const OverlayElement = (
      <Overlay
        isOpen={isModal}
        onClick={() => {
          close()
        }}
      />
    )

    if (ready) {
      const { modal, overlay } = createPortal({
        content: Element,
        overlayContent: OverlayElement,
      })

      if (updateStatus) {
        // console.log(updateStatus)
        updateStatus(set, toggle)
      }

      setAuthModel(modal)
      setAuthOverlay(overlay)
    }
  }, [isModal, ready])

  return [AuthModal, AuthOverlay]
}

export default AuthModal
