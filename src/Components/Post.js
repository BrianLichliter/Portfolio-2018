import React from "react";
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import './Post.css';


class Post extends React.Component {
    render() {        
        return ( 
            <div className="Post" style={{display: this.props.display}}>
                <PostHeader selectedProject={this.props.selectedProject}/>
                <PostContent selectedProject={this.props.selectedProject}/>
            </div> 
        )
    }
}

export default Post;