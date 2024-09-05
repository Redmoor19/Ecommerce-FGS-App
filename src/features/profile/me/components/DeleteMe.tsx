import { Button } from "@/components/ui/button"
import { Dialog, DialogHeader, DialogTitle, DialogContent } from "@/components/ui/dialog"
import { useEffect, useState } from "react"
import useDeleteMe from "../hooks/useDeleteMe"

const DeleteMe = ({ clasName }: { clasName: string }) => {
  const [open, setOpen] = useState(false)
  const [count, setCount] = useState(5)
  const { mutate, isPending } = useDeleteMe()

  useEffect(() => {
    if (count > 0) {
      const timerInterval = setInterval(() => {
        setCount((prev) => prev - 1)
      }, 1000)

      return () => clearInterval(timerInterval)
    }
  }, [count])

  function deleteHandler() {
    mutate()
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button
        onClick={() => {
          setOpen(true)
          setCount(5)
        }}
        variant="destructive"
        className={clasName}
      >
        Delete me
      </Button>
      <DialogContent className="w-3/5 rounded md:w-2/5 xl:w-1/5" aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle className="text-primary">Delete current user</DialogTitle>
          <p className="py-5">
            You are about to delete your account. After confirming this you could not login again.
          </p>
          <div className="flex justify-end items-enter gap-5">
            <Button onClick={() => setOpen(false)} variant="outline">
              Cancel
            </Button>
            <Button onClick={deleteHandler} disabled={count > 0 || isPending} variant="destructive">
              {count > 0 ? `..${count} sec` : "Delete"}
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default DeleteMe
