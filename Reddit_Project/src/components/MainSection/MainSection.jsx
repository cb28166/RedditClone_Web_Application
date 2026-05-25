import React from "react";
import "./MainSection.css";
import PostCards from "../PostCards/PostCards";
import { useSelector } from "react-redux";


function MainSection() {

    const selectedSubreddit = useSelector((state) => state.subReddits.selectedSubReddit);
    console.log(selectedSubreddit)
    const post_array = useSelector((state) => state.posts.posts);

    const filteredPost = post_array.filter(
        (post) => post.subreddit === selectedSubreddit
    )

    console.log("ALL POSTS:", post_array);
    console.log("SELECTED:", selectedSubreddit);
    console.log("FILTERED:", filteredPost);


    return (
        <div className="mainSectionHolder">
            <div className="current_subreddit_info">
                <p>fr/{selectedSubreddit}</p>
            </div>
            <PostCards array_posts={filteredPost} />
        </div>
    )
}

export default MainSection;