import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginContainer from './components/login-container/LoginContainer';
import DataForTable from './components/data-for-table/DataForTable';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={LoginContainer} />
        <Route path='/monitoring' component={DataForTable} />
      </Switch>
    );
  }
}

export default App;
