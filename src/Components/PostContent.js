import React from 'react';
import ReactMarkdown from 'react-markdown';
import Grid from '@material-ui/core/Grid';
import './PostContent.css';
import Hidden from '@material-ui/core/Hidden';

class PostContent extends React.Component {
    render() {
        return(
            <div className="PostContent" style={{backgroundColor: "rgb(248,248,248)", color: "black", fontSize: 24, minHeight: "65vh"}}>
                <Grid container justify="center">
                    <Grid item sm={12} md={11} lg={10} xl={8} style={{padding: "0px 32px"}}>  
                        <ReactMarkdown escapeHtml={false} source={this.props.selectedPost.article} />
                    </Grid>
                </Grid>
                <Hidden smUp>
                    <div style={{height: 60}}></div>
                </Hidden>
            </div>
        )
    }
}

export default PostContent;