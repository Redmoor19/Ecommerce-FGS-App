import { Game } from "@/types/game"
import { StarIcon } from "lucide-react"
import { Link } from "react-router-dom"

type GameCardProps = {
  game: Game
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Link
      to={`/games/${game.id}`}
      className="relative group hover:scale-110 transition-all duration-300 text-primary overflow-hidden z-30"
    >
      <img
        className="object-cover group-hover:grayscale transition-all duration-300 w-full h-full"
        src={game.thumbnail}
      />
      <div className="absolute inset-0 p-2 flex flex-col justify-end z-10 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="bg-gradient text-transparent bg-clip-text font-semibold text-2xl">
          <h2>{game.name}</h2>
          <div className="flex justify-between items-center gap-1">
            <StarIcon className="text-yellow-600" size={20} />
            <p className="mr-auto text-xl">{game.rating}/5</p>
            <p className=" text-3xl font-bold ">{game.price} €</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default GameCard
