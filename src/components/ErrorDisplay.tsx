import { ApiError } from "@/api/apiError"

type ErrorDisplayProps = {
  error: ApiError
}

const ErrorDisplay = ({ error }: ErrorDisplayProps) => {
  return (
    <div className="h-full w-full flex justify-center items-center gap-3 text-center flex-col">
      <img
        className="w-1/2"
        src={`https://http.cat/${error.status}.jpg`}
        alt={`Code :${error.status}`}
      />
      <h2 className="text-2xl">{error.message}</h2>
    </div>
  )
}

export default ErrorDisplay
