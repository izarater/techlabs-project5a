import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/home';
import Discovery from './pages/discovery';
import RegisterPage from './pages/registerPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/discovery" component={Discovery} />
        <Route path="/signup" component={RegisterPage} />
      </Switch>
    </Router>
  );
}

export default App;

