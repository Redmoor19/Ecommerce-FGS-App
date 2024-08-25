import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle
} from "@/components/ui/dialog"

type CreateGameProps = {
  children: React.ReactNode
  open?: boolean
  setOpen?: (state: boolean) => void
  trigger: React.ReactNode
  title: string
}

const GameModal = ({ children, open, setOpen, title, trigger }: CreateGameProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        aria-describedby={undefined}
        className="max-h-[80vh] max-w-[70vw] overflow-y-auto"
      >
        <DialogHeader>
          <DialogTitle className="text-primary">{title}</DialogTitle>
        </DialogHeader>
        <div className="overflow-y-auto h-full">{children}</div>
      </DialogContent>
    </Dialog>
  )
}

export default GameModal
