import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');
  const [title, setTitle]= useState('');
  const [image, setImage] = useState([{}]);


 const  onSubmit=e => {
    e.preventDefault();

    const post = new FormData();
    post.append('title', title);
    post.append('text', text);
    post.append('image', image)

    console.log("Form Post")
    console.log(post)
    addPost({ post });
    setText('');
  }

  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Say Something...</h3>
      </div>
      <form
        className='form my-1'
        // onSubmit={e => {
        //   e.preventDefault();

        //   const post = new FormData();
        //   post.append('title', title);
        //   post.append('text', text);
        //   post.append('image', image)

        //   console.log("Form Post")
        //   console.log(post)
        //   addPost({ post });
        //   setText('');
        // }}
        onSubmit={e => onSubmit(e)}
      >
       
       <div className='form-group'>
       <input
         name='name'        
         placeholder='Title'
         value={title}
         onChange={e => setTitle(e.target.value)}
       
       />
       </div>
       
       <div className='form-group'>
       <input
       name = 'image'
       type = 'file'
       onChange = {e => setImage(e.target.files[0])}
       
       />
</div>

<div className='form-group'>
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Create a post'
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
</div>
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(PostForm);
