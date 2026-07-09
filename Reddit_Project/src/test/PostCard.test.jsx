import { describe, test, expect } from "vitest";
import '@testing-library/jest-dom/vitest';
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import userEvent from "@testing-library/user-event";
import PostCard from "../components/PostCards/PostCard/PostCard";
import postReducer from "../features/Posts/postSlice";

//this just resets everything after every test, that way stuff made for one test will not mess up other test
afterEach(() => {
    cleanup();
});

const store = configureStore({
  reducer: {
    posts: postReducer
  },
  preloadedState: {
        posts: {
            posts: [
                {
                    id: "t3_home_002",
                    ups: 24
                }
            ],
            userVotes: {}
        }
    }
});



describe("PostCard Component testing", () => {


    test("Making sure post data is being rendered", () => {

        const mockPost = {
            id: "1",
            title: "Test Post Title",
            author: "testUser",
            subreddit: "React",
            selftext: "This is a test post body",
            date: 1716600000,
            ups: 10,
            comments: [],
            num_comments: 0,
            post_hint: "self",
            url: ""
        }

        render(
            <Provider store={store}>
                <PostCard {...mockPost} />
            </Provider>
        );

        //this makes sure that the title, user who posted it, the subreddit its from, and the post body is successfully rendered 
        expect(screen.getByText("Test Post Title")).toBeInTheDocument();
        expect(screen.getByText("Posted by: testUser")).toBeInTheDocument();
        expect(screen.getByText("fr/React")).toBeInTheDocument();
        expect(screen.getByText("This is a test post body")).toBeInTheDocument();
    });

    test("makes sure the text is collapsed if its above 250 charecters", () => {

        const mockPost2 = {
            id: "1",
            title: "Test Post Title",
            author: "testUser",
            subreddit: "React",
            selftext: "This is a very long post that should definitely exceed 250 characters so we can test whether the truncation works properly. ".repeat(5),
            date: 1716600000,
            ups: 10,
            comments: [],
            num_comments: 0,
            post_hint: "self",
            url: ""
        }

        render(
            <Provider store={store}>
                <PostCard {...mockPost2} />
            </Provider>
        )

        const slicedText = mockPost2.selftext.slice(0, 250) + "...";

        expect(screen.getByText(slicedText)).toBeInTheDocument();
    });

    test("makes sure the full text of a post is rendered when a user clicks on it", async () => {

        const mockPost2 = {
            id: "1",
            title: "Test Post Title",
            author: "testUser",
            subreddit: "React",
            selftext: "This is a very long post that should definitely exceed 250 characters so we can test whether the truncation works properly. ".repeat(5),
            date: 1716600000,
            ups: 10,
            comments: [],
            num_comments: 0,
            post_hint: "self",
            url: ""
        }

        render(
            <Provider store={store}>
                <PostCard {...mockPost2} />
            </Provider>
        )
        
        const user = userEvent.setup();

        const textElement = document.querySelector(".text_content");

        await user.click(textElement);

        expect(textElement.textContent).toBe(mockPost2.selftext);

    });

    test("Make sure if the post is an img type it loads an <img>", () => {
        const mockPost3 = {
            id: "t3_home_002",
            title: "My cozy reading corner setup after 3 months of tweaking",
            selftext: "",
            url: "https://thf.bing.com/th/id/OIP.0OeVGn9CJg7tlGlvUqQW4QHaJ4?cb=thfc1falcon2&rs=1&pid=ImgDetMain&o=7&rm=3",
            post_hint: "image",
            author: "cozy_builder",
            subreddit: "Home",
            ups: 24,
            num_comments: 18,
            date: 1716600500,
            comments: [
                { id: "c1", author: "bookworm", body: "This looks like the perfect reading spot." },
                { id: "c2", author: "aestheticfan", body: "The lighting is actually perfect wow." }
            ]
        }

        render(
            <Provider store={store}>
                <PostCard {...mockPost3} />
            </Provider>
        )

        const img = screen.getByRole('img');

        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute("src", mockPost3.url);
        expect(img).toHaveAttribute("alt", mockPost3.title);
    });

    test("Make sure if its a text post an img does not render", () => {

        const mockPost2 = {
            id: "1",
            title: "Test Post Title",
            author: "testUser",
            subreddit: "React",
            selftext: "This is a very long post that should definitely exceed 250 characters so we can test whether the truncation works properly. ".repeat(5),
            date: 1716600000,
            ups: 10,
            comments: [],
            num_comments: 0,
            post_hint: "self",
            url: ""
        }

        render(
            <Provider store={store}>
                <PostCard {...mockPost2} />
            </Provider>
        )

        //since the mock post has selfHint of text then that means there should not be an <img> attribute, and so were checking to make sure theres not one in the page
        expect(screen.queryByRole('img')).not.toBeInTheDocument();
    });

    test("Making sure that comments are hidden unless a user clicks the comments button", () => {

        const mockPost3 = {
            id: "t3_home_002",
            title: "My cozy reading corner setup after 3 months of tweaking",
            selftext: "",
            url: "https://thf.bing.com/th/id/OIP.0OeVGn9CJg7tlGlvUqQW4QHaJ4?cb=thfc1falcon2&rs=1&pid=ImgDetMain&o=7&rm=3",
            post_hint: "image",
            author: "cozy_builder",
            subreddit: "Home",
            ups: 24,
            num_comments: 18,
            date: 1716600500,
            comments: [
                { id: "c1", author: "bookworm", body: "This looks like the perfect reading spot." },
                { id: "c2", author: "aestheticfan", body: "The lighting is actually perfect wow." }
            ]
        }

        render(
            <Provider store={store}>
                <PostCard {...mockPost3} />
            </Provider>
        )

        expect(
            screen.queryByText("This looks like the perfect reading spot.")
        ).not.toBeInTheDocument();

    });

    test("Making sure when user clicks the comments button the comments show up", async () => {

        const mockPost3 = {
            id: "t3_home_002",
            title: "My cozy reading corner setup after 3 months of tweaking",
            selftext: "",
            url: "https://thf.bing.com/th/id/OIP.0OeVGn9CJg7tlGlvUqQW4QHaJ4?cb=thfc1falcon2&rs=1&pid=ImgDetMain&o=7&rm=3",
            post_hint: "image",
            author: "cozy_builder",
            subreddit: "Home",
            ups: 24,
            num_comments: 18,
            date: 1716600500,
            comments: [
                { id: "c1", author: "bookworm", body: "This looks like the perfect reading spot." },
                { id: "c2", author: "aestheticfan", body: "The lighting is actually perfect wow." }
            ]
        }

        render(
            <Provider store={store}>
                <PostCard {...mockPost3} />
            </Provider>
        )

        const user = userEvent.setup();

        const commentsButton = document.querySelector(".comments_button");

        await user.click(commentsButton);

        const comment1 = screen.getByText("This looks like the perfect reading spot.");
        const comment2 = screen.getByText("The lighting is actually perfect wow.");

        expect(comment1).toBeInTheDocument();
        expect(comment2).toBeInTheDocument();
    });

    test("Makes sure that when a user clicks on the upvote button it correctly dispatches an upvote", async () => {

        const mockPost3 = {
            id: "t3_home_002",
            title: "My cozy reading corner setup after 3 months of tweaking",
            selftext: "",
            url: "https://thf.bing.com/th/id/OIP.0OeVGn9CJg7tlGlvUqQW4QHaJ4?cb=thfc1falcon2&rs=1&pid=ImgDetMain&o=7&rm=3",
            post_hint: "image",
            author: "cozy_builder",
            subreddit: "Home",
            ups: 24,
            num_comments: 18,
            date: 1716600500,
            comments: [
                { id: "c1", author: "bookworm", body: "This looks like the perfect reading spot." },
                { id: "c2", author: "aestheticfan", body: "The lighting is actually perfect wow." }
            ]
        }

        render(
            <Provider store={store}>
                <PostCard {...mockPost3} />
            </Provider>
        )

        const user = userEvent.setup();

        const upvoteButton = document.querySelector(".upvote")

        await user.click(upvoteButton);

        expect(store.getState().posts.posts[0].ups).toBe(25);

    })
});