import React from "react"

type Callback = (arg: boolean) => void

const useModal = (callback?: Callback, initial = false) => {
  const [isModal, setIsModal] = React.useState(initial)

  const toggle = () => {
    console.log("Modal Toggled")
    setIsModal((state) => !state)
  }

  const close = () => {
    console.log("Modal closed")
    setIsModal(false)
  }

  const open = () => {
    console.log("Modal Opened")
    setIsModal(true)
  }

  const set = (status: boolean) => {
    setIsModal(status)
  }

  React.useEffect(() => {
    if (callback) callback(isModal)
  }, [isModal])

  return { isModal, toggle, open, close, set }
}

export default useModal
