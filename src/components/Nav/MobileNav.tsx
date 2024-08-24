import { cloneElement, ReactElement } from "react"
import { NavLink } from "react-router-dom"
import { NavProps } from "./Nav"
import { LogIn, LogOut, Moon, Sun } from "lucide-react"

const MobileNav = ({ routes, isLogged, theme, logout, toggleTheme, className }: NavProps) => {
  return (
    <nav className={`${className} bg-gradient h-[70px]`}>
      <ul className="flex h-full justify-center items-center gap-7 text-gray-200 relative">
        {routes.map((route) => (
          <li key={route.path}>
            <NavLink to={route.path}>
              {cloneElement(route.icon as ReactElement, { size: 30 })}
            </NavLink>
          </li>
        ))}
        {isLogged ? (
          <li className="">
            <button onClick={logout} className="flex items-center">
              <LogOut size={30} />
            </button>
          </li>
        ) : (
          <li className="">
            <NavLink to="/login" className="flex items-center">
              <LogIn size={30} />
            </NavLink>
          </li>
        )}
        <li className="flex items-center absolute right-3 top-[50%] -translate-y-[50%]">
          <button onClick={toggleTheme} className="">
            {theme === "light" ? <Sun size={30} /> : <Moon size={30} />}
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default MobileNav
