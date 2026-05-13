import React from "react";
import "./Recents.css";
import SubRedditCard from "./SubRedditCard/subRedditCard";

function Recents() {
    return (
        <div className="recentsHolder">
            <SubRedditCard />
        </div>
    )
}

export default Recents;