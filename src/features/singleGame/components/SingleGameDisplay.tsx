import { SingleGame } from "@/types/game"
import SingleGameCarousel from "./SingleGameCarousel"
import { splitSystemRequirements } from "@/lib/splitSystemRequirements"
import { Building2Icon, CalendarFoldIcon } from "lucide-react"
import ToggleCart from "@/features/cart/components/ToggleCart"
import GoBack from "@/components/GoBack"
import ToggleFavourite from "@/features/profile/favourites/components/ToggleFavourite"

type SingleGameDisplayProps = {
  game: SingleGame
}

const SingleGameDisplay = ({ game }: SingleGameDisplayProps) => {
  const {
    id,
    name,
    genreList,
    playerSupport,
    price,
    images,
    description,
    systemRequirements,
    releaseDate,
    developer
  } = game

  return (
    <div className="container bg-background text-foreground">
      <section className="py-12 md:py-12">
        <GoBack />
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <SingleGameCarousel images={images} />
          <div className="space-y-4 relative">
            <div className="absolute z-30 top-3 right-0">
              <ToggleFavourite gameId={id} />
            </div>
            <h1 className="text-4xl font-bold">{name}</h1>
            <div className="flex items-center gap-4">
              {genreList.map((genre) => (
                <div key={genre} className="bg-muted px-3 py-1 rounded-full text-sm">
                  {genre.split("_").join(" ")}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4">
              {playerSupport.map((ps) => (
                <div key={ps} className="bg-muted px-3 py-1 rounded-full text-sm">
                  {ps.split("_").join(" ")}
                </div>
              ))}
            </div>
            <div>
              <div className="bg-muted p-4 rounded-lg flex flex-col gap-5">
                <div className=" flex gap-3">
                  <Building2Icon />
                  <p>{developer}</p>
                </div>
                <div className=" flex gap-3">
                  <CalendarFoldIcon />
                  <span>{new Date(releaseDate).toDateString()}</span>
                </div>
              </div>
            </div>
            <div className="text-2xl font-bold">{price} €</div>
            <ToggleCart gameId={game.id} />
          </div>
        </div>
      </section>
      <section className="container py-12 md:py-24 border-t">
        <div className="grid gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Description</h2>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">System Requirements</h2>
            <ul className="space-y-2 text-muted-foreground">
              {splitSystemRequirements(systemRequirements).map((req) => (
                <li key={req}>{req}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SingleGameDisplay
