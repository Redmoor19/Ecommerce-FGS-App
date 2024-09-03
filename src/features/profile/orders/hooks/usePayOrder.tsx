import { ApiError } from "@/api/apiError"
import { payForOrder } from "@/api/orderApi"
import { useToast } from "@/components/ui/use-toast"
import { PayOrder } from "@/types/order"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const usePayOrder = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationFn: (data: PayOrder) => payForOrder(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] })
      queryClient.invalidateQueries({ queryKey: ["my-orders"] })
      queryClient.invalidateQueries({ queryKey: ["games"] })
      queryClient.invalidateQueries({ queryKey: ["activeGames"] })
      toast({
        title: "Paied successfully!",
        description: "Thank you for using our service"
      })
    },
    onError: (error: ApiError) => {
      toast({
        variant: "destructive",
        title: "Failed to pay",
        description: error.message
      })
    }
  })

  return { mutate, isPending }
}

export default usePayOrder
