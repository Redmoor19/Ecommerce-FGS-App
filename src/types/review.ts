export type Review = {
  id: string
  userId: string
  gameId: string
  description: string
  starRating: number
  createdAt: number
}

export type EmbeddedReview = {
  reviewID: string
  reviewDescription: string
  starRating: number
  createdAt: number
  name: string
}

export type CreateUpdateReview = Pick<Review, "description" | "starRating">
