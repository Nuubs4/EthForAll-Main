import React from "react"

import DashboardProps from "./Dashboard.types"

const Dashboard = ({ onClick }: DashboardProps) => {
  return <div onClick={onClick}>Dashboard</div>
}

export default Dashboard
