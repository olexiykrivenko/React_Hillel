import React, { Component } from 'react';
import TableHeader from './components/TableHeader/TableHeader';
import TableBody from './components/TableBody/TableBody';
import './App.css';

class App extends Component{
    state = {
      header: ['First Name','Last Name','Age','Phone Number'],
      contacts: [
        {
          name: "Leanne",
          surname: "Graham",
          age: 25,
          phone: "1-770-736-8031 x56442",
        },
        {
          name: "Ervin",
          surname: "Howell",
          age: 30,
          phone: "010-692-6593 x09125",
        },
        {
          name: "Clementine",
          surname: "Bauch",
          age: 35,
          phone: "1-463-123-4447",
        },
        {
          name: "Patricia",
          surname: "Lebsack",
          age: 40,
          phone: "493-170-9623 x156",
        },
        {
          name: "Chelsey",
          surname: "Dietrich",
          age: 45,
          phone: "(254)954-1289",
        }
      ]
    }

    renderHeader(){
      return (
        <thead className="tableHeader">
            <TableHeader header={this.state.header}/>
        </thead>
      )
    }

    renderBody(){
      return (
        <tbody>
          <TableBody body={this.state.contacts}/>
        </tbody>
      )
    }

    render(){
      return (
        <table border="1" cellPadding="5" cellSpacing="0" >
          {this.renderHeader()}
          {this.renderBody()}
        </table>
      )
    }
}

export default App;