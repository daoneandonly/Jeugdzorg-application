import React from 'react'
import Nav from './nav'
import { Redirect } from 'react-router-dom'




class New extends React.Component {

  state = {
    name: '',
    bdate: '',
    redirect: false,
    id: ''
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleBdateChange = (e) => {
    this.setState({
      bdate: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    var uniqueNewId = Math.round(Math.random() * 1000)
    var newKind = {
      name: this.state.name,
      age: 12,
      bdate: '20-02-2000',
      id: uniqueNewId,
      risico: 0,
      info: {}
    }

    this.setState({
      id: uniqueNewId
    })
    console.log(newKind)
    this.props.newDossier(newKind)
    this.setState({
      name: '',
      bdate: '',
      redirect: true,
      id: '',
      risico: 0,
      info: {}
    })
    console.log(newKind.id)

  }

  tryToRedirect = () => {
    console.log(this.state.redirect)
    if (this.state.redirect === true) {
      this.setState({
        redirect: false
      })
      return (
        <Redirect to='/' />
      )
    }
    else {
      return (null)
    }
  }

  render(){
    return(
      <div className='main'>
        <Nav dossierNumber={this.props.dossierNumber} />
        <h1>Toevoegen</h1>
        <div className='main-item'>
          <div className='item-content'>
            <form onSubmit={this.handleSubmit}>
              <div className='labelinput'>
                <label>Naam</label>
                <input onChange={this.handleNameChange} value={this.state.name}></input>
              </div>
              <div className='labelinput'>
                <label>Leeftijd</label>
                <input onChange={this.handleBdateChange} value={this.state.bdate}></input>
              </div>
              <button>Toevoegen</button>
              {this.tryToRedirect()}
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default New
