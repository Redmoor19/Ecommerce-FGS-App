import { ApiError } from "@/api/apiError"
import { updateGame } from "@/api/gameApi"
import { useToast } from "@/components/ui/use-toast"
import { UpdateGame } from "@/types/game"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const useUpdateGame = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationFn: (data: UpdateGame) => updateGame(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["games"], exact: true })
      queryClient.invalidateQueries({ queryKey: ["activeGames"], exact: true })
      toast({
        title: "Success",
        description: "Game updated"
      })
    },
    onError: (error: ApiError) => {
      toast({
        variant: "destructive",
        title: "Failed to update game",
        description: error.message
      })
    }
  })

  return { mutate, isPending }
}

export default useUpdateGame
