import { describe, test, expect } from 'vitest';
import subRedditReducer, { setSelectedSubReddit } from "../features/subReddits/subRedditsSlice";


describe('subReddits Slice', () => {

    test('make selected subreddit the selectedSubreddit', () => {

        const initialState = {
            selectedSubReddit: "None"
        };

        const newState = subRedditReducer(
            initialState,
            setSelectedSubReddit('React')
        );

        expect(newState.selectedSubReddit).toBe('React');
    })
})