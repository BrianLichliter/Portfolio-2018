import React from 'react';
import Post from './Post';
import SideNav from './SideNav';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import compose from 'recompose/compose';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        display: 'flex',
    },
});

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedPost: {name: "EcoCRED", color: "green"},
            postList: [
                {name: "Blog One",
                color: "green"},
                {name: "Blog Two",
                color: "teal"},
                {name: "Blog Three",
                color: "blue"},
                {name: "Blog Four",
                color: "black"}
            ]
        }
        this.changeSelectedPost = this.changeSelectedPost.bind(this);
    }
    
    changeSelectedPost(post) {
        this.setState({selectedPost: post})
    }

    render() { 
        return (
            <div className="content">
                <Grid container spacing={0}>
                    <Hidden xsDown>
                        <Grid item md={2} xs={3}>
                            <SideNav selectedPost={this.state.selectedPost} changeSelectedPost={this.changeSelectedPost} postList={this.state.postList}/>
                        </Grid>
                    </Hidden>
                    <Grid item md={10} sm={9} xs={12}>
                        <Post selectedPost={this.state.selectedPost} />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

Content.propTypes = {
classes: PropTypes.object.isRequired,
width: PropTypes.string.isRequired,
};
  
export default compose(
    withStyles(styles),
    withWidth(),
)(Content);