import { CreateGame as CreateGameType } from "@/types/game"
import CreateUpdateGameForm from "./CreateUpdateGameForm"
import useCreateGame from "../hooks/useCreateGame"
import { useState } from "react"
import GameModal from "./GameModal"
import { Button } from "@/components/ui/button"
import GameSearchInput from "@/components/GameSearchInput"
import GameSortBy from "@/components/GameSortBy"
import useGetGenres from "../hooks/useGetGenres"
import GameMultipleSelect from "@/components/GameMultipleSelect"
import useGetPlayerSupport from "../hooks/useGetPlayerSupport"
import sortOptions from "@/lib/sortOprions"

const GamesControlBar = () => {
  const { mutate, isPending } = useCreateGame()
  const [gameModalOpen, setGameModelOpen] = useState(false)
  const { genres } = useGetGenres()
  const { playerSupport } = useGetPlayerSupport()

  function onGameCreate(game: CreateGameType) {
    const createGame = {
      ...game,
      images: game.images.filter((img) => img != "")
    }
    mutate(createGame, { onSuccess: () => setGameModelOpen(false) })
  }

  return (
    <div className="flex gap-5 p-5 flex-col">
      <GameSearchInput />
      <div className="flex items-center gap-3">
        <GameSortBy options={sortOptions} />
        {genres && <GameMultipleSelect paramKey="genres" placeholder="Genres" items={genres} />}
        {playerSupport && (
          <GameMultipleSelect
            paramKey="playerSupport"
            placeholder="Player support"
            items={playerSupport}
          />
        )}
        <GameModal
          trigger={<Button>Create Game</Button>}
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
    </div>
  )
}

export default GamesControlBar
