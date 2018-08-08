import React from "react";
import ReactMarkdown from 'react-markdown'
import Grid from '@material-ui/core/Grid';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: ''
        }
    }

    componentDidUpdate() {
        if(this.props.selectedPost.articleURL) {
            var url = this.props.selectedPost.articleURL;
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = (event) => {
                const reader = new FileReader();
                // This fires after the blob has been read/loaded.
                reader.addEventListener('loadend', (e) => {
                    this.setState({
                        article: e.srcElement.result
                    })                    
                    console.log(e.srcElement.result);
                });
                // Start reading the blob as text.
                reader.readAsText(xhr.response);
            };
            xhr.open('GET', url);
            xhr.send();
        }
    }

    render() {
        return ( <div style={{overflowY: "scroll", overflowX: "hidden", maxHeight: "calc(100vh - 64px)", zIndex: -1}}>
            <div style={{minHeight: 400, height: "65vh", backgroundColor: this.props.selectedPost.color, color: "white"}}>
                <Grid container spacing={0} justify="center" alignItems="center" style={{height: "100%"}}>
                    <img alt={this.props.selectedPost.image} style={{minHeight: 330, maxHeight: "55vh", borderRadius: 5, boxShadow: "rgba(0,0,0,.2) -5px 5px 50px 4px"}} src={this.props.selectedPost.imageURL}/>
                </Grid>
            </div>
            <div style={{height: 1000, backgroundColor: "rgb(248,248,248)", color: "black"}}>
                <Grid container justify="center" spacing={24}>
                    <Grid item xs={12} sm={10} md={9} lg={8} style={{padding: "0px 32px"}}>                
                        <ReactMarkdown escapeHtml={false} source={this.state.article} />
                    </Grid>
                </Grid>
            </div>
        </div> )
    }
}

export default Post;