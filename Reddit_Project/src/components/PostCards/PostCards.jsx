import React from "react";
import "./PostCards.css";
import PostCard from "./PostCard/PostCard";

function PostCards({ array_posts }) {


    return (
        <div className="postCards">
            {array_posts.map((post) => (
                <PostCard 
                    key={post.id}
                    id={post.id} 
                    title={post.title}
                    selftext={post.selftext}
                    url={post.url}
                    post_hint={post.post_hint}
                    author={post.author} 
                    subreddit={post.subreddit} 
                    date={post.created_utc}
                    userVote={post.userVote}
                    ups={post.ups}
                    num_comments={post.num_comments}
                    comments={post.comments}/>
            ))}
        </div>
    )
}

export default PostCards;