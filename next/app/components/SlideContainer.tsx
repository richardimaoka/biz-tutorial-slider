"use client";

import { useState } from "react";
import styles from "./SlideContainer.module.css";
import { Slide } from "@/api/types";

interface Props {
  currentSlide: Slide;
  prevSlides: Slide[];
  nextSlides: Slide[];
}

// accept props from the server side for the initial rendering
export function SlideContainer(props: Props) {
  // Set initial state from props (i.e.) fetched on server, upon initial rendering
  const [currentSlide, setCurrentSlide] = useState(props.currentSlide);
  const [prevSlides, setPrevSlides] = useState(0);
  const [nextSlides, setNextSlides] = useState(0);

  function onNext() {
    // if no next slide in state
    //   fetch and wait
    //
    // if next slides < 2
    //   then server action to load more pages
    //   set nextSlides on server action finish (useTransition?)
    //   merge next slides logic
  }

  return <div className={styles.component}></div>;
}
