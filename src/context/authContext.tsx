import { createContext, useContext } from "react"
import { useQueryClient } from "@tanstack/react-query"
import { User, UserLogin, UserRoleType } from "@/types/user"
import useLocalState from "@/hooks/useLocalState"
import useUser from "@/features/profile/me/hooks/useUser"

const authContext = createContext(
  {} as {
    login: (logData: UserLogin) => void
    logout: () => void
    user: User | undefined
    role: UserRoleType | undefined
    isLogged: boolean
    isLoading: boolean
    isUnverified: boolean
  }
)

const useAuthContext = () => useContext(authContext)

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useLocalState("token", "")
  const queryClient = useQueryClient()
  const { user, role, isLoading, error } = useUser()

  if (error?.status === 401 && token) {
    logout()
  }

  function login(logData: UserLogin) {
    setToken(logData.token)
    queryClient.setQueryData(["user"], logData.user)
  }

  function logout() {
    setToken("")
    queryClient.removeQueries({ queryKey: ["user"], exact: true })
  }

  const isLogged = !!user

  const isUnverified = user?.activeStatus === "UNVERIFIED"

  return (
    <authContext.Provider value={{ login, logout, user, role, isLogged, isLoading, isUnverified }}>
      {children}
    </authContext.Provider>
  )
}

export default useAuthContext
