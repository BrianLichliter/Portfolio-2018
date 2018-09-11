import React from 'react';
import { connect } from "react-redux";

import PostContent from '../components/PostContent';
import PostSideNav from '../components/PostSideNav';
import PostTemporaryDrawer from '../components/PostTemporaryDrawer';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

class Post extends React.Component {
    componentDidMount() {
        this.props.fetchProjects();
        window.scrollTo(0,0);
    }

    componentDidUpdate(prevProps) {
        
    }

    findProjectFromClient(selectedClient) {
        return this.props.projects.filter((project) => {return project.client === selectedClient})[0];
    }

    render() { 
        const { projects, match } = this.props
        const selectedClient = match.params['client'];
        const selectedProject = this.findProjectFromClient(selectedClient);
        const fullList = (
            projects.map(project => {
                return (
                    <PostContent key={project.client} selectedProject={project} display={(project.client === selectedClient) ? "block" : "none"}/>
                )        
            })
        );

        return (
            <div className="blog">
                <Grid container spacing={0}>
                    <Hidden smDown>
                        <Grid style={{zIndex:10}} item md={2} xl={1}>
                            <PostSideNav selectedProject={selectedProject} projectList={projects}/>
                        </Grid>
                    </Hidden>
                    <Grid item sm={12} md={10} xl={11}>
                        {fullList}
                    </Grid>
                </Grid>
                <Hidden mdUp>
                    <PostTemporaryDrawer selectedProject={selectedProject} projectList={projects}/>
                </Hidden>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.fetching,
        projects: state.blog.projects,
        error: state.error    
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        fetchProjects: () => dispatch({ type: "LOAD_PROJECTS_REQUEST" }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
