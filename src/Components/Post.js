import React from "react"


class Post extends React.Component {
    render() {
        return ( <div style={{backgroundColor: this.props.selectedPost.color, color: "white", overflowY: "scroll", maxHeight: "calc(100vh - 64px)"}}>
            <div style={{height: "200vh"}}>This is the {this.props.selectedPost.name} post.</div>
        </div> )
    }
}

export default Post;