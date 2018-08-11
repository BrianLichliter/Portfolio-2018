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

  handleClick(post) {
    this.props.changeSelectedPost(post);
}

  render() {
    const { classes } = this.props;

    const fullList = (
        <div className={classes.fullList}>
        {this.props.postList.map(post => {
            return (
                <MenuItem 
                key={post.client} 
                selected={this.props.selectedPost.client === post.client} 
                onClick={this.handleClick.bind(this, post)}
                >
                    {post.client}
                </MenuItem>
            )        
        })}
        </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer('bottom', true)} style={{position: "fixed", right: 16, bottom: 16}} variant="fab" color="primary" aria-label="Add" className={classes.button}>
            <ListIcon />
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