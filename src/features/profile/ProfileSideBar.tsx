import { NavRoute } from "@/components/Nav/Nav"
import SideBar from "@/components/SideBar"
import { HeartIcon, TicketCheckIcon, UserCogIcon } from "lucide-react"

const links: NavRoute[] = [
  {
    title: "Profile",
    path: "/profile/me",
    icon: <UserCogIcon />
  },
  {
    title: "Favourites",
    path: "/profile/favourites",
    icon: <HeartIcon />
  },
  {
    title: "Orders",
    path: "/profile/orders",
    icon: <TicketCheckIcon />
  }
]

const ProfileSideBar = () => {
  return <SideBar links={links} />
}

export default ProfileSideBar
