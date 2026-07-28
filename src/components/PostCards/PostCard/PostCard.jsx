import React from "react";
import { useState } from "react";
import "./PostCard.css";
import { ArrowBigUp, ArrowBigDown, MessageCircle } from "lucide-react";
import { useDispatch } from "react-redux";
import { downvote, upvote } from "../../../features/Posts/postSlice";
import Comments from "../../Comments/Comments";
import { formatDistanceToNow } from "date-fns";
import { useSelector } from 'react-redux';

function PostCard({ id, title, author, subreddit, selftext, date, ups, comments, num_comments, post_hint, url}) {

    const dispatch = useDispatch();
    const comments_size = num_comments;
    const [ showComments, setShowComments ] = useState(false);
    const [ visibleCommentCount, setVisibleCommentCount ] = useState(5);
    const [isExpanded, setIsExpanded] = useState(false);
    const text = selftext || "";
    console.log(showComments);
    const userVote = useSelector(
        (state) => state.posts.userVotes[id]
    );

    console.log(text.length);

    return (
        <div className="postCard">
            <div className="top_post_info">
                <div className="subreddit">fr/{subreddit}</div>
                <div className="posted_by">Posted by: {author}</div>
            </div>
            <div className="title">{title}</div>
            <div className="content">
                {post_hint === "self" && (
                    <div
                        className="text_content"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                    {isExpanded
                        ? text
                        : text.length > 250
                            ? text.slice(0, 250) + "..."
                            : text}
                    </div>
                )}

                {post_hint === "image" && (
                    <img
                        src={url}
                        alt={title}
                        className="post_image"
                    />
                )}
            </div>
            <div className="post_info">
                <div className="button_section">
                    <button 
                        className={userVote === "up" ? "upvote activeUpvote" : "upvote"}
                        onClick={() => dispatch(upvote(id))}>
                            <ArrowBigUp /> 
                    </button>
                    <p>{ups}</p>
                    <button 
                        className={userVote === "down" ? "downvote activeDownvote" : "downvote"} 
                        onClick={() => dispatch(downvote(id))}>
                            <ArrowBigDown />
                    </button>  
                </div>
                <div className="date">{formatDistanceToNow(new Date(date * 1000), { addSuffix: true })}</div>
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
                            text={comment.body}
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