import React from "react";
import "./RightSide.css";
import Popular from "./Popular/Popular";

function RightSide() {
    return (
        <div className="rightSideHolder">
            <h2>Popular Subreddits</h2>
            <Popular />
        </div>
    )
}

export default RightSide;