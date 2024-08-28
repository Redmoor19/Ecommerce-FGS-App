import GameCard from "@/features/games/components/GameCard"
import useGetFavourites from "../hooks/useGetFavourites"

const FavouritesGrid = () => {
  const { error, favourites, isLoading } = useGetFavourites()

  if (favourites)
    return favourites.length != 0 ? (
      <section className="p-6 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5 auto-rows-min">
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

  return null
}

export default FavouritesGrid
