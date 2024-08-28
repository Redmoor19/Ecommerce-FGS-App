import { createContext, useContext } from "react"
import { useQueryClient } from "@tanstack/react-query"
import { User, UserLogin, UserRoleType } from "@/types/user"
import useLocalState from "@/hooks/useLocalState"
import useUser from "@/features/profile/hooks/useUser"

const authContext = createContext(
  {} as {
    login: (logData: UserLogin) => void
    logout: () => void
    user: User | undefined
    role: UserRoleType | undefined
    isLogged: boolean
  }
)

const useAuthContext = () => useContext(authContext)

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useLocalState("token", "")
  const queryClient = useQueryClient()
  const { isLogged, user, role } = useUser()

  function login(logData: UserLogin) {
    setToken(logData.token)
    queryClient.setQueryData(["user"], logData.user)
  }

  function logout() {
    setToken("")
    queryClient.removeQueries({ queryKey: ["user"], exact: true })
  }
  return (
    <authContext.Provider value={{ login, logout, user, role, isLogged }}>
      {children}
    </authContext.Provider>
  )
}

export default useAuthContext
