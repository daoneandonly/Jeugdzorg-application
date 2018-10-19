import React from 'react'
import Nav from './nav'
import {Link} from 'react-router-dom'

class Selection extends React.Component {
  outputOptions = () => {
    var list = this.props.handleQuestion()
    var options = []
    for (let i = 0; i < list.length; i++){
      options.push(
        <div className='option selection' key={Math.random()}>
          <Link to='/overzicht' onClick={() => this.props.addInfo([this.props.currentQuestion], list[i].Name)}>
            <img alt='' className='small' src='http://www.cape-town.photos/images/gallerySmallPlaceholder.png'/>
            <p>{list[i].Name}</p>
          </Link>
        </div>
      )
    }
    console.log(list[0].Name)
    return (
      options
    )
  }

  render(){
    return(
      <div className='main'>
        <Nav dossierNumber={this.props.dossierNumber} />
        <h1>{this.props.handleQuestion()[0].Categorie}</h1>
        <div className='optionwrap'>
          {this.outputOptions()}
          <div className='option selection' key={Math.random()}>
            <Link to='/overzicht' onClick={() => this.props.addInfo([this.props.currentQuestion], 'Anders')}>
              <img alt='' className='small' src='http://www.cape-town.photos/images/gallerySmallPlaceholder.png'/>
              <p>Anders</p>
            </Link>
          </div>
          <div className='buttonWrap'>
            <Link to='/overzicht' onClick={() => this.props.addInfo([this.props.currentQuestion], 'Geen informatie')}>
              <button>Verwijder Keuze</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
export default Selection
