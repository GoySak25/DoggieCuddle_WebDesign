import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileDog from './ProfileDog';
import ProfileGithub from './ProfileGithub';
import { getProfileById } from '../../actions/profile';
import { Row, Col } from 'react-bootstrap';

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match
}) => {
  const nullProfile = !profile;
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id, nullProfile]);

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to="/profiles" className="btn btn-light">
            Back To Profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to="/edit-profile" className="btn btn-dark">
                Edit Profile
              </Link>
            )}
          <div >
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
            <div>
           
              <h2 className="text-primary">Dogs</h2>
              {profile.dog.length > 0 ? (
               <Row>
             

                  {(
                  
                     <Col md={4}>
                    <ProfileDog
                      key={profile._id}
                      dog={profile}
                      // dogImage = {dog.image}
                    />
                    </Col>
                  )}
                  
                  </Row>
                
              ) : (
                <h4>No dog credentials</h4>
              )}
              
            </div>

           

            {profile.githubusername && (
              <ProfileGithub username={profile.githubusername} />
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile);
