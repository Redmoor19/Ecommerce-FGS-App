import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import GameActions from "./GameActions"
import { GameList } from "@/types/game"
import GamesPagination from "@/components/GamesPagination"

type GamesTableProps = {
  gameData: GameList
}

const GamesTable = ({ gameData }: GamesTableProps) => {
  const { currentPageNumber, totalGamesCount, totalPages } = gameData.allGamesHead
  if (gameData.allGamesHead.totalGamesCount === 0)
    return <h2 className="text-center py-10 text-2xl text-primary">No games found!</h2>

  return (
    <div className="flex-1 flex flex-col items-baseline justify-between gap-3 pb-5">
      <Table className="flex-1 overflow-y-auto">
        <TableHeader>
          <TableRow>
            <TableHead className="w-6">Status</TableHead>
            <TableHead className="max-w-[150px]">Title</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {gameData.allGamesList.map((game) => (
            <TableRow key={game.id}>
              <TableCell>
                <div className="w-full h-full flex justify-center items-center">
                  <div
                    className={`h-3 w-3 ${game.active ? "bg-lime-600" : "bg-red-600"} rounded-full`}
                  />
                </div>
              </TableCell>
              <TableCell className="max-w-[150px]">
                <p className="max-w-[150px] overflow-hidden whitespace-nowrap text-ellipsis">
                  {game.name}
                </p>
              </TableCell>
              <TableCell>{game.quantity}</TableCell>
              <TableCell>{game.price} €</TableCell>
              <TableCell>
                <GameActions game={game} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <GamesPagination
        currentPage={currentPageNumber}
        gamesPerPage={10}
        totalItems={totalGamesCount}
        totalPages={totalPages}
      />
    </div>
  )
}

export default GamesTable
