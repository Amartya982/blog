import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import {connect } from "react-redux"
import {createProject} from "../../Store/action/ProjectAction"
class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
   // console.log(this.state);
   this.props.createProject(this.state);
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Project</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Project Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Project Content</label>
          </div>
          <div className="input-field">
          <Button type="submit" variant="contained" color="primary">
          create
        </Button>
           <Button variant="contained" onClick={this.handleSubmit}>
          Cancel
        </Button>
        <hr/>
       
      
          </div>
        </form>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) =>
{
  return{
createProject: (project) => dispatch(createProject(project))
  }

}

export default connect(null,mapDispatchToProps)(CreateProject)
