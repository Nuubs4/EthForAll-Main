import React from "react"
import { BsFillPersonFill } from "react-icons/bs"

import Button from "../../atoms/button/Button"

const Navbar = () => {
  return (
    <div className="flex w-full justify-between py-4 px-12">
      <div>Logo</div>
      <div className="">
        <ul className="flex gap-8">
          <li className="menu-link">Menu 1</li>
          <li className="menu-link">Menu 2</li>
          <li className="menu-link">Menu 3</li>
          <li className="menu-link">Menu 4</li>
          <li className="menu-link">Menu 5</li>
        </ul>
      </div>
      <Button className="" variant="secondary">
        <span>Register</span>
        <BsFillPersonFill className="scale-110" />
      </Button>
    </div>
  )
}

export default Navbar
