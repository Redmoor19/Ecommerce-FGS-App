import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useToast } from "@/components/ui/use-toast"

import { addGameToCart } from "@/api/orderApi"
import { ApiError } from "@/api/apiError"

const useAddToCart = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationFn: (gameId: string) => addGameToCart(gameId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] })
    },
    onError: (error: ApiError) => {
      toast({
        variant: "destructive",
        title: "Failed to add to cart",
        description: error.message
      })
    }
  })

  return { mutate, isPending }
}

export default useAddToCart
