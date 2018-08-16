import React from "react";
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import './Post.css';


class Post extends React.Component {
    render() {        
        return ( 
            <div className="Post">
                <PostHeader selectedPost={this.props.selectedPost}/>
                <PostContent selectedPost={this.props.selectedPost}/>
            </div> 
        )
    }
}

export default Post;