import React from 'react'
import Data from '../data/data.json'
import Nav from './nav'


class Main extends React.Component {

  render(){
    return(
      <div className='main'>
        <Nav dossierNumber={this.props.dossierNumber} />
        <h1> Selecteer een kind </h1>
        <div>

        </div>
      </div>
    )
  }
}
export default Main
