import "./HomePage.css";
import { Link } from "react-router-dom";

export default function HomePage(props) {
  return (
    <main className="Page">
      <h1 className="HomeMain">
        Search the database and find information on over 350,000+ games{" "}
      </h1>
      <div>
        <Link to="/signup" className="Links">
          Don't have an account? Sign up!
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/login" className="Links">
          Already have an account? Login!
        </Link>
      </div>
    </main>
  );
}
