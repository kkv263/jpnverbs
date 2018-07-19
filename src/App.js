import React, { Component } from 'react';
import Homepage from './js/Homepage';
import WordInstance from './js/WordInstance';
import Search from './js/Search';
import NotFound from './js/NotFound';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Switch>
         <Route exact path='/' component={Homepage}/>
         <Route exact path='/search/:name/:page' component={Search}/>
         <Route exact path='/entry/:name' component={WordInstance} />
         <Route component={NotFound} status={404}/>
        </Switch>
      </Provider>
    );
  }
}

export default App;
