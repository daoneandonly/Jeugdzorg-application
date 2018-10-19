import React from 'react'
import Data from '../data/data.json'
import Nav from './nav'


class Main extends React.Component {

  vragen = () => {
    return Data.Name
  }

  allValues = () => {
    const huidigDossier = this.props.dossierNumber
    const values = [
      <div key={Math.random()}>
        <p key={Math.random()}>Naam: {Object.values(huidigDossier)[0]}</p>
        <p key={Math.random()}>Leeftijd: {Object.values(huidigDossier)[1]}</p>
        <p key={Math.random()}>Geboortedatum: {Object.values(huidigDossier)[2]}</p>
      </div>]
    return (
      values
      )
  }

  printInfo = () => {
    const keyList = Object.keys(this.props.dossierNumber.info)
    const print = keyList.map(x => {
      return(
        <p>
          {console.log(this.props.dossierNumber.info.x)}
          {x}: {this.props.dossierNumber.info[x]}
        </p>
      )

    })
    return print
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
            <div>
              <img alt='plaatje' src='https://davismarketingcompany.com/wp-content/uploads/2016/01/avatar_placeholder_small.png' />
            </div>
          </div>
        </div>
        <div className='main-item'>
          <div className='item-content'>
            <h2>Bekende gegevens</h2>
            <div>
              {this.printInfo()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Main
