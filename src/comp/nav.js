import React from 'react';
import { Link } from 'react-router-dom'

const Nav = ({dossierNumber}) => {

  const huidigDossier = dossierNumber
  // console.log(huidigDossier.name)
  var koptekst = []
  if (huidigDossier.name === undefined) {
    koptekst = [<h3> </h3>]
  } else {
    koptekst = [<h3 key={Math.random()}>Dossier: {huidigDossier.name}, {huidigDossier.age} jaar oud.</h3>]
  }

  var risicoIndicatie = []
  if (huidigDossier.name === undefined) {
    risicoIndicatie = [<h3> </h3>]
  } else {
    risicoIndicatie = [
      <div className='navRisico'>
        <h3>Risico</h3>
        <h3>{dossierNumber.risico}%</h3>
      </div>]
  }


    return(
      <div className='nav'>
        {koptekst}
        {risicoIndicatie}
        <Link to='/'>
          <img alt='knopje' src='https://image.freepik.com/free-icon/change-user_318-1783.jpg'/>
        </Link>
      </div>
    )
}
export default Nav
