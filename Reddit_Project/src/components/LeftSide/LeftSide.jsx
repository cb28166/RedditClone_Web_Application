import React from "react";
import "./LeftSide.css";
import Recents from "./Recents/Recents";
import { setSelectedSubReddit } from "../../features/subReddits/subRedditsSlice";
import { addRecent } from "../../features/recents/recentsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function LeftSide() {

    const dispatch = useDispatch();
    const recent_array = useSelector((state) => state.recents.recent_subreddits);
    console.log("THIS is the recents_array: " + recent_array);

    const subreddit_data = useSelector(
            (state) => state.subReddits.subReddits
        );

    return (
        <div className="leftSideHolder">
            <h2>Recent Subreddits</h2>
            <div className="recentsHolder">
                {recent_array?.map((subreddit) => {

                    const subData = subreddit_data.find(
                        (sub) => sub.name === subreddit
                    );


                    return (
                        <Recents
                        key={subreddit}
                        name={subreddit}
                        icon={subData?.icon}
                        onClick={() => dispatch(setSelectedSubReddit(subreddit))}
                    />
                    );
                })}
            </div>
        </div>
    )
}

export default LeftSide;