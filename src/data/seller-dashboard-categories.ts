export type SellerDashboardCategoryType = {
  "Previous Gigs": {
    id: number
    title: string
    date: string
    status: string
    price: number
  }[]
  "Active Gigs": {
    id: number
    title: string
    date: string
    status: string
    price: number
  }[]
  "Archieve Gigs": {
    id: number
    title: string
    date: string
    status: string
    price: number
  }[]
}

const SellerDashboardCategory: SellerDashboardCategoryType = {
  "Previous Gigs": [
    {
      id: 1,
      title: "SEO Optimization",
      date: "Dec 12",
      status: "Completed",
      price: 2,
    },
    {
      id: 2,
      title: "App Testing",
      date: "Dec 15",
      status: "Completed",
      price: 2,
    },
  ],
  "Active Gigs": [
    {
      id: 1,
      title: "App Development",
      date: "Jan 7",
      status: "In Progress",
      price: 16,
    },
    {
      id: 2,
      title: "UI/UX Design",
      date: "Mar 19",
      status: "In Progress",
      price: 12,
    },
  ],
  "Archieve Gigs": [
    {
      id: 1,
      title: "Form Validation with React Hook Form",
      date: "Jun 20",
      status: "Archived",
      price: 5,
    },
    {
      id: 2,
      title: "Next.js blog website",
      date: "Feb 19",
      status: "Archived",
      price: 2,
    },
  ],
}

export default SellerDashboardCategory
