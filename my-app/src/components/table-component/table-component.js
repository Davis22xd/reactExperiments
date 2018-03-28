import React, {Component} from 'react';
import './table.css'
import DataRow from './../data-row/DataRow';
import data from './../../data/data';
  export default () => {
       const rows = data.map( poolInfo => {
           return (
           <DataRow
           poolName={poolInfo.poolName}
           oxygen={poolInfo.oxygen}
           ph={poolInfo.ph}
           temperature={poolInfo.temperature}
           />
           )
         })
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
            {rows}
            </tbody>
        </table>
      );
}