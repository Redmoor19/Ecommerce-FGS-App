import { Outlet } from "react-router-dom"
import DashboardSidebar from "./DashboardSidebar"

const DashboardLayout = () => {
  return (
    <div className="container grid grid-cols-[auto_1fr] h-[calc(100vh-70px)] md:h-[calc(100vh-60px)]">
      <DashboardSidebar />
      <div className="h-full overflow-y-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout
