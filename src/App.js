import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Dashboard from "./Pages/Dashboard";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import { Route, Switch, withRouter } from "react-router-dom";
import { getUser } from "./services/userService";

function App(props) {
  // component state
  const [userState, setUserState] = useState({
    user: getUser(),
  });

  // helper functions

  function handleSignUpOrLogin() {
    // place user into state using setter function
    setUserState({ user: getUser() });
    // programatically route user to dashboard
    props.history.push("/dashboard");
  }

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={(props) => <HomePage />} />
        <Route exact path="/dashboard" render={(props) => <Dashboard />} />
        <Route
          exact
          path="/login"
          render={(props) => (
            <LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />
          )}
        />
        <Route
          exact
          path="/signup"
          render={(props) => (
            <SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />
          )}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
