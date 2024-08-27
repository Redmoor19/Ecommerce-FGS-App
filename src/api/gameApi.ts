import { URLSearchParams } from "url"
import api from "."
import {
  CreateGame,
  Game,
  GameList,
  GameUpdateStatus,
  Key,
  SingleGame,
  UpdateGame
} from "@/types/game"
import { CreateUpdateReview, Review } from "@/types/review"

export const getAllGames = (params?: URLSearchParams): Promise<GameList> =>
  api.get("/games/all", { params })

export const getAllActiveGames = (params?: URLSearchParams): Promise<GameList> =>
  api.get("/games/active", { params })

export const createGame = (data: CreateGame): Promise<Game> => api.post("/games", data)

export const getSingleGame = (gameId: string): Promise<SingleGame> => api.get(`/games/${gameId}`)

export const updateGame = (data: UpdateGame): Promise<Game> => api.patch("/games", data)

export const updateGameStatus = (
  gameId: string,
  data: { status: GameUpdateStatus }
): Promise<Game> => api.patch(`/games/status/${gameId}`, data)

export const getGenres = (): Promise<string[]> => api.get("/games/genres")

export const getGamesByGenre = (genre: string): Promise<Game[]> => api.get(`/games/genres/${genre}`)

export const getPlayerSupports = (): Promise<string[]> => api.get("/games/player-support")

export const getGamesByPlayerSupport = (ps: string): Promise<Game[]> =>
  api.get(`games/player-support/${ps}`)

export const addGameKey = (gameId: string): Promise<Key> => api.post(`/games/keys/${gameId}`)

export const getKeysAmount = (gameId: string): Promise<number> => api.get(`/games/keys/${gameId}`)

export const createReview = (gameId: string, data: CreateUpdateReview): Promise<Review> =>
  api.post(`/games/reviews/${gameId}`, data)

export const updateReview = (gameId: string, data: CreateUpdateReview): Promise<Review> =>
  api.patch(`/games/reviews/${gameId}`, data)

export const deleteReview = (reviewId: string) => api.delete(`/games/reviews/${reviewId}`)
