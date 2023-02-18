import React from "react"
import { Fragment, useState } from "react"
import { useRouter } from "next/router"

import { Dialog, Disclosure, Transition } from "@headlessui/react"
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/20/solid"
import { XMarkIcon } from "@heroicons/react/24/outline"

const filters = [
  {
    id: "by price",
    name: "By Price",
    options: [
      { value: "how to High", label: "Low to High" },
      { value: "high to Low", label: "High to Low" },
    ],
  },
  {
    id: "by category",
    name: "By Category",
    options: [
      { value: "Top sellers", label: "Top sellers" },
      { value: "Verified Sellers", label: "Verified Sellers" },
      { value: "Seller Level 1", label: "Seller Level 1" },
      { value: "Seller Level 2", label: "Seller Level 2" },
      { value: "Seller Level 3", label: "Seller Level 3" },
    ],
  },
]
const products = [
  {
    id: 1,
    name: "Accountability",
    description: "Forward Branding Assistant",
    href: "#",
    rating: "⭐⭐⭐⭐",
    buyPrice: "256 BTC",
    hirePrice: "360 BTC",
    imageSrc: "https://api.lorem.space/image/fashion?w=277&h=555&hash=ipy4sigo",
    imageAlt: "International Marketing Associate",
  },
  {
    id: 2,
    name: "Metrics",
    description: "Chief Tactics Analyst",
    href: "#",
    rating: "⭐⭐⭐",
    buyPrice: "256 BTC",
    hirePrice: "360 BTC",
    imageSrc: "https://api.lorem.space/image/fashion?w=277&h=555&hash=ifrggs7j",
    imageAlt: "Global Security Architect",
  },
  {
    id: 3,
    name: "Identity",
    description: "Customer Operations Technician",
    href: "#",
    rating: "⭐⭐⭐⭐⭐",
    buyPrice: "256 BTC",
    hirePrice: "360 BTC",
    imageSrc: "https://api.lorem.space/image/fashion?w=277&h=555&hash=44acrzws",
    imageAlt: "Customer Accounts Planner",
  },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ")
}

const Categories = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const router = useRouter()

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
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
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4">
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.name}
                        className="border-t border-gray-200 pt-4 pb-4"
                      >
                        {({ open }) => (
                          <fieldset>
                            <legend className="w-full px-2">
                              <Disclosure.Button className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                                <span className="text-sm font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex h-7 items-center">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? "-rotate-180" : "rotate-0",
                                      "h-5 w-5 transform"
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </legend>
                            <Disclosure.Panel className="px-4 pt-4 pb-2">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`${section.id}-${optionIdx}-mobile`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`${section.id}-${optionIdx}-mobile`}
                                      className="ml-3 text-sm text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </fieldset>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
          <div className="border-b border-gray-200 pt-8 pb-10">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Best seller for SEO</h1>
            <p className="mt-4 text-2xl text-gray-500">
              Services that people loved for superb work and delivery
            </p>
          </div>

          <div className="pt-12 pb-24 lg:grid lg:grid-cols-3 xl:grid-cols-4">
            <aside>
              <h2 className="sr-only">Filters</h2>

              <button
                type="button"
                className="inline-flex items-center lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="text-sm font-medium text-gray-700">Filters</span>
                <PlusIcon className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              </button>

              <div className="hidden lg:block">
                <form className="space-y-10 divide-y divide-gray-200">
                  {filters.map((section, sectionIdx) => (
                    <div key={section.name} className={sectionIdx === 0 ? undefined : "pt-10"}>
                      <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">
                          {section.name}
                        </legend>
                        <div className="space-y-3 pt-6">
                          {section.options.map((option, optionIdx) => (
                            <div key={option.value} className="flex items-center">
                              <input
                                id={`${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                defaultValue={option.value}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`${section.id}-${optionIdx}`}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </fieldset>
                    </div>
                  ))}
                </form>
              </div>
            </aside>

            <section
              aria-labelledby="product-heading"
              className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3"
            >
              <h2 id="product-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-2 sm:gap-y-10  xl:grid-cols-3">
                {products.map((product) => (
                  <article
                    onClick={() => {
                      router.push("categories/overview")
                    }}
                    key={product.id}
                    className="mx-auto w-full transform cursor-pointer py-6 px-3 duration-500 hover:-translate-y-1"
                  >
                    <div className="overflow-hidden rounded-lg border-4 bg-white shadow-xl">
                      <div
                        className="h-60 bg-cover bg-center object-scale-down object-top p-4"
                        style={{
                          backgroundImage: `url(${product.imageSrc})`,
                        }}
                      ></div>
                      <div className="p-4 py-5">
                        {/* job name */}
                        <p className="text-2xl font-bold uppercase tracking-wide text-gray-700">
                          {product.name}
                        </p>
                        {/* Job description */}
                        <p className="mt-1.5 mb-1.5 text-sm text-gray-900">{product.description}</p>
                      </div>
                      {/* Ratings */}
                      <div className="flex gap-2 border-t border-gray-200 p-4 font-bold tracking-wider text-gray-700">
                        <span className="">Rating : </span>
                        <div className="flex items-center text-gray-600">{product.rating}</div>
                      </div>
                      {/* price and hire button */}
                      <div className="flex justify-between border-t border-gray-200 bg-gray-100 px-4 py-3 uppercase text-black transition">
                        <button className="categories-page-btn">
                          <span className="block rounded-sm bg-white px-2 py-3 text-sm font-medium transition hover:bg-transparent">
                            Buy - {product.buyPrice}
                          </span>
                        </button>
                        <button className="categories-page-btn">
                          <span className="block rounded-sm bg-white px-2 py-3 text-sm font-medium transition hover:bg-transparent">
                            Hire - {product.hirePrice}
                          </span>
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Categories
