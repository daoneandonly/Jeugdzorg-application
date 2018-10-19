import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './styles/style.css'
import Leftbar from './comp/leftbar'
import Main from './comp/main'
import Selection from './comp/selection'
import Data from './data/data.json'
import SelectUser from './comp/selectuser'
import New from  './comp/new'

class App extends Component {
  state = {
    dossierNumber: [
      {name: 'Steven', age: 10, bdate: '06-07-1992', id: 1, risico: 0.5, info: {'Ouders gescheiden':  'Ja' , 'Type huishouden': 'Eenpersoonshuishouden'}},
      {name: 'Dennis', age: 16, bdate: '06-07-1992', id: 2, risico: 0.0, info : {}},
      {name: 'Tim', age: 12, bdate: '06-07-1992', id: 3, risico: 0.0, info : {}},
      {name: 'Guus', age: 5, bdate: '06-07-1992', id: 4, risico: 0.0, info : {}},
      {name: 'Titus', age: 8, bdate: '06-07-1992', id: 5, risico: 0.0, info : {}}
    ],
    idNumber: 0,
    currentQuestion: 'Intercept',
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

  newDossier = (newKind, newKindId) => {
    const newList = [...this.state.dossierNumber, newKind]
    this.setState({dossierNumber: newList})
  }

  addInfo = (a, b) => {
    const newInfo = this.state.dossierNumber[this.state.idNumber].info
    newInfo[a] = b
    this.setState({a: newInfo})

    // const newRisico = this.state.dossierNumber[this.state.idNumber].risico + 0.2
    // this.setState(dossierNumber: newRisico)
  }


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Leftbar
            changeId={this.changeId}
            allDossiers={this.state.dossierNumber}
            currentQuestion={this.state.currentQuestion}
            setCurrentQuestion={this.setCurrentQuestion}
          />
          <Route
            exact path='/Selection'
            component={Selection}
          />
          <Route
            path='/overzicht'
            render={() =>
              <Main
                dossierNumber={this.state.dossierNumber[this.state.idNumber]}
            />
          }/>
          <Route
            path={'/categorie/'}
            render={() =>
              <Selection
                dossierNumber={this.state.dossierNumber[this.state.idNumber]}
                currentQuestion={this.state.currentQuestion}
                handleQuestion={this.handleQuestion}
                addInfo={this.addInfo}
              /> }
            />
            <Route
              exact path='/' render={() =>
                <SelectUser
                  dossierNumber={this.state.dossierNumber}
                  changeId={this.changeId}
                />
              }
            />
            <Route
              path='/new'
              render={() =>
                <New
                  dossierNumber={this.state.dossierNumber}
                  newDossier={this.newDossier}
                  changeId={this.changeId}
                />
              }
            />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
