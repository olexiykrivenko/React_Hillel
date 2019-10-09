import React, { Component } from 'react';

export class TableHeaderCell extends Component{
    render(){
        const { item } = this.props;
        return (
            <td>{item}</td>
        )
    }
}

export default TableHeaderCell;