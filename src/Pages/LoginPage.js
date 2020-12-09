import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../services/userService";

export default function LoginPage(props) {
  // component state
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  //handler functions
  function handleChange(event) {
    // change formState using the same technique that we used for handleSignup
    setFormState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));

    // add a value prop to your two imputs, email & password

    // add aan onChange prop to your two inputs mail & pw
  }

  async function handleSubmit(event) {
    //disable the default behavior of a form submission
    event.preventDefault();
    if (!formValid()) return;
    // call the login function from userService
    try {
      await login(formState);
      // call handleSignUpOrLogin
      props.handleSignupOrLogin();
    } catch (error) {
      alert(error.message);
    }
  }

  // helper functions
  function formValid() {
    return !!(formState.email && formState.password);
  }

  return (
    <main className="Page">
      <h1>LoginPage</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="col-sm-12">
            <input
              name="email"
              placeholder="Email"
              className="form-control"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input
              name="password"
              placeholder="Password"
              className="form-control"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input
              disabled={!formValid()}
              value="Login"
              className="form-control"
              type="submit"
            />
            &nbsp;&nbsp;
            <Link to="/">Cancel</Link>
          </div>
        </div>
      </form>
    </main>
  );
}
