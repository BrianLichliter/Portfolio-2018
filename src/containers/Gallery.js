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
        const cardHeight = 280
        const cardFontSize = 36
        const fullList = (
            projects.map(project => {
                return (
                    <Grid item xs="12" md="6" xl="4">
                        <Link to={"/projects/" + project.client} style={{"textDecoration": "none"}} key={project.client}>
                            <Card>
                                <CardActionArea style={{'width': '100%', 'display': 'flex'}}>
                                    <CardContent style={{'position': 'absolute', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'center', 'height': '100%', 'width': '100%', 'backgroundColor': 'rgba(0,0,0,.5)', 'padding': 32 }}>
                                        <Typography gutterBottom variant="headline" component="h2" style={{'textAlign': 'center', 'color': 'white', 'fontSize': cardFontSize, 'width': '90%'}}>
                                            {project.client}
                                        </Typography>
                                        <Typography gutterBottom style={{'textAlign': 'center', 'color': 'white', 'width': '90%'}}>
                                            {project.tags.join(' | ')}
                                        </Typography>
                                    </CardContent>
                                    <CardMedia
                                    image={project.imageURL}
                                    title={project.client}
                                    style={{'height': cardHeight, 'width': '100%', 'backgroundSize': '70%', 'backgroundColor': project.color}}
                                    />
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                )        
            })
        );

        return (
            <div className="gallery" style={{padding: 16}}>
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
