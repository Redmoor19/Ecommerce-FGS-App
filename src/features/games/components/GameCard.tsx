import customRound from "@/lib/customRound"
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
      className="aspect-[0.666/1] text-primary bg-muted dark:bg-gray-800/20 hover:scale-105 duration-300 flex flex-col justify-between rounded-lg overflow-hidden shadow-lg shadow-primary/20"
    >
      <img className="object-cover w-full h-3/4" src={game.thumbnail} />
      <div className="bg-gradient text-transparent bg-clip-text font-semibold text-xl p-2">
        <h2 className="truncate overflow-hidden whitespace-nowrap">{game.name}</h2>
        <div className="flex justify-between items-center gap-1">
          {game.rating != 0 ? (
            <>
              <StarIcon className="text-yellow-600" size={20} />
              <p className="mr-auto text-xl">{customRound(game.rating)}/5</p>
            </>
          ) : (
            <p></p>
          )}
          <p className=" text-2xl font-bold ">{game.price} €</p>
        </div>
      </div>
    </Link>
  )
}

export default GameCard
