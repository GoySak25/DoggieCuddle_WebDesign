import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './landing.styles.css'

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
 
      <div className='dark-overlay'>
      <div class="dog">
  <div class="ears"></div>
  
  <div class="body">
    <div class="eyes"></div>
    <div class="beard">
      <div class="mouth">
        <div class="tongue"></div>
      </div>
    </div>
    <div class="belt">
      <div class="locket"></div>
      <div class="dot dot1"></div>
      <div class="dot dot2"></div>
      <div class="dot dot3"></div>
      <div class="dot dot4"></div>
      <div class="tag"></div>
    </div>
    <div class="stomach">
    </div>
    <div class="legs">
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </div>
  <div class="tail">
  </div>
</div>
        <div className='landing-inner'>
          <h1 className='x-large'>Doggie Cuddle</h1>
          <p className='lead'>
           
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>

      
    </section>

    
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
