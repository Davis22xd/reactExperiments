import React, {Component} from 'react';
import './table.css'

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
            <tr>
                <td>Pool 1</td>
                <td>45</td>
                <td>7</td>
                <td>10</td>
            </tr>
            <tr>
                <td>Pool 2</td>
                <td>50</td>
                <td>8</td>
                <td>12</td>
            </tr>
            <tr>
                <td>Pool 3</td>
                <td>60</td>
                <td>9</td>
                <td>8</td>
            </tr>
            <tr>
                <td>Pool 4</td>
                <td>45</td>
                <td>10</td>
                <td>10</td>
            </tr>
            </tbody>
        </table>
      );
    }
  }
  
  export default TableComponent