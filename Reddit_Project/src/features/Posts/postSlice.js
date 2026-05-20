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
                date: "01/31/2003"
            },
            {
                id: 2,
                title: "React is awesome",
                content: "You can use react for so many things",
                author: "devUser",
                subreddit: "React",
                date: "06/04/2026"
            },
            {
                id: 3,
                content: "This is another post",
                title: "I am a clone",
                author: "admin",
                subreddit: "Home",
                date: "01/31/2003"
            }
            
        ]
    },
    reducers: {

    }
});

export default postSlice.reducer;