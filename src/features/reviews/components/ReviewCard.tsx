import { EmbeddedReview } from "@/types/review"
import StarRating from "./StarRating"
import { UserIcon } from "lucide-react"

type ReviewCardProps = {
  review: EmbeddedReview
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div key={review.reviewID} className="bg-muted rounded-lg p-4 space-y-2">
      <div className="flex items-center gap-2">
        <StarRating
          className="max-w-[120px]"
          value={review.starRating}
          readonly={true}
          transparent={true}
        />
        <span className="text-sm text-muted-foreground">{review.starRating} out of 5</span>
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{review.reviewDescription}</p>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <UserIcon className="w-4 h-4" />
        <span>{review.name}</span>
        <span className="italic ml-auto">( {new Date(review.createdAt).toDateString()} )</span>
      </div>
    </div>
  )
}

export default ReviewCard
