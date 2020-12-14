import { getGames } from "../services/gameDBapi";
import { useState, useEffect } from "react";
import Game from "../components/Game/Game";

export default function HomePage(props) {
  const [gameData, setGameData] = useState({
    count: "",
    next: "",
    previous: "",
    results: [],
  });

  async function getGameData() {
    const data = await getGames();
    setGameData(data);
    console.log(data);
  }

  useEffect(() => {
    getGameData();
  }, []);

  return (
    <main className="Page">
      <h1>Main home</h1>
      <>
        {gameData.results.map((game, idx) => (
          <Game game={game} key={idx} />
        ))}
      </>
    </main>
  );
}
