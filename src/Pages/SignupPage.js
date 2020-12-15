import { signup } from "../services/userService";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./HomePage.css";

export default function SignupPage(props) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  function formValid() {
    return !!(formState.name && formState.email && formState.password);
  }

  function handleChange(event) {
    setFormState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!formValid()) return;
    try {
      await signup(formState);
      // calling a helper function defined in App.js to add the user to state
      props.handleSignupOrLogin();
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <main className="Page">
      <h1 className="PageName">
        <strong>
          <i>Sign Up</i>
        </strong>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="col-sm-12">
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Name"
              value={formState.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input
              disabled={!formValid()}
              value="Sign Up"
              className="form-control"
              type="submit"
            />
            <br />
            <br />
            <Link to="/" className="Links">
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </main>
  );
}
