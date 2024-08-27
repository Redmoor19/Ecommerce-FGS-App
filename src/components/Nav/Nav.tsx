import useUser from "@/features/profile/hooks/useUser"
import DesktopNav from "./DesktopNav"
import { Cog, Gamepad2, LogIn, UserRound } from "lucide-react"
import useDarkContext from "@/context/darkThemeContext"
import useAuthContext from "@/context/authContext"
import MobileNav from "./MobileNav"

export type NavRoute = {
  title: string
  path: string
  icon: React.ReactNode
}

export type NavProps = {
  routes: NavRoute[]
  isLogged: boolean
  theme: string
  toggleTheme: () => void
  logout: () => void
  className?: string
}

const freeRoutes: NavRoute[] = [
  {
    title: "Games",
    path: "/",
    icon: <Gamepad2 />
  }
]

const userRoutes: NavRoute[] = [
  {
    title: "Games",
    path: "/",
    icon: <Gamepad2 />
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <UserRound />
  }
]

const adminRoutes: NavRoute[] = [
  ...userRoutes,
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <Cog />
  }
]

const Nav = () => {
  const { user, role, isLogged } = useUser()
  const { theme, toggleTheme } = useDarkContext()
  const { logout } = useAuthContext()

  let routes: NavRoute[] = []

  if (!user) routes = freeRoutes
  if (user && role === "USER") routes = userRoutes
  if (user && role === "ADMIN") routes = adminRoutes

  return (
    <>
      <DesktopNav
        className="hidden md:block"
        routes={routes}
        isLogged={isLogged}
        theme={theme}
        toggleTheme={toggleTheme}
        logout={logout}
      />
      <MobileNav
        className="md:hidden"
        routes={routes}
        isLogged={isLogged}
        theme={theme}
        toggleTheme={toggleTheme}
        logout={logout}
      />
    </>
  )
}

export default Nav
