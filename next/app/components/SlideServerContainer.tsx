import { getFirstSlide, getNextSlide, getPrevSlide, getSlide } from "@/api/get";
import { Slide } from "./Slide";

interface Props {
  slideId?: string;
}

export async function SlideServerContainer(props: Props) {
  const current = props.slideId
    ? await getSlide(props.slideId)
    : await getFirstSlide();

  const prev = await getPrevSlide(current.id, 10);
  const next = await getNextSlide(current.id, 10);

  return (
    <>
      <Slide current={current.id} />
    </>
  );
}
