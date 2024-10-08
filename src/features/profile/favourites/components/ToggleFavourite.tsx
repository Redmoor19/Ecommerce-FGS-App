import { HeartCrackIcon, HeartIcon } from "lucide-react"
import useAuthContext from "@/context/authContext"
import useGetFavourites from "../hooks/useGetFavourites"
import useAddToFavourites from "../hooks/useAddToFavourites"
import useRemoveFromFavourites from "../hooks/useRemoveFromFavourites"

const ToggleFavourite = ({ gameId }: { gameId: string }) => {
  const { isFavourite } = useGetFavourites()
  const { isLogged } = useAuthContext()
  const { mutate: mutateAdd, isPending: pendingAdd } = useAddToFavourites()
  const { mutate: mutateRemove, isPending: pendingRemove } = useRemoveFromFavourites()

  const isLoading = pendingAdd || pendingRemove
  const favourite = isFavourite(gameId)

  if (!isLogged) return null

  return (
    <div
      className={`text-primary ${isLoading && "text-primary/60 hover:scale-100"} hover:scale-125`}
    >
      {favourite ? (
        <button disabled={isLoading}>
          <HeartCrackIcon size={30} onClick={() => mutateRemove(gameId)} />
        </button>
      ) : (
        <button disabled={isLoading}>
          <HeartIcon size={30} onClick={() => mutateAdd(gameId)} />
        </button>
      )}
    </div>
  )
}

export default ToggleFavourite
