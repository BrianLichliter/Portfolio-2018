import React from "react"


class Post extends React.Component {
    render() {
        return ( <div style={{overflowY: "scroll", maxHeight: "calc(100vh - 64px)", zIndex: -1}}>
            <div style={{height: "80vh", backgroundColor: this.props.selectedPost.color, color: "white"}}>
                This is the {this.props.selectedPost.name} header.
            </div>
            <div style={{height: 1000, backgroundColor: "rgb(248,248,248)", color: "black"}}>
                This is the {this.props.selectedPost.name} post.
            </div>
        </div> )
    }
}

export default Post;