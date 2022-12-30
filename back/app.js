import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.listen(3000, () => {
  console.log("listening on 3000");
});

const games = [
  {
    name: "MYSTERIUM",
    desc: "creatif et perception",
    video:"https://www.youtube.com/embed/wzSWNROFxxI",
    pic:"mysterium.jpg"
    

  },
  {
    name: "UNLOCK",
    desc: "escape sur appli",
    video:"https://www.youtube.com/embed/SAAEaselXBY",
    pic:"./unlock1.jpg"
  }
];


app.get("/games", (req, res) => {
  res.status(200).json(games);
});