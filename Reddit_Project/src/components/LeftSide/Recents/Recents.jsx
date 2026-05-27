import React from "react";
import "./Recents.css";

function Recents({ key, name, onClick }) {
    return (
        <button className="recents_buttons" onClick={onClick}>
            fr/{name}
        </button>
    )
}

export default Recents;