import React, { Component } from "react";

class Course extends Component {
    state = {
        courseTitle: "",
        courseId: "",
    };

    componentDidMount() {
        this.parseQueryParams();
    }

    componentDidUpdate() {
        this.parseQueryParams();
    }

    parseQueryParams() {
        /*         const query = new URLSearchParams(this.props.location.search);

        for (let param of query.entries()) {
            if (this.state.courseTitle !== param[1]) {
                this.setState({
                    courseTitle: param[1],
                });
            }
        } */

        const courseId = this.props.match.params.courseId;
        const courseTitle = this.props.location.search
            .split("=")[1]
            .replaceAll("%20", " ");

        if (this.state.courseTitle !== courseTitle) {
            this.setState({
                courseTitle: courseTitle,
                courseId: courseId,
            });
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.courseTitle}</h1>
                <p>You selected the Course with ID: {this.state.courseId}</p>
            </div>
        );
    }
}

export default Course;
