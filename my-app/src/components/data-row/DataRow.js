import React, {Component} from 'react';
  export default ({poolName, oxygen, ph, temperature}) => {
    return (
        <tr>
                <td>{poolName}</td>
                <td>{oxygen}</td>
                <td>{ph}</td>
                <td>{temperature} degrees</td>
        </tr> 
    )
}