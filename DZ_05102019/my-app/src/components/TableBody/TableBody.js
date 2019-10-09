import React, { Component } from 'react';
import TableBodyLine from './TableBodyLine';

export class TableBody extends Component{
    render(){
        const {body} = this.props;
        return(
            body.map((bodyLine, index) => (
                <TableBodyLine key={index} bodyLine={bodyLine}/>
            ))
        ) 
    }
}

export default TableBody;