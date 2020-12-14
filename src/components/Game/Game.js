import styles from "./Game.module.css";

export default function Game(props) {
  return (
    <div styles={styles.Poster}>
      <h2>
        <strong>{props.game.name}</strong>
      </h2>
      <p>Released Date: {props.game.released}</p>
      <p>Rating: {props.game.rating}</p>
      <p>Rated by: {props.game.ratings_count} users</p>
      <p>Metacritic Score: {props.game.metacritic}</p>
      <a href={props.game.background_image} target="_blank">
        Click for Image
      </a>
    </div>
  );
}
