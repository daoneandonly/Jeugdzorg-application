import React from 'react'
import Nav from './nav'

class Main extends React.Component {
  outputOptions = () => {
    var list = this.props.handleQuestion()
    var options = []
    for (let i = 0; i < list.length; i++){
      options.push(
        <div className='option' key={Math.random()}>
          <img className='small' src='http://www.cape-town.photos/images/gallerySmallPlaceholder.png'/>
          <p >{list[i].Name}</p>
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
        </div>

          <div>
            <button>Verwijder Keuze</button>
          </div>
      </div>
    )
  }
}
export default Main
