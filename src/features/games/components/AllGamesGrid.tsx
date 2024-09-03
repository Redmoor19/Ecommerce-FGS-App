import GamesPagination from "@/components/GamesPagination"
import useGetActiveGames from "../hooks/useGetActiveGames"
import GameCard from "./GameCard"
import Loader from "@/components/Loader"
import ErrorDisplay from "@/components/ErrorDisplay"
import { ApiError } from "@/api/apiError"

const AllGamesGrid = () => {
  const { activeGames, isLoading, error } = useGetActiveGames()
  if (isLoading) return <Loader />
  if (error) return <ErrorDisplay error={error as ApiError} />
  if (!activeGames) return <ErrorDisplay error={new ApiError("Something went very wrong", 500)} />

  const { currentPageNumber, totalGamesCount, totalPages } = activeGames.allGamesHead

  if (totalGamesCount === 0)
    return <h2 className="mb-auto text-center py-20 text-2xl text-primary">No games found</h2>

  return (
    <div className="flex flex-grow flex-col gap-3 justify-between">
      <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 xl:grid-cols-6 gap-5 justify-self-start">
        {activeGames.allGamesList.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      <GamesPagination
        gamesPerPage={12}
        currentPage={currentPageNumber}
        totalPages={totalPages}
        totalItems={totalGamesCount}
      />
    </div>
  )
}

export default AllGamesGrid
