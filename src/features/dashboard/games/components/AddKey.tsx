import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { KeyRound } from "lucide-react"
import useAddKey from "../hooks/useAddKey"

const AddKey = ({ gameId }: { gameId: string }) => {
  const { mutate, isPending } = useAddKey()

  function clickHandler() {
    mutate(gameId)
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button disabled={isPending} onClick={clickHandler}>
            <KeyRound className="cursor-pointer" size={25} />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add key to the game</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default AddKey
