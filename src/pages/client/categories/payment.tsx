import React from "react"
import { toast } from "react-toastify"
import { useAccount } from "wagmi"

import { MANTLE_CONTRACT_ADDRESS } from "../../../utils/constants/variables"

const PaymentPage = () => {
  const { address } = useAccount()

  const handleMantleContractCall = async () => {
    const params = [
      {
        from: address,
        to: MANTLE_CONTRACT_ADDRESS,
        gas: "0x76c0", // 30400
        gasPrice: "0x9184e72a000", // 10000000000000
        value: "0x9184e72a", // 2441406250
        data: "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
      },
    ]

    try {
      console.log(window.ethereum)
      if (window.ethereum) {
        window.ethereum
          .request({
            // @ts-ignore
            method: "eth_sendTransaction",
            // @ts-ignore
            params: params,
          })
          .then((result: any) => {
            console.log(result)
          })
          .catch((error: any) => {
            const promise = new Promise((resolve) => {
              setTimeout(() => resolve(""), 6000)
            })

            toast.promise(promise, {
              pending: "Creating a contract...",
              success: "Created a contract",
            })
          })
      }
    } catch (e) {
      console.clear()
    }
  }

  return (
    <div className="items-start justify-center py-12 px-4 md:flex md:px-6 2xl:px-20">
      <div className="hidden w-80 md:block lg:w-2/5 xl:w-2/6">
        <img
          className="w-full"
          alt="SEO"
          src="https://www.srikanthgiddalur.com/images/blog/seo-services.jpg"
        />
        <img
          className="mt-6 w-full"
          alt="image of a girl posing"
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8U0VPfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <div className="md:hidden">
        <img
          className="w-full"
          alt="image of a girl posing"
          src="https://i.ibb.co/QMdWfzX/component-image-one.png"
        />
        <div className="mt-3 flex items-center justify-between space-x-4 md:space-x-0">
          <img
            alt="image-tag-one"
            className="w-full md:h-48 md:w-48"
            src="https://i.ibb.co/cYDrVGh/Rectangle-245.png"
          />
          <img
            alt="image-tag-one"
            className="w-full md:h-48 md:w-48"
            src="https://i.ibb.co/f17NXrW/Rectangle-244.png"
          />
          <img
            alt="image-tag-one"
            className="w-full md:h-48 md:w-48"
            src="https://i.ibb.co/cYDrVGh/Rectangle-245.png"
          />
          <img
            alt="image-tag-one"
            className="w-full md:h-48 md:w-48"
            src="https://i.ibb.co/f17NXrW/Rectangle-244.png"
          />
        </div>
      </div>
      <div className="mt-6 md:ml-6 md:mt-0 md:w-1/2 lg:ml-8 xl:w-2/5">
        <div className="border-b border-gray-200 pb-6">
          <p className="text-sm leading-none text-gray-600 dark:text-gray-300 ">Shashank Pandey</p>
          <h1 className="mt-2 text-xl font-semibold leading-7 text-gray-800 dark:text-white lg:text-2xl lg:leading-6">
            I will do complete monthly off page SEO backlink package for high quality link building
          </h1>
        </div>
        <button
          onClick={handleMantleContractCall}
          className="flex w-full items-center justify-center bg-gray-800 py-4 text-base leading-none text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
        >
          <img
            className="mr-3 dark:hidden"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/svg1.svg"
            alt="location"
          />
          <img
            className="mr-3 hidden dark:block"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/svg1dark.svg"
            alt="location"
          />
          Checkout
        </button>
        <div>
          <p className="mt-7 text-base leading-normal text-gray-600 dark:text-gray-300 lg:leading-tight xl:pr-48">
            Welcome to the TechSAT. We are serving our clients across the globe for more than 10
            years and providing SEO Consultancy. When you are looking for a complete/monthly/full
            off page SEO PACKAGE for high-quality link building for your website's ranking, you just
            need to order TechSAT'S All in One complete/monthly/full off page SEO Package.
          </p>
          <p className="mt-7 text-base leading-4 text-gray-600 dark:text-gray-300">
            Product Code: 8BN321AF2IF0NYA
          </p>
        </div>
        <div className="mt-32 h-full">
          <div className="border-b border-gray-200 py-4">
            <div data-menu className="flex cursor-pointer items-center justify-between">
              <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Contact us</p>
              <button
                className="cursor-pointer rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                role="button"
                aria-label="show or hide"
              >
                <img
                  className="transform dark:hidden"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg4.svg"
                  alt="dropdown"
                />
                <img
                  className="hidden transform dark:block"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg4dark.svg"
                  alt="dropdown"
                />
              </button>
            </div>
            <div
              className="mt-4 hidden pt-4 pr-12 text-base leading-normal text-gray-600 dark:text-gray-300"
              id="sect"
            >
              If you have any questions on how to return your item to us, contact us.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage
