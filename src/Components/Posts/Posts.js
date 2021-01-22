import React, { Component } from "react";
import axios from "axios";
import "./Posts.css";

import Post from "./Post/Post";
import FullPost from "./FullPost/FullPost";

class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
    };

    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                this.setState({
                    posts: response.data.slice(0, 12),
                });
            })
            .catch((err) => console.log(err));
    }

    postClickedHandler = (id) => {
        this.setState({ selectedPostId: id });
    };

    render() {
        const posts = this.state.posts.map((post) => {
            return (
                <Post
                    key={post.id}
                    title={post.title}
                    author={post.userId}
                    body={post.body}
                    clicked={() => this.postClickedHandler(post.id)}
                />
            );
        });
        return (
            <div className="Posts-Container">
                <section className="Posts-All">{posts}</section>
                <section className="Posts-FullPost">
                    <FullPost id={this.state.selectedPostId} />
                </section>
            </div>
        );
    }
}

export default Posts;
