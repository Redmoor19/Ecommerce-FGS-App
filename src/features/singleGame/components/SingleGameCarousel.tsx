import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
type SingleGameCarouselProps = {
  images: string[]
}

const SingleGameCarousel = ({ images }: SingleGameCarouselProps) => {
  const autoplay = Autoplay({
    delay: 4000,
    playOnInit: true,
    stopOnInteraction: false,
    stopOnMouseEnter: true
  })

  return (
    <Carousel plugins={[autoplay]} className="w-full">
      <CarouselContent className="flex items-center">
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <img className="h-full w-full object-cover" src={image} alt={`${index + 1} image`} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default SingleGameCarousel
