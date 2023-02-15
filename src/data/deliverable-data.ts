export type DeliverableData = {
  Priority: {
    id: number
    name: string
    gig: string
    duedate: string
    status: string
    payment: number
  }[]
  Active: {
    name: string
    id: number
    gig: string
    duedate: string
    status: string
    payment: number
  }[]
  Late: {
    name: string
    id: number
    gig: string
    duedate: string
    status: string
    payment: number
  }[]
  Delivered: {
    name: string
    id: number
    gig: string
    duedate: string
    status: string
    payment: number
  }[]
}

const DeliverableData: DeliverableData = {
  Priority: [
    {
      name: "Shashank Pandey",
      id: 1,
      gig: "Portfolio Website Development",
      duedate: "Dec 12",
      status: "Completed",
      payment: 2,
    },
    {
      name: "Partha Das",
      id: 2,
      gig: "Blockchain Website Development",
      duedate: "Dec 15",
      status: "Completed",
      payment: 2,
    },
  ],
  Active: [
    {
      name: "Karthik S",
      id: 1,
      gig: "Backend API Development",
      duedate: "Jan 7",
      status: "In Progress",
      payment: 16,
    },
    {
      name: "Advit",
      id: 2,
      gig: "UI/UX Design",
      duedate: "Mar 19",
      status: "In Progress",
      payment: 12,
    },
  ],
  Late: [
    {
      name: "Jyotiraditya",
      id: 1,
      gig: "Form Validation with React Hook Form",
      duedate: "Jun 20",
      status: "Pending",
      payment: 5,
    },
    {
      name: "Krishna",
      id: 2,
      gig: "Next.js blog website",
      duedate: "Feb 19",
      status: "Delivered",
      payment: 2,
    },
  ],
  Delivered: [
    {
      name: "Ganesh",
      id: 1,
      gig: "Fronted API Development",
      duedate: "Jan 7",
      status: "Delivered",
      payment: 16,
    },
  ],
}

export default DeliverableData
