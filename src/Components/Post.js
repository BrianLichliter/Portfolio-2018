import React from "react";
import ReactMarkdown from 'react-markdown'
import Grid from '@material-ui/core/Grid';

class Post extends React.Component {
    render() {
        return ( <div style={{overflowY: "scroll", overflowX: "hidden", maxHeight: "calc(100vh - 64px)", zIndex: -1}}>
            <div style={{height: "65vh", backgroundColor: this.props.selectedPost.color, color: "white"}}>
                <Grid container spacing={0} justify="center" alignItems="center" style={{height: "100%"}}>
                    <img alt={this.props.selectedPost.image} style={{maxHeight: "55vh", borderRadius: 5, boxShadow: "rgba(0,0,0,.2) -5px 5px 50px 4px"}} src={this.props.selectedPost.imageURL}/>
                </Grid>
            </div>
            <div style={{height: 1000, backgroundColor: "rgb(248,248,248)", color: "black"}}>
                <Grid container spacing={24}>
                    <Grid item xs={12} style={{padding: "0px 32px"}}>                
                        <ReactMarkdown source={this.props.selectedPost.article} />
                    </Grid>
                </Grid>
            </div>
        </div> )
    }
}

export default Post;