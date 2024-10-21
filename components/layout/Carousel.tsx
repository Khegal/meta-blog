"use client";

import React, { useCallback } from "react";
import { EmblaCarouselType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import "./embla.css";

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { dragFree: true, loop: true },
    [Autoplay()]
  );

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <div className="w-full">
      <section className="embla flex gap-[11px] flex-col">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <div className="relative">
                <Image
                  alt="gg"
                  src="/gg.jpeg"
                  width={1216}
                  height={600}
                  className="object-cover h-[600px] rounded-xl shadow-custom"
                />
                <div className="bg-white p-10 w-[598px] gap-6 flex flex-col absolute bottom-[13px] left-[11px] border-[1px] border-borderColor2 rounded-xl">
                  <div className="flex flex-col gap-4">
                    <p className="bg-voiletishBlue w-[97px] text-center text-white py-1 px-[10px] rounded-md font-medium text-sm">
                      Technology
                    </p>
                    <h1 className="font-semibold text-4xl text-textColor2">
                      Grid system for better Design User Interface
                    </h1>
                  </div>
                  <p className="text-textGrayColor">August 20, 2022</p>
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className="relative">
                <Image
                  alt="gg"
                  src="/gg.jpeg"
                  width={1216}
                  height={600}
                  className="object-cover h-[600px] rounded-xl shadow-custom"
                />
                <div className="bg-white p-10 w-[598px] gap-6 flex flex-col absolute bottom-[13px] left-[11px] border-[1px] border-borderColor2 rounded-xl">
                  <div className="flex flex-col gap-4">
                    <p className="bg-voiletishBlue w-[97px] text-center text-white py-1 px-[10px] rounded-md font-medium text-sm">
                      Technology
                    </p>
                    <h1 className="font-semibold text-4xl text-textColor2">
                      Grid system for better Design User Interface
                    </h1>
                  </div>
                  <p className="text-textGrayColor">August 20, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end w-full gap-[25px]">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </section>
    </div>
  );
};

export default Carousel;
