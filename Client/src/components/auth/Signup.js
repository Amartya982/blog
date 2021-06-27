import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../Store/action/authAction'

class Signup extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  render() {
    
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            
          <div className="input-field">
            <label htmlFor="firstname">First Name</label>
            <input type="text" id='firstname' onChange={this.handleChange} />
          </div>
          <div className="input-field">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id='lastname' onChange={this.handleChange} />
        </div>
        <div className="input-field">
        <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
        <div className="input-field">
        <label htmlFor="password">Password</label>
        <input type="password" id='password' onChange={this.handleChange} />
      </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">SignUp</button>
            <div className="center red-text">
            </div>  
            </div>
          </div>
        </form>
      </div>
  
    )
  }
}



export default Signup