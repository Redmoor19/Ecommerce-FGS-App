type StatusBadgeProps = {
  title: string
}

const StatusBadge = ({ title }: StatusBadgeProps) => {
  let color
  let text = title

  switch (title) {
    case "ACTIVE":
      color = "bg-lime-600"
      break
    case "UNVERIFIED":
      color = "bg-amber-500"
      break
    case "NOT_ACTIVE":
      color = "bg-red-500"
      text = title.split("_").join(" ")
      break
    default:
      break
  }

  return <span className={`${color} text-white py-1 px-2 rounded-lg`}>{text}</span>
}

export default StatusBadge
