import React from "react";
import "./Recents.css";
import { useSelector } from "react-redux";

function Recents({ key, name, onClick, icon }) {
    return (
        <button className="recents_buttons" onClick={onClick}>
            
            <img
                src={icon}
                alt={name}
                className="subreddit_icon"
            />

            <span>fr/{name}</span>
        </button>
    )
}

export default Recents;