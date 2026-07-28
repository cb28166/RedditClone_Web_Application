import { describe, test, expect } from "vitest";
import '@testing-library/jest-dom/vitest';
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import userEvent from "@testing-library/user-event";
import subRedditReducer from "../features/subReddits/subRedditsSlice";
import recentReducer from "../features/recents/recentsSlice";


import Popular from '../components/RightSide/Popular/Popular';

afterEach(() => {
    cleanup();
});

const testStore = configureStore({
    reducer: {
        subReddits: () => ({
            subReddits: [
                {
                    name: "React", followers: 1000, icon: 'react.png'
                },
                {
                    name: "Music", followers: 1300, icon: "music.png"
                },
                {
                    name: "Gaming", followers: 800, icon: "gaming.png"
                },
                {
                    name: "Drinks", followers: 700, icon: "gaming.png"
                },
                {
                    name: "Food", followers: 600, icon: "gaming.png"
                },
                {
                    name: "Film", followers: 500, icon: "gaming.png"
                },
                {
                    name: "Reading", followers: 400, icon: "gaming.png"
                },
                {
                    name: "Roblox", followers: 300, icon: "gaming.png"
                },
                {
                    name: "Tetris", followers: 200, icon: "gaming.png"
                },
                {
                    name: "Running", followers: 100, icon: "gaming.png"
                },
                {
                    name: "Swimming", followers: 50, icon: "gaming.png"
                },
            ]
        })
    }
});

describe("Testing the Popular section of the right side component", () => {

    test('renders the subreddit names', () => {

        render(
            <Provider store={testStore}>
                <Popular />
            </Provider>
        );

        expect(
            screen.getByText("fr/React")
        ).toBeInTheDocument();

        expect(
            screen.getByText("fr/Music")
        ).toBeInTheDocument();
    });

    test("renders the subredits in order of most popular to least", () => {

        render(
            <Provider store={testStore}>
                <Popular />
            </Provider>
        );

        //grabs all the diffrent subreddits buttons we can use to compare thier positions to make sure they are put in the right order
        const buttons = screen.getAllByRole("button");

        //due to the follower counts we gave each subredddit in the fake store, the correct order should be "Music, React, Gaming" so thats what were testing
        expect(buttons[0]).toHaveTextContent("Music")
        expect(buttons[1]).toHaveTextContent("React")
        expect(buttons[2]).toHaveTextContent("Gaming")
    });

    test("renders only the top 10 most popular subreddits", () => {

        render(
            <Provider store={testStore}>
                <Popular />
            </Provider>
        );

        const buttons = screen.getAllByRole("button");

        expect(buttons).toHaveLength(10);
    });

    test("Makes sure when a user clicks on a subreddit button it correctly dispatches the dispatch functions", async () => {


        const store = configureStore({
            reducer: {
                subReddits: subRedditReducer,
                recents: recentReducer
            },
            preloadedState: {
                subReddits: {
                    subReddits: [
                        { name: "React", followers: 1000, icon: "react.png" },
                        { name: "Music", followers: 1300, icon: "music.png" }
                    ],
                    selectedSubReddit: "Home"
                },
                recents: {
                    recent_subreddits: []
                }
            }
        });

        render(
            <Provider store={store}>
                <Popular />
            </Provider>
        )

        const button = screen.getByText("fr/React");
        const user = userEvent.setup();

        await user.click(button)

        expect(store.getState().subReddits.selectedSubReddit).toBe("React");
        expect(store.getState().recents.recent_subreddits).toEqual(["React"]);

    });

    test("Makes sure icons porperly load for subreddit buttons", () => {

        render(
            <Provider store={testStore}>
                <Popular />
            </Provider>
        )

        const reactIcon = screen.getByAltText("React");
        const musicIcon = screen.getByAltText("Music");

        expect(reactIcon).toHaveAttribute("src", "react.png");
        expect(musicIcon).toHaveAttribute("src", "music.png");
    })

})