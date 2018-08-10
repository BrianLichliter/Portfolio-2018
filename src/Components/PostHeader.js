import React from 'react';
import Grid from '@material-ui/core/Grid';

class PostHeader extends React.Component {
    render() {
        return (
            <div style={{minHeight: 400, height: "65vh", backgroundColor: this.props.selectedPost.color, color: "white"}}>
                <Grid container spacing={0} justify="center" alignItems="center" style={{height: "calc(100% - 10px)"}}>
                    <img alt={this.props.selectedPost.image} style={{maxWidth: "90%", maxHeight: "90%", boxShadow: "rgba(0,0,0,.2) -5px 5px 50px 4px"}} src={this.props.selectedPost.imageURL}/>
                </Grid>
            </div>
        )
    }
}

export default PostHeader;