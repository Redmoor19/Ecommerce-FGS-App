import { NavLink } from "react-router-dom"

const DashboardSidebar = () => {
  return (
    <div>
      <ul className="flex flex-col gap-3 px-5 py-16 border-r-[1px] h-full">
        <li>
          <NavLink to="/dashboard/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/games">Games</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/orders">Orders</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default DashboardSidebar
