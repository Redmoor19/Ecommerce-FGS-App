import { getSingleGame } from "@/api/gameApi"
import { useQuery } from "@tanstack/react-query"

const useGetSingleGame = (gameId: string) => {
  const {
    data: game,
    isLoading,
    error
  } = useQuery({
    queryFn: () => getSingleGame(gameId),
    queryKey: ["activeGames", gameId]
  })

  return { game, isLoading, error }
}

export default useGetSingleGame
