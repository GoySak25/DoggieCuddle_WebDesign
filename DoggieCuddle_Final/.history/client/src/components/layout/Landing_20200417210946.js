import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './landing.styles.scss'

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
 
      <div className='dark-overlay'>
      <div className='landing-inner'>
          <h1 className='x-large' style={{marginLeft:"60px"}}>Doggie Cuddle</h1>
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
     
    
		<div class="containers">
			<div class="corgi">

				<div class="head">
					<div class="ear ear--r"></div>
					<div class="ear ear--l"></div>

					<div class="eye eye--left"></div>
					<div class="eye eye--right"></div>

					<div class="face">
						<div class="face__white">
							<div class=" face__orange face__orange--l"></div>
							<div class=" face__orange face__orange--r"></div>
						</div>
					</div>

					<div class="face__curve"></div>

					<div class="mouth">

						<div class="nose"></div>
						<div class="mouth__left">
							<div class="mouth__left--round"></div>
							<div class="mouth__left--sharp"></div>
						</div>
						
						<div class="lowerjaw">
							<div class="lips"></div>
							<div class="tongue test"></div>
						</div>

						<div class="snout"></div>
					</div>
				</div>
				
				<div class="neck__back"></div>
				<div class="neck__front"></div>

				<div class="body">
					<div class="body__chest"></div>
				</div>

				<div class="foot foot__left foot__front foot__1"></div>
				<div class="foot foot__right foot__front foot__2"></div>
				<div class="foot foot__left foot__back foot__3"></div>
				<div class="foot foot__right foot__back foot__4"></div>

				<div class="tail test"></div>
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
