import { createContext, useContext } from "react"
import { useQueryClient } from "@tanstack/react-query"
import { UserLogin } from "@/types/user"
import useLocalState from "@/hooks/useLocalState"

const authContext = createContext(
  {} as {
    login: (logData: UserLogin) => void
    logout: () => void
  }
)

const useAuthContext = () => useContext(authContext)

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useLocalState("token", "")
  const queryClient = useQueryClient()

  function login(logData: UserLogin) {
    setToken(logData.token)
    queryClient.setQueryData(["user"], logData.user)
  }

  function logout() {
    setToken("")
    queryClient.removeQueries({ queryKey: ["user"], exact: true })
  }
  return <authContext.Provider value={{ login, logout }}>{children}</authContext.Provider>
}

export default useAuthContext
