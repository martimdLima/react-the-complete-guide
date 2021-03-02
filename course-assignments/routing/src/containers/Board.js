import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import Courses from "./Courses/Courses";
import Users from "./Users/Users";

import "./Board.css";

class Board extends Component {
    render() {
        return (
            <div className="Board">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    exact
                                    to="/users"
                                    activeClassName="currently-active"
                                    activeStyle={{
                                        color: "#fa923f",
                                        textDecoration: "underline",
                                    }}>
                                    Users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={{
                                        pathname: "/courses",
                                    }}>
                                    Courses
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>

                <Switch>
                    <Route path="/courses" component={Courses} />
                    <Route path="/users" component={Users} />
                    <Route path="/" render={() => <h1>Home</h1>} />
                    <Redirect from="/all-courses" to="/courses" />
                    <Route render={() => <h1>Not found</h1>} />
                </Switch>
            </div>
        );
    }
}

export default Board;
