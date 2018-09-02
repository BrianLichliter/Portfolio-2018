import React from "react";
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import styled from 'styled-components';

const StyledPost = styled.div`
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    max-height: calc(100vh - 48px);
    z-index: -1;
`

class Post extends React.Component {
    render() {        
        return ( 
            <StyledPost className="Post" style={{display: this.props.display}}>
                <PostHeader selectedProject={this.props.selectedProject}/>
                <PostContent selectedProject={this.props.selectedProject}/>
            </StyledPost> 
        )
    }
}

export default Post;