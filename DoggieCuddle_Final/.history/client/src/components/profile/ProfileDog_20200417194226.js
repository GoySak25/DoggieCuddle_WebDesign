import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import './ProfileDog.styles.scss'
import { Row, Col } from 'react-bootstrap';

const ProfileDog = (
 props

 ) => {
   console.log(props)
return(
  

  <div >


<div className="card">


<img src= {props.dog}alt="profile two" width="440px" height="340px"></img>
<div className="card-body">
  <p className="card-text" ><b>{props.dog.dogName}</b>,   {props.dog.age} <br></br>{props.dog.sex}<br></br>
    {props.dog.location}<br></br>{props.dog.breed}</p>

</div>

</div>
<br></br><br></br>

</div>





    
  
)};

ProfileDog.propTypes = {
  dog: PropTypes.object.isRequired
};

export default ProfileDog;
