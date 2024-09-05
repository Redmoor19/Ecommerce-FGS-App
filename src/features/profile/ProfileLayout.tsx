import { Outlet, useNavigate } from "react-router-dom"
import ProfileSideBar from "./ProfileSideBar"
import useAuthContext from "@/context/authContext"
import checkPermisson from "@/lib/access-control"
import { useEffect } from "react"

const ProfileLayout = () => {
  const navigate = useNavigate()
  const { isLogged, isLoading, token } = useAuthContext()

  useEffect(() => {
    const canSee = checkPermisson("USER", "PROFILE:VIEW", "view")
    if (!token) navigate("/")
    if ((!canSee || !isLogged) && !isLoading) navigate("/")
  }, [isLogged, isLoading])

  return (
    <div className="md:container grid grid-cols-[auto_1fr] h-full">
      <ProfileSideBar />
      <Outlet />
    </div>
  )
}

export default ProfileLayout
