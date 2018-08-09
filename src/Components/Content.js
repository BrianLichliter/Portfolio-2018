import React from 'react';
import Post from './Post';
import SideNav from './SideNav';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import firebase from '../firebase/firebase.js';

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
    
    // function for allowing menubar to change the selected post
    changeSelectedPost(post) {
        this.setState({selectedPost: post})
    }

    // helper function to get an article's content from an article url
    // returns a promise
    getArticleFromArticleUrl(url, query) {
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

    // loads the data from firebase
    componentDidMount() {
        const projectsRef = firebase.firestore().collection('projects');
        projectsRef.get().then((querySnapshot) => {
            let reads = []
            querySnapshot.forEach((query) => {
                reads.push(this.getArticleFromArticleUrl(query.data().articleURL, query))
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

export default Content