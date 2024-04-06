import { getFirstSlide, getNextSlide, getPrevSlide, getSlide } from "@/api/get";
import { Slide } from "./Slide";

interface Props {
  slideId?: string;
}

export async function SlideServerContainer(props: Props) {
  const current = props.slideId
    ? await getSlide(props.slideId)
    : await getFirstSlide();

  const prevSlides = await getPrevSlide(current.id, 10);
  const nextSlides = await getNextSlide(current.id, 10);

  const prev = prevSlides.length ? prevSlides[0].id : undefined;
  const next = nextSlides.length ? nextSlides[0].id : undefined;

  return (
    <>
      <Slide current={current.id} prev={prev} next={next} />
    </>
  );
}
