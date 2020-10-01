import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
  // const [text, setText] = useState('');
  // const [title, setTitle]= useState('');
  //  const [image, setImage] = useState([{}]);

  const [formData, setFormData] = useState({
    title: '',
    text: '',
    image: null,
  });
  let fileToUpload = []

  const onChange = e =>{
    setFormData({ ...formData, [e.target.name]: e.target.value.toLowerCase() });
    
  }

  const uploadImage = e =>{
    
    fileToUpload = e.target.files[0]
    setFormData({ ...formData, image: fileToUpload });
  
  }


 const  onSubmit=e => {
    e.preventDefault();

  
    
    addPost( formData );
    // setText('');
  }

  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Say Something...</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={e => onSubmit(e)}
      >
       
       <div className='form-group'>
       <input
         name='title'        
         placeholder='Title'
         value={title}
         onChange={e => onChange(e)}
        //  onChange={e => setTitle(e.target.value)}
       
       />
       </div>
       
       <div className='form-group'>
       <input
       name = 'image'
       type = 'file'
       onChange={(e) => uploadImage(e)}
      //  onChange={e => onChange(e)}
      //  onChange = {e => setImage(e.target.files[0])}
       
       />
</div>

<div className='form-group'>
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Create a post'
          value={text}
          onChange={e => onChange(e)}
          // onChange={e => setText(e.target.value)}
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
