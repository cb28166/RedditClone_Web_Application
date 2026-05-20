import React from "react";
import "./PostCards.css";
import PostCard from "./PostCard/PostCard";

function PostCards({ array_posts }) {

    return (
        <div className="postCards">
            {array_posts.map((post, index) => (
                <PostCard id={post.id} title={post.title} author={post.author} subreddit={post.subreddit} content={post.content} date={post.date}/>
            ))}
        </div>
    )
}

export default PostCards;