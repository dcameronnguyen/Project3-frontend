import { useState } from "react";
import { Link } from "react-router-dom";
import Game from "../components/Game/Game";
import { getSearch } from "../services/gameDBapi";

export default function Dashboard() {
  const [searchState, setSearchState] = useState({
    count: "",
    next: "",
    previous: "",
    undefined: "",
  });

  function handleChange(event) {
    setSearchState((prevState) => ({
      ...prevState,
      [event.target.undefined]: event.target.value,
    }));
  }

  function formValid() {
    return !!searchState;
  }

  async function getSearchData() {
    const data = await getSearch(searchState.undefined);
    setSearchState(data);
  }

  async function handleSubmit(event) {
    //disable the default behavior of a form submission
    event.preventDefault();
    if (!formValid()) return;
    try {
      await getSearchData();
    } catch (error) {
      alert(error.message);
    }
    console.log(getSearchData);
  }

  function nextPage() {}

  return (
    <main className="Page">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="col-sm-12">
            <input
              name="search"
              type="text"
              className="form-control"
              placeholder="search game"
              value={searchState.search}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12 text-center">
            <input
              disabled={!formValid()}
              type="submit"
              className="btn btn-default"
              value="Search Game"
            />
            &nbsp;&nbsp;
            <Link to="/">Cancel</Link>
          </div>
        </div>
      </form>
      <div className="container">
        {searchState.results
          ? searchState.results.map((game, idx) => (
              <Game game={game} key={idx} />
            ))
          : ""}
      </div>
      <div>
        {searchState.results ? (
          <div>
            <button>Previous</button> <button onClick={nextPage}>Next</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </main>
  );
}
