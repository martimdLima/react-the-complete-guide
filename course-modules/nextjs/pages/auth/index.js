import React from "react";

import User from "../../components/User"

const authIndexPage = () => {
    return (
        <div>
            <h1>The Auth Page</h1>
            <User name="john Doe" age="24" />
        </div>
    );
};

export default authIndexPage;
