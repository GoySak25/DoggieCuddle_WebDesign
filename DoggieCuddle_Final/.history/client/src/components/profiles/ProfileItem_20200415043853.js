import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './profileItem.styles.css'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}));

let breed= 'akira';
const ProfileItem = (props) => {
  const classes = useStyles();
  console.log(props)
  return (
   
     
      <div className={classes.root}>
     
 
     {props.profile.dog.filter(d=>(d.breed.indexOf(props.doggieBreed)==0 ) && (d.sex.indexOf(props.dogSex)==0) && (d.location.indexOf(props.dogLocation)==0)).map(d=> {
     return(
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
     
     <div key={props.profile.dog._id}>  
      

     <GridListTile key={d.image} cols={d._id ? 2 : 1} rows={d._id ? 2 : 1}>

    
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
            <span className="job-title"> <Link to={`/profile/${props.profile.user._id}`} className='btn btn-primary'>
          View Profile
        </Link></span>
            
        </div>
    </div>
 </div> 
</GridListTile>
 
     </div>
     
     </GridList>
     
     )
            }
     
     )}



    
  
      
      </div>
     
  
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
