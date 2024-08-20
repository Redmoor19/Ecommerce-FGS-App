import { CreateUser, UpdateRole, UpdateUser, User } from "@/types/user"
import api from "."
import { Game } from "@/types/game"

export const getUsers = (): Promise<User> => api.get("/users")

export const getSingleUser = (userId: string): Promise<User> => api.get(`/users/${userId}`)

export const createUser = (data: CreateUser): Promise<User> => api.post("/users", data)

export const updateUser = (userId: string, data: UpdateUser): Promise<User> =>
  api.patch(`/users/${userId}`, data)

export const deleteUser = (userId: string) => api.delete(`/users/${userId}`)

export const updateUserRole = (userId: string, data: UpdateRole) =>
  api.patch(`/users/role/${userId}`, data)

export const activateUser = (userId: string) => api.patch(`/users/activate/${userId}`)

export const getCurrentUser = (): Promise<User> => api.get("/users/me")

export const deleteCurrentUser = () => api.delete("/users/me")

export const updateCurrentUser = (data: UpdateUser): Promise<User> => api.patch("/users/me", data)

export const getFavourites = (): Promise<Game[]> => api.get("/users/me/games/favourites")

export const addToFavourites = (gameId: string) => api.post(`/users/me/games/favourites/${gameId}`)

export const removeFromFavourites = (gameId: string) =>
  api.delete(`/users/me/games/favourites/${gameId}`)
