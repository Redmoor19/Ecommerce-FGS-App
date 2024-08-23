import { NavLink } from "react-router-dom"

type SidebarLink = {
  title: string
  path: string
}

const links: SidebarLink[] = [
  {
    title: "Users",
    path: "/dashboard/users"
  },
  {
    title: "Games",
    path: "/dashboard/games"
  },
  {
    title: "Orders",
    path: "/dashboard/orders"
  }
]

const DashboardSidebar = () => {
  return (
    <aside>
      <ul className="flex flex-col gap-9 pr-10 py-9 border-r-[1px] text-2xl text-muted-foreground h-full">
        {links.map(({ title, path }) => (
          <li key={path}>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-primary font-semibold" : "hover:underline"} underline-offset-2`
              }
              to={path}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default DashboardSidebar
