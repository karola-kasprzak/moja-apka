import React, { Component } from "react";
import axios from "axios";
import "./Posts.css";

import Post from "./Post/Post";
import FullPost from "./FullPost/FullPost";

class Posts extends Component {
    //upewnic sie ze dziala
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            selectedPostId: null,
        };
    }

    //co ja tu w ogole mialam??
    // state = {
    //     posts: [],
    //     selectedPostId: null,
    // };

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

    deletePostHandler = (id) => {
        console.log(id);
        // let newPosts = this.state.posts.filter((item) => item.id != id);
        // console.log(newPosts);
        // this.setState({ posts: newPosts });
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
                    <FullPost
                        id={this.state.selectedPostId}
                        delete={this.deletePostHandler}
                    />
                </section>
            </div>
        );
    }
}

export default Posts;
