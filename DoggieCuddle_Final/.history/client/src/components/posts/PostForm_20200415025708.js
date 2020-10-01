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
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
 
}));

const PostForm = ({ addPost }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('lg');
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

<Dialog open={open} onClose={handleClose} fullWidth={fullWidth} maxWidth={"lg"} aria-labelledby="form-dialog-title">
<DialogTitle id="form-dialog-title">What's on your mind</DialogTitle>



<DialogContent>
         
        
    <div className='post-form'>
      {/* <div className='bg-primary p'>
        <h3>Say Something...</h3>
      </div> */}
      <form
        className={classes.form}
        onSubmit={e => onSubmit(e)}
        encType="multipart/form-data"
      >
       
       
       <TextField
       id="standard-full-width"
       label="Title"
       fullWidth
         name='title'        
         placeholder='Title'
         value={title}
         onChange={e => onChange(e)}
         fullWidth
        //  onChange={e => setTitle(e.target.value)}
       
       />
      
       
      
       <TextField
       id="standard-full-width"
       label="Image"
       fullWidth
       name = 'image'
       type = 'file'
       onChange={(e) => uploadImage(e)}
       fullWidth
      //  onChange={e => onChange(e)}
      //  onChange = {e => setImage(e.target.files[0])}
       
       />



        <TextField
        id="standard-full-width"
        label="Text"
        fullWidth
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




<Button type='submit' class="btn btn-dark my-1" color="primary" value='Submit'></Button> 

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
