import React, { Component } from 'react';

import './App.css';
import DataForTable from './components/data-for-table/DataForTable'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Skretting</h1>
        </header>
        <DataForTable />    
      </div>
    );
  }
}

export default App;
