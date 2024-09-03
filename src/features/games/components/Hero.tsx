import PopularGames from "./PopularGames"

const Hero = () => {
  return (
    <section className="container flex flex-col md:flex-row justify-between items-center my-16">
      <div className="aspect-square h-[500px] md:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px] rounded-full bg-gradient-to-br from-primary/80 to-primary/0 -translate-x-[20%] relative flex items-end justify-end">
        <div className="translate-x-[30%]">
          <h1 className="text-5xl sm:text-6xl text-primary mb-5 text-center">FAKE GAME APP</h1>
          <img src="/computer.png" alt="computer" className="w-4/5" />
        </div>
      </div>
      <PopularGames />
    </section>
  )
}

export default Hero
