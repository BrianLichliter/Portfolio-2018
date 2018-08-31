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
`

class PostHeader extends React.Component {
    render() {
        return (
            <Header color={this.props.selectedProject.color}>
                <Grid container spacing={0} justify="center" alignItems="center" style={{height: "calc(100% - 10px)"}}>
                    <img alt={this.props.selectedProject.image} style={{maxWidth: "90%", maxHeight: "90%", boxShadow: "rgba(0,0,0,.2) -5px 5px 50px 4px"}} src={this.props.selectedProject.imageURL}/>
                </Grid>
            </Header>
        )
    }
}

export default PostHeader;