type RoleBadgeProps = {
  title: string
}

const RoleBadge = ({ title }: RoleBadgeProps) => {
  let color

  switch (title) {
    case "USER":
      color = "bg-lime-600"
      break
    case "ADMIN":
      color = "bg-amber-500"
      break
    default:
      break
  }

  return <span className={`${color} text-white py-1 px-2 rounded-lg`}>{title}</span>
}

export default RoleBadge
