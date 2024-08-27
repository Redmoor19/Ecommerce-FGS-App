import { EmbeddedReview } from "./review"

export type Game = {
  id: string
  name: string
  genreList: string[]
  quantity: number
  thumbnail: string
  images: string[]
  developer: string
  releaseDate: Date
  systemRequirements: string
  playerSupport: string[]
  price: number | string
  description: string
  sku: string
  active: boolean
  rating: number
}

export type CreateGame = Omit<Game, "id" | "sku" | "isActive" | "rating" | "active">

export type UpdateGame = CreateGame & {
  id: string
}

export type GameListInfo = {
  totalGamesCount: number
  totalPages: number
  gamesPerPage: number
  currentPageNumber: number
}

export type GameList = {
  allGamesHead: GameListInfo
  allGamesList: Game[]
}

export type SingleGame = Omit<Game, "rating"> & {
  averageRating: number
  reviews: EmbeddedReview[]
}

export type Key = {
  gameId: string
}

export type GameUpdateStatus = "ACTIVATE" | "DEACTIVATE"

export type SortType = "price" | "averageRating" | "quantity" | "name"
