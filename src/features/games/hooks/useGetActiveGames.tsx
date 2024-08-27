import { getAllActiveGames } from "@/api/gameApi"
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router-dom"

const useGetActiveGames = () => {
  const [searchParams] = useSearchParams()
  const {
    data: activeGames,
    isLoading,
    error
  } = useQuery({
    queryFn: () => getAllActiveGames(searchParams),
    queryKey: ["activeGames", searchParams.toString()]
  })

  return { activeGames, isLoading, error }
}

export default useGetActiveGames
