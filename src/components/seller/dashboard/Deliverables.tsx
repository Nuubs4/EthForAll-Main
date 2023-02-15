import React from "react"

import { Tab } from "@headlessui/react"

import DeliverableData from "../../../data/deliverable-data"
import className from "../../../utils/functions/className"

const Deliverable = () => {
  return (
    <div className="flex w-full items-center justify-center px-5 py-5 sm:px-0">
      <div className="w-full">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            {Object.keys(DeliverableData).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  className(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
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
            {Object.values(DeliverableData).map((posts, idx) => (
              <Tab.Panel key={idx}>
                <div className="mt-8 flex flex-col">
                  <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                              >
                                Buyer
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Gig
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Due Date
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Payment
                              </th>
                              <th
                                scope="col"
                                className="relative py-3.5 pl-3 pr-4 text-center text-gray-900 sm:pr-6"
                              >
                                Status
                              </th>
                            </tr>
                          </thead>

                          <tbody className="divide-y divide-gray-200 bg-white">
                            {posts.map((post) => (
                              // eslint-disable-next-line react/jsx-key
                              <tr>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                  {post.name}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {post.gig}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {post.duedate}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {post.payment}
                                </td>
                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-center text-sm font-medium sm:pr-6">
                                  <a
                                    href="#"
                                    className={`text-sm ${
                                      post.status === "Completed"
                                        ? "text-blue-500"
                                        : post.status === "In Progress"
                                        ? "text-green-400"
                                        : "text-gray-400"
                                    }`}
                                  >
                                    {post.status}
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}
export default Deliverable
