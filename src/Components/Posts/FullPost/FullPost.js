import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postID: null,
            loadedPost: null,
        };
    }

    componentDidUpdate() {
        if (this.props.id) {
            if (
                !this.state.loadedPost ||
                (this.state.loadedPost &&
                    this.state.loadedPost.id !== this.props.id)
            ) {
                axios
                    .get(
                        `https://jsonplaceholder.typicode.com/posts/${this.props.id}`
                    )
                    .then((response) => {
                        this.setState({
                            postID: this.props.id,
                            loadedPost: response.data,
                        });
                    });
            }
        }
    }

    handleDelete = () => {
        this.props.delete(this.state.postID);
        this.setState({ postID: null });
    };

    render() {
        let post = <p className="FullPost">Select a post</p>;

        if (this.state.postID) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <p className="Author">
                        User ID: {this.state.loadedPost.userId}
                    </p>

                    <button onClick={this.handleDelete} className="Delete">
                        Delete
                    </button>
                </div>
            );
        }

        return post;
    }
}

export default FullPost;
