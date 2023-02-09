import React from "react"

const CategoryMain = () => {
  return (
    <div className="flex items-center justify-center whitespace-nowrap md:px-32">
      <div className="w-full py-12 px-4 sm:px-6 xl:px-20 2xl:container 2xl:mx-auto 2xl:px-0">
        <div className="jusitfy-center flex flex-col items-center space-y-10">
          <div className="grid w-full grid-cols-1 md:grid-cols-2 md:gap-x-4 md:gap-x-8 lg:grid-cols-3">
            <div className="group relative flex h-full w-full items-center justify-center">
              <img
                className="h-full w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmlkZW8lMjBlZGl0aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="girl-image"
              />
              <button className="absolute bottom-4 z-10 bg-white  px-4 py-3 text-base font-medium leading-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-800 dark:text-white">
                Video Editing
              </button>
            </div>

            <div className="mt-4 flex flex-col space-y-4 md:mt-0 md:space-y-8">
              <div className="group relative flex h-full w-full items-center justify-center">
                <img
                  className="h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1638389746457-ac5ff8228bec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dm9pY2UlMjBvdmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="shoe-image"
                />
                <button className="absolute bottom-4 z-10 bg-white  px-4 py-3 text-base font-medium leading-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-800 dark:text-white">
                  Voice Over
                </button>
              </div>
              <div className="group relative flex h-full w-full items-center justify-center">
                <img
                  className="h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="watch-image"
                />
                <button className="absolute bottom-4 z-10 bg-white  px-4 py-3 text-base font-medium leading-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-800 dark:text-white">
                  Game Development
                </button>
              </div>
            </div>

            <div className="group relative hidden h-full w-full items-center justify-center lg:flex">
              <img
                className="h-full w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmlkZW8lMjBlZGl0aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="girl-image"
              />
              <button className="absolute bottom-4 z-10 bg-white  px-4 py-3 text-base font-medium leading-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-800 dark:text-white">
                Blockchain Development
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryMain
