import { createSlice } from "@reduxjs/toolkit";


const subRedditSlice = createSlice({
    name: "subReddits",
    initialState: {
        selectedSubReddit: "Home"
    },
    reducers: {
        setSelectedSubReddit: (state, action) => {
            state.selectedSubReddit = action.payload
        }
    }
})



export default subRedditSlice.reducer;
export const { setSelectedSubReddit } = subRedditSlice.actions;