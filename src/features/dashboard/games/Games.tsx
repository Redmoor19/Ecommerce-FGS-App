import ErrorDisplay from "@/components/ErrorDisplay"
import GamesControlBar from "./components/GamesControlBar"
import GamesTable from "./components/GamesTable"
import useGetAllGames from "./hooks/useGetAllGames"
import Loader from "@/components/Loader"
import { ApiError } from "@/api/apiError"

const Games = () => {
  const { gameData, isLoading: gamesLoading, error: gamesError } = useGetAllGames()

  if (gamesLoading) return <Loader />

  if (gamesError) return <ErrorDisplay error={gamesError as ApiError} />

  if (gameData)
    return (
      <section className="h-full flex flex-col">
        <GamesControlBar />
        <GamesTable gameData={gameData} />
      </section>
    )

  return <ErrorDisplay error={new ApiError("Something went very wrong!", 530)} />
}

export default Games
