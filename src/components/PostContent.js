import React from "react";
import PostContentHeader from './PostContentHeader';
import PostContentBody from './PostContentBody';
import styled from 'styled-components';

const StyledPost = styled.div`
    @media (min-width: 960px) {
        overflow-y: scroll;
        max-height: calc(100vh - 48px);
    }
    -webkit-overflow-scrolling: touch;
    z-index: -1;
`

class PostContent extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.display !== prevProps.display) {
            document.getElementById(this.props.selectedProject.client).scrollTo(0, 0);
        }
    }

    render() {        
        return ( 
            <StyledPost id={this.props.selectedProject.client} className="Post" style={{display: this.props.display}}>
                <PostContentHeader selectedProject={this.props.selectedProject}/>
                <PostContentBody selectedProject={this.props.selectedProject}/>
            </StyledPost> 
        )
    }
}

export default PostContent;