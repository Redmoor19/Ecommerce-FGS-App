import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import GameActive from "./GameActive"
import GameActions from "./GameActions"
import { GameList } from "@/types/game"

type GamesTableProps = {
  gameData: GameList
}

const GamesTable = ({ gameData }: GamesTableProps) => {
  return (
    <Table>
      <TableCaption>A list of all games</TableCaption>
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
              <GameActive active={game.isActive} />
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
  )
}

export default GamesTable
