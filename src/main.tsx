import ReactDOM from "react-dom/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import App from "./App"
import "./index.css"
import "@smastrom/react-rating/style.css"
import { AuthContextProvider } from "./context/authContext"
import { DarkContextProvider } from "./context/darkThemeContext"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 3,
      refetchOnReconnect: true
    }
  }
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <DarkContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DarkContextProvider>
    <ReactQueryDevtools buttonPosition="bottom-left" initialIsOpen={false} />
  </QueryClientProvider>
)
