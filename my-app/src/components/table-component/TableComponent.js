import React, { Component } from 'react';
import './table.css'
import DataRow from './../data-row/DataRow';
import data from './../../data/data';

class TableComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {rows:  data.map(poolInfo => {
            return (
                <DataRow
                    key={poolInfo.id}
                    poolName={poolInfo.poolName}
                    oxygen={poolInfo.oxygen}
                    ph={poolInfo.ph}
                    temperature={poolInfo.temperature}
                />
            )
        })};

        setInterval(() => {
            this.addRow(Math.random());
          }, 1000);
    }

    addRow(index) {

        this.setState((state) => {
            return (state.rows.push(
                <DataRow
                            key={index}
                            poolName={'Pool X'}
                            oxygen='45'
                            ph='8.7'
                            temperature='10'
                        />
            ))
          });
    
    }
    render() {
        return (
            <div className="main">
                <h3>Panel de Control</h3>
            <table>
                <thead>
                    <tr>
                        <th className="cell">Pool</th>
                        <th className="cell">Ox</th>
                        <th className="cell">Ph</th>
                        <th className="cell">Temp</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.rows}
                </tbody>
            </table>
            </div>
        );
    }
}

export default TableComponent;