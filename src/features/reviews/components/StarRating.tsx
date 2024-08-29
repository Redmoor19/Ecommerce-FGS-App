import useDarkContext from "@/context/darkThemeContext"
import { Rating, RoundedStar } from "@smastrom/react-rating"

type StarRatingProps = {
  readonly?: boolean
  value: number
  setValue?: (value: number) => void
  className?: string
  transparent?: boolean
}

const StarRating = ({
  readonly = false,
  value,
  setValue,
  className,
  transparent = false
}: StarRatingProps) => {
  const { theme } = useDarkContext()

  const styles = {
    itemShapes: RoundedStar,
    activeFillColor: theme === "dark" ? "#f43b47" : "#231557",
    inactiveFillColor: transparent ? "#00000000" : theme === "dark" ? "#453a94" : "#ff1361"
  }

  return (
    <div>
      <Rating
        className={`${className} max-w-[200px]`}
        readOnly={readonly}
        value={value}
        onChange={setValue}
        itemStyles={styles}
      />
    </div>
  )
}

export default StarRating
