import { useNavigate } from "react-router-dom"
import { Button } from "./ui/button"

const GoBack = () => {
  const navigate = useNavigate()

  return (
    <Button onClick={() => navigate(-1)} variant="link">
      &#x2190; Go back
    </Button>
  )
}

export default GoBack
