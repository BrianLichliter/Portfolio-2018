import React from "react"

class Post extends React.Component {
    render() {
        return <div>This is the {this.props.selectedPost} post.</div>
    }
}

export default Post;