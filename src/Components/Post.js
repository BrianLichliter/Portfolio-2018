import React from "react";
import PostHeader from './PostHeader';
import PostContent from './PostContent';


class Post extends React.Component {
    render() {        
        return ( 
            <div id="post" style={{overflowY: "scroll", overflowX: "hidden", maxHeight: "calc(100vh - 48px)", zIndex: -1}}>
                <PostHeader selectedPost={this.props.selectedPost}/>
                <PostContent selectedPost={this.props.selectedPost}/>
            </div> 
        )
    }
}

export default Post;