import { ApiError } from "@/api/apiError"
import { clearCart } from "@/api/orderApi"
import { useToast } from "@/components/ui/use-toast"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const useClearCart = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationFn: clearCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] })
    },
    onError: (error: ApiError) => {
      toast({
        variant: "destructive",
        title: "Failed to clear cart",
        description: error.message
      })
    }
  })

  return { mutate, isPending }
}

export default useClearCart
