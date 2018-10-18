import React from 'react'
import Data from '../data/data.json'
import Nav from './nav'


class Main extends React.Component {

  vragen = () => {
    return Data.Name
  }

  allValues = () => {
    const huidigDossier = this.props.dossierNumber
    const values = []
    // console.log(Object.keys(huidigDossier).length -1)
    for (let i = 0; i < Object.keys(huidigDossier).length; i++) {
    values.push(
      <p>{Object.keys(huidigDossier)[i]}: {Object.values(huidigDossier)[i]}</p>
    )}
    return (
      values
      )
  }

  render(){
    return(
      <div className='main'>
        <Nav dossierNumber={this.props.dossierNumber} />
        {console.log(this.props)}
        <h1> Overzicht </h1>
        <div className='main-item'>
          <div className='item-content'>
            {this.allValues()}
          </div>
        </div>
      </div>
    )
  }
}
export default Main
