import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TableComponent from './components/table-component/TableComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Skretting</h1>
        </header>
        <TableComponent/>    
      </div>
    );
  }
}

export default App;
