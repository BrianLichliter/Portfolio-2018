import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FolderIcon from '@material-ui/icons/Folder';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function FloatingActionButton(props) {
  const { classes } = props;
  return (
    <div style={{position: "fixed", right: 16, bottom: 16}}>
      <Button variant="fab" color="primary" aria-label="Add" className={classes.button}>
        <FolderIcon />
      </Button>
    </div>
  );
}

FloatingActionButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButton);