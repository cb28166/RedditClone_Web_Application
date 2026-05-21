import { createSlice } from "@reduxjs/toolkit";


const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [
            {
                id: 1,
                content: "This is the post",
                title: "Welcome to Reddit Clone",
                author: "admin",
                subreddit: "Home",
                date: "01/31/2003",
                likes: 423,
                userVote: null
            },
            {
                id: 2,
                title: "React is awesome",
                content: "You can use react for so many things",
                author: "devUser",
                subreddit: "React",
                date: "06/04/2026",
                likes: 3578,
                userVote: null
            },
            {
                id: 3,
                content: "This is another post",
                title: "I am a clone",
                author: "admin",
                subreddit: "Home",
                date: "01/31/2003",
                likes: 23,
                userVote: null
            }
            
        ]
    },
    reducers: {
        downvote: (state, action) => {
            const post = state.posts.find(p => p.id === action.payload)
            if (!post) {
                return 
            }

            else if (post.userVote === "down") {
                post.userVote = null;
                post.likes += 1
                return 
            }

            else if (post.userVote === "up") {
                post.likes -= 2;
            }

            else {
                //this is if the userVote value is null so it treats it like normal and just goes down one value
                post.likes -= 1;
            }

            post.userVote = "down";
        },
        upvote: (state, action) => {
            const post = state.posts.find(p => p.id === action.payload)
            if (!post) {
                return
            }

            else if (post.userVote === "up") {
                post.userVote = null;
                post.likes -= 1;
                return 
            }

            else if (post.userVote === "down") {
                post.likes += 2;
            }

            else {
                post.likes += 1;
            }

            post.userVote = "up";
        }
    }
});

export default postSlice.reducer;
export const {downvote, upvote} = postSlice.actions;