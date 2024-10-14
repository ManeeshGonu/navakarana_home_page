import React, { useCallback } from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react"; // Array of images or content for each slide

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="embla h-[220px] md:h-[350px] lg:h-[524px] relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <div className="embla__slide__number">
              <div className="h-full w-full bg-img1 flex justify-center items-end pb-12 md:pb-16  lg:pb-24">
                <h2 className="text-white opacity-85 text-3xl md:text-5xl lg:text-7xl text-center italic font-semibold w-[85%] md:w-3/4 tracking-wide leading-[1.1]">
                  Create a{" "}
                  <span className="text-orange-600 text-shadow-text-border">
                    Digital
                  </span>{" "}
                  platform to your{" "}
                  <span className="text-orange-600 text-shadow-text-border">
                    Amazing
                  </span>{" "}
                  and Visionary Ideas
                  <span>
                    <img
                      className="size-[2rem] md:size-[4.5rem] inline-block ml-2 md:ml-4"
                      src="https://navakaranatechdemo.netlify.app/assests/thought.png"
                      alt=""
                    />
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__number">
              <div className="h-full w-full bg-img2 flex justify-center items-end pb-12 md:pb-16  lg:pb-24">
                <h2 className="text-white opacity-85 text-3xl md:text-5xl lg:text-7xl text-center italic font-semibold w-[85%] md:w-3/4 tracking-wide leading-[1.1]">
                  We help{" "}
                  <span className="text-orange-600 text-shadow-text-border">
                    Startups & Enterprises
                  </span>{" "}
                  to build customized Software Solutions
                </h2>
              </div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__number">
              <div className="h-full w-full bg-img3 flex justify-center items-end pb-12 md:pb-16  lg:pb-24">
                <h2 className="text-white opacity-85 text-3xl md:text-5xl lg:text-7xl text-center italic font-semibold w-[85%] md:w-3/4 tracking-wide leading-[1.1]">
                  Build Your Digital Ideas With Our{" "}
                  <span className="text-orange-600 text-shadow-text-border">
                    Innovative
                  </span>{" "}
                  Technical Team
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="embla__controls bg-transparent flex justify-center absolute bottom-0 left-1/2 -translate-x-1/2">
        {/* <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div> */}

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
