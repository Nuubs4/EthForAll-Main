import React from "react"
import Router from "next/router"

const ClientRedirect = () => {
  React.useEffect(() => {
    const { pathname } = Router

    if (pathname == "/client") {
      Router.replace("/client/categories")
    }
  }, [])
  return <></>
}

export default ClientRedirect
