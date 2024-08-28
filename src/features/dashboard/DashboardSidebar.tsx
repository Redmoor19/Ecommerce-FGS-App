import { NavRoute } from "@/components/Nav/Nav"
import SideBar from "@/components/SideBar"
import { Gamepad2Icon, TicketCheckIcon, UserCogIcon } from "lucide-react"

const links: NavRoute[] = [
  {
    title: "Users",
    path: "/dashboard/users",
    icon: <UserCogIcon />
  },
  {
    title: "Games",
    path: "/dashboard/games",
    icon: <Gamepad2Icon />
  },
  {
    title: "Orders",
    path: "/dashboard/orders",
    icon: <TicketCheckIcon />
  }
]

const DashboardSidebar = () => {
  return <SideBar links={links} />
}

export default DashboardSidebar
