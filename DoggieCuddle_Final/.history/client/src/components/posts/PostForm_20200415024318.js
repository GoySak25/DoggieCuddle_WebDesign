import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const PostForm = ({ addPost }) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [formData, setFormData] = useState({
    title: '',
    text: '',
    image: null,
  });
  let fileToUpload = []
  const { title, text, image} = formData;

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
    <div>
    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
    Post
  </Button>

<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
<DialogTitle id="form-dialog-title">What's on your mind</DialogTitle>



<DialogContent>
         
        
    <div className='post-form'>
      {/* <div className='bg-primary p'>
        <h3>Say Something...</h3>
      </div> */}
      <form
        className='form my-1'
        onSubmit={e => onSubmit(e)}
        encType="multipart/form-data"
      >
       
       
       <TextField
         name='title'        
         placeholder='Title'
         value={title}
         onChange={e => onChange(e)}
         fullWidth
        //  onChange={e => setTitle(e.target.value)}
       
       />
      
       
      
       <TextField
       name = 'image'
       type = 'file'
       onChange={(e) => uploadImage(e)}
       fullWidth
      //  onChange={e => onChange(e)}
      //  onChange = {e => setImage(e.target.files[0])}
       
       />



        <TextField
          name='text'
          cols='30'
          rows={15}
          placeholder='Create a post'
          value={text}
          onChange={e => onChange(e)}
          fullWidth
          // onChange={e => setText(e.target.value)}
          required
        />




<Button type='submit' color="primary" value='Submit' />

        {/* <input type='submit' className='btn btn-dark my-1' value='Submit' /> */}
      </form>

      
   
    </div>
    </DialogContent>
    </Dialog>
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
