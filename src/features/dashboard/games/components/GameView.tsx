import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import { splitSystemRequirements } from "@/lib/splitSystemRequirements"
import { Game } from "@/types/game"
import { CalendarIcon, WrenchIcon } from "lucide-react"

const GameView = ({ game }: { game: Game }) => {
  return (
    <div className="grid grid-cols-[1fr_1fr] gap-7">
      <div className="flex flex-col items-center gap-5">
        <img className="w-1/2 p-4" src={game.thumbnail} alt="Thumbnail" />
        <Carousel className="w-2/3">
          <CarouselContent>
            {game.images.map((image, index) => (
              <CarouselItem key={index}>
                <img src={image} alt={`Image ${index + 1}`} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="space-y-5">
        <div>
          <h1 className="text-3xl font-bold ">{game.name}</h1>
          <p className="text-primary font-bold text-2xl py-3">{game.price} €</p>
          <div className="flex gap-3 items-center">
            {game.active ? (
              <p className="text-lime-500">ACTIVE</p>
            ) : (
              <p className="text-red-500">NOT ACTIVE</p>
            )}
            <p className="text-lg">
              ( <span className="font-bold">{game.quantity}</span> keys )
            </p>
          </div>
          <p className="text-muted-foreground text-md">{game.sku}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Game information</h2>
          <div className="flex flex-col gap-2 py-2">
            <div className="flex items-center gap-2">
              <WrenchIcon className="w-5 h-5" />
              <span>{game.developer}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5" />
              <span>{new Date(game.releaseDate).toDateString()}</span>
            </div>
            <p className="text-muted-foreground">Genres: {game.genreList.join(", ")}</p>
            <p className="text-muted-foreground">Player Support: {game.playerSupport.join(", ")}</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold">System Requirements</h2>
          <ul className="list-disc pl-6 text-muted-foreground">
            {splitSystemRequirements(game.systemRequirements).map((req) => (
              <li key={req}>{req}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Description</h2>
          <p className="text-muted-foreground">{game.description}</p>
        </div>
      </div>
    </div>
  )
}

export default GameView
