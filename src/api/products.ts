import api from "."
import { SingleGame } from "@/types/game"

export const getSingleGame = (id: string): Promise<SingleGame> => api.get(`games/${id}`)
