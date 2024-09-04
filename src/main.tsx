import ReactDOM from "react-dom/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import App from "./App"
import "./index.css"
import "@smastrom/react-rating/style.css"
import { AuthContextProvider } from "./context/authContext"
import { DarkContextProvider } from "./context/darkThemeContext"

const queryClient = new QueryClient()

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
