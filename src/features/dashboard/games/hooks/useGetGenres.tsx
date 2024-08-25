import { getGenres } from "@/api/gameApi"
import { useQuery } from "@tanstack/react-query"

const useGetGenres = () => {
  const {
    data: genres,
    isLoading,
    error
  } = useQuery({
    queryKey: ["genres"],
    queryFn: getGenres
  })

  return { genres, isLoading, error }
}

export default useGetGenres
