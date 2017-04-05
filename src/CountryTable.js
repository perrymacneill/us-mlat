import React from 'react';
import { Table } from 'react-bootstrap';
import { countryList } from './countryData'
import './App.css';

const CountryTable = (props) =>
  <Table striped bordered condensed hover id="country-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Country</th>
      </tr>
    </thead>
    <tbody>
      {countryList.map((country, index) =>
        <tr>
          <td>{index + 1}</td>
          <td key={country}>{country}</td>
        </tr>
      )}
    </tbody>
  </Table>

export default CountryTable;
