import { ApiError } from "@/api/apiError"
import { updateGameStatus } from "@/api/gameApi"
import { useToast } from "@/components/ui/use-toast"
import { GameUpdateStatus } from "@/types/game"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const useUpdateGameStatus = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationFn: ({ id, status }: { id: string; status: GameUpdateStatus }) =>
      updateGameStatus(id, { status }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["games"] })
      queryClient.invalidateQueries({ queryKey: ["activeGames"] })
      toast({
        title: "Success",
        description: `Game ${data.active ? "activated" : "deactivated"}`
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

export default useUpdateGameStatus
