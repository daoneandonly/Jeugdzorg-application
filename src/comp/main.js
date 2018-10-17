import React from 'react';
import Mainitem from './mainitem'

class Main extends React.Component {
  // state = {
  //   dossier: this.props.dossierNumber
  // }
  render(){
    return(
      <div className='main'>
        <Mainitem dossierNumber={this.props.dossierNumber}/>
        <Mainitem dossierNumber={this.props.dossierNumber}/>
        <Mainitem dossierNumber={this.props.dossierNumber}/>
      </div>
    )
  }
}
export default Main
