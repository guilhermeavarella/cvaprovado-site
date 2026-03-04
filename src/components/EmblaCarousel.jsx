import React, { useCallback } from 'react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import '../assets/styles/embla.css'
import { motion } from 'motion/react'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ delay: 3000 })])
  const isLargeScreen = window.innerWidth >= 928

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const onHover = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    autoplay.stop()
  }, [])

  const onLeave = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    autoplay.play()
  }, [])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  return (
    <section className="embla w-full">
      <div 
      className="embla__viewport py-4" 
      ref={emblaRef}  
      onMouseEnter={() => onHover(emblaApi)} 
      onMouseLeave={() => onLeave(emblaApi)}
      >
        <div className="embla__container">
          {slides.map((content, index) => (
            <motion.div 
            className="embla__slide" 
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            >
              <div className="embla__slide__number bg-[var(--background-accent)] shadow-sm">{content}</div>
            </motion.div>
          ))}
        </div>
      </div>
      {isLargeScreen ?  
        <div className="embla__controls w-full">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div>
      : null}
    </section>
  )
}

export default EmblaCarousel
