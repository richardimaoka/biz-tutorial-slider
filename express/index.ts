import express from "express";

const app = express();
const port = 3038;

type Slide = {
  id: string;
};

app.get("/slides/:slideId", async (req, res) => {
  const dbRes = await fetch(
    `http://localhost:3036/slides/${req.params.slideId}`
  );

  if (dbRes.status === 404) {
    res.status(404);
    res.send("Not Found");
    return;
  }

  const json = (await dbRes.json()) as Slide;

  res.json(json);
});

app.get("/slides/:slideId/next", async (req, res) => {
  const dbRes = await fetch(`http://localhost:3036/slides/`);
  if (dbRes.status === 404) {
    res.status(404);
    res.send("Not Found");
    return;
  }

  const slides = (await dbRes.json()) as Slide[];

  let found = false;
  let nextSlides: Slide[] = [];
  for (let index = 0; index < slides.length; index++) {
    const s = slides[index];
    if (s.id === req.params.slideId) {
      found = true;
      continue;
    }

    if (found) {
      nextSlides.push(s);
    }
  }

  if (!found) {
    res.status(404);
    res.send("Not Found");
    return;
  }

  res.json(nextSlides);
});

app.get("/slides/:slideId/prev", async (req, res) => {
  const dbRes = await fetch(`http://localhost:3036/slides/`);
  if (dbRes.status === 404) {
    res.status(404);
    res.send("Not Found");
    return;
  }

  const slides = (await dbRes.json()) as Slide[];

  let found = false;
  let nextSlides: Slide[] = [];
  for (let index = slides.length - 1; index >= 0; index--) {
    const s = slides[index];
    if (s.id === req.params.slideId) {
      found = true;
      continue;
    }

    if (found) {
      nextSlides.push(s);
    }
  }

  if (!found) {
    res.status(404);
    res.send("Not Found");
    return;
  }

  res.json(nextSlides);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
