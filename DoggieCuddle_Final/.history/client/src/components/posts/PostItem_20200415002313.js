import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';
import './posts.styles.scss'
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar,title, user,image, likes, comments, date },
  showActions
}) => (
  <div>





    <div className="container mt-5">
  <div className="row">
    <div className="col-12">
    <div className="blog-card">
        <div className="blog-card__background">
          <div className="card__background--wrapper">
             <div className="card__background--main" style={{ backgroundImage: `url(${image})` }}>
              <div className="card__background--layer"></div>
            </div> 
          </div>
        </div> 
        <div className="blog-card__head">
          <span className="date__box">
            <span className="date__day"><Moment format='Do'>{date}</Moment></span>
            <span className="date__month"><Moment format='MMMM'>{date}</Moment></span>
          </span>
        </div>

        <div className="blog-card__info">
          <h5>{title}</h5>
          <p>

            {showActions && (
        <Fragment>

         <a href="#" class="icon-link mr-3"><i class="fa fa-pencil-square-o"></i> {name}</a>
          <button
            onClick={() => addLike(_id)}
            type='button'
            className='icon-link mr-3'
          >
         
            <i className='fa fa-thumbs-up' />{' '}
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button>
          <button
            onClick={() => removeLike(_id)}
            type='button'
            className='icon-link mr-3'
          >
        
            <i className='fa fa-thumbs-down' />
          </button>
          <Link to={`/posts/${_id}`} className='icon-link mr-3'>
          <i class="fa fa-comments"></i>{' '}
            {comments.length > 0 && (
              <span className='comment-count'>{comments.length}</span>
            )}
          </Link>

          {!auth.loading && user === auth.user._id && (
            <button
              onClick={() => deletePost(_id)}
              type='button'
              className='icon-link mr-3'
            >
            
            <i class="fa fa-trash"></i>
            </button>
          )}
        </Fragment>
      )}

          </p>
          <p>{text}</p>
          <a href="#" class="btn btn--with-icon"><i className="btn-icon fa fa-long-arrow-right"></i><Link to={`/posts/${_id}`}>READ MORE</Link></a>
        </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    {/* <img src={image} alt="profile two"></img> */}







    
      </div>
    </div>
   
</div>
</div>
</div>





);

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addLike, removeLike, deletePost }
)(PostItem);
