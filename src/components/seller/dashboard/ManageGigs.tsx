import React from "react"

import { PaperClipIcon, PencilIcon } from "@heroicons/react/20/solid"

import SellerNavbar from "../../layout/seller-navbar/SellerNavbar"

import DashboardProps from "./Dashboard.types"
const stats = [
  { name: "Revenue", stat: "71,897" },
  { name: "No. of Buyers", stat: "58" },
  { name: "Clicks", stat: "24.57%" },
]

const ManageGigs = ({ onClick }: DashboardProps) => {
  return (
    <>
      <SellerNavbar />
      {/* Manage Gigs */}
      <div className="h-[90vh] overflow-y-scroll bg-white">
        <div className="gigs-card border-y-2 border-black">
          {/* Gig heading */}
          <div className="mx-4 flex items-center justify-between border-b border-gray-400">
            <div className="py-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Gig Name</h3>
              <p className="mt-1 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti consectetur.
              </p>
            </div>
            <div className="ml-4 mt-4">
              <button
                type="button"
                className="base-btn flex items-center gap-2 bg-gray-500 text-xl text-white hover:text-white"
              >
                <PencilIcon className="h-4 w-4" />
                Edit
              </button>
            </div>
          </div>
          {/* Gig Description */}
          <div className="border-gray-200 px-4">
            <div className="divide-y divide-gray-200">
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">Gig Title</dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <span className="flex-grow">Herman Bednar</span>
                  <span className="ml-4 flex-shrink-0"></span>
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">Category</dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <span className="flex-grow">Strategist</span>
                  <span className="ml-4 flex-shrink-0"></span>
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">Email address</dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <span className="flex-grow">Bernice.Rice78@example.org</span>
                  <span className="ml-4 flex-shrink-0"></span>
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">Service Type</dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <span className="flex-grow">Infrastructure</span>
                  <span className="ml-4 flex-shrink-0"></span>
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul
                    role="list"
                    className="divide-y divide-gray-200 rounded-md border border-gray-200"
                  >
                    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-2 w-0 flex-1 truncate">
                          resume_back_end_developer.pdf
                        </span>
                      </div>
                      <div className="ml-4 flex flex-shrink-0 space-x-4"></div>
                    </li>
                    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-2 w-0 flex-1 truncate">
                          coverletter_back_end_developer.pdf
                        </span>
                      </div>
                      <div className="ml-4 flex flex-shrink-0 space-x-4"></div>
                    </li>
                  </ul>
                </dd>
              </div>
            </div>
          </div>
          {/* Gig Stats */}
          <div>
            <dl className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.name}
                  className="overflow-hidden rounded-lg bg-white px-4 py-5 sm:p-6"
                >
                  <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
                  <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                    {item.stat}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="gigs-card border-y-2 border-black">
          {/* Gig heading */}
          <div className="mx-4 flex flex-wrap items-center justify-between border-b border-gray-400 sm:flex-nowrap">
            <div className="py-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Gig Name</h3>
              <p className="mt-1 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti consectetur.
              </p>
            </div>
            <div className="ml-4 mt-4">
              <button
                type="button"
                className="base-btn flex items-center gap-2 bg-gray-500 text-xl text-white hover:text-white"
              >
                <PencilIcon className="h-4 w-4" />
                Edit
              </button>
            </div>
          </div>
          {/* Gig Description */}
          <div className="border-gray-200 px-4">
            <div className="divide-y divide-gray-200">
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">Gig Title</dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <span className="flex-grow">Omar Lang</span>
                  <span className="ml-4 flex-shrink-0"></span>
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">Category</dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <span className="flex-grow">Associate</span>
                  <span className="ml-4 flex-shrink-0"></span>
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">Email address</dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <span className="flex-grow">Ashlynn.Kiehn6@example.com</span>
                  <span className="ml-4 flex-shrink-0"></span>
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">Service Type</dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <span className="flex-grow">Implementation</span>
                  <span className="ml-4 flex-shrink-0"></span>
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul
                    role="list"
                    className="divide-y divide-gray-200 rounded-md border border-gray-200"
                  >
                    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-2 w-0 flex-1 truncate">
                          resume_back_end_developer.pdf
                        </span>
                      </div>
                      <div className="ml-4 flex flex-shrink-0 space-x-4"></div>
                    </li>
                    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-2 w-0 flex-1 truncate">
                          coverletter_back_end_developer.pdf
                        </span>
                      </div>
                      <div className="ml-4 flex flex-shrink-0 space-x-4"></div>
                    </li>
                  </ul>
                </dd>
              </div>
            </div>
          </div>
          {/* Gig Stats */}
          <div>
            <dl className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.name}
                  className="overflow-hidden rounded-lg bg-white px-4 py-5 sm:p-6"
                >
                  <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
                  <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                    {item.stat}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="gigs-card border-y-2 border-black">
          {/* Gig heading */}
          <div className="mx-4 flex flex-wrap items-center justify-between border-b border-gray-400 sm:flex-nowrap">
            <div className="py-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Gig Name</h3>
              <p className="mt-1 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti consectetur.
              </p>
            </div>
            <div className="ml-4 mt-4">
              <button
                type="button"
                className="base-btn flex items-center gap-2 bg-gray-500 text-xl text-white hover:text-white"
              >
                <PencilIcon className="h-4 w-4" />
                Edit
              </button>
            </div>
          </div>
          {/* Gig Description */}
          <div className="border-gray-200 px-4">
            <div className="divide-y divide-gray-200">
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">Gig Title</dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <span className="flex-grow">Steve Crist</span>
                  <span className="ml-4 flex-shrink-0"></span>
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">Category</dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <span className="flex-grow">Technician</span>
                  <span className="ml-4 flex-shrink-0"></span>
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">Email address</dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <span className="flex-grow">Sandrine84@example.com</span>
                  <span className="ml-4 flex-shrink-0"></span>
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">Service Type</dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <span className="flex-grow">Quality</span>
                  <span className="ml-4 flex-shrink-0"></span>
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul
                    role="list"
                    className="divide-y divide-gray-200 rounded-md border border-gray-200"
                  >
                    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-2 w-0 flex-1 truncate">
                          resume_back_end_developer.pdf
                        </span>
                      </div>
                      <div className="ml-4 flex flex-shrink-0 space-x-4"></div>
                    </li>
                    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-2 w-0 flex-1 truncate">
                          coverletter_back_end_developer.pdf
                        </span>
                      </div>
                      <div className="ml-4 flex flex-shrink-0 space-x-4"></div>
                    </li>
                  </ul>
                </dd>
              </div>
            </div>
          </div>
          {/* Gig Stats */}
          <div>
            <dl className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.name}
                  className="overflow-hidden rounded-lg bg-white px-4 py-5 sm:p-6"
                >
                  <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
                  <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                    {item.stat}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageGigs
