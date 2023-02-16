export type inventorydata = {
  "Scale your business": {
    badgetitle: string
    badgetext: string
    textarea: string
    profilelink: string
  }[]
  Earnings: {
    BalanceAvailable: number
    PBC: number
    PAO: number
    ETD: number
    ExTD: number
  }[]
  Workspace: {
    heading: string
    subheading: string
    l1: string
    l2: string
    l3: string
  }[]
}

const inventorydata: inventorydata = {
  "Scale your business": [
    {
      badgetitle: "Create Your Badge",
      badgetext:
        "Boost the traffic to your Gigs by embedding a seller badge on your website or blog.",
      textarea:
        "<!-- Place this tag where you want the button to render. --> <div><p>lorem ipsum </p></div>",
      profilelink: "https://www.fdapp.com/s2/8e5b5e1e5e",
    },
  ],
  Earnings: [
    {
      BalanceAvailable: 25,
      PBC: 12,
      PAO: 10,
      ETD: 63,
      ExTD: 18,
    },
  ],
  Workspace: [
    {
      heading: "A place for receipts, docs, and files",
      subheading: "Turn files or emails into expanses, income, or attach them to projects.",
      l1: "Collect everything related to a project in one place",
      l2: "Keep track of your documents and never lose a receipt ",
      l3: "Add files via direct upload or email to fdapp@workspace.fdapp.com",
    },
  ],
}

export default inventorydata
