import { Outlet, useNavigate } from "react-router-dom"
import DashboardSidebar from "./DashboardSidebar"
import useAuthContext from "@/context/authContext"
import checkPermisson from "@/lib/access-control"
import { useEffect } from "react"

const DashboardLayout = () => {
  const navigate = useNavigate()
  const { role, isLogged, isLoading } = useAuthContext()
  const isAdmin = role === "ADMIN" && isLogged
  useEffect(() => {
    const canSee = checkPermisson("ADMIN", "DASHBOARD:VIEW", "view")
    if ((!canSee || !isAdmin) && !isLoading) navigate("/")
  }, [isLogged, isAdmin, isLoading])

  if (isAdmin)
    return (
      <div className="lg:container">
        <div className="hidden md:grid grid-cols-[auto_1fr] h-full">
          <DashboardSidebar />
          <div className="hidden md:block h-full overflow-y-auto">
            <Outlet />
          </div>
        </div>
        <div className="md:hidden text-primary text-2xl py-5 flex flex-col items-center text-center gap-5">
          <div>
            <p>This section is too big for small screens</p>
            <p>😿😿😿</p>
          </div>
          <div>
            <p>If you still want to see the content, zoom the page out</p>
            <p>
              If you are using smartphone, try landskape orientation and desktop view in browser
            </p>
            <p>🧐🧐🧐</p>
          </div>
        </div>
      </div>
    )

  return null
}

export default DashboardLayout
