import React from "react"

const useReadyState = () => {
  const [domReady, setDomReady] = React.useState(false)

  React.useEffect(() => {
    setDomReady(true)
  }, [])

  return domReady
}

export default useReadyState
