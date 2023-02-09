import React from "react"
import Router from "next/router"

const SellerRedirect = () => {
  React.useEffect(() => {
    const { pathname } = Router

    if (pathname == "/seller") {
      Router.replace("/seller/dashboard")
    }
  }, [])
  return <></>
}

export default SellerRedirect
