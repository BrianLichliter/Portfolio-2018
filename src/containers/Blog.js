import React from 'react';
import { connect } from "react-redux";

import Post from '../components/Post';
import SideNav from '../components/SideNav';
import TemporaryDrawer from '../components/TemporaryDrawer';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

class Blog extends React.Component {
    componentDidMount() {
        const selectedClient = this.props.match.params['client'];
        this.props.fetchProjects(selectedClient)
    }

    component

    render() { 
        const { projects, selectedProject } = this.props

        const fullList = (
            projects.map(project => {
                return (
                    <Post key={project.client} selectedProject={project} display={(selectedProject.client === project.client) ? "block" : "none"}/>
                )        
            })
        );

        return (
            <div className="blog">
                <Grid container spacing={0}>
                    <Hidden smDown>
                        <Grid style={{zIndex:10}} item md={2}>
                            <SideNav selectedProject={selectedProject} projectList={projects}/>
                        </Grid>
                    </Hidden>
                    <Grid item md={10} sm={12}>
                        <Post key={project.client} selectedProject={project} display={(selectedProject.client === project.client) ? "block" : "none"}/>
                    </Grid>
                </Grid>
                <Hidden mdUp>
                    <TemporaryDrawer selectedProject={selectedProject} projectList={projects}/>
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
        fetchProjects: (client) => dispatch({ type: "LOAD_PROJECTS_REQUEST", selectedClient: client }),
        updateSelectedProject: (client) => dispatch({ type: "UPDATE_SELECTEDPROJECT", selectedClient: client })    
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
