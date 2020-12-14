const BASE_URL = "https://api.rawg.io/api/games";

export function getGames() {
  return fetch(BASE_URL).then((res) => res.json());
}
