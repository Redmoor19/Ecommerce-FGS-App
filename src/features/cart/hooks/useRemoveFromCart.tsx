import { ApiError } from "@/api/apiError"
import { deleGameFromCart } from "@/api/orderApi"
import { useToast } from "@/components/ui/use-toast"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const useRemoveFromCart = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationFn: (gameId: string) => deleGameFromCart(gameId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] })
    },
    onError: (error: ApiError) => {
      toast({
        variant: "destructive",
        title: "Failed to remove from cart",
        description: error.message
      })
    }
  })

  return { mutate, isPending }
}

export default useRemoveFromCart
