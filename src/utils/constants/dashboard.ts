import Chat from "../../assets/svg/sidebar-icons/chat"
import Dashboard from "../../assets/svg/sidebar-icons/dashboard"
import Deliverables from "../../assets/svg/sidebar-icons/deliverables"
import Inbox from "../../assets/svg/sidebar-icons/inbox"
import Inventory from "../../assets/svg/sidebar-icons/inventory"
import ManageGigs from "../../assets/svg/sidebar-icons/manage-gigs"
import Market from "../../assets/svg/sidebar-icons/market"
import Notifications from "../../assets/svg/sidebar-icons/notifications"
import PerformanceAnalytics from "../../assets/svg/sidebar-icons/performance-analytics"
import Settings from "../../assets/svg/sidebar-icons/settings"

const SellerDashboardMenu = [
  {
    id: 0,
    name: "Dashboard",
    logo: Dashboard,
    notification: 10,
  },
  {
    id: 1,
    name: "Inbox",
    logo: Inbox,
    notification: 6,
  },
  {
    id: 2,
    name: "Manage Gigs",
    logo: ManageGigs,
    notification: 0,
  },
  {
    id: 3,
    name: "Performance & Analytics",
    logo: PerformanceAnalytics,
    notification: 0,
  },
  {
    id: 4,
    name: "Deliverables",
    logo: Deliverables,
    notification: 0,
  },
  {
    id: 5,
    name: "Invoices",
    logo: PerformanceAnalytics,
    notification: 0,
  },
  {
    id: 6,
    name: "Inverntory",
    logo: Inventory,
    notification: 0,
  },
  {
    id: 7,
    name: "Settings",
    logo: Settings,
    notification: 0,
  },
]

const SellerDashboardNavIcons = [
  {
    id: 0,
    name: "Notifications",
    logo: Notifications,
  },
  {
    id: 1,
    name: "Chat",
    logo: Chat,
  },
  {
    id: 2,
    name: "Settings",
    logo: Settings,
  },
  {
    id: 3,
    name: "Market",
    logo: Market,
  },
]

export default { SellerDashboardMenu, SellerDashboardNavIcons }
