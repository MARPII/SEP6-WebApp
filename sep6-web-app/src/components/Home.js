import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="page page1">
            <div className="flagTop" />
            <div className="flagCenter">
                <h1 className="country">Welcome to the Homepage</h1>
                <div className="otherLinks">
                    <Link to="/FlightsPerMonth">Nigeria</Link>
                    <Link to="/">Home</Link>
                </div>
            </div>
            <div className="flagBottom" />
        </div>
    );
};

export default Home;