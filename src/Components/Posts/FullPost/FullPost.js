import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
    state = {
        loadedPost: null,
        deleted: false,
    };

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
                        this.setState({ loadedPost: response.data });
                    });
            }
        }
    }

    handleDelete = () => {
        this.props.delete(this.props.id);
        this.setState({
            deleted: true,
        });
    };

    render() {
        let post = <p className="FullPost">Select a post</p>;

        if (this.props.id) {
            post = <p className="FullPost">Loading...</p>;
        }

        if (this.state.deleted) {
            post = <p className="FullPost">[Post deleted]</p>;
        }

        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <p className="Author">
                        User ID: {this.state.loadedPost.userId}
                    </p>
                    <div className="Edit">
                        <button onClick={this.handleDelete} className="Delete">
                            Delete
                        </button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;
