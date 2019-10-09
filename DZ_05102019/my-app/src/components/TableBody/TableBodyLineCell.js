import React, { Component } from 'react';

export class TableBodyLineCell extends Component{
    render(){
        const {lineItem} = this.props;
        return(
            <td>{lineItem}</td>
        )
    }
}

export default TableBodyLineCell;