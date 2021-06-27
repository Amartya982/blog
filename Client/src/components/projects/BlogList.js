import React from 'react'
import BlogSummary from './BlogSummary'
import { Link } from "react-router-dom"

const   BlogList = ({projects}) => {
  return (
    <div className ="project-list section">  
{projects && projects.map(project =>
  { return(
    <Link to={"/project/"+ project.id} key={project.id}>
<BlogSummary project={project}  />
 </Link>


  )


       } )}
    </div>
  )
}

export default BlogList
