import { configureStore } from "@reduxjs/toolkit";
import subRedditReducer from "./features/subReddits/subRedditsSlice";
import postReducer from "./features/Posts/postSlice";
import recentReducer from "./features/recents/recentsSlice";


const store = configureStore({
    reducer: {
        subReddits: subRedditReducer,
        posts: postReducer,
        recents: recentReducer
    }
})

export default store;