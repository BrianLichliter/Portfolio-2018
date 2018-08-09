import React from 'react';
import Post from './Post';
import SideNav from './SideNav';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import compose from 'recompose/compose';
import firebase from '../firebase/firebase.js';

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
            selectedPost: {client: '', 
                            color: '', 
                            imageURL: '',
                            articleURL: ''
                        },
            postList: []
        }
        this.changeSelectedPost = this.changeSelectedPost.bind(this);
    }
    
    changeSelectedPost(post) {
        this.setState({selectedPost: post})
    }

    getTextFromUrl(url, query) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = (event) => {
                const reader = new FileReader();
                // This fires after the blob has been read/loaded.
                reader.addEventListener('loadend', (e) => {
                    var project = query.data();
                    project.article = e.srcElement.result;
                    resolve(project);        
                });
                // Start reading the blob as text.
                reader.readAsText(xhr.response);
            };
            xhr.open('GET', url);
            xhr.send();
        })
    }

    componentDidMount() {
        const projectsRef = firebase.firestore().collection('projects');
        projectsRef.get().then((querySnapshot) => {
            let reads = []
            querySnapshot.forEach((query) => {
                reads.push(this.getTextFromUrl(query.data().articleURL, query))
            })
            Promise.all(reads).then((projects) => {
                this.setState({
                    postList: projects,
                    selectedPost: projects[0]
                })
            })
        })
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