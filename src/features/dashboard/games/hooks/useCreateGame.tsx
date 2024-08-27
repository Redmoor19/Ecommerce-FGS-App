import { ApiError } from "@/api/apiError"
import { createGame } from "@/api/gameApi"
import { useToast } from "@/components/ui/use-toast"
import { CreateGame } from "@/types/game"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const useCreateGame = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationFn: (data: CreateGame) => createGame(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["games"] })
      queryClient.invalidateQueries({ queryKey: ["activeGames"] })
      toast({
        title: "Success",
        description: "Game created"
      })
    },
    onError: (error: ApiError) => {
      toast({
        variant: "destructive",
        title: "Failed to create game",
        description: error.message
      })
    }
  })

  return { mutate, isPending }
}

export default useCreateGame
