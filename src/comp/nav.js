import React from 'react';

class Nav extends React.Component {
  render(){
    var huidigDossier = this.props.dossierNumber
    return(
      <div className='nav'>
        <p>Navbar Component dossier: {huidigDossier.name}, leeftijd: {huidigDossier.age}</p>
      </div>
    )
  }
}
export default Nav
