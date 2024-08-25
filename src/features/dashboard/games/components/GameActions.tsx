import { CreateGame, Game, UpdateGame } from "@/types/game"
import GameModal from "./GameModal"
import { useState } from "react"
import { Eye, Pencil } from "lucide-react"
import CreateUpdateGameForm from "./CreateUpdateGameForm"
import useUpdateGame from "../hooks/useUpdateGame"
import GameView from "./GameView"
import AddKey from "./AddKey"

type GameActionsProps = {
  game: Game
}

const GameActions = ({ game }: GameActionsProps) => {
  const [updateModalOpen, setUpdateModalOpen] = useState(false)
  const { mutate, isPending } = useUpdateGame()

  function onUpdate(updateGame: CreateGame) {
    const data: UpdateGame = {
      ...updateGame,
      id: game.id,
      images: updateGame.images.filter((image) => image != "")
    }
    mutate(data, {
      onSuccess: () => {
        setUpdateModalOpen(false)
      }
    })
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
          filedsDisables={isPending}
          game={game}
          submitTitle="Update"
        />
      </GameModal>
    </div>
  )
}

export default GameActions
