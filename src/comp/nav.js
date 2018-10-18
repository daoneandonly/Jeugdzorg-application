import React from 'react';
import { Link } from 'react-router-dom'

const Nav = ({dossierNumber}) => {

  const huidigDossier = dossierNumber
  // console.log(huidigDossier.name)
  var koptekst = []
  if (huidigDossier.name == undefined) {
    koptekst = []
  } else {
    koptekst = [<h3>Dossier: {huidigDossier.name}, {huidigDossier.age} jaar oud.</h3>]
  }

    return(
      <div className='nav'>
        <h3>{koptekst}</h3>
        <Link to='/selectuser'>
          <p> Knopje </p>
        </Link>
      </div>
    )
}
export default Nav
