import React, { Component } from 'react';
import TableHeaderCell from './TableHeaderCell';

export class TableHeader extends Component{
    render(){
        const { header } = this.props;
        return(
            <tr>
                {header.map((headItem, index) => (
                    <TableHeaderCell key={index} item={headItem}/>
                ))}
            </tr>
        )
    }
}

export default TableHeader;