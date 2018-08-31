import React from 'react';
import ReactMarkdown from 'react-markdown';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

const StyledReactMarkdown = styled(ReactMarkdown)`
    font-family: roboto;

    img {
        max-width: 100%;
        max-height: 450px;
        margin: 0 auto;
        display: block;
    }

    h1 {
        margin: 0px;
        font-size: 1.8em;
    }

    h2 {
        color: ${props => props.color};
        font-style: italic;
        text-align: center;
        @media screen and (min-width: 1000px) {
            padding: 0 64px;
        }
    }

    p {
        &:first-child {
            font-size: 18px;
        }

        font-size: 18px;
        line-height: 1.825;

        @media screen and (min-width: 320px) {
            font-size: calc(18px + 4 * ((100vw - 320px) / 680));
        }
        @media screen and (min-width: 1000px) {
            font-size: 22px;
        }
    }
`

class PostContent extends React.Component {
    render() {
        console.log(this.props.selectedProject)
        return(
            <div className="PostContent" style={{backgroundColor: "rgb(248,248,248)", color: "black", fontSize: 24, minHeight: "65vh"}}>
                <Grid container justify="center">
                    <Grid item sm={12} md={11} lg={9} xl={8} style={{padding: "0px 16px"}}>  
                        <StyledReactMarkdown escapeHtml={false} source={this.props.selectedProject.article} color={this.props.selectedProject.color}/>
                    </Grid>
                </Grid>
                <div style={{height: 60}}></div>
            </div>
        )
    }
}

export default PostContent;