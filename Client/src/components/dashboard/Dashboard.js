import React, { Component } from 'react'
import BlogList from '../projects/BlogList'
import {connect} from "react-redux"
import {firestoreConnect} from "react-redux-firebase"
import { compose } from "redux"
import Notifications from "./Notifications"
 class Dashboard extends Component {
  render() {
    //console.log(this.props);
const { projects } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
           <BlogList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state =>{
 //console.log(state);
return{
  projects: state.firestore.ordered.projects || state.project.projects
}


}

export default compose(
connect(mapStateToProps),
firestoreConnect([
{collection: "projects"}

])
)(Dashboard)
