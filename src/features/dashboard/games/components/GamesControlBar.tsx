import { useState } from "react"
import useGetPlayerSupport from "../hooks/useGetPlayerSupport"
import useGetGenres from "../hooks/useGetGenres"
import useCreateGame from "../hooks/useCreateGame"
import sortOptions from "@/lib/sortOprions"

import CreateUpdateGameForm from "./CreateUpdateGameForm"
import { Button } from "@/components/ui/button"
import GameSearchInput from "@/components/GameSearchInput"
import GameSortBy from "@/components/GameSortBy"
import GameMultipleSelect from "@/components/GameMultipleSelect"
import GameModal from "./GameModal"
import { CreateGame as CreateGameType } from "@/types/game"

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
      <div className="flex gap-3">
        <GameSearchInput />
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
      <div className="flex flex-col lg:flex-row items-center gap-3">
        <GameSortBy options={sortOptions} />
        <div className="flex gap-3">
          {genres && <GameMultipleSelect paramKey="genres" placeholder="Genres" items={genres} />}
          {playerSupport && (
            <GameMultipleSelect
              paramKey="playerSupport"
              placeholder="Player support"
              items={playerSupport}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default GamesControlBar
