import AllGamesControlBar from "./components/AllGamesControlBar"
import AllGamesGrid from "./components/AllGamesGrid"

const ActiveGames = () => {
  return (
    <section className="container h-full flex flex-col gap-3 py-3 justify-between">
      <AllGamesControlBar />
      <AllGamesGrid />
    </section>
  )
}

export default ActiveGames
