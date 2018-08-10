import React from 'react';
import ReactMarkdown from 'react-markdown';
import Grid from '@material-ui/core/Grid';
import './PostContent.css';

class PostContent extends React.Component {
    render() {
        return(
            <div className="PostContent" style={{backgroundColor: "rgb(248,248,248)", color: "black", fontSize: 24}}>
                <Grid container justify="center" spacing={24}>
                    <Grid item sm={12} md={11} lg={10} xl={8} style={{padding: "0px 32px"}}>  
                        <ReactMarkdown escapeHtml={false} source={this.props.selectedPost.article} />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default PostContent;