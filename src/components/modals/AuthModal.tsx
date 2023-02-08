import React from "react"

import useModal from "../../hooks/useModal"
import useReadyState from "../../hooks/useReadyState"
import createPortal from "../../utils/hof/createPortal"
import Overlay from "../atoms/overlay/Overlay"
import Wallet from "../general/wallet/Wallet"

import Modal from "./Modal"
import ModalProps from "./Modal.types"

const ModalContent = ({ className, ...props }: ModalProps) => {
  return (
    <div
      className={"h-4/5 w-11/12 rounded-3xl bg-black ring-1 ring-white/70 md:w-1/3 " + className}
      {...props}
    >
      <Wallet />
    </div>
  )
}

const AuthModal = ({ updateStatus, currentStatus }: ModalProps) => {
  const ready = useReadyState()
  const { isModal, toggle, close, set } = useModal(currentStatus, false)

  const [AuthModal, setAuthModel] = React.useState<React.ReactPortal | null>(null)
  const [AuthOverlay, setAuthOverlay] = React.useState<React.ReactPortal | null>(null)

  React.useEffect(() => {
    const Element = (
      <Modal isOpen={isModal} set={set} toggle={toggle}>
        {
          <ModalContent
            onClick={(e) => {
              e.stopPropagation()
            }}
          />
        }
      </Modal>
    )
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
