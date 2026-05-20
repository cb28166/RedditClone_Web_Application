import React from "react";
import "./LeftSide.css";
import Recents from "./Recents/Recents";
import { setSelectedSubReddit } from "../../features/subReddits/subRedditsSlice";
import { useDispatch } from "react-redux";

const fakeSubreddits = [
        "Home",
        "React",
        "Gaming",
        "Movies",
        "Music"
    ];


function LeftSide() {

    const dispatch = useDispatch();

    return (
        <div className="leftSideHolder">
            <h2>Recent Subreddits</h2>
            <Recents />
            {fakeSubreddits.map((name) => (
                <button key={name} onClick={() => {
                    dispatch(setSelectedSubReddit(name))
                }}>
                    {name}
                </button>
            ))}
        </div>
    )
}

export default LeftSide;