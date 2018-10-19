import React from 'react'
import Nav from './nav'
import { Link } from 'react-router-dom'


class Main extends React.Component {

  allClients = () => {
    const dossierNumber = this.props.dossierNumber
    var list = []
    for (let i = 0; i < dossierNumber.length ; i++){
      list.push(
        <Link to='/overzicht' onClick={() => {this.props.changeId(i)}}>
          <div className='option' key={Math.random()}>
            <img alt='plaatje' src='https://davismarketingcompany.com/wp-content/uploads/2016/01/avatar_placeholder_small.png' />
            <p>{dossierNumber[i].name}</p>
          </div>
        </Link>)
    }
    return list
  }

  render(){
    return(
      <div className='main'>
        <Nav dossierNumber={this.props.dossierNumber} />
        <h1> Selecteer een kind </h1>
        <div className='optionwrap selectuser'>
          {this.allClients()}
        </div>
        <div className='optionwrap selectuser'>
          <Link to='/new'>
            <div className='option' key={Math.random()}>
              <img className='activeimg' alt='plaatje' src='https://davismarketingcompany.com/wp-content/uploads/2016/01/avatar_placeholder_small.png' />
              <p>Nieuw kind</p>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}
export default Main
