import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import Posts from "./Posts/Posts";
import asyncComponent from "../../hoc/asyncComponent";
import "./Blog.css";

const asyncNewPost = asyncComponent(() => {
    return import("./NewPost/NewPost");
});
//import NewPost from "./NewPost/NewPost";
//import FullPost from "./FullPost/FullPost";

//import Post from "../../components/Post/Post";

//import axios from "axios";
//import axios from "../../axios";

class Blog extends Component {
    state = {
        auth: true,
    };

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    exact
                                    to="/posts/"
                                    activeClassName="currently-active"
                                    activeStyle={{
                                        color: "#fa923f",
                                        textDecoration: "underline",
                                    }}>
                                    Posts
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={{
                                        pathname: "/new-post/",
                                        hash: "#submit",
                                        search: "?quick-submit=true",
                                    }}>
                                    New Post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>

                <Switch>
                    {this.state.auth ? (
                        <Route path="/new-post/" component={asyncNewPost} />
                    ) : null}
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h1>Not found</h1>} />
                    {/* <Route path="/" component={Posts} />
                    <Redirect from="/" to="/posts" /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;
