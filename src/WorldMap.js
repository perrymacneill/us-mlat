import React, { Component } from 'react';
import Datamap from 'datamaps/dist/datamaps.all.min'
import './App.css';
import { countryCodes } from './countryData'

class WorldMap extends Component {
  componentDidMount() {
    new Datamap({
      element: document.getElementById('map-container'),
      projection: 'mercator',
      geographyConfig: { highlightFillColor: '#CC4731' },
      fills: {
        MLAT: "#CA5E5B",
        USA: "#EAA9A8",
        defaultFill: 'lightgrey'
      },
      data: countryCodes
    });
  }

  render() {
    return (
      <div id="map-container"></div>
    );
  }
}

export default WorldMap;
