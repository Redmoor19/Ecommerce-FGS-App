import { ApiError } from "@/api/apiError"
import { createReview } from "@/api/gameApi"
import { useToast } from "@/components/ui/use-toast"
import { CreateUpdateReview } from "@/types/review"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const useAddReview = (gameId: string) => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (review: CreateUpdateReview) => createReview(gameId, review),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["activeGames"] })
    },
    onError: (error: ApiError) => {
      if (error.status === 400)
        toast({
          variant: "destructive",
          title: "Can't create a review",
          description: "You already left a review"
        })
      if (error.status === 401)
        toast({
          variant: "destructive",
          title: "Can't create a review",
          description: "Please log in to leave a review"
        })
    }
  })

  return { mutate, isPending, isSuccess }
}

export default useAddReview
