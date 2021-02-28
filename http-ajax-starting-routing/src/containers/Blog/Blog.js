import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
// import FullPost from "./Posts/FullPost/FullPost";

//import Post from "../../components/Post/Post";

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
                                <NavLink to="/" activeClassName="currently-active" activeStyle={{color: "#fa923f", textDecoration: "underline"}} exact>Home</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={{
                                        pathname: "/new-post",
                                        hash: "#submit",
                                        search: "?quick-submit=true",
                                    }}>
                                    New Post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;
