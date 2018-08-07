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
                                                        key={post.name} 
                                                        selected={this.props.selectedPost === post.name} 
                                                        onClick={this.handleClick.bind(this, post.name)}
                                                    >
                                                        {post.name}
                                                    </MenuItem>))
                }
            </div>
        )
    }
}

export default SideNav;