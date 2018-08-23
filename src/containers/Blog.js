import React from 'react';
import { connect } from "react-redux";

import Post from '../components/Post';
import SideNav from '../components/SideNav';
import TemporaryDrawer from '../components/TemporaryDrawer';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.props.loadProjects()
        this.dispatchChangeSelectedProject = this.dispatchChangeSelectedProject.bind(this);
    }
    
    // function for allowing menubar to change the selected post
    dispatchChangeSelectedProject(project) {
        this.props.changeSelectedProject(project);
    }

    render() { 
        const { projects, selectedProject } = this.props

        const fullList = (
            projects.map(project => {
                return (
                    <Post selectedProject={project} display={(selectedProject.client === project.client) ? "block" : "none"}/>
                )        
            })
        );

        return (
            <div className="content">
                <Grid container spacing={0}>
                    <Hidden xsDown>
                        <Grid style={{zIndex:10}} item md={2} xs={3}>
                            <SideNav selectedProject={selectedProject} changeSelectedProject={this.dispatchChangeSelectedProject} projectList={projects}/>
                        </Grid>
                    </Hidden>
                    <Grid item md={10} sm={9} xs={12}>
                        {fullList}
                    </Grid>
                </Grid>
                <Hidden smUp>
                    <TemporaryDrawer selectedProject={selectedProject} changeSelectedProject={this.dispatchChangeSelectedProject} projectList={projects}/>
                </Hidden>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.fetching,
        projects: state.blog.projects,
        error: state.error,
        selectedProject: state.blog.selectedProject
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        loadProjects: () => dispatch({ type: "LOAD_PROJECTS_REQUEST" }),
        changeSelectedProject: (project) => dispatch({ type: "CHANGE_SELECTEDPROJECT", project: project})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
