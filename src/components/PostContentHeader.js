import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

const Header = styled.div`
    min-height: 200px;
    height: 60vh;
    max-height: 500px;
    background-color: ${props => props.color};
    color: white;

    @media screen and (max-width: 400px) {
        max-height: 35vh;
    }

    img {
        max-width: 90%;
        max-height: 90%;

    }
`

class PostContentHeader extends React.Component {
    render() {
        return (
            <Header color={this.props.selectedProject.color}>
                <Grid container spacing={0} justify="center" alignItems="center" style={{height: "calc(100% - 10px)"}}>
                    <img alt={this.props.selectedProject.image} src={this.props.selectedProject.imageURL}/>
                </Grid>
            </Header>
        )
    }
}

export default PostContentHeader;