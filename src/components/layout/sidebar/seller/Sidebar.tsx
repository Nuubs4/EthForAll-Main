import React from "react"
import Image from "next/image"

import Logo from "../../../../assets/image/logo.png"
import Toggle from "../../../../assets/svg/sidebar-icons/toggle"
import Dashboard from "../../../../utils/constants/dashboard"
import Search from "../../../general/search/Search"

import SidebarProps from "./Sidebar.types"

const Sidebar = ({ children, current, setCurrent }: SidebarProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="flex-no-wrap flex h-full md:h-screen">
      <div className="absolute hidden w-64 flex-col justify-between bg-gray-800 shadow sm:relative sm:flex md:h-full">
        <div className="px-8">
          <Image className="flex w-[15rem] items-center pt-4" src={Logo} alt={"Decentralance"} />
          <ul className="mt-12">
            {Dashboard.SellerDashboardMenu.map((menu, index) => {
              return (
                <li
                  key={menu.id}
                  onClick={() => {
                    setCurrent(index)
                  }}
                  className={
                    "mb-6 flex w-full cursor-pointer items-center justify-between hover:text-typo/100 " +
                    (current === index ? "text-typo/90" : "text-typo/40")
                  }
                >
                  <div className="flex items-center">
                    {menu.logo()}
                    <span className="ml-2  text-sm">{menu.name}</span>
                  </div>
                  {menu.notification > 0 && (
                    <div className="flex items-center justify-center rounded bg-gray-700 py-1 px-3 text-xs text-gray-500">
                      {menu.notification}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="px-8">
          <div className="mb-4 flex w-full justify-center">
            <Search />
          </div>

          <ul className="flex w-full items-center justify-between  border-t border-gray-700 bg-gray-800">
            {Dashboard.SellerDashboardNavIcons.map((menu, index) => (
              <li key={menu.id} className="cursor-pointer pt-5 pb-3 text-white">
                {menu.logo()}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={
          "absolute z-40 flex-col justify-between bg-gray-800 shadow duration-150  ease-in-out sm:hidden md:h-full " +
          (isOpen ? "w-64" : "w-0")
        }
        id="mobile-nav"
      >
        <div
          className="absolute right-0 mt-16 -mr-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-tr rounded-br bg-gray-800 shadow"
          id="mobile-toggler"
          onClick={() => {
            setIsOpen((prev) => !prev)
          }}
        >
          {<Toggle />}
        </div>
        <div className="px-8">
          <Image
            className={"flex w-full items-center pt-6" + (isOpen ? "" : "hidden")}
            src={Logo}
            alt={"Decentralance"}
          ></Image>
          <ul className={"mt-12 transition-all " + (isOpen ? "" : "hidden")}>
            {Dashboard.SellerDashboardMenu.map((menu, index) => {
              return (
                <li
                  key={menu.id}
                  onClick={() => {
                    setCurrent(index)
                    setIsOpen(false)
                  }}
                  className={
                    "mb-6 flex w-full cursor-pointer items-center justify-between text-gray-300 hover:text-gray-500"
                  }
                >
                  <div className="flex items-center">
                    {menu.logo()}
                    <span className={"ml-2 text-sm "}>{menu.name}</span>
                  </div>
                  {menu.notification > 0 && (
                    <div className="flex items-center justify-center rounded bg-gray-700 py-1 px-3 text-xs text-gray-500">
                      {menu.notification}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
          <div className={"mt-48 mb-4 flex w-full justify-center " + (isOpen ? "" : "hidden")}>
            <Search />
          </div>
        </div>
        <div className={"border-t border-gray-700 px-8 " + (isOpen ? "" : "hidden")}>
          <ul className="flex w-full items-center justify-between bg-gray-800">
            {Dashboard.SellerDashboardNavIcons.map((menu, index) => (
              <li key={menu.id} className="cursor-pointer pt-5 pb-3 text-white">
                {menu.logo()}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <main className="container mx-auto w-11/12 p-0">
        <div className="h-full w-full">{children}</div>
      </main>
    </div>
  )
}

export default Sidebar
