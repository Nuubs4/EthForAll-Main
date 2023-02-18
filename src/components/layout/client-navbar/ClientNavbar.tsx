import React from "react"
import { Fragment, useState } from "react"
import Image from "next/image"

import { Dialog, Popover, Tab, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import {
  ArchiveBoxArrowDownIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"

import Logo from "../../../assets/image/logo.png"

const currencies = ["BTC", "ETH", "USDT", "BNB", "BUSD"]
const navigation = {
  // categories: [
  //   {
  //     name: "Women",
  //     featured: [
  //       {
  //         name: "New Arrivals",
  //         href: "#",
  //         imageSrc: "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
  //         imageAlt: "Models sitting back to back, wearing Basic Tee in black and bone.",
  //       },
  //       {
  //         name: "Basic Tees",
  //         href: "#",
  //         imageSrc: "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
  //         imageAlt:
  //           "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
  //       },
  //       {
  //         name: "Accessories",
  //         href: "#",
  //         imageSrc: "https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg",
  //         imageAlt: "Model wearing minimalist watch with black wristband and white watch face.",
  //       },
  //       {
  //         name: "Carry",
  //         href: "#",
  //         imageSrc: "https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg",
  //         imageAlt:
  //           "Model opening tan leather long wallet with credit card pockets and cash pouch.",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Men",
  //     featured: [
  //       {
  //         name: "New Arrivals",
  //         href: "#",
  //         imageSrc: "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg",
  //         imageAlt:
  //           "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
  //       },
  //       {
  //         name: "Basic Tees",
  //         href: "#",
  //         imageSrc: "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg",
  //         imageAlt: "Model wearing light heather gray t-shirt.",
  //       },
  //       {
  //         name: "Accessories",
  //         href: "#",
  //         imageSrc: "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg",
  //         imageAlt:
  //           "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.",
  //       },
  //       {
  //         name: "Carry",
  //         href: "#",
  //         imageSrc: "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg",
  //         imageAlt:
  //           "Model putting folded cash into slim card holder olive leather wallet with hand stitching.",
  //       },
  //     ],
  //   },
  // ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
}

const ClientNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
      {/* Mobile menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  {/* Currency selector */}
                  <form>
                    <div className="inline-block">
                      <label htmlFor="mobile-currency" className="sr-only">
                        Currency
                      </label>
                      <div className="group relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white">
                        <select
                          id="mobile-currency"
                          name="currency"
                          className="flex items-center rounded-md border-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-800"
                        >
                          {currencies.map((currency) => (
                            <option key={currency}>{currency}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                          <ChevronDownIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <header className="relative z-10">
        <nav aria-label="Top">
          {/* Secondary navigation */}
          <div className="">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div>
                <div className="flex h-16 items-center justify-between">
                  <div className="hidden gap-6  lg:flex lg:flex-1 lg:items-center">
                    {/* Logo (lg+) */}
                    <a href="#">
                      <span className="sr-only">Your Company</span>
                      <img
                        className="h-8 w-auto"
                        src="https://via.placeholder.com/50x50/ccc.png"
                        alt=""
                      />
                    </a>
                  </div>

                  {/* Searchbar */}
                  <div className="hidden lg:block">
                    <form>
                      <label
                        htmlFor="default-search"
                        className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Search
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-gray-500 dark:text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </div>
                        <input
                          type="search"
                          id="default-search"
                          className="block w-[30rem] rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                          placeholder="Search Services, Gigs..."
                          required
                        />
                      </div>
                    </form>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className="flex flex-1 items-center lg:hidden">
                    <button
                      type="button"
                      className="-ml-2 p-2 text-white"
                      onClick={() => setMobileMenuOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Search */}
                    <a href="#" className="ml-2 p-2 text-white">
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  </div>

                  {/* Logo (lg-) */}
                  <a href="#" className="lg:hidden">
                    <span className="sr-only">Your Company</span>
                    <img
                      src="https://via.placeholder.com/50x50/ccc.png"
                      alt=""
                      className="h-8 w-auto"
                    />
                  </a>

                  <div className="flex flex-1 items-center justify-end">
                    <div className="flex items-center gap-2 lg:ml-8 lg:gap-4">
                      {/* Currency selector */}
                      <form className="hidden lg:block">
                        <div>
                          <label htmlFor="desktop-currency" className="sr-only">
                            Currency
                          </label>
                          <div className="group relative -ml-2 rounded-md border-transparent bg-gray-900 focus-within:ring-2 focus-within:ring-white">
                            <select
                              id="desktop-currency"
                              name="currency"
                              className="flex items-center rounded-md border-transparent bg-gray-900 bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100"
                            >
                              {currencies.map((currency) => (
                                <option key={currency}>{currency}</option>
                              ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                              <ChevronDownIcon
                                className="h-5 w-5 text-gray-300"
                                aria-hidden="true"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                      {/* Post Gig */}
                      <button
                        type="button"
                        className="mr-2 mb-2 hidden rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:hidden"
                      >
                        Post Gig
                      </button>

                      {/* Cart */}
                      <div className="ml-4 flow-root lg:ml-0">
                        <a href="#" className="group flex items-center p-2">
                          <ArchiveBoxArrowDownIcon
                            className="h-6 w-6 flex-shrink-0 text-white"
                            aria-hidden="true"
                          />
                          <span className="ml-2 text-sm font-medium text-white">0</span>
                          <span className="sr-only">items in cart, view bag</span>
                        </a>
                      </div>

                      {/* Profile Avatar */}
                      <img
                        className="inline-block h-10 w-10 rounded-full"
                        src="https://api.lorem.space/image/face?w=256&h=256&hash=aizado0k"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default ClientNavbar
