import React, { Component } from 'react';
import Homepage from './js/Homepage';
import WordInstance from './js/WordInstance';
import Search from './js/Search';
import NotFound from './js/NotFound';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
         <Route exact path='/' component={Homepage}/>
         <Route exact path='/search/:name/:page' component={Search}/>
         <Route exact path='/entry/:name' component={WordInstance} />
         <Route component={NotFound} status={404}/>
        </Switch>
      </div>
    );
  }
}

export default App;
