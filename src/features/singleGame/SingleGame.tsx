import { ApiError } from "@/api/apiError"
import ErrorDisplay from "@/components/ErrorDisplay"
import { useParams } from "react-router-dom"
import useGetSingleGame from "./hooks/useGetSingleGame"
import Loader from "@/components/Loader"
import SingleGameDisplay from "./components/SingleGameDisplay"

const SingleGame = () => {
  const { id } = useParams()

  if (!id) return <ErrorDisplay error={new ApiError("Id doesn't exist", 404)} />

  const { game, isLoading, error } = useGetSingleGame(id)

  if (isLoading) return <Loader />

  if (error) return <ErrorDisplay error={error as ApiError} />

  if (game) return <SingleGameDisplay game={game} />

  return <ErrorDisplay error={new ApiError("Something went very wrong", 500)} />
}

export default SingleGame
