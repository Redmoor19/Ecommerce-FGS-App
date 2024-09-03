import AllGamesControlBar from "./components/AllGamesControlBar"
import AllGamesGrid from "./components/AllGamesGrid"
import Hero from "./components/Hero"

const ActiveGames = () => {
  return (
    <>
      <Hero />
      <section className="container flex flex-col gap-3 py-3 justify-between">
        <AllGamesControlBar />
        <AllGamesGrid />
      </section>
    </>
  )
}

export default ActiveGames
