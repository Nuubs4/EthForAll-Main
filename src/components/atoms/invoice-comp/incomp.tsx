import { Fragment, useState } from "react"
import { useAccount } from "wagmi"

import { Dialog, Transition } from "@headlessui/react"

import Button from "../../atoms/button/Button"

export default function Incomp() {
  const [isOpen, setIsOpen] = useState(false) || ""

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="fixed inset-0 " style={{ marginLeft: "30vw", marginTop: "5vh" }}>
        <div className="flex justify-between" style={{ width: "90%" }}>
          <div className="text-3xl font-bold">Invoices</div>

          <div>
            <button
              type="button"
              onClick={openModal}
              className="rounded-md bg-purple-50 px-4  py-2 text-sm font-medium text-purple-900  hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 "
            >
              Open dialog
            </button>
          </div>
        </div>
        <div>
          <table
            style={{ marginTop: "10vh", borderSpacing: "30px", width: "90%" }}
            className="invo-table"
            cellPadding="20"
          >
            <thead>
              <td>Invoice Number</td>
              <td>Due Date</td>
              <td>Customer Name</td>
              <td>Price</td>
              <td>Token</td>
              <td>Note</td>
              <td>Explore</td>
            </thead>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </table>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Invoice Details
                  </Dialog.Title>
                  <div className="w-100 -mt-40">
                    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden">
                      <form className="" style={{ width: "100%" }}>
                        <div className="flex justify-between">
                          <div className="mb-2">
                            <label className="block text-sm font-semibold text-gray-800">
                              Created Date:
                            </label>
                            <input
                              type="date"
                              className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-indigo-700 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                            />
                          </div>
                          <div className="mb-2">
                            <label className="block text-sm font-semibold text-gray-800">
                              Due Date:
                            </label>
                            <input
                              type="date"
                              className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-indigo-700 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-800">
                            Product/Service Details:
                          </label>
                          <input
                            type="text"
                            className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-indigo-700 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                            name=""
                            id=""
                          />
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <input
                              type="text"
                              placeholder="Quantity*"
                              name=""
                              className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-indigo-700 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                              id=""
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder="Price*"
                              name=""
                              className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-indigo-700 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                              id=""
                            />
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <select
                              className="mt-2 block rounded-md border bg-white px-4 py-2 text-indigo-700 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                              name=""
                              id=""
                            >
                              <option value="ETH">ETH</option>
                              <option value="MATIC">MATIC</option>
                              <option value="AVAX">AVAX</option>
                              <option value="BSC">BNB</option>
                            </select>
                          </div>
                          <div>
                            <select
                              className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-indigo-700 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                              name=""
                              id=""
                            >
                              <option value="Ethereum">Ethereum</option>
                              <option value="Polygon">Polygon</option>
                              <option value="Avalanche">Avalanche</option>
                              <option value="Bsc">Bsc</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-800">
                            Customer Details:
                          </label>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <input
                              type="text"
                              placeholder="Name"
                              name=""
                              className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-indigo-700 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                              id=""
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder="Address"
                              name=""
                              className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-indigo-700 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                              id=""
                            />
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <textarea
                              name=""
                              className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-indigo-700 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                              id=""
                              cols="50"
                              rows="4"
                              placeholder="Note"
                            ></textarea>
                          </div>
                        </div>
                        <div className="mt-6">
                          <button
                            className="w-full transform rounded-md bg-indigo-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-indigo-600 focus:bg-indigo-600 focus:outline-none"
                            type="submit"
                            onClick={closeModal}
                          >
                            Create Invoice
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
