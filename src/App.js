import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './style.css';
import Nav from './comp/nav'
import Leftbar from './comp/leftbar'
import Main from './comp/main'

class App extends Component {
  state = {
    dossierNumber: [
      {name: 'Steven', age: 10, id: 1},
      {name: 'Dennis', age: 65, id: 2},
      {name: 'Tim', age: 12, id: 3},
      {name: 'Guus', age: 5, id: 4},
      {name: 'Titus', age: 21, id: 5}
    ],
    idNumber: 0
  }

  changeId = (newId) => {
      this.setState({idNumber: newId})
      console.log(this.state.idNumber)

  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav dossierNumber={this.state.dossierNumber[this.state.idNumber] } />
          <Leftbar changeId={this.changeId}  allDossiers={this.state.dossierNumber} upIdNumber={this.upIdNumber}/>
          <Route exact path='/' render={() => <Main dossierNumber={this.state.dossierNumber[this.state.idNumber]} /> } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
