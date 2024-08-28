import { ApiError } from "@/api/apiError"
import { removeFromFavourites } from "@/api/userApi"
import { useToast } from "@/components/ui/use-toast"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const useRemoveFromFavourites = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationFn: (gameId: string) => removeFromFavourites(gameId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favourites"] })
    },
    onError: (error: ApiError) => {
      toast({
        variant: "destructive",
        title: "Failed to remove favourite",
        description: error.message
      })
    }
  })

  return { mutate, isPending }
}

export default useRemoveFromFavourites
