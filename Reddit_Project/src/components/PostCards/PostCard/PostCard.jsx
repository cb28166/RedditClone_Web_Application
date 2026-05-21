import React from "react";
import "./PostCard.css";
import { ArrowBigUp, ArrowBigDown } from "lucide-react";
import { useDispatch } from "react-redux";
import { downvote, upvote } from "../../../features/Posts/postSlice";

function PostCard({ id, title, author, subreddit, content, date, likes, userVote }) {

    const dispatch = useDispatch();

    return (
        <div className="postCard">
            <div className="top_post_info">
                <div>fr/{subreddit}</div>
                <div>{date}</div>
            </div>
            <div className="title">{title}</div>
            <div className="content">{content}</div>
            <div className="post_info">
                <div className="button_section">
                    <button 
                        className={userVote === "up" ? "upvote activeUpvote" : "upvote"}
                        onClick={() => dispatch(upvote(id))}>
                            <ArrowBigUp /> 
                    </button>
                    <p>{likes}</p>
                    <button 
                        className={userVote === "down" ? "downvote activeDownvote" : "downvote"} 
                        onClick={() => dispatch(downvote(id))}>
                            <ArrowBigDown />
                    </button>  
                </div>
                <div>Posted by: {author}</div>
            </div>
        </div>
    )
}

export default PostCard;