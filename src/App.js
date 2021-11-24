import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/home';
import Discovery from './pages/discovery';
import RegisterPage from './pages/registerPage';
import LoginPage from './pages/loginPage';
import AboutUsPage from './pages/aboutUsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/discovery" component={Discovery} />
        <Route path="/signup" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/about" component={AboutUsPage} />
      </Switch>
    </Router>
  );
}

export default App;
