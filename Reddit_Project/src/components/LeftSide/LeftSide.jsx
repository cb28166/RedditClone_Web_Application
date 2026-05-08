import React from "react";
import "./LeftSide.css";
import Recents from "./Recents/Recents";

function LeftSide() {
    return (
        <div className="leftSideHolder">
            <h2>Recent Subreddits</h2>
            <Recents />
            <h3>About the Website: </h3>
            <div className="aboutMe">
                <p>Developed for my Full-Stack Certification Course as a way to showcase my skills in topics like: </p>
                <ul className="list">
                    <li>HTML/CSS/JavaScript</li>
                    <li>React Development</li>
                    <li>Redux State management</li>
                    <li>API calls and processing</li>
                    <li>Building testing using Jest</li>
                </ul>
            </div>
        </div>
    )
}

export default LeftSide;