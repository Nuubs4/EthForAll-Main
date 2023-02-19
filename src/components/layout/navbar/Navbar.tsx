import React from "react"
import Image from "next/image"
import Link from "next/link"
import { BsFillPersonFill } from "react-icons/bs"
import { useAccount } from "wagmi"

import Logo from "../../../assets/image/logo.png"
import Button from "../../atoms/button/Button"

import NavbarProps from "./Navbar.types"

const Navbar = ({ handleModal }: NavbarProps) => {
  const [address, setAddress] = React.useState<`0x${string}` | null>(null)

  const { connector, address: account, isConnected } = useAccount()

  React.useEffect(() => {
    if (account) setAddress(account)
  }, [account])

  return (
    <div className="flex w-full justify-between py-4 px-12">
      <div>
        <Image src={Logo} alt={"Decentralance"} className="w-[15rem]" />
      </div>
      <div className={account ? "" : "hidden"}>
        <ul className="flex gap-8">
          <li className="menu-link">
            <Link href={"/client/categories"}>Browse Categories</Link>
          </li>
          <li className="menu-link">
            <Link href={"/seller/dashboard"}>Seller Dashboard</Link>
          </li>
          <li className="menu-link">
            <Link href={"#"}></Link>
          </li>
          <li className="menu-link">
            <Link href={"#"}></Link>
          </li>
          <li className="menu-link">
            <Link href={"#"}></Link>
          </li>
        </ul>
      </div>
      <Button
        onClick={address ? undefined : handleModal ? () => handleModal() : undefined}
        className=""
        variant="secondary"
      >
        {address ? (
          <span>
            {address.slice(0, 4)}...{address.slice(-3)}
          </span>
        ) : (
          <span>Register</span>
        )}
        <BsFillPersonFill className="scale-110" />
      </Button>
    </div>
  )
}

export default Navbar
