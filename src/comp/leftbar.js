import React from 'react';

class Leftbar extends React.Component {

loopedOptions = () => {
  let options = []
  for (let i = 0; i < this.props.allDossiers.length; i++) {
      options.push(
        <option value={this.props.allDossiers[i].id}>
          {this.props.allDossiers[i].name}
        </option>
      )
  }
  return options
}

  render(){
     return(
      <div className='leftbar'>
        <form>
          <select onChange={() => {this.props.changeId(document.querySelector('select').value - 1)}}>
            {this.loopedOptions()}
          </select>
          {/* <button>Verander</button> */}
        </form>
        {/* <button onClick={this.handleClick}>Click</button> */}
      </div>
    )
  }
}
export default Leftbar
