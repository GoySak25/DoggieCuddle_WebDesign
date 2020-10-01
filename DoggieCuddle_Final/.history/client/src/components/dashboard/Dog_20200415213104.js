import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteDog } from '../../actions/profile';
import './dog.styles.scss'

const Dog = ({ dog, deleteDog }) => {
  

  return (
    <div>

    
      

{
       dog.map(d => {
   return <div key={d._id}>








<div className="movie_card" id="bright">
  <div className="info_section">
    <div className="movie_header">
      <img className="locandina" src={d.image}></img>
      <h1>{d.dogName}</h1>
      <h4>{d.age}</h4>
      <span className="minutes">Breed</span>
      <p className="type">{d.breed}</p>
    </div>
    <div className="movie_desc">
      <p className="text">
       {d.location}
      </p>
    </div>
    <div className="movie_social">
      <ul>
        <li>
        <button
          onClick={() => deleteDog(d._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
        </li>
        
      </ul>
    </div>
  </div>
  <div className="blur_back bright_back" style={{ backgroundImage: `url(${d.image})` }}></div>
</div>











   
    
    
 
</div>
    
       })

}






     
     </div>
    
  );
};

Dog.propTypes = {
  dog: PropTypes.array.isRequired,
  deleteDog: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteDog }
)(Dog);
