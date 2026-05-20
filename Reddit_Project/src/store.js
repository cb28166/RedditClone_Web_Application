import { configureStore } from "@reduxjs/toolkit";
import subRedditReducer from "./features/subReddits/subRedditsSlice";
import postReducer from "./features/Posts/postSlice";


const store = configureStore({
    reducer: {
        subReddits: subRedditReducer,
        posts: postReducer
    }
})

export default store;