import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './styles/style.css'
import Leftbar from './comp/leftbar'
import Main from './comp/main'
import Selection from './comp/selection'
import Data from './data/data.json'
import SelectUser from './comp/selectuser'

class App extends Component {
  state = {
    dossierNumber: [
      {name: 'Steven', age: 10, id: 1,},
      {name: 'Dennis', age: 65, id: 2},
      {name: 'Tim', age: 12, id: 3},
      {name: 'Guus', age: 5, id: 4},
      {name: 'Titus', age: 21, id: 5}
    ],
    idNumber: 0,
    currentQuestion: 'Soort woning'
  }

// change id in State to change Person

  changeId = (newId) => {
      this.setState({idNumber: newId})
      console.log(this.state.idNumber)
  }

// change category to selected in leftbar
  setCurrentQuestion = (question) => {
    this.setState({currentQuestion: question})
    console.log('the current question is: ' + this.state.currentQuestion)
  }

  handleQuestion = () => {
    const set = Data.filter((x) => x.Categorie === this.state.currentQuestion)
    console.log(set)
    return set
  }


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Leftbar
            changeId={this.changeId}
            allDossiers={this.state.dossierNumber}
            upIdNumber={this.upIdNumber}
            currentQuestion={this.state.currentQuestion}
            setCurrentQuestion={this.setCurrentQuestion}
          />
          <Route
            exact path='/Selection'
            component={Selection}
          />
          <Route
            exact path='/'
            render={() =>
              <Main dossierNumber={this.state.dossierNumber[this.state.idNumber]}
            />
          }/>
          <Route
            path={'/categorie/'}
            render={() =>
              <Selection
                dossierNumber={this.state.dossierNumber[this.state.idNumber]}
                currentQuestion={this.state.currentQuestion}
                handleQuestion={this.handleQuestion}
              /> }
            />
            <Route
              path='/selectuser' render={() => 
                <SelectUser
                  dossierNumber={this.state.dossierNumber}
                />
              }
            />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
