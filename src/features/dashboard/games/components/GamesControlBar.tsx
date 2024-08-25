import { CreateGame as CreateGameType } from "@/types/game"
import CreateUpdateGameForm from "./CreateUpdateGameForm"
import useCreateGame from "../hooks/useCreateGame"
import { useState } from "react"
import GameModal from "./GameModal"
import { Button } from "@/components/ui/button"

const GamesControlBar = () => {
  const { mutate, isPending } = useCreateGame()
  const [gameModalOpen, setGameModelOpen] = useState(false)

  function onGameCreate(game: CreateGameType) {
    const createGame = {
      ...game,
      images: game.images.filter((img) => img != "")
    }
    mutate(createGame, { onSuccess: () => setGameModelOpen(false) })
  }

  return (
    <div>
      <GameModal
        trigger={<Button>Create</Button>}
        title="Create Game"
        open={gameModalOpen}
        setOpen={setGameModelOpen}
      >
        <CreateUpdateGameForm
          filedsDisables={isPending}
          submitHandler={onGameCreate}
          submitTitle="Create"
        />
      </GameModal>
    </div>
  )
}

export default GamesControlBar
