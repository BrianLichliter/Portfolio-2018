import React from "react";
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

const StyledMenuItem = styled(MenuItem)`
    &.selected-menu-item {
        
    }
`

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(project) {
        this.props.changeSelectedProject(project);
    }

    render() {
        return (
            <Paper elevation={5} square={true} style={{height: "100%"}}>
                { this.props.projectList.map(
                    project => (
                        <StyledMenuItem 
                            key={project.client} 
                            selected={this.props.selectedProject.client === project.client} 
                            onClick={this.handleClick.bind(this, project)}
                            classes={{selected: "selected-menu-item"}}
                        >
                            {project.client}
                        </StyledMenuItem>)
                    )
                }
            </Paper>
        )
    }
}

export default SideNav;