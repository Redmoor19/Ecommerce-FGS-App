import { HeartCrackIcon, HeartIcon } from "lucide-react"
import useGetFavourites from "../hooks/useGetFavourites"
import useAddToFavourites from "../hooks/useAddToFavourites"
import useAuthContext from "@/context/authContext"
import useRemoveFromFavourites from "../hooks/useRemoveFromFavourites"

const ToggleFavourite = ({ gameId }: { gameId: string }) => {
  const { isFavourite } = useGetFavourites()
  const { isLogged } = useAuthContext()
  const { mutate: mutateAdd } = useAddToFavourites()
  const { mutate: mutateRemove } = useRemoveFromFavourites()

  const favourite = isFavourite(gameId)

  if (!isLogged) return null

  return (
    <div className="text-primary hover:scale-125">
      {favourite ? (
        <button>
          <HeartCrackIcon size={30} onClick={() => mutateRemove(gameId)} />
        </button>
      ) : (
        <button>
          <HeartIcon size={30} onClick={() => mutateAdd(gameId)} />
        </button>
      )}
    </div>
  )
}

export default ToggleFavourite
