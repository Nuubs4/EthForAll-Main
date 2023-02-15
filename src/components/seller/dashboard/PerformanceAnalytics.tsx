import React from "react"
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js"
import faker from "faker"
import { Bar, Line } from "react-chartjs-2"

// bar graph
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const optionsBarGraph = {
  plugins: {
    title: {
      display: true,
      text: "User Retention and Growth",
    },
  },
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
}

const labelsBarGraph = ["January", "February", "March", "April", "May", "June", "July"]
// faker.seed(123)
export const dataBarGraph = {
  labels: labelsBarGraph,
  datasets: [
    {
      label: "New Users",
      data: labelsBarGraph.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: "rgb(255, 99, 132)",
      stack: "Stack 0",
    },
    {
      label: "Recurring Users",
      data: labelsBarGraph.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: "rgb(75, 192, 192)",
      stack: "Stack 0",
    },
    {
      label: "Dropped users",
      data: labelsBarGraph.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: "rgb(53, 162, 235)",
      stack: "Stack 1",
    },
  ],
}

// LINE area graph

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

export const optionsAreaG = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Revenue and Profits",
    },
  },
}

const labelsAreaG = ["January", "February", "March", "April", "May", "June", "July"]

export const dataAreaG = {
  labels: labelsAreaG,
  datasets: [
    {
      fill: true,
      label: "Revenue (USD)",
      data: labelsAreaG.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
}

export default function PerformanceAnalytics() {
  return (
    <div className="container max-h-screen divide-y-4 overflow-y-scroll bg-white px-5 py-5 ">
      <div className="">
        <Bar options={optionsBarGraph} data={dataBarGraph} className="" />
      </div>
      <div className="flex flex-col ">
        <div className="">
          <Line options={optionsBarGraph} data={dataBarGraph} />;
        </div>
        <div className="">
          <Line options={optionsAreaG} data={dataAreaG} />;
        </div>
      </div>
    </div>
  )
}
