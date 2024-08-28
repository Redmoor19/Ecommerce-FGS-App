import { ApiError } from "@/api/apiError"
import { getFavourites } from "@/api/userApi"
import { Game } from "@/types/game"
import { useQuery } from "@tanstack/react-query"

const useGetFavourites = () => {
  const {
    data: favourites,
    isLoading,
    error
  } = useQuery<Game[], ApiError>({
    queryKey: ["favourites"],
    queryFn: getFavourites,
    retry: (failureCount, error) => (error.status === 404 && failureCount <= 3 ? true : false)
  })

  function isFavourite(gameId: string): boolean {
    return !!favourites?.find((item) => item.id === gameId)
  }

  return { favourites, isLoading, error, isFavourite }
}

export default useGetFavourites
