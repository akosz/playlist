import { exampleGames } from "./game";

export const examplePublishers = [
  {
    id: 1,
    title: "Rockstar Games",
    tracks: exampleGames.slice(0, 4),
  },
  {
    id: 2,
    title: "Riot Games",
    tracks: exampleGames.slice(0, 3),
  },
  {
    id: 3,
    title: "Ubisoft",
    tracks: exampleGames.slice(2, 3),
  },
];
