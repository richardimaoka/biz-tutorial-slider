import express from "express";

const app = express();
const port = 3038;

type Slide = {
  id: string
}

app.get("/slides/:slideId", async (req, res) => {
  const dbRes = await fetch(
    `http://localhost:3036/slides/${req.params.slideId}`
  );

  if (dbRes.status === 404) {
    res.status(404);
    res.send("Not Found");
    return;
  }

  const json = await dbRes.json() as Slide;

  res.json(json);
});

app.get("/slides", (req, res) => {
  console.log(req.query);
  const page = req.query["page"] as string;
  res.send("slides " + page);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
