import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import './ProfileDog.styles.scss'
import { Row, Col } from 'react-bootstrap';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: "#ffe6e6",
    color: theme.palette.text.secondary,
  },
  
}));


const ProfileDog = (
 props

 ) => {
  const classes = useStyles();
return(
 
  <div className={classes.root}>
  <Grid container spacing={3}>
   
 
    {
      
     
    props.dog.dog.map(dog=>{
      
      return   <Grid item xs={6} style={{color:"white"}} >
       {/* <Paper className={classes.paper}> */}
        
 <Paper className={classes.paper} style={{color:"white"}} id = "card">


<img src= {"/"+dog.image}alt="profile two" width="440px" height="340px"></img>
<div className="card-body">
  <p className="card-text" style={{color:"#008080"}} ><b>{dog.dogName}</b>,   {dog.age} <br></br>{dog.sex}<br></br>
    {dog.location}<br></br>{dog.breed}</p>

</div>



</Paper>

</Grid>



})


}
</Grid>


</div>





    
  
)};

ProfileDog.propTypes = {
  dog: PropTypes.object.isRequired
};

export default ProfileDog;