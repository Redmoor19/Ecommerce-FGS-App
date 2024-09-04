import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { RotateCcwIcon, Trash2Icon } from "lucide-react"

type UpdateStateProps = {
  isActive: boolean
  onClick: () => void
  disabled: boolean
}

const UpdateActiveStatus = ({ isActive, onClick, disabled }: UpdateStateProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {isActive ? (
            <button onClick={onClick} disabled={disabled}>
              <Trash2Icon className="hover:text-primary cursor-pointer" size={25} />
            </button>
          ) : (
            <button onClick={onClick} disabled={disabled}>
              <RotateCcwIcon className="hover:text-primary cursor-pointer" size={25} />
            </button>
          )}
        </TooltipTrigger>
        <TooltipContent>{isActive ? <p>Deactivate game</p> : <p>Activate game</p>}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default UpdateActiveStatus
