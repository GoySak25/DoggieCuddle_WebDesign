import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './profileItem.styles.css'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import axios from 'axios';
import { Button, Row, Col, Modal , ModalDialog, Alert} from 'react-bootstrap';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { url } from 'inspector';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: "#008080",
    color: theme.palette.text.secondary,
    backgroundSize: 'cover',
      backgroundPosition: 'center',
 backgroundImage:url('../../../../uploads/images/dog.png'),
      backgroundAttachment: 'fixed',
 
    
  },
}));

let emailFrom = '';
let emailTo = '';
let message = 'Hi there';




const ProfileItem = (props) => {
  const classes = useStyles();
  const onClick = async (e, breed, name) => {
    message = `<h4>Hi there!! Seems like your cutie is gonna get some bone!!</h4>
    <p>The interested dog is <b> `+ breed + ` </b> and the name is <b> ` + name + `</b>.</p>
    <p>If you are interested you can email to the above email address.`;
    if (props.cheLogin.user != null) {
      emailFrom = props.cheLogin.user.email;
      emailTo = props.profile.user.email;
      alert(emailFrom + " "+ emailTo);
      if ((emailFrom != null || emailFrom != '') && (emailTo != null || emailTo != '') && emailFrom.localeCompare(emailTo) == 0) {
      alert("The dog belongs to the loged-in user!!")
       
 
      
        
        //return(<div className="alert alert-danger">The dog belongs to the loged-in user!!</div>)
      }
      else if ((emailFrom != null || emailFrom != '') && (emailTo != null || emailTo != '')) {
        const emailFunc = await axios.post('/api/email', {
          emailFrom,
          emailTo,
          message
        });
      }
    }
    else {
      console.log("Please login first");
    }

  }
  console.log(props)
  return (

    
     

     
     <div className={classes.root}>
  <Grid container spacing={3}>


        {props.profile.dog.filter(d => (d.breed.indexOf(props.doggieBreed) == 0) && (d.sex.indexOf(props.dogSex) == 0) && (d.location.indexOf(props.dogLocation) == 0)).map(d => {
          return (<Grid item xs={6} style={{color:"white"}} >



          


              <div className="card">
              <Paper className={classes.paper}>

                <img src={d.image} alt="profile two" width="440px" height="340px"></img>
                <div className="card-body">
                  <p className="card-text" ><b>{d.dogName}</b>,   {d.age} <br></br>{d.sex}<br></br>
                    {d.location}<br></br>{d.breed}</p>
                  <Row>
                    <Col>
                    <Link
                      to={`/profile/${props.profile.user._id}`}
                      className="btn btn-primary"
                    >
                      View Profile
                    </Link><br></br><br></br>
                    </Col>
                    <Col>
                    <Button type='button'  variant="success" onClick={e => onClick(e, d.breed.toUpperCase(), d.dogName.toUpperCase())}>Interested</Button>
                    </Col>
                  </Row>
                </div>
                </Paper>

              </div>
              <br></br><br></br>
            
            </Grid>
            

           
          
          )
        }

        )}






      
      <br></br>
      </Grid>
    </div>


  );
};
ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
