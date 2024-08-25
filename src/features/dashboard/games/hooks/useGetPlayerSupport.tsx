import { getPlayerSupports } from "@/api/gameApi"
import { useQuery } from "@tanstack/react-query"

const useGetPlayerSupport = () => {
  const {
    data: playerSupport,
    isLoading,
    error
  } = useQuery({
    queryKey: ["playerSupport"],
    queryFn: getPlayerSupports
  })

  return { playerSupport, isLoading, error }
}

export default useGetPlayerSupport
