import React from 'react';

class Nav extends React.Component {
  render(){
    var huidigDossier = this.props.dossierNumber
    return(
      <div className='nav'>
        <p>Dossier: {huidigDossier.name}, {huidigDossier.age} jaar oud.</p>
      </div>
    )
  }
}
export default Nav
