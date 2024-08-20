import { useQuery } from "@tanstack/react-query"
import { Home } from "./pages/home"
import { getSingleGame } from "./api/products"
import { ApiError } from "./api/apiError"
import { SingleGame } from "./types/game"

function App() {
  const { data, error, isLoading } = useQuery<SingleGame, ApiError>({
    queryKey: ["203a5a4a-8deb-4c82-93e7-d7aafda23782"],
    queryFn: () => getSingleGame("203a5a4a-8deb-4c82-93e7-d7aafda23782")
  })

  console.log(data)
  console.log(error?.status)

  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
