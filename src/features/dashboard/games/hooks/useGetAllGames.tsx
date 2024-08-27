import { getAllGames } from "@/api/gameApi"
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router-dom"

const useGetAllGames = () => {
  const [searchParams] = useSearchParams()
  const {
    data: gameData,
    isLoading,
    error
  } = useQuery({
    queryKey: ["games", searchParams.toString()],
    queryFn: () => getAllGames(searchParams)
  })

  return { gameData, isLoading, error }
}

export default useGetAllGames
