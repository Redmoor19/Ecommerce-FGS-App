import { ApiError } from "@/api/apiError"
import ErrorDisplay from "@/components/ErrorDisplay"
import GoBack from "@/components/GoBack"

const NotFoundPage = () => {
  return (
    <div className="container">
      <GoBack />
      <ErrorDisplay error={new ApiError("Page not found", 404)} />
    </div>
  )
}

export default NotFoundPage
