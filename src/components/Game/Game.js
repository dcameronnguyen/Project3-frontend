import "./Game.css";

export default function Game(props) {
  return (
    <div>
      <h2>
        <strong>{props.game.name}</strong>
      </h2>
      <img src={props.game.background_image} alt="poster" className="Picture" />
      <p>Released Date: {props.game.released}</p>
      <p>Rating: {props.game.rating}/5</p>
      <p>Rated by: {props.game.ratings_count} users</p>
      <p>Metacritic Score: {props.game.metacritic}</p>
      <p>Average Playtime: {props.game.playtime} hrs</p>
      <p>Last Updated: {props.game.updated}</p>
      <br />
      <br />
      <br />
    </div>
  );
}
