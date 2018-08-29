import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  }
};

function MenuBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root} style={{marginBottom: 48}}>
      <AppBar color="primary" position="fixed">
        <Toolbar variant="dense">
          <Typography variant="title" color="inherit" className={classes.flex}>
            Brian Lichliter
          </Typography>
          <Link style={{"color": "white", "textDecoration": "unset"}} to="/">
            <Button color="inherit">
              Home
            </Button>
          </Link>
          <Link style={{"color": "white", "textDecoration": "unset"}} to="/projects">
            <Button color="inherit">
              Projects
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuBar);