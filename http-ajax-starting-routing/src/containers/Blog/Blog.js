import React, { Component } from "react";
import { Route } from "react-router-dom";
import Posts from "./Posts/Posts";

//import Post from "../../components/Post/Post";
// import FullPost from "./Posts/FullPost/FullPost";
// import NewPost from "../../components/NewPost/NewPost";
//import axios from "axios";
//import axios from "../../axios";
import "./Blog.css";

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/new-post">New Post</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts} />
                {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
                {/* <Posts /> */}
                {/* <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;
