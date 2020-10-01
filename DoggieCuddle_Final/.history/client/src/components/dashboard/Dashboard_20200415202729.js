import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Dog from './Dog';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';
import FaceIcon from '@material-ui/icons/Face';
import { Navbar } from 'react-bootstrap';
import DashboardIcon from '@material-ui/icons/Dashboard';

const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
   
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:"#008080"
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));




const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return loading && profile === null ? (
    <Spinner />
  ) : (



<div className={classes.root} >
      <CssBaseline />
    
      <Drawer
      className={classes.drawer}
      
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      
      anchor="left"
    >
      
        <div className={classes.toolbar} style={{backgroundColor:"#008080"}}>
        <List style={{backgroundColor:"#008080"}}>
        <ListItem button key={1}>
        <ListItemIcon><DashboardIcon style={{color:"white"}}/></ListItemIcon>
              <ListItemText style={{color:"white"}}> 
              <h4>DASHBOARD</h4>
              </ListItemText>
            </ListItem>
          
        </List>
        </div>
        <Divider />
        <List>
        <ListItem button key={1}>
              <ListItemIcon><FaceIcon style={{color:"white"}}/></ListItemIcon>
              <ListItemText style={{color:"white"}}> 
              {user && user.name}
              </ListItemText>
            </ListItem>
          
        </List>
        <Divider />
        <List>
         
            <ListItem button key={1}>
              <ListItemIcon><EditIcon style={{color:"white"}}/></ListItemIcon>
              <ListItemText > <Link to='/edit-profile' style={{color:"white"}}>
         Edit Profile
      </Link> </ListItemText>
            </ListItem>

            <ListItem button key={2}>
              <ListItemIcon><AddIcon style={{color:"white"}}/></ListItemIcon>
              <ListItemText > <Link to='/add-dog' style={{color:"white" , textDecoration:"none"}}>
         Add Dog
      </Link> </ListItemText>
            </ListItem>

            <ListItem button key={2}>
              <ListItemIcon ><DeleteForeverIcon style={{color:"white", textDecoration:"none"}}/></ListItemIcon>
              <ListItemText> 

              <Button
        variant="contained"
        color="secondary"
        onClick={() => deleteAccount()}
      >
        Delete Account
      </Button>
            
              </ListItemText>
            </ListItem>
          
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Fragment>
      <h1 className='large text-primary'>Dashboard</h1>
      
      {profile !== null ? (
        <Fragment>
          <Dog dog={profile.dog} />

          
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
   
      </main>
      
    </div>









    
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
