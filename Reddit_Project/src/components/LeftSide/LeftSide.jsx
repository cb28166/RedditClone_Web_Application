import React from "react";
import "./LeftSide.css";
import Recents from "./Recents/Recents";

function LeftSide() {
    return (
        <div className="leftSideHolder">
            <h2>Recent Subreddits</h2>
            <Recents />
        </div>
    )
}

export default LeftSide;