import React from 'react';
import Navbar from "./Component/Navbar";
import Home from "./Home"

import Header from "./Component/Header"
import Signup from "./components/auth/Signup"
import { BrowserRouter  as Router, Route, Switch} from "react-router-dom";
import SignIn from "./components/auth/SignIn"
import ErrorPage from "./ErrorPage"
import CreateBlog from "../src/components/projects/CreateBlog"
import Dashboard from "../src/components/dashboard/Dashboard"
import BlogDetails from './components/projects/BlogDetails';



const App = () => {
    return (
      
      <Router>
      <div className="App">
      <Navbar />
   
      
      </div>
      <Switch>
      <Route exact path="/">
      
      <Header/>
      </Route>
      
       
      <Route exact path="/home">
      
      <Header/>
      </Route>
      
      <Route exact path="/createblog">
      
      <CreateBlog />
      </Route>

      
      
      
      <Route exact  path="/dashboard" >
      <Dashboard />
      </Route>

      <Route exact path="/project/:id">
      <BlogDetails     />
      </Route> 
      <Route exact path="/c">
      
      <BlogDetails />
      </Route>

      
      <Route exact path="/signin">
      <SignIn />
      </Route>
     
      <Route exact  path="/signup" >
      <Signup/>
    
      </Route>
    
      <Route >
      <ErrorPage/>
      </Route>
      </Switch>

  
    
      </Router>
    
  
     );
  }
   
  export default App;









