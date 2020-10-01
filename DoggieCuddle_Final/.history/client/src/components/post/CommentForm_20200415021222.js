import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '110ch',
    },
  },
}));

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');
  const classes = useStyles();
  

 

  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Leave a Comment</h3>
      </div>
      <form
      className={classes.root}
        // className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addComment(postId, { text });
          setText('');
        }}
      >


<TextField
          id="outlined-multiline-flexible"
          label="Comments"
          name='text'
          multiline
          rows={10}
          cols="30"
          value={text}
          onChange={e => setText(e.target.value)}
          required
          variant="outlined"
        />


       
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(
  null,
  { addComment }
)(CommentForm);
