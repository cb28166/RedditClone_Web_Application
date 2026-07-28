import { configureStore } from "@reduxjs/toolkit";
import subRedditReducer from "./features/subReddits/subRedditsSlice";
import postReducer from "./features/Posts/postSlice";
import recentReducer from "./features/recents/recentsSlice";
import searchReducer from "./features/search/searchSlice";


const store = configureStore({
    reducer: {
        subReddits: subRedditReducer,
        posts: postReducer,
        recents: recentReducer,
        search: searchReducer
    }
})

export default store;