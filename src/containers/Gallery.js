import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const ProjectCardImage = styled(CardMedia)`
    height: 280px;
    width: 100%;
    background-size: 70% !important;
    background-color: ${props => props.color};
    @media (min-width: 960px) {
        min-height: 46vh;
    }
`

const ProjectCardText = styled(CardContent)`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%
    width: 100%;
    padding: 32px;
    background-color: rgba(0,0,0,.5);
    @media (min-width: 1920px) {
        font-size: 16px;
    }
    @media (min-width: 960px) {
        transition: background-color .15s;
        &:hover {
            background-color: rgba(0,0,0,.8);
        }
    }
`
class Post extends React.Component {
    componentDidMount() {
        this.props.fetchProjects();
    }

    render() { 
        const { projects } = this.props
        const fullList = (
            projects.map(project => {
                return (
                    <Grid item xs="12" md="6" xl="4">
                        <Link to={"/projects/" + project.client} style={{"textDecoration": "none"}} key={project.client}>
                            <Card>
                                <CardActionArea style={{'width': '100%', 'display': 'flex'}}>
                                    <ProjectCardText>
                                        <Typography gutterBottom variant="headline" component="h2" style={{'textAlign': 'center', 'color': 'white', 'fontSize': '3em', 'width': '90%'}}>
                                            {project.client}
                                        </Typography>
                                        <Typography gutterBottom style={{'textAlign': 'center', 'color': 'white', 'width': '90%', 'fontSize': '1.2em'}}>
                                            {project.tags.join(' | ')}
                                        </Typography>
                                    </ProjectCardText>
                                    <ProjectCardImage
                                    image={project.imageURL}
                                    title={project.client}
                                    color={project.color}
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
