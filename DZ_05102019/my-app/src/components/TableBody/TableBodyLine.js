import React, { Component } from 'react';
import TableBodyLineCell from './TableBodyLineCell';

export class TableBodyLine extends Component{
    render(){
        const bodyLine = Object.values(this.props.bodyLine);
        return(
            <tr>
                {bodyLine.map((lineItem, index) => (
                    <TableBodyLineCell key={index} lineItem={lineItem}/>
                ))}
            </tr>
        )
    }
} 

export default TableBodyLine;