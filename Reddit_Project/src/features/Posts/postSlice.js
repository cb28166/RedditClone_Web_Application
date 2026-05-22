import { createSlice } from "@reduxjs/toolkit";


const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [
            {
                id: 1,
                content: "This is the post",
                title: "Welcome to Reddit Clone",
                author: "admin",
                subreddit: "Home",
                date: "01/31/2003",
                likes: 423,
                userVote: null,
                comments: [
                    {
                        id: 1,
                        author: "colton",
                        text: "This is awesome"
                    },
                    {
                        id: 2,
                        author: "devGuy",
                        text: "Redux is confusing"
                    }
                ]
            },
            {
                id: 2,
                title: "React is awesome",
                content: "You can use react for so many things",
                author: "devUser",
                subreddit: "React",
                date: "06/04/2026",
                likes: 3578,
                userVote: null,
                comments: [
                    {
                        id: 1,
                        author: "freakybob",
                        text: "This is freaky afff"
                    },
                    {
                        id: 2,
                        author: "devGuy",
                        text: "Anyone else up jerking it"
                    }
                ]
            },
            {
                id: 3,
                content: "This is another post",
                title: "I am a clone",
                author: "admin",
                subreddit: "Home",
                date: "01/31/2003",
                likes: 23,
                userVote: null,
                comments: [
                     {
        id: 1,
        author: "ReactFan22",
        text: "This looks super clean honestly."
    },
    {
        id: 2,
        author: "ReduxWizard",
        text: "The voting animations are actually really nice."
    },
    {
        id: 3,
        author: "FrontendDev",
        text: "I think the gradient border idea was the right call instead of full colored cards."
    },
    {
        id: 4,
        author: "GamingGuy",
        text: "FakeReddit is lowkey becoming a real project now."
    },
    {
        id: 5,
        author: "CSSisPain",
        text: "Flexbox alignment issues will haunt me forever."
    },
    {
        id: 6,
        author: "LongCommentUser",
        text: "This is a much longer comment specifically made to test how your UI handles text wrapping across multiple lines because eventually users are going to type entire paragraphs and you want to make sure your comment cards or spacing do not completely break when that happens."
    },
    {
        id: 7,
        author: "AnotherUser",
        text: "The hover effects feel smooth."
    },
    {
        id: 8,
        author: "MovieBuff",
        text: "You should eventually add GIF/image support."
    },
    {
        id: 9,
        author: "NightCoder",
        text: "Redux finally started making sense once I built a real project with it."
    },
    {
        id: 10,
        author: "UIEnjoyer",
        text: "The blue/purple branding combo actually works really well."
    },
    {
        id: 11,
        author: "MobileTester",
        text: "Definitely test this on smaller screens later."
    },
    {
        id: 12,
        author: "CommentMachine",
        text: "Comment spam incoming."
    },
    {
        id: 13,
        author: "CommentMachine",
        text: "Comment spam incoming again."
    },
    {
        id: 14,
        author: "CommentMachine",
        text: "And again."
    },
    {
        id: 15,
        author: "CommentMachine",
        text: "Okay maybe there should be a comment limit."
    },
    {
        id: 16,
        author: "DesignNerd",
        text: "Spacing between comments matters a LOT more than people think."
    },
    {
        id: 17,
        author: "BackendSoon",
        text: "Eventually this could connect to a real API."
    },
    {
        id: 18,
        author: "KeyboardWarrior",
        text: "This is objectively better than old Reddit."
    },
    {
        id: 19,
        author: "MinimalUI",
        text: "The cleaner you keep the cards the better."
    },
    {
        id: 20,
        author: "LastGuy",
        text: "This should be enough comments to stress test scrolling and formatting."
    }
                ]
            }
            
        ]
    },
    reducers: {
        downvote: (state, action) => {
            const post = state.posts.find(p => p.id === action.payload)
            if (!post) {
                return 
            }

            else if (post.userVote === "down") {
                post.userVote = null;
                post.likes += 1
                return 
            }

            else if (post.userVote === "up") {
                post.likes -= 2;
            }

            else {
                //this is if the userVote value is null so it treats it like normal and just goes down one value
                post.likes -= 1;
            }

            post.userVote = "down";
        },
        upvote: (state, action) => {
            const post = state.posts.find(p => p.id === action.payload)
            if (!post) {
                return
            }

            else if (post.userVote === "up") {
                post.userVote = null;
                post.likes -= 1;
                return 
            }

            else if (post.userVote === "down") {
                post.likes += 2;
            }

            else {
                post.likes += 1;
            }

            post.userVote = "up";
        }
    }
});

export default postSlice.reducer;
export const {downvote, upvote} = postSlice.actions;