import useLocalState from "@/hooks/useLocalState"
import { createContext, useContext, useEffect } from "react"

const darkContext = createContext(
  {} as {
    theme: string
    toggleTheme: () => void
  }
)

const useDarkContext = () => useContext(darkContext)

export const DarkContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useLocalState("theme-mode", "light")

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  function toggleTheme() {
    if (theme === "light") setTheme("dark")
    if (theme === "dark") setTheme("light")
  }

  return (
    <darkContext.Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      {children}
    </darkContext.Provider>
  )
}

export default useDarkContext
