import {  describe, test, expect } from 'vitest';
import recentReducer, { addRecent } from '../features/recents/recentsSlice';

describe('recentsSlice', () => {

    test('add a subreddit to an an empty list', () => {

        const initialState = {
            recent_subreddits: []
        };

        const newState = recentReducer(
            initialState,
            addRecent('React')
        );

        expect(newState.recent_subreddits).toEqual(['React']);

    });

    test('remove duplicates from list', () => {

        const initialState = {
            recent_subreddits: ['React', 'Movies']
        };

        const newState = recentReducer(
            initialState,
            addRecent('React')
        );

        expect(newState.recent_subreddits).toEqual(['React', 'Movies'])
    });

    test('limits list size to 8', () => {

        const initialState = {
            recent_subreddits: ['React', 'Movies', 'Gaming', 'Music', 'Films', 'Food', 'Sports', 'Soccer']
        };

        const newState = recentReducer(
            initialState,
            addRecent('Swimming')
        );

        expect(newState.recent_subreddits).toEqual(['Swimming','React', 'Movies', 'Gaming', 'Music', 'Films', 'Food', 'Sports'])
    });
});