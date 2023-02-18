import React from "react"
import { useState } from "react"

import { Tab } from "@headlessui/react"

import ClientFooter from "../layout/client-footer/ClientFooter"
import ClientNavbar from "../layout/client-navbar/ClientNavbar"
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}
const ClientOverview = () => {
  const [categories] = useState({
    Basic: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Standard: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Premium: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  })

  return (
    <div>
      <ClientNavbar />
      {/* <Categories /> */}
      <div className="relative">
        <div className="h-screen w-full overflow-y-scroll md:w-7/12">
          <div className="font-family-fa-robot flex h-screen  flex-col bg-white p-10 font-semibold text-black">
            <h2 className="mb-5 text-4xl">
              I will do complete monthly off page SEO backlink package for high quality link
              building
            </h2>
            <div className="mb-5 flex flex-wrap justify-start gap-2">
              <div> Seller Level 2 |</div>
              <div className="mr-2 text-[#ffb33e]">
                {" "}
                ⭐⭐⭐⭐⭐ 5 <span className="text-black">(20)</span>
              </div>
              <div className=" text-gray-500"> 4 orders in Queue</div>
            </div>
            <div className="mb-5">
              <img
                src="https://www.srikanthgiddalur.com/images/blog/seo-services.jpg"
                alt=" SEO SERVICE BANNER"
              />
            </div>
            <div className="mb-5 h-[2px] bg-gray-400"></div>
            <div className="mb-5 flex flex-col gap-3 ">
              <div className="text-xl">About This Gig</div>
              <div className="text-gray-500">
                Welcome to the TechSAT. We are serving our clients across the globe for more than 10
                years and providing SEO Consultancy. When you are looking for a{" "}
                <mark>complete/monthly/full off page SEO PACKAGE</mark> for high-quality link
                building for your website's ranking, you just need to order{" "}
                <mark>TechSAT'S All in One complete/monthly/full off page SEO Package.</mark>
              </div>
              <div className="text-gray-500">
                <b>Our complete/monthly/full off page package will help you get</b>
                <br></br>
                High DA Diversified backlinks using{" "}
                <mark>Naked URL, Brand name, Generic keywords & LSI along with main keywords.</mark>
                Up to 4*500 words of unique article Multi-Tiered backlinks (Tier 1 & Tier 2)
              </div>
              <div className="text-gray-500">
                <span className="text-black">
                  <b>Additionally, we provide (As per package)</b>
                </span>
                <br></br>
                SEO audit & recommendation report Backlink analysis report Bad links report (any bad
                links created in the previous link-building process)
              </div>
              <div className="text-gray-500">
                <span className="text-black">
                  <b>The advantages of using our best-in-class services are</b>
                </span>
                <br></br>
                <ul className="list-none">
                  <li>Risk-free investment & Enormous ROI</li>
                  <li>Carefully selected best linking domains</li>
                  <li>Increased Traffic and Visibility</li>
                </ul>
              </div>
              <div className="text-gray-500">
                <span className="text-black">
                  <b>What we need from you</b>
                </span>
                <br></br>
                <ol className="list-">
                  <li>Targeted URL,</li>
                  <li>3-5 keywords,</li>
                  <li>Your Patience (4-6 Months)</li>
                </ol>
              </div>
              <div className="mb-5 text-gray-500">
                Any queries? Drop me a message and I will be happy to assist to explore the world of
                ranking and backlinks with our complete/monthly/full off page SEO services.
              </div>
              <div className="mb-5 flex min-h-screen items-center justify-center">
                <div className="max-w-md px-2 md:max-w-2xl">
                  <div className="overflow-hidden rounded-lg bg-gray-300 shadow-xl md:flex">
                    <div
                      className="h-56 bg-cover bg-bottom md:h-auto md:w-56"
                      style={{
                        backgroundImage: `url(https://api.lorem.space/image/face?w=150&h=150&hash=sobh5ztu`,
                      }}
                    ></div>
                    <div>
                      <div className="p-4 md:p-5">
                        <p className="text-xl font-bold md:text-2xl">Shashank Pandey</p>
                        <p className="text-gray-700 md:text-lg">
                          I will do complete monthly off page SEO backlink package for high quality
                          link building
                        </p>
                      </div>
                      <div className="bg-gray-100 p-4 md:p-5">
                        <div className="sm:flex sm:items-center sm:justify-between">
                          <div>
                            <div className="text-lg text-gray-700">
                              <span className="font-bold text-gray-900">
                                Average Response Time:
                              </span>{" "}
                              1 hour
                            </div>
                            <div className="flex items-center">
                              <div className="-mx-px flex inline-flex">
                                <svg
                                  className="mx-px h-4 w-4 fill-current text-green-600"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 14 14"
                                >
                                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
                                </svg>
                                <svg
                                  className="mx-px h-4 w-4 fill-current text-green-600"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 14 14"
                                >
                                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
                                </svg>
                                <svg
                                  className="mx-px h-4 w-4 fill-current text-green-600"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 14 14"
                                >
                                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
                                </svg>
                                <svg
                                  className="mx-px h-4 w-4 fill-current text-green-600"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 14 14"
                                >
                                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
                                </svg>
                                <svg
                                  className="mx-px h-4 w-4 fill-current text-green-600"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 14 14"
                                >
                                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
                                </svg>
                              </div>
                              <div className="ml-2 mt-1 text-sm text-gray-600 md:text-base">
                                20 reviews
                              </div>
                            </div>
                          </div>
                          <button className="mt-3 rounded-lg bg-indigo-700 py-2 px-5 font-bold text-white shadow-md hover:bg-indigo-600 sm:mt-0 md:py-3 md:px-6 md:text-lg">
                            Contact Seller
                          </button>
                        </div>
                        <div className="mt-3 text-sm text-gray-600 md:text-base">
                          *Prices may vary depending on packages.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex h-screen flex-col  bg-white
           p-10 text-black"
          ></div>
          <div className="h-  flex  flex-col bg-white p-10"></div>
        </div>
        <div className="relative inset-0 ml-auto h-screen w-full md:absolute md:w-5/12">
          <div className="mx-auto w-full max-w-md px-2 py-16 sm:px-0">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                {Object.keys(categories).map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) =>
                      classNames(
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
              <Tab.Panels className="mt-2 text-black ">
                <Tab.Panel
                  className="rounded-xl bg-white p-5
                      ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                >
                  <div className="flex flex-col gap-5">
                    <div className="package-content zxTHQ6r">
                      <header className="header-default">
                        <div className="flex">
                          <div className="w-1/2">
                            <b className="title text-lg">3 Competitors</b>
                          </div>
                          <div className="price-wrapper flex w-1/2 justify-end">
                            <span className="price text-xl">$110</span>
                          </div>
                        </div>

                        <p className="my-2 text-lg">
                          Competitor research for 3 competitors including their keywords and
                          backlinks
                        </p>
                      </header>
                      <article>
                        <div className="additional-info">
                          <div className="flex ">
                            <div className="w-1/2">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ display: "inline", marginRight: "5px" }}
                              >
                                <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
                                <path d="M9 4H7v5h5V7H9V4z"></path>
                              </svg>

                              <b className="delivery display-inline">7 Days Delivery</b>
                            </div>
                          </div>
                          <div className="w-1/2"></div>
                        </div>
                        <ul className="features">
                          <li className="qSePHwK flex-items-center flex">
                            <span className="nFghBOe bvg2_O1 ZbQv8bb" aria-hidden="true">
                              ☑️
                            </span>
                            3 competitors
                          </li>
                          <li className="qSePHwK flex-items-center flex">
                            <span className="nFghBOe bvg2_O1 ZbQv8bb" aria-hidden="true">
                              ☑️
                            </span>
                            Competitor backlink analysis
                          </li>
                          <li className="qSePHwK flex-items-center flex">
                            <span className="nFghBOe bvg2_O1 ZbQv8bb" aria-hidden="true">
                              ☑️
                            </span>
                            Keyword analysis
                          </li>
                        </ul>
                      </article>
                    </div>
                    <footer className="flex flex-col">
                      <button
                        className="my-1 rounded-md border bg-black p-3 text-white hover:bg-gray-800"
                        type="button"
                      >
                        Continue
                        <span aria-hidden="true">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ display: "inline", marginLeft: "5px" }}
                            className="fill-white"
                          >
                            <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path>
                          </svg>
                        </span>
                      </button>
                      <button className="my-1 rounded-md  border bg-gray-300 p-3 text-black hover:bg-slate-700 hover:text-white">
                        Compare Packages
                      </button>
                    </footer>
                  </div>
                </Tab.Panel>
                <Tab.Panel
                  className="rounded-xl bg-white p-5
                      ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                >
                  <div className="flex flex-col gap-5">
                    <div className="package-content zxTHQ6r">
                      <header className="header-default">
                        <div className="flex">
                          <div className="w-1/2">
                            <b className="title text-lg">5 Competitors</b>
                          </div>
                          <div className="price-wrapper flex w-1/2 justify-end">
                            <span className="price text-xl">$150</span>
                          </div>
                        </div>

                        <p className="my-2 text-lg">
                          Competitor research for 5 competitors including their keywords and
                          backlinks
                        </p>
                      </header>
                      <article>
                        <div className="additional-info">
                          <div className="flex ">
                            <div className="w-1/2">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ display: "inline", marginRight: "5px" }}
                              >
                                <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
                                <path d="M9 4H7v5h5V7H9V4z"></path>
                              </svg>

                              <b className="delivery display-inline">7 Days Delivery</b>
                            </div>
                          </div>
                          <div className="w-1/2"></div>
                        </div>
                        <ul className="features">
                          <li className="qSePHwK flex-items-center flex">
                            <span className="nFghBOe bvg2_O1 ZbQv8bb" aria-hidden="true">
                              ☑️
                            </span>
                            5 competitors
                          </li>
                          <li className="qSePHwK flex-items-center flex">
                            <span className="nFghBOe bvg2_O1 ZbQv8bb" aria-hidden="true">
                              ☑️
                            </span>
                            Competitor backlink analysis
                          </li>
                          <li className="qSePHwK flex-items-center flex">
                            <span className="nFghBOe bvg2_O1 ZbQv8bb" aria-hidden="true">
                              ☑️
                            </span>
                            Keyword analysis
                          </li>
                        </ul>
                      </article>
                    </div>
                    <footer className="flex flex-col">
                      <button
                        className="my-1 rounded-md border bg-black p-3 text-white hover:bg-gray-800"
                        type="button"
                      >
                        Continue
                        <span aria-hidden="true">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ display: "inline", marginLeft: "5px" }}
                            className="fill-white"
                          >
                            <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path>
                          </svg>
                        </span>
                      </button>
                      <button className="my-1 rounded-md  border bg-gray-300 p-3 text-black hover:bg-slate-700 hover:text-white">
                        Compare Packages
                      </button>
                    </footer>
                  </div>
                </Tab.Panel>
                <Tab.Panel
                  className="rounded-xl bg-white p-5
                      ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                >
                  <div className="flex flex-col gap-5">
                    <div className="package-content zxTHQ6r">
                      <header className="header-default">
                        <div className="flex">
                          <div className="w-1/2">
                            <b className="title text-lg">7 Competitors</b>
                          </div>
                          <div className="price-wrapper flex w-1/2 justify-end">
                            <span className="price text-xl">$180</span>
                          </div>
                        </div>

                        <p className="my-2 text-lg">
                          Competitor research for 7 competitors including their keywords and
                          backlinks
                        </p>
                      </header>
                      <article>
                        <div className="additional-info">
                          <div className="flex ">
                            <div className="w-1/2">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ display: "inline", marginRight: "5px" }}
                              >
                                <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
                                <path d="M9 4H7v5h5V7H9V4z"></path>
                              </svg>

                              <b className="delivery display-inline">7 Days Delivery</b>
                            </div>
                          </div>
                          <div className="w-1/2"></div>
                        </div>
                        <ul className="features">
                          <li className="qSePHwK flex-items-center flex">
                            <span className="nFghBOe bvg2_O1 ZbQv8bb" aria-hidden="true">
                              ☑️
                            </span>
                            7 competitors
                          </li>
                          <li className="qSePHwK flex-items-center flex">
                            <span className="nFghBOe bvg2_O1 ZbQv8bb" aria-hidden="true">
                              ☑️
                            </span>
                            Competitor backlink analysis
                          </li>
                          <li className="qSePHwK flex-items-center flex">
                            <span className="nFghBOe bvg2_O1 ZbQv8bb" aria-hidden="true">
                              ☑️
                            </span>
                            Keyword analysis
                          </li>
                        </ul>
                      </article>
                    </div>
                    <footer className="flex flex-col">
                      <button
                        className="my-1 rounded-md border bg-black p-3 text-white hover:bg-gray-800"
                        type="button"
                      >
                        Continue
                        <span aria-hidden="true">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ display: "inline", marginLeft: "5px" }}
                            className="fill-white"
                          >
                            <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path>
                          </svg>
                        </span>
                      </button>
                      <button className="my-1 rounded-md  border bg-gray-300 p-3 text-black hover:bg-slate-700 hover:text-white">
                        Compare Packages
                      </button>
                    </footer>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
      {/* <Categories/> */}
      <ClientFooter />
    </div>
  )
}

export default ClientOverview
