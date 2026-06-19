import { describe, test, expect } from "vitest";
import postReducer, { upvote, downvote } from "../features/Posts/postSlice";

describe('postSlice: Upvote', () => {

    test('adds an upvote if user has not voted before', () => {

        const initialState = {
            posts: [
                {
                    id: "1",
                    ups: 10
                }
            ],
            userVotes: {}
        }

        const newState = postReducer(
            initialState,
            upvote("1")
        )

        expect(newState.userVotes["1"]).toBe('up');
        expect(newState.posts[0].ups).toBe(11);
    });

    test('if user voted downVote before and then they click upvote it turns into an upvote', () => {


        const initialState = {
            posts: [
                {
                    id: "1",
                    ups: 10
                }
            ],
            userVotes: {
                "1": "down"
            }
        }

        const newState = postReducer(
            initialState,
            upvote("1")
        )

        expect(newState.userVotes["1"]).toBe('up');
        //we test for 12 becasue if the value is 10 but stored as a downvote, when the user clicks upvote the value will be increased by two
        //this simulates the 'downvote' being taken away and then an upvote being added
        expect(newState.posts[0].ups).toBe(12);
    });

    test('if user voted up previously, then voting up again will set it back to no vote to avoid spamming votes', () => {

        const initialState = {
            posts: [
                {
                    id: "1",
                    ups: 10
                }
            ],
            userVotes: {
                "1": "up"
            }
        }

        const newState = postReducer(
            initialState,
            upvote("1")
        )

        //we check for null becasue if a user is unselecting their vote by clicking up again, then it will delete that value in the userVotes
        expect(newState.userVotes["1"]).toBe(undefined);
        //we check for 9 because if they take away their vote by clicking upvote again, it will remove a vote to simulate that
        expect(newState.posts[0].ups).toBe(9);
        
    });

    test('only the selected post will be effected by user clicking on upvote', () => {

        const initialState = {
            posts: [
                {
                    id: "1",
                    ups: 99
                },
                {
                    id: "2",
                    ups: 10
                }
            ],
            userVotes: {
                "1": "up",
                "2": "down"
            }
        }

        const newState = postReducer(
            initialState,
            upvote("1")
        )

        expect(newState.posts[1].ups).toBe(10);
        expect(newState.userVotes["2"]).toBe("down")
        //we are calling upvote on post id: 1 so post id: 2 will be uneffected 
    });
});

describe('PostSlice: Downvote', () => {

    test('adds an downvote if user has not voted before', () => {

        const initialState = {
            posts: [
                {
                    id: "1",
                    ups: 10
                }
            ],
            userVotes: {}
        }

        const newState = postReducer(
            initialState,
            downvote("1")
        )

        expect(newState.userVotes["1"]).toBe('down');
        expect(newState.posts[0].ups).toBe(9);
    });

    test('if user voted upVote before and then they click downvote it turns into an downvote', () => {


        const initialState = {
            posts: [
                {
                    id: "1",
                    ups: 10
                }
            ],
            userVotes: {
                "1": "up"
            }
        }

        const newState = postReducer(
            initialState,
            downvote("1")
        )

        expect(newState.userVotes["1"]).toBe('down');
        //we test for 8 becasue if the value is 10 but stored as a upvote, when the user clicks downvote the value will be decreased by two
        //this simulates the 'upvote' being taken away and then an downvote being added
        expect(newState.posts[0].ups).toBe(8);
    });

    test('if user voted down previously, then voting down again will set it back to no vote to avoid spamming votes', () => {

        const initialState = {
            posts: [
                {
                    id: "1",
                    ups: 10
                }
            ],
            userVotes: {
                "1": "down"
            }
        }

        const newState = postReducer(
            initialState,
            downvote("1")
        )

        //we check for null becasue if a user is unselecting their vote by clicking up again, then it will delete that value in the userVotes
        expect(newState.userVotes["1"]).toBe(undefined);
        //we check for 11 because if they take away their vote by clicking downvote again, it will add a vote to simulate that
        expect(newState.posts[0].ups).toBe(11);
        
    });

    test('only the selected post will be effected by user clicking on downvote', () => {

        const initialState = {
            posts: [
                {
                    id: "1",
                    ups: 99
                },
                {
                    id: "2",
                    ups: 10
                }
            ],
            userVotes: {
                "1": "up",
                "2": "down"
            }
        }

        const newState = postReducer(
            initialState,
            upvote("1")
        )

        expect(newState.posts[1].ups).toBe(10);
        expect(newState.userVotes["2"]).toBe("down")
        //we are calling upvote on post id: 1 so post id: 2 will be uneffected 
    });
});