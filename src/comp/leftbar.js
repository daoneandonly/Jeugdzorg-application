import React from 'react';
import Data from '../data/data.json'
import { Link } from 'react-router-dom'
import slugify from 'slugify'

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
  const uniqueCat = unique.map((x) => {
    var key = 0
    return (
      <Link className='category' key={x + key + 1} to={'/categorie/' + slugify(x, {lower: true})} onClick={() => { this.props.setCurrentQuestion(x)}} >
        <p>{x}</p>
      </Link>
    )
  })
  return uniqueCat
}

  render(){
     return(
      <div className='leftbar'>
          <Link className='category overzicht' to='/overzicht'>
              <h3>Overzicht</h3>
          </Link>
          {this.allCategories()}
          {/* {<select onChange={() => {this.props.changeId(document.querySelector('select').value - 1)}}>
            {this.allOtptions()}
          </select>} */}
      </div>
    )
  }
}
export default Leftbar
