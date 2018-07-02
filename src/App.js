import React, { Component } from 'react';
import Homepage from './js/Homepage';
import WordInstance from './js/WordInstance';
import Search from './js/Search';
import NotFound from './js/NotFound';
import { Switch, Route, Router } from 'react-router-dom';

var prod = process.env.PUBLIC_URL

class App extends Component {
  render() {
    return (
      // delete base name for dev
      <Router basename = {process.env.PUBLIC_URL}>
        <Switch>
         <Route exact path='/' component={Homepage}/>
         <Route exact path='/search/:name/:page' component={Search}/>
         <Route exact path='/entry/:name' component={WordInstance} />
         <Route component={NotFound} status={404}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
