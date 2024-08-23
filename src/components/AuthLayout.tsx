import useUser from "@/features/profile/hooks/useUser"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Outlet, useLocation, useNavigate } from "react-router-dom"

const AuthLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { isLogged } = useUser()

  if (isLogged) {
    navigate(-1)
  }

  const activeTab = location.pathname.slice(1)

  if (isLogged) {
    return null
  } else {
    return (
      <section className="md:container flex h-full items-center justify-center">
        <Tabs
          defaultValue={`${activeTab}`}
          className="border-border border-[1px] p-6 rounded-lg w-5/6 md:w-3/5"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              data-state={activeTab === "login" ? "active" : "inactive"}
              onClick={() => navigate("/login")}
              value="signup"
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              data-state={activeTab === "signup" ? "active" : "inactive"}
              onClick={() => navigate("/signup")}
              value="login"
            >
              Register
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Outlet />
          </TabsContent>
          <TabsContent value="signup">
            <Outlet />
          </TabsContent>
        </Tabs>
      </section>
    )
  }
}

export default AuthLayout
