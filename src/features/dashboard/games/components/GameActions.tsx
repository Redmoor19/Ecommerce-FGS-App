import { CreateGame, Game, UpdateGame } from "@/types/game"
import GameModal from "./GameModal"
import { useState } from "react"
import { Eye, Pencil } from "lucide-react"
import CreateUpdateGameForm from "./CreateUpdateGameForm"
import useUpdateGame from "../hooks/useUpdateGame"
import GameView from "./GameView"
import AddKey from "./AddKey"
import UpdateActiveStatus from "./UpdateActiveStatus"
import useUpdateGameStatus from "../hooks/useUpdateGameStatus"

type GameActionsProps = {
  game: Game
}

const GameActions = ({ game }: GameActionsProps) => {
  const [updateModalOpen, setUpdateModalOpen] = useState(false)
  const { mutate: gameUpdate, isPending: gameIsUpdating } = useUpdateGame()
  const { mutate: statusUpdate, isPending: statusIsUpdating } = useUpdateGameStatus()

  function onUpdate(updateGame: CreateGame) {
    const data: UpdateGame = {
      ...updateGame,
      id: game.id,
      images: updateGame.images.filter((image) => image != "")
    }
    gameUpdate(data, {
      onSuccess: () => {
        setUpdateModalOpen(false)
      }
    })
  }

  function onStatusUpdate() {
    statusUpdate({ id: game.id, status: game.active ? "DEACTIVATE" : "ACTIVATE" })
  }

  return (
    <div className="flex items-center justify-end gap-3 text-muted-foreground">
      <AddKey gameId={game.id} />
      <GameModal title="" trigger={<Eye className="cursor-pointer" size={25} />}>
        <GameView game={game} />
      </GameModal>
      <GameModal
        open={updateModalOpen}
        setOpen={setUpdateModalOpen}
        title="Update game"
        trigger={<Pencil className="cursor-pointer" size={25} />}
      >
        <CreateUpdateGameForm
          submitHandler={onUpdate}
          filedsDisables={gameIsUpdating}
          game={game}
          submitTitle="Update"
        />
      </GameModal>
      <UpdateActiveStatus
        onClick={onStatusUpdate}
        isActive={game.active}
        disabled={statusIsUpdating}
      />
    </div>
  )
}

export default GameActions
