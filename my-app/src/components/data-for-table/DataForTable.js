import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TableComponent from './../table-component/TableComponent';
import data from './../../data/data';

class DataForTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rows: data,
            timerId: null
        };    
    }

    componentWillMount () {
        const timerId = setInterval(() => {
            this.addRow();
          }, 1000);
        this.setState({timerId})
    }

    componentWillUnmount () {
        clearInterval(this.state.timerId);
    }

    addRow(index) {
        const newRow = {
            poolName: "pool 3",
            oxygen: Math.random(),
            ph: Math.random(),
            temperature: Math.random()
        };
        const updatedRows = this.state.rows.concat([newRow]);
        this.setState({rows: updatedRows});    
    }

    render() {
        return (
            <this.props.rendererComponent
                data={this.state.rows}
                />
        )
    }
}
DataForTable.propTypes = {
    rendererComponent: PropTypes.element
}
DataForTable.defaultProps = {
    rendererComponent: TableComponent
}

export default DataForTable;