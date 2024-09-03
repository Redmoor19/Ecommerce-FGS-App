import { getMostPopularGames } from "@/api/gameApi"
import { useQuery } from "@tanstack/react-query"

const useGetPopularGames = () => {
  const {
    data: popularGames,
    isLoading,
    error
  } = useQuery({
    queryFn: getMostPopularGames,
    queryKey: ["popular-games"]
  })

  return { popularGames, isLoading, error }
}

export default useGetPopularGames
