import React, { Component } from 'react';
import './style.css';
import Nav from './comp/nav'
import Leftbar from './comp/leftbar'
import Main from './comp/main'

class App extends Component {
  state = {
    dossierNumber: [
      {name: 'kind1', age: 10, id: 1},
      {name: 'kind2', age: 65, id: 2},
      {name: 'kind3', age: 12, id: 3}
    ],
    idNumber: 0
  }

  upIdNumber = (e) => {
    var currentId = this.state.idNumber
    console.log(this.state.idNumber)
    this.setState( () => {
      if (currentId < this.state.dossierNumber.length - 1) {
        return {idNumber: currentId + 1}
      }
      else {
        currentId = 0
        return {idNumber: currentId}
        }
      }
    )
}

  render() {
    return (
      <div className="App">
        <Nav dossierNumber={this.state.dossierNumber[this.state.idNumber] } />
        <Leftbar upIdNumber={this.upIdNumber}/>
        <Main />
      </div>
    );
  }
}

export default App;
