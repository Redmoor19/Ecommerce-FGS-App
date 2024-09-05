import GameCard from "@/features/games/components/GameCard"
import useGetFavourites from "../hooks/useGetFavourites"
import Loader from "@/components/Loader"
import ErrorDisplay from "@/components/ErrorDisplay"
import { ApiError } from "@/api/apiError"

const FavouritesGrid = () => {
  const { error, favourites, isLoading } = useGetFavourites()

  if (isLoading) return <Loader />

  if (error) return <ErrorDisplay error={error as ApiError} />

  if (favourites)
    return favourites.length != 0 ? (
      <section className="p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 auto-rows-min">
        {favourites.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </section>
    ) : (
      <section>
        <h2 className="text-2xl text-primary text-center py-16">
          You don&apos;t have any favourite games yet 😸
        </h2>
      </section>
    )

  return <ErrorDisplay error={new ApiError("Something went very wrong!", 500)} />
}

export default FavouritesGrid
