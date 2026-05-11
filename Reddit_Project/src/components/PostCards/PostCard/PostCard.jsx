import React from "react";
import "./PostCard.css";

function PostCard({ postName, key }) {
    return (
        <div className="postCard">
            <p>{postName}</p>
            <p>Post Number: {key}</p>
        </div>
    )
}

export default PostCard;