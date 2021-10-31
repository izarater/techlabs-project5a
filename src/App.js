import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/home';
import Discovery from './pages/discovery';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/discovery" component={Discovery} />
      </Switch>
    </Router>
  );
}

export default App;

