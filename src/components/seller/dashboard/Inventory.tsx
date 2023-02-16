import React from "react"

import { Tab } from "@headlessui/react"

import inventorydata from "../../../data/inventory-data"
import className from "../../../utils/functions/className"
const Inventory = () => {
  return (
    <div className="flex w-full items-center justify-center px-5 py-5 sm:px-0">
      <div className="w-full">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            {Object.keys(inventorydata).map((category) => (
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
            <Tab.Panel>
              <div className=" mx-5">
                <div className="mx-5 text-4xl font-medium">Scale Your Business</div>
                <div className="my-5 mx-5 flex flex-col rounded-lg border bg-white p-0 md:flex-row">
                  <div className="p-5 text-black md:w-1/2">
                    <div className="text-2xl font-semibold">Create Your Badge</div>
                    <div className="mt-5 flex flex-col">
                      <span className="text-lg">Boost the traffic to your Gigs</span>{" "}
                      <span className="text-lg">by embedding a seller badge</span>{" "}
                      <span className="text-lg">on your website or blog.</span>
                    </div>
                  </div>
                  <div className="m-0  flex flex-col gap-3 rounded-md border bg-black p-5 md:w-1/2 ">
                    <div>
                      <div className="mb-5">SELECT BADGE CONTENT</div>
                      <select
                        name="category"
                        id="cat"
                        className=" rounded-md border p-2 text-black  "
                      >
                        <option value="Programming and Tech" selected>
                          Programming and Tech
                        </option>
                        <option value="Arts and Design">Arts and Design</option>
                        <option value="Writing and Content">Writing and Content</option>
                      </select>
                    </div>
                    <div className="">
                      <div className="mb-5">COPY TO CLIPBOARD</div>
                      <textarea className=" w-[15rem] text-sm text-black">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi a ab
                        consectetur qui iusto doloribus quidem, tempore mollitia ullam, commodi fuga
                        harum! Nesciunt optio, ratione iure voluptatum expedita dolor laudantium.
                      </textarea>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className=" mx-5">
                <div className="mx-5 text-4xl font-medium">Earning</div>
                <div className="my-5 mx-5 flex flex-col gap-3 rounded-lg border bg-white p-5 md:flex-row">
                  <div className="flex flex-col gap-5 rounded-md border border-gray-400 p-5 text-black md:w-1/3 ">
                    <div className="text-black">
                      Balance Available for use
                      <div className="text-2xl">$250</div>
                    </div>
                    <div>
                      <button className="bg-black p-3 text-white">Withdraw balance</button>
                      <div>
                        <a href="" className="font-md text-black ">
                          Manage payout method
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 rounded-md border border-gray-400 p-5 md:w-1/3">
                    <div className="text-black">
                      Payment being cleared
                      <div className="text-2xl">$50</div>
                    </div>
                    <div className="text-black">
                      Payment for active orders
                      <div className="text-2xl">$50</div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 rounded-md border border-gray-500 p-5 md:w-1/3">
                    <div className="text-black">
                      Earning to date
                      <div className="text-2xl">$50</div>
                    </div>
                    <div className="text-black">
                      Expanses to date
                      <div className="text-2xl">$50</div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className=" mx-5">
                <div className="mx-5 text-4xl font-medium">Workspace</div>
                <div className="my-5 mx-5 flex flex-col gap-3 rounded-lg border bg-white p-5 ">
                  <div className="p-5 text-black">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Type
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Date
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Size
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"></td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="flex flex-col gap-3 p-5 text-black">
                    <p className="semibold text-2xl">A place for receipts, docs, and files</p>
                    <p> &#x2713; Turn files into expanses, income, or attach them to projects.</p>
                    <p>
                      &#x2713; Collect everything related to the project <b>in one place</b>
                    </p>
                    <p>
                      &#x2713; Keep track of documents and<b> never lose a receipt</b>
                    </p>
                    <p>
                      &#x2713; Add files via direct upload or email <b>to your workspace</b>
                    </p>
                    <button
                      className="mt-5 w-[10rem] bg-black p-3 text-white hover:bg-slate-700
                    "
                    >
                      Upload files
                    </button>
                  </div>
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}

export default Inventory
