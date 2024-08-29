import { cloneElement, ReactElement } from "react"
import { NavLink } from "react-router-dom"
import { NavRoute } from "./Nav/Nav"

type SideBarProps = {
  links: NavRoute[]
}

const SideBar = ({ links }: SideBarProps) => {
  return (
    <aside className=" h-full">
      <ul className="flex flex-col gap-9 py-7 border-r-[1px] text-xl text-muted-foreground  h-full">
        {links.map(({ title, path, icon }) => (
          <li key={path}>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "text-primary font-semibold" : "hover:scale-105"
                } underline-offset-2 flex gap-2 items-center px-3 md:px-7`
              }
              to={path}
            >
              {cloneElement(icon as ReactElement, { size: 23 })}
              <p className="hidden md:block">{title}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default SideBar
