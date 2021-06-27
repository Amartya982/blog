import React from 'react';
import { makeStyles,} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import akhil from "../akhil.png";
import {Link} from "react-router-dom";
import { connect }  from "react-redux"




const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    abRoot: {
      backgroundColor: "white"
    },
  }));
  
  
  const Navbar = (props) => {
    const {auth}= props;
    const classes = useStyles();


    return ( 
     
              <div className={classes.root}>
             
             <AppBar 
              position="static"
              style={{ borderRadius: "1x",backgroundColor: '#F08080' }}
              color="transparent"
              classes={{ 
                root: classes.abRoot, 
                positionStatic: classes.abStatic 
                
              }}
            >
                  <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                      <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title} color="textPrimary">
                       The Coding Sheep Blog
                    </Typography>
                    <Avatar alt="src" src={akhil} />
                    <Button style={{Bordercolor:'#FFFFFF'}}component={Link} to={'/Home'}>Home</Button>
                    <Button style={{Bordercolor: '#FFFFFF'}}component={Link} to={'/Dashboard'}>Dashboard</Button>
                    <Button style={{ Bordercolor: '#FFFFFF'}}component={Link} to={'/CreateBlog'}>Create Blog</Button>
                    <Button style={{Bordercolor: '#FFFFFF'}}component={Link} to={'/SignIn'}>SignIn</Button>
                     <Button style={{Bordercolor: '#FFFFFF'}}component={Link} to={'/Signup'}>Signup</Button>
                    
                    
                  </Toolbar>
                </AppBar>
                
               
         
            
              </div>
          
    );
}
  const mapStateToProps =(state) => {
    //console.log(state);
return{
  auth: state.firebase.auth

}

  }
 export default connect(mapStateToProps)(Navbar);
