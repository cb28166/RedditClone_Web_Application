import React from "react";
import "./Popular.css";
import SubRedditCard from "../../LeftSide/Recents/SubRedditCard/SubRedditCard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSelectedSubReddit } from "../../../features/subReddits/subRedditsSlice";
import { addRecent } from "../../../features/recents/recentsSlice";

function Popular() {

    const subRedditData = useSelector(
        state => state.subReddits.subReddits
    );

    const dispatch = useDispatch();

    const popularSubreddits = [...subRedditData].sort((a, b) => b.followers - a.followers).slice(0, 10);

    return (
        <div className="popularHolder">
            {popularSubreddits?.map((subreddit) => {

                return (
                    <button key={subreddit.name} className="popular_buttons" onClick={() => {
                        console.log("This is the popular subreddit chosen: " + subreddit.name)
                        dispatch(setSelectedSubReddit(subreddit.name))
                        dispatch(addRecent(subreddit.name))}}>
            
                        <img
                            src={subreddit.icon}
                            alt={subreddit.name}
                            className="subreddit_icon"
                        />

                        <span>fr/{subreddit.name}</span>
                    </button>
                )
            })}
        </div>
    )
}


export default Popular;