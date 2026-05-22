import React from "react";
import { useState } from "react";
import "./PostCard.css";
import { ArrowBigUp, ArrowBigDown, MessageCircle } from "lucide-react";
import { useDispatch } from "react-redux";
import { downvote, upvote } from "../../../features/Posts/postSlice";
import Comments from "../../Comments/Comments";

function PostCard({ id, title, author, subreddit, content, date, likes, userVote, comments }) {

    const dispatch = useDispatch();
    const comments_size = comments.length;
    const [ showComments, setShowComments ] = useState(false);
    const [ visibleCommentCount, setVisibleCommentCount ] = useState(5);
    console.log(showComments);

    return (
        <div className="postCard">
            <div className="top_post_info">
                <div>fr/{subreddit}</div>
                <div>Posted by: {author}</div>
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
                <div className="date">{date}</div>
                <div className="comments">
                    <button 
                        className="comments_button"
                        onClick={() => {setShowComments(!showComments); setVisibleCommentCount(5);}}
                    >
                        <MessageCircle />
                    </button>
                    <p>{comments_size}</p>
                </div>
            </div>
            {showComments && (
                <div className="comments_section">
                    {comments.slice(0, visibleCommentCount).map((comment) => (
                        <Comments
                            key={comment.id}
                            author={comment.author}
                            text={comment.text}
                            className="comment_bubbles"
                        />
                    ))}
                    {comments.length > visibleCommentCount && (
                        <button
                            onClick={() => setVisibleCommentCount((prev) => prev + 5)}
                            className="more_comments_button"
                        >
                            View more comments
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}

export default PostCard;