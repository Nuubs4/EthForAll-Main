import React from "react"

import { Tab } from "@headlessui/react"
import {
  BuildingOfficeIcon,
  CheckCircleIcon,
  StarIcon,
  WalletIcon,
} from "@heroicons/react/20/solid"

import SellerDashboardCategory from "../../../data/seller-dashboard-categories"
import classNames from "../../../utils/functions/className"
import SellerNavbar from "../../layout/seller-navbar/SellerNavbar"

import DashboardProps from "./Dashboard.types"

const Dashboard = ({ onClick }: DashboardProps) => {
  return (
    <div>
      <SellerNavbar />
      <div className="">
        <main className="flex-1 pb-8">
          <div className="bg-white shadow">
            <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
              <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center">
                    <img
                      className="hidden h-20 w-20 rounded-full sm:block"
                      src="https://api.lorem.space/image/face?w=64&h=64&hash=133hptlw"
                      alt=""
                    />
                    <div>
                      <div className="flex items-start">
                        <img
                          className="h-20 w-20 rounded-full sm:hidden"
                          src="https://api.lorem.space/image/face?w=64&h=64&hash=133hptlw"
                          alt=""
                        />
                        <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
                          User name
                        </h1>
                      </div>
                      <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                        <dt className="sr-only">Company</dt>
                        <dd className="flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6">
                          <BuildingOfficeIcon
                            className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                            aria-hidden="true"
                          />
                          Conner Springs
                        </dd>
                        <dt className="sr-only">Account status</dt>
                        <dd className="mt-3 flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6 sm:mt-0">
                          <WalletIcon
                            className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                            aria-hidden="true"
                          />
                          xxxxxxx0dfejfsz
                        </dd>
                        <dt className="sr-only">Account status</dt>
                        <dd className="mt-3 flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6 sm:mt-0">
                          <CheckCircleIcon
                            className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                            aria-hidden="true"
                          />
                          Verified account
                        </dd>
                        <dt className="sr-only">Account status</dt>
                        <dd className="mt-3 flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6 sm:mt-0">
                          <StarIcon
                            className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                            aria-hidden="true"
                          />
                          4.5/5
                        </dd>
                      </dl>
                      <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-col sm:flex-wrap">
                        <dt className=" h-5 w-5 flex-shrink-0 text-sm font-medium capitalize text-gray-400">
                          Bio
                        </dt>
                        <dd className="mt-3 flex items-center text-sm font-medium capitalize text-gray-500  sm:mt-0">
                          Web Developer, Three JS, Blockchain Developer
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="flex w-full items-center justify-center px-2 sm:px-0">
        <div className="w-full">
          <Tab.Group>
            <Tab.List className="flex space-x-1 bg-blue-900/20 p-1">
              {Object.keys(SellerDashboardCategory).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full py-2.5 text-sm font-medium leading-5 text-blue-700",
                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white shadow"
                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(SellerDashboardCategory).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    "bg-white p-3",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <ul>
                    {posts.map((post) => (
                      <li key={post.id} className="relative rounded-md p-3 hover:bg-gray-100">
                        <div className="flex  overflow-hidden bg-white p-5 text-black shadow">
                          <div className="w-1/2">
                            <p>{post.title}</p>
                            <p>{post.date}</p>
                          </div>
                          <div className="w-1/2 text-right">
                            <p className="text-lg text-green-600">${post.price}</p>
                            <p
                              className={`text-sm ${
                                post.status === "Completed"
                                  ? "text-blue-500"
                                  : post.status === "In Progress"
                                  ? "text-green-400"
                                  : "text-gray-400"
                              }`}
                            >
                              {post.status}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
