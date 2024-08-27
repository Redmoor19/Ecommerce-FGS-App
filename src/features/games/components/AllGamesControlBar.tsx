import GameMultipleSelect from "@/components/GameMultipleSelect"
import GameSearchInput from "@/components/GameSearchInput"
import GameSortBy from "@/components/GameSortBy"
import useGetGenres from "@/features/dashboard/games/hooks/useGetGenres"
import useGetPlayerSupport from "@/features/dashboard/games/hooks/useGetPlayerSupport"
import sortOptions from "@/lib/sortOprions"

const AllGamesControlBar = () => {
  const { genres } = useGetGenres()
  const { playerSupport } = useGetPlayerSupport()

  return (
    <div className="flex flex-col gap-3 md:gap-0">
      <GameSearchInput />
      <div className="flex items-start flex-col md:gap-5 md:items-center md:flex-row">
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
