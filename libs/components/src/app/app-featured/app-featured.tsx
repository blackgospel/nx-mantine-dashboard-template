import { Card } from '@mantine/core'
import { SCROLL_SIZE_KEYS, useScrollSizeGetItem } from '@omnidash/theme'
import { Carousel } from '@omnidash/ui'
import { useRef, useState } from 'react'
import Slider, { Settings } from 'react-slick'
import { IAppFeaturedProps } from './app-featured.types'
import { CarouselItem } from './carousel-item'

export const AppFeatured: React.FC<IAppFeaturedProps> = ({
  list,
  ...props
}) => {
  const item = useScrollSizeGetItem(
    SCROLL_SIZE_KEYS.DASHBOARD.PAGES.APP.APP_FEATURED_GRID_ITEM
  )
  const width = item?.width ?? 'auto'

  const carouselRef = useRef<Slider | null>(null)

  const [currentIndex, setCurrentIndex] = useState(0)

  const carouselSettings: Settings = {
    speed: 800,
    dots: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentIndex(next),
    ...Carousel.Dots({
      sx: {
        top: '20px !important',
        left: '20px !important',
        bottom: 'unset !important',
        position: 'absolute',
      },
    }),
  }

  const handlePrevious = () => {
    carouselRef.current?.slickPrev()
  }

  const handleNext = () => {
    carouselRef.current?.slickNext()
  }

  return (
    <Card sx={{ maxWidth: width }} {...props}>
      <Card.Section>
        <Carousel ref={carouselRef} {...carouselSettings}>
          {list.map((app, index) => {
            return (
              <CarouselItem
                key={app.id}
                item={app}
                isActive={index === currentIndex}
              />
            )
          })}
        </Carousel>

        <Carousel.Arrows
          onNext={handleNext}
          onPrevious={handlePrevious}
          sx={theme => ({
            top: 8,
            right: 8,
            position: 'absolute',
            color: theme.white,
          })}
        />
      </Card.Section>
    </Card>
  )
}
