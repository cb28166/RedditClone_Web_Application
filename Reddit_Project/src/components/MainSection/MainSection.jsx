import React from "react";
import "./MainSection.css";
import PostCards from "../PostCards/PostCards";
import { useSelector } from "react-redux";
import { useEffect } from "react";


function MainSection() {

    const subreddit_data = useSelector(
        (state) => state.subReddits.subReddits
    );

    const searchTerm = useSelector(
        state => state.search.searchTerm
    );

    const selectedSubreddit = useSelector((state) => state.subReddits.selectedSubReddit);

    const selectedSubreddit_data = subreddit_data.find(
        (sub) => sub.name === selectedSubreddit
    )

    console.log(selectedSubreddit)
    const post_array = useSelector((state) => state.posts.posts);

    const filteredPost = post_array.filter(
        (post) => post.subreddit === selectedSubreddit_data?.name
    )

    useEffect(() => {
        fetch("/reddit/r/react/.json")
            .then(response => response.json())
            .then(data =>  {
                console.log(data.data.children);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className="mainSectionHolder">
            <div className="current_subreddit_info">
                <img
                    src={selectedSubreddit_data?.icon}
                    alt={selectedSubreddit_data?.name}
                    className="subreddit_icon_main"
                />
                <span>fr/{selectedSubreddit_data?.name}</span>
            </div>
            <PostCards array_posts={filteredPost} />
        </div>
    )

}

export default MainSection;