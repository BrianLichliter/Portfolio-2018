import React from "react";
import PostContentHeader from './PostContentHeader';
import PostContentBody from './PostContentBody';
import styled from 'styled-components';

const StyledPost = styled.div`
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    max-height: calc(100vh - 48px);
    z-index: -1;
`

class PostContent extends React.Component {
    render() {        
        return ( 
            <StyledPost className="Post" style={{display: this.props.display}}>
                <PostContentHeader selectedProject={this.props.selectedProject}/>
                <PostContentBody selectedProject={this.props.selectedProject}/>
            </StyledPost> 
        )
    }
}

export default PostContent;