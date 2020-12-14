require("dotenv").config();

const key = process.env.API_KEY;

const BASE_URL = `https://api.rawg.io/api/games?key=c12efb01df64453e9e6ee4e03d41f54d
`;

const SEARCH_URL = `https://api.rawg.io/api/games?key=c12efb01df64453e9e6ee4e03d41f54d
&search=`;

export function getGames() {
  return fetch(BASE_URL).then((res) => res.json());
}

export function getSearch(searchTerm) {
  return fetch(SEARCH_URL + searchTerm, {
    method: "GET",
    headers: {
      "Content-Type": "Application/Json",
    },
  }).then((res) => res.json());
}
