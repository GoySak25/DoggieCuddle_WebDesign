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
<h2 className="my-2">Dogs</h2>
    
      

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











   
    
    
    {/* <div className="card-container">
   <div className="cards u-clearfix">
    <div className="card-body">
      
      <h2 className="card-title">{d.dogName}</h2>
      <span className="card-author subtle">{d.sex}</span>
      <span className="card-author subtle">{d.age}</span>
      <span className="card-author subtle">{d.breed}</span>
      <span className="card-author subtle">{d.location}</span>
      <span className="card-author subtle"> <Moment format="YYYY/MM/DD">{moment.utc(d.dateOfBirth)}</Moment> </span>
      
      <div className="card-author subtle"><button
          onClick={() => deleteDog(d._id)}
          className="btn btn-danger"
        >
          Delete
        </button></div>
     
    </div>
    <img src={d.image} alt="" className="card-media" width="50px" height="200px"></img> 
  </div>
  <div className="card-shadow"></div>
  </div> 
</div> */}
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
