import React from "react";
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledMenuItem = styled(MenuItem)`

    &.selected-menu-item {
        
    }
`

class PostSideNav extends React.Component {
    render() {
        return (
            <Paper elevation={5} square={true} style={{height: "100%"}}>
                { this.props.projectList.map(
                    project => (
                        <Link to={"/projects/" + project.client} style={{"textDecoration": "none"}} key={project.client}>
                            <StyledMenuItem  
                                selected={this.props.selectedProject.client === project.client} 
                                classes={{selected: "selected-menu-item"}}
                            >
                                {project.client}
                            </StyledMenuItem>
                        </Link>
                    )
                )}
            </Paper>
        )
    }
}

export default PostSideNav;