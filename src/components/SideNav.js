import React from "react";
import MenuItem from '@material-ui/core/MenuItem';

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
            <div>
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
            </div>
        )
    }
}

export default SideNav;