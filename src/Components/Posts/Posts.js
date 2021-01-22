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
                const posts = response.data.slice(0, 10);
                const updatedPosts = posts.map((post) => {
                    return {
                        ...post,
                        author: "Unknown",
                    };
                });
                this.setState({
                    posts: updatedPosts,
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
                    author={post.author}
                    body={post.body}
                    clicked={() => this.postClickedHandler(post.id)}
                />
            );
        });
        return (
            <div>
                <section className="Posts-Container">{posts}</section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
            </div>
        );
    }
}

export default Posts;
