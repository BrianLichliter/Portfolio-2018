import React from "react";
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
    card: {
      maxWidth: "100%",
    },
    media: {
      height: "50vh",
      //paddingTop: '75%', // 16:9
    },
  };

class Post extends React.Component {
    render() {
        const { classes } = this.props;
        return ( <div style={{overflowY: "scroll", maxHeight: "calc(100vh - 64px)", zIndex: -1}}>
            <div style={{height: "60vh", backgroundColor: this.props.selectedPost.color, color: "white"}}>
                <Grid container spacing={0} justify="center" alignItems="center" style={{height: "100%"}}>
                    <Grid item xs={7}>
                        <Card className={classes.card} elevation={12}>
                            <CardMedia
                            className={classes.media}
                            image={this.props.selectedPost.image}
                            />
                        </Card>
                    </Grid>
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

Post.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Post);