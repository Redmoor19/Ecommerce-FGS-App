import GameMultipleSelect from "@/components/GameMultipleSelect"
import GameSearchInput from "@/components/GameSearchInput"
import GameSortBy from "@/components/GameSortBy"
import { useToast } from "@/components/ui/use-toast"
import useGetGenres from "@/features/dashboard/games/hooks/useGetGenres"
import useGetPlayerSupport from "@/features/dashboard/games/hooks/useGetPlayerSupport"
import sortOptions from "@/lib/sortOprions"

const AllGamesControlBar = () => {
  const { genres, error: genresError } = useGetGenres()
  const { playerSupport, error: psError } = useGetPlayerSupport()
  const { toast } = useToast()

  if (genresError || psError)
    toast({
      variant: "destructive",
      title: `Failed to load ${genresError ? "genres" : "player support"}`
    })

  return (
    <div className="flex flex-col gap-3 md:gap-0">
      <GameSearchInput />
      <div className="flex items-start flex-col md:gap-3 md:items-center md:flex-row">
        <GameSortBy options={sortOptions} />
        {genres && <GameMultipleSelect paramKey="genres" items={genres} placeholder="Genres " />}
        {playerSupport && (
          <GameMultipleSelect
            paramKey="playerSupports"
            items={playerSupport}
            placeholder="Player supports"
          />
        )}
      </div>
    </div>
  )
}

export default AllGamesControlBar
