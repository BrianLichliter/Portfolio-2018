import React from "react";
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';

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
                        <MenuItem 
                            key={project.client} 
                            selected={this.props.selectedProject.client === project.client} 
                            onClick={this.handleClick.bind(this, project)}
                        >
                            {project.client}
                        </MenuItem>)
                    )
                }
            </Paper>
        )
    }
}

export default SideNav;