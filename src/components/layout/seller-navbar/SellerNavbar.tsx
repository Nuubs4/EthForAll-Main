import React from "react"
import { Fragment, useState } from "react"
import Image from "next/image"

import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react"
import { PlusIcon } from "@heroicons/react/20/solid"
import {
  Bars3Icon,
  BellIcon,
  CreditCardIcon,
  KeyIcon,
  SquaresPlusIcon,
  UserCircleIcon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"

import Logo from "../../../assets/image/logo.png"
import {
  sellerSupportNavbarNavigation,
  sellerSupportNavbarPopup,
  sellerUserDetails,
} from "../../../data/seller-support-navbar"
import classNames from "../../../utils/functions/className"

import SellerNavbarProps from "./SellerNavbar.types"

const navigation = [
  { name: "Account", href: "#", icon: UserCircleIcon, current: true },
  { name: "Password", href: "#", icon: KeyIcon, current: false },
  { name: "Plan & Billing", href: "#", icon: CreditCardIcon, current: false },
  { name: "Team", href: "#", icon: UserGroupIcon, current: false },
  { name: "Integrations", href: "#", icon: SquaresPlusIcon, current: false },
]

const SellerNavbar = ({ handleModal }: SellerNavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)

  function closeAddGigForm() {
    setIsOpen(false)
  }

  function openAddGigForm() {
    setIsOpen(true)
  }

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="block w-[8rem] rounded-full sm:hidden"
                    src={Logo}
                    alt={"Decentralance"}
                  />
                </div>
                <div className="hidden md:flex md:items-center md:space-x-4">
                  {sellerSupportNavbarNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <button
                    onClick={openAddGigForm}
                    type="button"
                    className="relative inline-flex items-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                    <span>New Job</span>
                  </button>

                  <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeAddGigForm}>
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                      </Transition.Child>

                      <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                          >
                            <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle text-black shadow-xl transition-all">
                              <div className="lg:grid">
                                <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
                                  {/* Form */}
                                  <div>
                                    <div className="shadow sm:overflow-hidden sm:rounded-md">
                                      <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
                                        <div>
                                          <h3 className="text-lg font-medium leading-6 text-gray-900">
                                            Add a new Gig
                                          </h3>
                                          <p className="mt-1 text-sm text-gray-500">
                                            Add new gigs that would be visible to your potential
                                            buyers.
                                          </p>
                                        </div>

                                        <div className="grid grid-cols-6 gap-6">
                                          <div className="col-span-6 sm:col-span-3">
                                            <label
                                              htmlFor="gig-name"
                                              className="block text-sm font-medium text-gray-700"
                                            >
                                              Gig Name
                                            </label>
                                            <input
                                              type="text"
                                              name="gig-name"
                                              placeholder=""
                                              id="gig-name"
                                              autoComplete="given-name"
                                              className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            />
                                          </div>

                                          <div className="col-span-6 sm:col-span-3">
                                            <label
                                              htmlFor="Gig Title"
                                              className="block text-sm font-medium text-gray-700"
                                            >
                                              Gig Title
                                            </label>
                                            <input
                                              type="text"
                                              name="Gig Title"
                                              placeholder=""
                                              id="Gig Title"
                                              autoComplete="family-name"
                                              className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            />
                                          </div>

                                          <div className="col-span-6 sm:col-span-4">
                                            <label
                                              htmlFor="service-type"
                                              className="block text-sm font-medium text-gray-700"
                                            >
                                              Service type
                                            </label>
                                            <input
                                              type="text"
                                              name="service-type"
                                              placeholder=""
                                              id="service-type"
                                              autoComplete="email"
                                              className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            />
                                          </div>

                                          <div className="col-span-6 sm:col-span-3">
                                            <label
                                              htmlFor="categories"
                                              className="block text-sm font-medium text-gray-700"
                                            >
                                              Categories
                                            </label>
                                            <select
                                              id="categories"
                                              name="country"
                                              autoComplete="country-name"
                                              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            >
                                              <option>Software Development</option>
                                              <option>IT consultant</option>
                                              <option>Arts and Designer</option>
                                            </select>
                                          </div>

                                          <div className="col-span-6">
                                            <label
                                              htmlFor="street-address"
                                              className="block text-sm font-medium text-gray-700"
                                            >
                                              Gig description
                                            </label>
                                            <input
                                              type="text"
                                              name="street-address"
                                              id="street-address"
                                              autoComplete="street-address"
                                              className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            />
                                          </div>

                                          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <label
                                              htmlFor="Buy-Price"
                                              className="block text-sm font-medium text-gray-700"
                                            >
                                              Buy Price
                                            </label>
                                            <input
                                              type="text"
                                              name="city"
                                              id="city"
                                              autoComplete="address-level2"
                                              className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            />
                                          </div>

                                          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label
                                              htmlFor="hire-price"
                                              className="block text-sm font-medium text-gray-700"
                                            >
                                              Hire Price
                                            </label>
                                            <input
                                              type="text"
                                              name="hire-price"
                                              id="hire-price"
                                              autoComplete="address-level1"
                                              className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            />
                                          </div>

                                          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label
                                              htmlFor="delivery-date"
                                              className="block text-sm font-medium text-gray-700"
                                            >
                                              Delivery Date
                                            </label>
                                            <input
                                              type="text"
                                              name="postal-code"
                                              id="postal-code"
                                              autoComplete="postal-code"
                                              className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                        <button
                                          onClick={closeAddGigForm}
                                          // type="submit"
                                          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                          Save
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </Dialog>
                  </Transition>
                </div>
                <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                  <button
                    type="button"
                    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={sellerUserDetails.imageUrl}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {sellerSupportNavbarPopup.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {sellerSupportNavbarNavigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-gray-700 pt-4 pb-3">
              <div className="flex items-center px-5 sm:px-6">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src={sellerUserDetails.imageUrl} alt="" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">{sellerUserDetails.name}</div>
                  <div className="text-sm font-medium text-gray-400">{sellerUserDetails.email}</div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2 sm:px-3">
                {sellerSupportNavbarPopup.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default SellerNavbar
