import Loader from "@/components/Loader"
import useGetPopularGames from "../hooks/useGetPopularGames"
import ErrorDisplay from "@/components/ErrorDisplay"
import { ApiError } from "@/api/apiError"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Link } from "react-router-dom"

const PopularGames = () => {
  const { popularGames, isLoading, error } = useGetPopularGames()
  if (isLoading) return <Loader />
  if (error) return <ErrorDisplay error={error as ApiError} />
  if (!popularGames) return <ErrorDisplay error={new ApiError("Something went very wrong", 500)} />

  const autoplay = Autoplay({
    delay: 4000,
    playOnInit: true,
    stopOnInteraction: false,
    stopOnMouseEnter: true
  })

  return (
    <div className="aspect-square h-[500px] md:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px] flex flex-col items-center justify-center">
      <h2 className="text-center text-3xl bg-gradient text-transparent bg-clip-text mb-5">
        Most popular games last month
      </h2>
      <Carousel
        opts={{
          align: "start"
        }}
        plugins={[autoplay]}
      >
        <CarouselContent className="flex items-center">
          {popularGames.map((game, index) => (
            <CarouselItem
              key={index}
              className="flex justify-center items-center basis-1/2 xl:basis-1/3"
            >
              <Link to={`/games/${game.id}`} className="py-5 px-1">
                <img
                  className="aspect-[9/14] object-cover h-80 md:h-1/2 shadow-lg border shadow-primary/20"
                  src={game.thumbnail}
                  alt={`${game.name} thumb`}
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default PopularGames
