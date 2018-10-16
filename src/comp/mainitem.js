import React from 'react';

class Mainitem extends React.Component {
  render(){
    return(
      <div className='main-item'>
        <div className='item-content'>
          <p>Naam: {this.props.dossierNumber.name}</p>
          <p>Leeftijd: {this.props.dossierNumber.age}</p>
          <p>id: {this.props.dossierNumber.id}</p>
        </div>
      </div>
    )
  }
}
export default Mainitem
