import styles from "./Game.module.css";

export default function Game(props) {
  return (
    <div>
      <h2>{props.game.name}</h2>
      <p>{props.game.playtime}</p>
    </div>
  );
}
