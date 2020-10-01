import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileDog = ({
  dog: { dogName, breed,sex, age, dateOfBirth, location }
}) => (
  <div>
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
