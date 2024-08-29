import { CreateUpdateReview, EmbeddedReview } from "@/types/review"
import CreateReviewForm from "./CreateReviewForm"
import useAddReview from "../hooks/useAddReview"
import StarRating from "./StarRating"
import { UserIcon } from "lucide-react"
import ReviewCard from "./ReviewCard"

type ReviewsProps = {
  reviews: EmbeddedReview[]
  gameId: string
  averageRating: number
}

const Reviews = ({ reviews, gameId, averageRating }: ReviewsProps) => {
  const { mutate, isPending } = useAddReview(gameId)

  function onSubmit(data: CreateUpdateReview) {
    mutate(data)
  }

  return (
    <>
      <h2 className="text-2xl font-bold pb-5">Reviews</h2>
      <CreateReviewForm
        disabled={isPending}
        className="max-w-[600px] pb-16"
        submitHandler={onSubmit}
      />
      <div>
        {reviews.length === 0 ? (
          <p>No reviews on this game yet</p>
        ) : (
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="bg-primary h-10 w-10 flex items-center justify-center rounded-full text-primary-foreground text-sm">
                  <p className="font-bold text-xl">{averageRating}</p>
                </div>
                <div className="flex items-center gap-1">
                  <StarRating value={averageRating} readonly transparent />
                </div>
              </div>
              <div className="text-sm text-muted-foreground">Based on {reviews.length} reviews</div>
            </div>
            {reviews.map((review) => (
              <ReviewCard key={review.reviewID} review={review} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Reviews
