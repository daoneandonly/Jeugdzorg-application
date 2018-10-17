import React from 'react';
import Mainitem from './mainitem'
import Data from '../data/data.json'


class Main extends React.Component {



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
