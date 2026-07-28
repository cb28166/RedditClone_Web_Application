import React from "react";
import "./Comments.css";

function Comments({ author, text }) {
    return (
        <div className="comment">
            <p className="author">{author}</p>
            <p className="text">{text}</p>
        </div>
    )
};

export default Comments;