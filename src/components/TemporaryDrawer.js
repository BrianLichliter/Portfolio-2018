import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import ListIcon from '@material-ui/icons/List';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class TemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  handleClick(project) {
    this.props.changeSelectedProject(project);
}

  render() {
    const { classes } = this.props;

    const fullList = (
        <div className={classes.fullList}>
        {this.props.projectList.map(project => {
            return (
                <MenuItem 
                key={project.client} 
                selected={this.props.selectedProject.client === project.client} 
                onClick={this.handleClick.bind(this, project)}
                >
                    {project.client}
                </MenuItem>
            )        
        })}
        </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer('bottom', true)} style={{position: "fixed", right: 16, bottom: 16}} variant="extendedFab" color="secondary" size="large" npmaria-label="Add" className={classes.button}>
            <ListIcon />
            &nbsp; Projects
        </Button>
        <Drawer
          anchor="bottom"
          open={this.state.bottom}
          onClose={this.toggleDrawer('bottom', false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('bottom', false)}
            onKeyDown={this.toggleDrawer('bottom', false)}
          >
            {fullList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);