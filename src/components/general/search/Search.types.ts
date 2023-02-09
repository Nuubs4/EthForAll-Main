import React from "react"

interface SearchProps extends React.HTMLAttributes<HTMLDivElement> {
  onSearch?: (prompt: string) => void
}

export default SearchProps
