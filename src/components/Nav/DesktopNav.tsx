import { NavLink } from "react-router-dom"
import { NavProps } from "./Nav"
import { cloneElement, ReactElement } from "react"
import { Sun, Moon, LogIn, LogOut } from "lucide-react"

const DesktopNav = ({ routes, isLogged, theme, toggleTheme, logout, className }: NavProps) => {
  return (
    <nav
      className={`bg-gradient h-[60px] flex items-center justify-center text-xl relative ${className}`}
    >
      <ul className="h-full flex justify-end items-center text-white gap-5 container">
        {routes.map((route, i) => (
          <li key={route.path} className={`${i === 0 && "mr-auto"} hover:scale-110`}>
            <NavLink
              className={({ isActive }) =>
                `${isActive && "underline underline-offset-2"} flex gap-3 items-center `
              }
              to={route.path}
            >
              {cloneElement(route.icon as ReactElement, { size: 26 })}
              <p>{route.title}</p>
            </NavLink>
          </li>
        ))}
        {isLogged ? (
          <li className="">
            <button onClick={logout} className="flex items-center hover:scale-110">
              <LogOut size={26} />
            </button>
          </li>
        ) : (
          <li className="">
            <NavLink to="/login" className="flex items-center hover:scale-110">
              <LogIn size={26} />
            </NavLink>
          </li>
        )}
        <li className="flex items-center">
          <button onClick={toggleTheme} className="">
            {theme === "light" ? <Sun size={26} /> : <Moon size={26} />}
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default DesktopNav
