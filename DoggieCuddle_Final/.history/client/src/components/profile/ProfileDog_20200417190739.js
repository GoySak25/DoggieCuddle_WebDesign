import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import './ProfileDog.styles.scss'
import { Row, Col } from 'react-bootstrap';

const ProfileDog = ({
  dog: { dogName, breed,sex, age, dateOfBirth, location, image }
}) => (
  
  <div >


<div className="card">

<img src={image} alt="profile two" width="440px" height="340px"></img>
<div className="card-body">
  <p className="card-text" ><b>{dogName}</b>,   {age} <br></br>{sex}<br></br>
    {d.location}</p>
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

</div>
<br></br><br></br>

</div>





    
  
);

ProfileDog.propTypes = {
  dog: PropTypes.object.isRequired
};

export default ProfileDog;
