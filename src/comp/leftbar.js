import React from 'react';
import Data from '../data/data.json'
import { Link } from 'react-router-dom'

class Leftbar extends React.Component {

allOtptions = () => {
  let options = []
  for (let i = 0; i < this.props.allDossiers.length; i++) {
      options.push(
        <option value={this.props.allDossiers[i].id} key={this.props.allDossiers[i].id}>
          {this.props.allDossiers[i].name}
        </option>
      )
  }
  return options
}

allCategories = () => {
  const unique = [...new Set(Data.map((x) => x.Categorie))]
  console.log(unique)
  const uniqueCat = unique.map((x) => {
    return (
      <div className='category' >
        <Link to={'/Categorie/' + x}>
          <p>{x}</p>
        </Link>
      </div>)
  })
  console.log(uniqueCat)
  return uniqueCat
}

  render(){
     return(
      <div className='leftbar'>
        <form>
          <div className='category overzicht'>
            <Link to='/Selection'>
              <h3>Overzicht</h3>
            </Link>
          </div>
          {this.allCategories()}
          {/* <select onChange={() => {this.props.changeId(document.querySelector('select').value - 1)}}>
            {this.allOtptions()}
          </select> */}
        </form>
      </div>
    )
  }
}
export default Leftbar
