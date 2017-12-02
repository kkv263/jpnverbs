import React, { Component } from 'react';
import Homepage from './js/Homepage';
import NotFound from './js/NotFound';
import WordInstance from './js/WordInstance';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
         {/* Uncomment later when finish WordInstance */}
         {/* <Route exact path='/' component={Homepage}/> */}
         <Route exact path='/' component={WordInstance}/>
         <Route component={NotFound} status={404}/>
        </Switch>
      </div>
    );
  }
}

export default App;
