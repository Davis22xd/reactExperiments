import React, { Component } from 'react';
import './table.css'
import DataRow from './../data-row/DataRow';


class TableComponent extends Component {

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
                    {this.props.data.map((row, index) =>
                        <DataRow 
                            key={index}
                            poolName={row.poolName}
                            oxygen={row.oxygen}
                            ph={row.ph}
                            temperature={row.temperature}
                            />)
                    }
                </tbody>
            </table>
            </div>
        );
    }
}

export default TableComponent;