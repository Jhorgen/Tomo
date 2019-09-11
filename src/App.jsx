import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Home, About } from './containers';
import IntroPage from './components/Intro';
import Game from './Game'

const App = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={IntroPage} />
    <Route path="/tomo" component={Game} />
  </Switch>
  </BrowserRouter>
);

export default App;
