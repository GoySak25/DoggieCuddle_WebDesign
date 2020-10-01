import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import './ProfileDog.styles.css'

const ProfileDog = ({
  dog: { dogName, breed,sex, age, dateOfBirth, location, image }
}) => (
  <div>



<div class="container">

  <div class="card-profile" style={{backgroundImage: `url(${image})` }}>
    <div class="card-profile_visual"></div>

    <div class="card-profile_user-infos">
      <span class="infos_name">{dogName}</span>
      <span class="infos_nick">{breed}</span>

      <a href="#"></a>
    </div>

    <div class="card-profile_user-stats">
      <div class="stats-holder">
        <div class="user-stats">
          <strong>Sex</strong>
          <span>sex</span>
        </div>
        <div class="user-stats">
          <strong>Age</strong>
          <span>age</span>
        </div>
        <div class="user-stats">
          <strong>Location</strong>
          <span>location</span>
        </div>
      </div>
    </div>

  </div>

</div>











      <div class="card-container">
   <div class="cards u-clearfix">
    <div className="card-body">
      
      <h2 className="card-title">{dogName}</h2>
      <span className="card-author subtle">{sex}</span>
      <span className="card-author subtle">{age}</span>
      <span className="card-author subtle">{breed}</span>
      <span className="card-author subtle">{location}</span>
      <span className="card-author subtle"> <Moment format="YYYY/MM/DD">{moment.utc(dateOfBirth)}</Moment> </span>
      
    </div>
    <img src="" alt="" class="card-media" />
  </div>
  <div class="card-shadow"></div>
  </div>
</div>
  
);

ProfileDog.propTypes = {
  dog: PropTypes.object.isRequired
};

export default ProfileDog;
