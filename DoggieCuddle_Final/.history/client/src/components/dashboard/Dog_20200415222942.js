import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteDog } from '../../actions/profile';
import './dog.styles.scss'

const Dog = ({ dog, deleteDog }) => {
  

  return (
  
    <div className = "dog">
      
      <header>
    <div class="overlay">
  <h1>Dogs</h1>
  <h3>Reasons for Choosing US</h3>
  
    <br></br>
    
      </div>
</header>

    
<div className="row">
      <div className="col-sm-6" >
      
    

{
       dog.map(d => {
   return <div key={d._id}>


<div className="movie_card" id="dark">
  <div className="info_section">
    <div className="movie_header">
       <img className="locandina" src={d.image}></img> 
      <h1>{d.dogName}</h1>
      <h4>{d.age}</h4>
      <h4>{d.location}</h4>
      <span className="minutes">Breed</span>
      <p className="type">{d.breed}</p>
    </div>
    <div className="movie_desc">
      <p className="text">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </p>
    </div>
    <div className="movie_social">
      <ul>
        <li>
        <button
          onClick={() => deleteDog(d._id)}
          // className="btn btn-danger"
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

   </div>  
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
