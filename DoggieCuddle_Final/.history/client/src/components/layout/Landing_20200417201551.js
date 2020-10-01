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
  
  <div className="bod">
    <div className="eyes"></div>
    <div className="beard">
      <div className="mouth">
        <div className="tongue"></div>
      </div>
    </div>
    <div className="belt">
      <div className="locket"></div>
      <div className="dot dot1"></div>
      <div className="dot dot2"></div>
      <div className="dot dot3"></div>
      <div className="dot dot4"></div>
      <div className="tag"></div>
    </div>
    <div className="stomach">
    </div>
    <div className="legs">
      <div className="left"></div>
      <div className="right"></div>
    </div>
  </div>
  <div className="tail">
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
