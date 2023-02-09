import React from "react"

import SearchIcon from "../../../assets/svg/search"

const Search = () => {
  return (
    <div className="relative ">
      <div className="absolute inset-0 m-auto ml-4 h-4 w-4 text-gray-500">
        <SearchIcon />
      </div>
      <input
        className=" w-full rounded bg-gray-100 py-2 pl-10 text-sm text-gray-500 focus:outline-none"
        type="text"
        placeholder="Search"
      />
    </div>
  )
}

export default Search
