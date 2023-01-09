import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.listen(3000, () => {
  console.log("listening on 3000");
});

const games = [
  {
    id: 1,
    name: "MYSTERIUM",
    sub: "Réflexion et Perception",
    players: "2-7",
    time: "42",
    age: "10+",
    desc: "Incapable de parler, le fantôme amnésique communiquera avec les médiums au travers de visions (cartes illustrées). Ils devront interpréter les images pour aider le fantôme à se remémorer les circonstances de sa mort (qui ? où ? quelle arme ?). Plus ils coopéreront et devineront juste, plus il sera facile de trouver le bon coupable. Dans le jeu Mysterium, tout le monde perd ou tout le monde gagne car tous les joueurs sont unis pour découvrir la vérité sur la mort du fantôme qui hante la manoir et lui apporter la paix.",
    video: "https://www.youtube.com/embed/Or13pbEfy6I",
    pic: "/img/mysterium.jpg",
  },
  {
    id: 2,
    name: "UNLOCK",
    sub: "Escape game",
    players: "2-6",
    time: "60",
    age: "10+",
    desc: "Unlock ! est un jeu de cartes coopératif inspiré des Escape room. Ce jeu de déduction et d'aventure vous fait vivre ces expériences chez vous, autour d'une table. Prenez connaissance du contexte du scénario et commencez votre aventure dans une pièce (une carte de lieu qui indique divers numéros). Fouillez-la pour trouver des indices ! Des énigmes visuelles ou audio ralentissent votre progression... Coopérez pour avancer et terminez dans les temps !",
    video: "https://www.youtube.com/embed/HArRsBSnfCI",
    pic: "/img/unlock1.jpg",
  },
  {
    id: 3,
    name: "COLT EXPRESS",
    sub: "Planification et anticipation",
    players: "2-6",
    time: "30 à 60",
    age: "10+",
    desc: "Dans Colt Express, les joueurs incarnent des bandits “desperados” qui se lancent à l'attaque d'un train de voyageurs. Vous êtes un hors-la-loi au beau milieu du Far West et vous partez à l'assaut d'une locomotive. L'entreprise est périlleuse et l'issue peut vous être fatale. Votre but est de descendre du tain vivant et avec le plus gros butin. L'ennui est que vous êtes pas le seul malfrat à lorgner sur toutes ses richesses à portée de main. Pas de pitié et aucune alliance possible. C'est chacun pour soi !",
    video: "https://www.youtube.com/embed/HvlT8JU5Y_o",
    pic: "/img/colt-express.jpg",
  },

];


app.get("/games", (req, res) => {
  res.status(200).json(games);
});

app.get("/games/:id", (req, res) => {
  const idFromParams = Number(req.params.id);
  const foundGame = games.find((game) => {
    return game.id === idFromParams;
  });

  const dataToSend = foundGame !== -1
    ? foundGame
    : null;

  res.status(200).json(dataToSend);
});