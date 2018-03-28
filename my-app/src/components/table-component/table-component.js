import React, { Component } from 'react';
import './table.css'
import DataRow from './../data-row/DataRow';
import data from './../../data/data';

class TableComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rows: data.map(poolInfo => {
                return (
                    <DataRow
                        key={poolInfo.id}
                        poolName={poolInfo.poolName}
                        oxygen={poolInfo.oxygen}
                        ph={poolInfo.ph}
                        temperature={poolInfo.temperature}
                    />
                )
            }),
        };
    }

    addRow(index) {
        this.state.rows.push(
            <DataRow
                        key={index}
                        poolName={'Pool ' + index}
                        oxygen='45'
                        ph='8.7'
                        temperature='10'
                    />
        )
    }
    render() {
        setInterval(this.addRow(10), 3000)

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
                    {this.state.rows}
                </tbody>
            </table>
        );
    }
}

export default TableComponent;