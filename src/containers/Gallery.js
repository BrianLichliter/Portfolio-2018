import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Post extends React.Component {
    componentDidMount() {
        this.props.fetchProjects();
    }

    render() { 
        const { projects } = this.props
        const fullList = (
            projects.map(project => {
                return (
                    <Grid item xs="12" sm="6" md="4">
                        <Link to={"/projects/" + project.client} style={{"textDecoration": "none"}} key={project.client}>
                            <Card>
                                <CardActionArea style={{'width': '100%'}}>
                                    <CardMedia
                                    image={project.imageURL}
                                    title={project.client}
                                    style={{'height': 280, 'backgroundSize': '70%', 'backgroundColor': project.color}}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            {project.client}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                )        
            })
        );

        return (
            <div className="gallery" style={{padding: 16}}>
                <h1 style={{'marginTop': 0, 'fontSize': 48}}>Projects</h1>
                <Grid container spacing={16}>
                    {fullList}
                </Grid>
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
