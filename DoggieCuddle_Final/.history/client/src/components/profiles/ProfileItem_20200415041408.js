import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './profileItem.styles.css'

let breed= 'akira';
const ProfileItem = (props) => {
  console.log(props)
  return (
    <div >
      {/* <img src={avatar} alt='' className='round-img' /> */}
      <div>
     

     {props.profile.dog.filter(d=>(d.breed.indexOf(props.doggieBreed)==0 ) && (d.sex.indexOf(props.dogSex)==0) && (d.location.indexOf(props.dogLocation)==0)).map(d=> {
     return(<div key={props.profile.dog._id}>  
      



     
<div className="card-wrapper">
      
      <div className="card profile-two">
        
        <div className="card-image profile-img--two">
           <img src={d.image} alt="profile two"></img>
        </div>

        <ul className="social-icons">

       
        </ul>

        <div className="details jane">
            <h2>{d.dogName}
              <br></br>
              <span className="job-title">{d.breed}</span>
             <br></br>
             <span className="job-title">{d.sex}</span>
             <br></br>
              <span className="job-title">{d.location}</span>
            </h2>
            <Link to={`/profile/${props.profile.user._id}`} className='btn btn-primary'>
          View Profile
        </Link>
            
        </div>
    </div>
 </div> 
    
     </div>
     )
            }
     
     )}



    
  
        {/* <Link to={`/profile/${props.profile.user._id}`} className='btn btn-primary'>
          View Profile
        </Link> */}
      </div>
     </div>
  
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
