import React from "react";
import "./PostCards.css";
import PostCard from "./PostCard/PostCard";

function PostCards() {

    //fake data were using to test
    let testPost = [{postName: "Check this out"}, {postName: "BRU! No Way"}]


    return (
        <div className="postCards">
            {testPost.map((post, index) => (
                <PostCard postName={post.postName} key={index}/>
            ))}
        </div>
    )
}

export default PostCards;