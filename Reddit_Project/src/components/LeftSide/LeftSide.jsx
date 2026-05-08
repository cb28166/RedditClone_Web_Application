import React from "react";
import "./LeftSide.css";
import Recents from "./Recents/Recents";

function LeftSide() {
    return (
        <div className="leftSideHolder">
            <h2>Recent Subreddits</h2>
            <Recents />
            <div className="aboutMe">
                <h3>About the Website: </h3>
                <p>Developed for my Full-Stack Certification Course as a way to showcase my skills in topics like: </p>
                <ul className="list">
                    <li>HTML/CSS/JavaScript</li>
                    <li>React Development</li>
                    <li>Redux State management</li>
                    <li>API calls and processing</li>
                    <li>Building testing using Jest</li>
                </ul>
                <p>For more information on me checkout my portfolio: <a href="https://cb28166.github.io/Personal-Website-Portfolio/" target="_blank">My Website</a></p>
            </div>
        </div>
    )
}

export default LeftSide;