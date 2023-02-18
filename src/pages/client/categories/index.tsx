import React from "react"

import Categories from "../../../components/client/Categories"
import ClientFooter from "../../../components/layout/client-footer/ClientFooter"
import ClientNavbar from "../../../components/layout/client-navbar/ClientNavbar"

// TODO  maybe name it Marketplace

const index = () => {
  return (
    <div>
      <ClientNavbar />
      <Categories />
      <ClientFooter />
    </div>
  )
}

export default index
