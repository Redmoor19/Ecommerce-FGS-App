import AllGamesControlBar from "./components/AllGamesControlBar"
import AllGamesGrid from "./components/AllGamesGrid"
import Hero from "./components/Hero"
import PopularGames from "./components/PopularGames"

const ActiveGames = () => {
  return (
    <>
      <Hero />
      <PopularGames />
      <section className="container flex flex-col gap-3 py-3 justify-between">
        <AllGamesControlBar />
        <AllGamesGrid />
      </section>
    </>
  )
}

export default ActiveGames
