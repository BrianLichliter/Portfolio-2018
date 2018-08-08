import React from "react";
import MenuItem from '@material-ui/core/MenuItem';

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(post) {
        this.props.changeSelectedPost(post);
    }

    render() {
        return (
            <div>
                { this.props.postList.map(post => (<MenuItem 
                                                        key={post.client} 
                                                        selected={this.props.selectedPost.client === post.client} 
                                                        onClick={this.handleClick.bind(this, post)}
                                                    >
                                                        {post.client}
                                                    </MenuItem>))
                }
            </div>
        )
    }
}

export default SideNav;