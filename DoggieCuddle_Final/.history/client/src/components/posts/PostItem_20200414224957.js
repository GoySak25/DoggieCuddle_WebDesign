import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar,title, user,image, likes, comments, date },
  showActions
}) => (
  <div className='post bg-white p-1 my-1'>









    <div>
      <Link to={`/profile/${user}`}>
        <img className='round-img' src={avatar} alt='' />
        <h4>{name}</h4>
      </Link>
    </div>
    <div>




    <div class="container mt-5">
  <div class="row">
    <div class="col-12">
    <div class="blog-card">
        <div class="blog-card__background">
          {/* <div class="card__background--wrapper">
            <div class="card__background--main" style="background-image: url('http://demo.yolotheme.com/html/motor/images/demo/demo_131.jpg');">
              <div class="card__background--layer"></div>
            </div>
          </div> */}
        </div> 
    <img src={image} alt="profile two"></img>
    <h1>{title}</h1> 
      <p className='my-1'>{text}</p>
      <p className='post-date'>
        Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
      </p>

      {showActions && (
        <Fragment>
          <button
            onClick={() => addLike(_id)}
            type='button'
            className='btn btn-light'
          >
          Like
            <i className='fas fa-thumbs-up' />{' '}
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button>
          <button
            onClick={() => removeLike(_id)}
            type='button'
            className='btn btn-light'
          >
          Unlike
            <i className='fas fa-thumbs-down' />
          </button>
          <Link to={`/posts/${_id}`} className='btn btn-primary'>
            Discussion{' '}
            {comments.length > 0 && (
              <span className='comment-count'>{comments.length}</span>
            )}
          </Link>
          {!auth.loading && user === auth.user._id && (
            <button
              onClick={() => deletePost(_id)}
              type='button'
              className='btn btn-danger'
            >
            delete
              <i className='fas fa-times' />
            </button>
          )}
        </Fragment>
      )}
      </div>
    </div>
   
</div>
</div>
</div>









    {/* <div class="container mt-5">
  <div class="row">
    <div class="col-12">
      <article class="blog-card">
        <div class="blog-card__background">
          <div class="card__background--wrapper">
            <div class="card__background--main" style="background-image: url('http://demo.yolotheme.com/html/motor/images/demo/demo_131.jpg');">
              <div class="card__background--layer"></div>
            </div>
          </div>
        </div>
        <div class="blog-card__head">
          <span class="date__box">
            <span class="date__day">11</span>
            <span class="date__month">JAN</span>
          </span>
        </div>
        <div class="blog-card__info">
          <h5>HARVICK GETS WHAT HE NEEDS, JOHNSON AMONG THOSE</h5>
          <p>
            <a href="#" class="icon-link mr-3"><i class="fa fa-pencil-square-o"></i> Tony Jahson</a>
            <a href="#" class="icon-link"><i class="fa fa-comments-o"></i> 150</a>
          </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque vero libero voluptatibus earum? Alias dignissimos quo cum, nulla esse facere atque, blanditiis doloribus at sunt quas, repellendus vel? Et, hic!</p>
          <a href="#" class="btn btn--with-icon"><i class="btn-icon fa fa-long-arrow-right"></i>READ MORE</a>
        </div>
      </article>
    </div>
  </div>
</div>

<section class="detail-page">
  <div class="container mt-5">
    
  </div>
</section> */}






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
