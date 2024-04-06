"use client";

import { useState } from "react";
import { Slide } from "@/api/types";

interface Props {
  currentSlide: Slide;
  prevSlides: Slide[];
  nextSlides: Slide[];
}

// accept props from the server side for the initial rendering
export function SlideClientContainer(props: Props) {
  // Set initial state from props (i.e.) fetched on server, upon initial rendering
  const [currentSlide, setCurrentSlide] = useState(props.currentSlide);
  const [nextSlides, setNextSlides] = useState(props.nextSlides);
  const [prevSlides, setPrevSlides] = useState(props.prevSlides);

  function onNext() {
    const nextSlide = nextSlides[0];
    setCurrentSlide(nextSlide);

    const newPrevSlides = [currentSlide].concat(prevSlides);
    setPrevSlides(newPrevSlides);

    const newNextSlides = nextSlides.concat(prevSlides);
    setNextSlides(newPrevSlides);
    // if no next slide in state
    //   fetch and wait
    //
    // if next slides < 2
    //   then server action to load more pages
    //   set nextSlides on server action finish (useTransition?)
    //   merge next slides logic
  }

  return <div></div>;
}
