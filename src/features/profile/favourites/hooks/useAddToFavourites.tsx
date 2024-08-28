import { ApiError } from "@/api/apiError"
import { addToFavourites } from "@/api/userApi"
import { useToast } from "@/components/ui/use-toast"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const useAddToFavourites = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationFn: (gameId: string) => addToFavourites(gameId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favourites"] })
    },
    onError: (error: ApiError) => {
      toast({
        variant: "destructive",
        title: "Failed to add favourite",
        description: error.message
      })
    }
  })

  return { mutate, isPending }
}

export default useAddToFavourites
