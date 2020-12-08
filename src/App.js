import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Dashboard from './Pages/Dashboard';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={ props =>
          <HomePage />
        } />
        <Route exact path="/dashboard" render={ props =>
          <Dashboard />
        } />
        <Route exact path="/login" render={ props =>
          <LoginPage />
        } />
        <Route exact path="/signup" render={ props =>
          <SignupPage />
        } />
      </Switch>      
      <Footer />
    </div>
  );
}

export default App;
