import React from 'react';

class Leftbar extends React.Component {
  handleClick = () => {
  this.props.upIdNumber()
  }
  render(){
    return(
      <div className='leftbar'>
        <p>leftbar Component</p>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}
export default Leftbar
