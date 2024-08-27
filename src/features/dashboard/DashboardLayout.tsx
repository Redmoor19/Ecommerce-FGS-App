import { Outlet } from "react-router-dom"
import DashboardSidebar from "./DashboardSidebar"

const DashboardLayout = () => {
  return (
    <div className="container grid grid-cols-[auto_1fr] h-full">
      <DashboardSidebar />
      <div className="h-full overflow-y-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout
