import React from "react";
import "./PostCard.css";

function PostCard({ id, title, author, subreddit, content, date }) {
    return (
        <div className="postCard">
            <div className="top_post_info">
                <div>fr/{subreddit}</div>
                <div>{date}</div>
            </div>
            <div className="title">{title}</div>
            <div className="content">{content}</div>
            <div className="post_info">
                <div>Post Number: {id}</div>
                <div>Posted by: {author}</div>
            </div>
        </div>
    )
}

export default PostCard;