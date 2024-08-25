const GameActive = ({ active }: { active: boolean }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className={`h-3 w-3 ${active ? "bg-lime-600" : "bg-red-600"} rounded-full`} />
    </div>
  )
}

export default GameActive
