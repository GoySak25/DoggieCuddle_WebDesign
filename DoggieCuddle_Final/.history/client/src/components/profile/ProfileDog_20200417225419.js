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
return(<Row md = {12}>
    <Col md = {4}>
 
  <div >
 
    {
      
    
    props.dog.dog.map(dog=>{
      
          
     return <div className="card">


<img src= {"/"+dog.image}alt="profile two" width="440px" height="340px"></img>
<div className="card-body">
  <p className="card-text" ><b>{dog.dogName}</b>,   {dog.age} <br></br>{dog.sex}<br></br>
    {dog.location}<br></br>{dog.breed}</p>

</div>


</div>



})

}


</div>
</Col>
</Row>




    
  
)};

ProfileDog.propTypes = {
  dog: PropTypes.object.isRequired
};

export default ProfileDog;
