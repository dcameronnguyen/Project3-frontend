import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [searchState, setSearchState] = useState({});

  function handleChange(event) {
    setSearchState((prevState) => ({
      ...prevState,
      [event.target.term]: event.target.value,
    }));
    console.log(searchState);
  }

  function formValid() {
    return !!searchState;
  }

  return (
    <main className="Page">
      <form>
        <div className="form-group">
          <div className="col-sm-12">
            <input
              name="search"
              type="text"
              className="form-control"
              placeholder="search game"
              value={searchState.term}
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
    </main>
  );
}
