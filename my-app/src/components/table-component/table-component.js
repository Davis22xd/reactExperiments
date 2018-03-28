import React, {Component} from 'react';
import './table.css'
import DataRow from './../data-row/DataRow';

class TableComponent extends Component {

    render() {
      return (
        <table>
            <thead>
            <tr>
                <th>Pool</th>
                <th>Ox</th>
                <th>Ph</th>
                <th>Temp</th>
            </tr>
            </thead>
            <tbody>
            <DataRow
            poolName='Pool 1'
            oxygen='45'
            ph='7.8'
            temperature='12'
            />
            <DataRow
            poolName='Pool 2'
            oxygen='40'
            ph='8'
            temperature='12'
            />
            <DataRow
            poolName='Pool 3'
            oxygen='39'
            ph='10'
            temperature='12'
            />
            <DataRow
            poolName='Pool 4'
            oxygen='50'
            ph='7.8'
            temperature='9'
            />
            </tbody>
        </table>
      );
    }
  }
  
  export default TableComponent