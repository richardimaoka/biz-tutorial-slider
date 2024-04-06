import { Slide } from "./types";

export async function getSlide(slideId: string): Promise<Slide> {
  const res = await fetch(`http://localhost:3038/slides/${slideId}`);
  const json = (await res.json()) as Slide;

  if (res.status === 404) {
    throw new Error("not found");
  }

  return json;
}

export async function getFirstSlide(): Promise<Slide> {
  const res = await fetch(`http://localhost:3038/slides/`);
  const slides = (await res.json()) as Slide[];

  if (res.status === 404) {
    throw new Error("not found");
  } else if (slides.length === 0) {
    throw new Error("not found");
  }

  return slides[0];
}

export async function getNextSlide(
  slideId: string,
  size: number
): Promise<Slide[]> {
  const res = await fetch(
    `http://localhost:3038/slides/${slideId}/next?size=${size}`
  );
  const json = (await res.json()) as Slide[];

  if (res.status === 404) {
    throw new Error("not found");
  }

  return json;
}

export async function getPrevSlide(
  slideId: string,
  size: number
): Promise<Slide[]> {
  const res = await fetch(
    `http://localhost:3038/slides/${slideId}/prev?size=${size}`
  );
  const json = (await res.json()) as Slide[];

  if (res.status === 404) {
    throw new Error("not found");
  }

  return json;
}
