import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      <img
        src="/main_bg-min.jpg"
        className="grayscale-[50%] absolute inset-0 object-cover h-full w-full z-10"
      />
      <div className="container h-screen flex items-center justify-center flex-col gap-5 z-20 relative text-white text-center">
        <h1 className="text-6xl">Fake game store</h1>
        <h2 className="text-4xl">Level Up Your Gaming Experience</h2>
        <p className="text-2xl">
          Unlock Instant Access to Your Favorite Games with Exclusive Deals and Lightning-Fast
          Delivery!
        </p>
        <p className="text-2xl">
          Get the best prices on game keys for PC, console, and more. Start playing in minutes with
          our seamless, secure checkout.
        </p>
        <div className="flex justify-center gap-5 mt-10">
          <a href="#gameSearch">
            <Button className=" text-xl p-6">Explore games</Button>
          </a>
          <Link to="/signup">
            <Button variant="secondary" className="text-xl p-6">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
