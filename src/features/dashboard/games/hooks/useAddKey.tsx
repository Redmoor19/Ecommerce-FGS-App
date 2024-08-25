import { ApiError } from "@/api/apiError"
import { addGameKey } from "@/api/gameApi"
import { useToast } from "@/components/ui/use-toast"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const useAddKey = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationFn: (gameId: string) => addGameKey(gameId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["games"], exact: true })
      queryClient.invalidateQueries({ queryKey: ["activeGames"], exact: true })
      toast({
        title: "Success",
        description: "Key added"
      })
    },
    onError: (error: ApiError) => {
      toast({
        variant: "destructive",
        title: "Failed to add a key",
        description: error.message
      })
    }
  })

  return { mutate, isPending }
}

export default useAddKey
