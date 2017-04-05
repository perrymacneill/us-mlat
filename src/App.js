import React, { Component } from 'react';
import WorldMap from './WorldMap'
import CountryTable from './CountryTable'
import Citation from './Citation'
import Header from './Header'
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <WorldMap />
        <CountryTable />
        <Citation />
      </div>
    );
  }
}

export default App;
