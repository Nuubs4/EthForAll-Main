import React from "react"

const FAQPage = () => {
  const [show, setShow] = React.useState(false)

  return (
    <>
      <div className="">
        <div className="container mx-auto">
          <div role="article" className="py-12 md:px-8">
            <div className="px-4 py-10 xl:px-0">
              <div className="flex flex-col flex-wrap lg:flex-row">
                <div className="mt-4 lg:mt-0 lg:w-3/5">
                  <div>
                    <h1 className="ml-2 text-3xl font-bold tracking-normal text-typo lg:ml-0 lg:w-11/12 lg:text-4xl">
                      Frequently asked questions
                    </h1>
                  </div>
                </div>
                <div className="mt-10 ml-2 flex lg:ml-0 lg:mt-0 lg:w-2/5 lg:justify-end">
                  <div className="relative pt-2  text-gray-600">
                    <input
                      className="h-10 rounded-lg bg-[#000] px-5 pr-16 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                      type="search"
                      name="search"
                      placeholder="Search"
                    />
                    <button
                      type="submit"
                      className="absolute right-0 top-0 mt-5 mr-4  bg-[#000] text-gray-600 focus:rounded-full focus:bg-transparent focus:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
                    >
                      <svg
                        className=" h-4 w-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 56.966 56.966"
                        xmlSpace="preserve"
                        width="512px"
                        height="512px"
                      >
                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 xl:px-0">
              <div className="grid gap-8 pb-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                <div role="cell" className="bg-transparent">
                  <div className="relative h-full w-full rounded-md bg-[#000] p-5">
                    <span>
                      <img
                        className="mb-5 rounded-full bg-gray-200 p-2"
                        src="https://i.ibb.co/27R6nk5/home-1.png"
                        alt="home-1"
                      />
                    </span>
                    <h1 className="pb-4 text-2xl font-semibold">Account Overview</h1>
                    <div className="my-5">
                      <div className="flex w-full cursor-pointer items-center space-x-3 pb-4 dark:border-gray-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12.5"
                          height={16}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        <h4 className="text-md text-typo/40">First time, what do I do next?</h4>
                      </div>
                      <div className="flex w-full cursor-pointer items-center space-x-3 pb-4 dark:border-gray-700">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-typo/40">
                          Changing you profile picture and other information
                        </h4>
                      </div>
                      <div className="flex w-full cursor-pointer items-center pb-4 dark:border-gray-700">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md pl-4 text-typo/40">
                          I didnt get a confirmation email, what should I do next
                        </h4>
                      </div>
                      <div className="flex w-full cursor-pointer items-center pb-4 dark:border-gray-700">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md pl-4 text-typo/40">
                          What is the refund policy if I have to cancel during the month
                        </h4>
                      </div>
                    </div>
                    <a
                      className="absolute bottom-5 flex cursor-pointer items-center text-sm font-bold text-indigo-700 hover:text-indigo-500 hover:underline"
                      href="#"
                    >
                      <p>Show All</p>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-arrow-narrow-right"
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#4338CA"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1={5} y1={12} x2={19} y2={12} />
                          <line x1={15} y1={16} x2={19} y2={12} />
                          <line x1={15} y1={8} x2={19} y2={12} />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="cell" className="bg-transparent">
                  <div className="relative h-full w-full rounded-md bg-[#000] p-5">
                    {/* class="absolute inset-0 object-center object-cover h-full w-full"  */}
                    <span>
                      <img
                        className="mb-5 rounded-full bg-gray-200 p-2"
                        src="https://i.ibb.co/bdGyLYk/pricetags-1.png"
                        alt="pricetags-1"
                      />
                    </span>
                    <h1 className="pb-4 text-2xl font-semibold">Subscription Plans</h1>
                    <div className="my-5">
                      <div className="flex w-full cursor-pointer items-center pb-4 dark:border-gray-700">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md pl-4 text-typo/40">
                          First time, what do I do next?
                        </h4>
                      </div>
                      <div className="flex w-full cursor-pointer items-center pb-4 dark:border-gray-700">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md pl-4 text-typo/40">
                          Changing you profile picture and other information
                        </h4>
                      </div>
                      <div className="flex w-full cursor-pointer items-center pb-4 dark:border-gray-700">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md pl-4 text-typo/40">
                          I didnt get a confirmation email, what should I do next
                        </h4>
                      </div>
                      <div className="flex w-full cursor-pointer items-center pb-4 dark:border-gray-700">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md pl-4 text-typo/40">
                          What is the refund policy if I have to cancel during the month
                        </h4>
                      </div>
                      <div className="flex w-full cursor-pointer items-center pb-4 dark:border-gray-700">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md pl-4 text-typo/40">What is the refund policy?</h4>
                      </div>
                    </div>
                    <a
                      className="absolute bottom-5 flex cursor-pointer items-center text-sm font-bold text-indigo-700 hover:text-indigo-500 hover:underline"
                      href="#"
                    >
                      <p>Show All</p>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-arrow-narrow-right"
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#4338CA"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1={5} y1={12} x2={19} y2={12} />
                          <line x1={15} y1={16} x2={19} y2={12} />
                          <line x1={15} y1={8} x2={19} y2={12} />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="cell" className="bg-transparent">
                  <div className="relative h-full w-full rounded-md bg-[#000] p-5">
                    {/* class="absolute inset-0 object-center object-cover h-full w-full"  */}
                    <span>
                      <img
                        className="mb-5 rounded-full bg-gray-200 p-2"
                        src="https://i.ibb.co/GT4KHvJ/card-1.png"
                        alt="home-1"
                      />
                    </span>
                    <h1 className="pb-4 text-2xl font-semibold">Payment Options</h1>
                    <div className="my-5">
                      <div className="flex w-full cursor-pointer items-center pb-4 dark:border-gray-700">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md pl-4 text-typo/40">
                          First time, what do I do next?
                        </h4>
                      </div>
                      <div className="flex w-full cursor-pointer items-center pb-4 dark:border-gray-700">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md pl-4 text-typo/40">
                          Changing you profile picture and other information
                        </h4>
                      </div>
                      <div className="flex w-full cursor-pointer items-center pb-4 dark:border-gray-700">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md pl-4 text-typo/40">
                          I didnt get a confirmation email, what should I do next
                        </h4>
                      </div>
                      <div className="flex w-full cursor-pointer items-center pb-4 dark:border-gray-700">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md pl-4 text-typo/40">
                          What is the refund policy if I have to cancel during the month
                        </h4>
                      </div>
                    </div>
                    <a
                      className="absolute bottom-5 flex cursor-pointer items-center text-sm font-bold text-indigo-700 hover:text-indigo-500 hover:underline"
                      href="#"
                    >
                      <p>Show All</p>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-arrow-narrow-right"
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#4338CA"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1={5} y1={12} x2={19} y2={12} />
                          <line x1={15} y1={16} x2={19} y2={12} />
                          <line x1={15} y1={8} x2={19} y2={12} />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="cell" className="bg-transparent">
                  <div className="relative h-full w-full  rounded-md bg-[#000] p-5">
                    {/* class="absolute inset-0 object-center object-cover h-full w-full"  */}
                    <span>
                      <img
                        className="mb-5 rounded-full bg-gray-200 p-2"
                        src="https://i.ibb.co/rG4r6NJ/notifications-1.png"
                        alt="home-1"
                      />
                    </span>
                    <h1 className="pb-4 text-2xl font-semibold">Notification Settings</h1>
                    <div className="my-5">
                      <div className="flex w-full cursor-pointer items-center pb-4 dark:border-gray-700">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md pl-4 text-typo/40">
                          First time, what do I do next?
                        </h4>
                      </div>
                      <div className="flex w-full cursor-pointer items-center pb-4 dark:border-gray-700">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md pl-4 text-typo/40">
                          Changing you profile picture and other information
                        </h4>
                      </div>
                      <div className="flex w-full cursor-pointer items-center pb-4 dark:border-gray-700">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md pl-4 text-typo/40">
                          I didnt get a confirmation email, what should I do next
                        </h4>
                      </div>
                      <div className="flex w-full cursor-pointer items-center pb-4 dark:border-gray-700">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md pl-4 text-typo/40">
                          What is the refund policy if I have to cancel during the month
                        </h4>
                      </div>
                    </div>
                    <a
                      className="absolute bottom-5 flex cursor-pointer items-center text-sm font-bold text-indigo-700 hover:text-indigo-500 hover:underline"
                      href="#"
                    >
                      <p>Show All</p>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-arrow-narrow-right"
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#4338CA"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1={5} y1={12} x2={19} y2={12} />
                          <line x1={15} y1={16} x2={19} y2={12} />
                          <line x1={15} y1={8} x2={19} y2={12} />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="cell" className="bg-transparent">
                  <div className="relative relative h-full w-full rounded-md bg-[#000] p-5">
                    {/* class="absolute inset-0 object-center object-cover h-full w-full"  */}
                    <span>
                      <img
                        className="mb-5 rounded-full bg-gray-200 p-2"
                        src="https://i.ibb.co/HFC1hqn/people-1.png"
                        alt="home-1"
                      />
                    </span>
                    <h1 className="pb-4 text-2xl font-semibold">Profile Preferences</h1>
                    <div className="my-5">
                      <div className="flex w-full cursor-pointer items-center pb-4 dark:border-gray-700">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md pl-4 text-typo/40">
                          First time, what do I do next?
                        </h4>
                      </div>
                      <div className="flex w-full cursor-pointer items-center pb-4 dark:border-gray-700">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md pl-4 text-typo/40">
                          Changing you profile picture and other information
                        </h4>
                      </div>
                      <div className="flex w-full cursor-pointer items-center pb-4 dark:border-gray-700">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md pl-4 text-typo/40">
                          I didnt get a confirmation email, what should I do next
                        </h4>
                      </div>
                    </div>
                    <a
                      className="absolute bottom-5 flex cursor-pointer items-center text-sm font-bold text-indigo-700 hover:text-indigo-500 hover:underline"
                      href="#"
                    >
                      <p>Show All</p>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-arrow-narrow-right"
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#4338CA"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1={5} y1={12} x2={19} y2={12} />
                          <line x1={15} y1={16} x2={19} y2={12} />
                          <line x1={15} y1={8} x2={19} y2={12} />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="cell" className="bg-transparent">
                  <div className="relative relative h-full w-full rounded-md bg-[#000]  p-5">
                    {/* class="absolute inset-0 object-center object-cover h-full w-full"  */}
                    <span>
                      <img
                        className="mb-5 rounded-full bg-gray-200 p-2"
                        src="https://i.ibb.co/QX80fYm/lock-closed-1.png"
                        alt="home-1"
                      />
                    </span>
                    <h1 className="pb-4 text-2xl font-semibold">Privacy and Cookies</h1>
                    <div className="my-5">
                      <div className="flex w-full cursor-pointer items-center pb-4 dark:border-gray-700">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md pl-4 text-typo/40">
                          First time, what do I do next?
                        </h4>
                      </div>
                      <div className="flex w-full cursor-pointer items-center pb-4 dark:border-gray-700">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md pl-4 text-typo/40">
                          Changing you profile picture and other information
                        </h4>
                      </div>
                      <div className="flex w-full cursor-pointer items-center pb-4 dark:border-gray-700">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md pl-4 text-typo/40">
                          I didnt get a confirmation email, what should I do next
                        </h4>
                      </div>
                      <div className="flex w-full cursor-pointer items-center pb-4 dark:border-gray-700">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md pl-4 text-typo/40">
                          What is the refund policy if I have to cancel during the month
                        </h4>
                      </div>
                    </div>
                    <a
                      className="absolute bottom-5 flex cursor-pointer items-center text-sm font-bold text-indigo-700 hover:text-indigo-500 hover:underline"
                      href="#"
                    >
                      <p>Show All</p>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-arrow-narrow-right"
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#4338CA"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1={5} y1={12} x2={19} y2={12} />
                          <line x1={15} y1={16} x2={19} y2={12} />
                          <line x1={15} y1={8} x2={19} y2={12} />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FAQPage
