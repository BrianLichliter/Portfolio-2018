import React from 'react';
import ReactMarkdown from 'react-markdown';
import Grid from '@material-ui/core/Grid';
import './PostContent.css';

class PostContent extends React.Component {
    render() {
        return(
            <div className="PostContent" style={{backgroundColor: "rgb(248,248,248)", color: "black", fontSize: 24, minHeight: "65vh"}}>
                <Grid container justify="center">
                    <Grid item sm={12} md={11} lg={9} xl={8} style={{padding: "0px 32px"}}>  
                        <ReactMarkdown escapeHtml={false} source={this.props.selectedProject.article} />
                    </Grid>
                </Grid>
                <div style={{height: 60}}></div>
            </div>
        )
    }
}

export default PostContent;