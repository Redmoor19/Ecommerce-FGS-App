import { ApiError } from "@/api/apiError"
import { checkoutOrder } from "@/api/orderApi"
import { useToast } from "@/components/ui/use-toast"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const useCheckout = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationFn: checkoutOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] })
      queryClient.invalidateQueries({ queryKey: ["my-orders"] })
      queryClient.invalidateQueries({ queryKey: ["popular-games"] })
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

export default useCheckout
