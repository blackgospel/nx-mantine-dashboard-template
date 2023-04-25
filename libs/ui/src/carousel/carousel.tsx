import Carousel from 'react-slick'
import { CarouselArrowIndex } from './carousel-arrow-index'
import { CarouselArrows } from './carousel-arrows'
import { CarouselDots } from './carousel-dots'

const CarouselNamespace = Object.assign(Carousel, {
  Dots: CarouselDots,
  Arrows: CarouselArrows,
  ArrowIndex: CarouselArrowIndex,
})

export { CarouselNamespace as Carousel }
