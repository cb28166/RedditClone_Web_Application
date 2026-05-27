import { createSlice } from "@reduxjs/toolkit";

const recentsSlice = createSlice({
    name: "recents",
    initialState: {
        recent_subreddits: []
    },
    reducers: {
        addRecent: (state, action) => {
            const subreddit = action.payload

            state.recent_subreddits = state.recent_subreddits.filter(sub => sub != subreddit)
            state.recent_subreddits.unshift(subreddit )
            if (state.recent_subreddits.length > 6) {
                state.recent_subreddits.pop();
            }
        }
    }
});

export default recentsSlice.reducer;
export const { addRecent } = recentsSlice.actions;