import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import './ProfileDog.styles.scss'

const ProfileDog = ({
  dog: { dogName, breed,sex, age, dateOfBirth, location, image }
}) => (
  <div>



<div className="container">

  <div className="card-profile" style={{backgroundImage: `url(${image})` }}>
    <div className="card-profile_visual"></div>

    <div className="card-profile_user-infos">
      <span className="infos_name">{dogName}</span>
      <span className="infos_nick">{breed}</span>

      <a href="#"></a>
    </div>

    <div className="card-profile_user-stats">
      <div className="stats-holder">
        <div className="user-stats">
          <strong>Sex</strong>
          <span>{sex}</span>
        </div>
        <div className="user-stats">
          <strong>Age</strong>
          <span>{age}</span>
        </div>
        <div className="user-stats">
          <strong>Location</strong>
          <span>{location}</span>
        </div>
      </div>
    </div>

  </div>

</div>






</div>




    
  
);

ProfileDog.propTypes = {
  dog: PropTypes.object.isRequired
};

export default ProfileDog;
