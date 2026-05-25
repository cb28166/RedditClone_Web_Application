import { createSlice } from "@reduxjs/toolkit";


const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [
    {
    id: "t3_001",
    title: "Just finished my React Reddit clone and Redux finally clicked",
    selftext:
    "I used to struggle a lot with Redux state management but building this project made everything finally make sense. The way slices, reducers, and dispatch work together feels way less confusing now.",
    url: "",
    post_hint: "self",
    author: "react_dev",
    subreddit: "React",
    ups: 1204,
    num_comments: 34,
    created_utc: 1716600000,
    userVote: null,
    comments: [
      { id: "c1", author: "reduxFan", body: "This is exactly how Redux finally clicked for me too." },
      { id: "c2", author: "frontendGuy", body: "Building projects > tutorials every time." }
    ]
  },

  {
    id: "t3_002",
    title: "Best React component structure for scalable apps?",
    selftext:
      "I'm trying to organize a medium-sized React project. Should I group by features or by component type? Curious what people use in real-world apps.",
    url: "",
    post_hint: "self",
    author: "codeExplorer",
    subreddit: "React",
    ups: 842,
    num_comments: 18,
    created_utc: 1716601000,
    userVote: null,
    comments: [
      { id: "c1", author: "seniorDev", body: "Feature-based structure scales way better." }
    ]
  },

  {
    id: "t3_003",
    title: "This new RPG completely changed my expectations for gaming",
    selftext:
      "I went in expecting a normal open-world game but the storytelling and mechanics are insane. Haven't been this hooked in years.",
    url: "",
    post_hint: "self",
    author: "gamer123",
    subreddit: "Gaming",
    ups: 9821,
    num_comments: 412,
    created_utc: 1716602000,
    userVote: null,
    comments: [
      { id: "c1", author: "lootHunter", body: "What game is it? Sounds like I need it." },
      { id: "c2", author: "npcEnergy", body: "We need more games like this honestly." }
    ]
  },

  {
    id: "t3_004",
    title: "Gaming setup upgrade after 3 years — finally complete",
    selftext: "",
    url: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    post_hint: "image",
    author: "setupKing",
    subreddit: "Gaming",
    ups: 15342,
    num_comments: 98,
    created_utc: 1716603000,
    userVote: null,
    comments: [
      { id: "c1", author: "rgbFan", body: "The cable management is insane." }
    ]
  },

  {
    id: "t3_005",
    title: "Movies are getting too long again — anyone else noticing this?",
    selftext:
      "Every new blockbuster feels like it’s pushing 3 hours now. I miss when movies were tighter and didn’t overstay their welcome.",
    url: "",
    post_hint: "self",
    author: "filmTalk",
    subreddit: "Movies",
    ups: 4321,
    num_comments: 210,
    created_utc: 1716604000,
    userVote: null,
    comments: [
      { id: "c1", author: "cinephile", body: "I actually love long movies if they’re good." },
      { id: "c2", author: "shortAttentionSpan", body: "Same. 90–120 mins is the sweet spot." }
    ]
  },

  {
    id: "t3_006",
    title: "Best movies of 2025 so far?",
    selftext:
      "Trying to build a watchlist. What movies are actually worth watching this year?",
    url: "",
    post_hint: "self",
    author: "movieBuff",
    subreddit: "Movies",
    ups: 1902,
    num_comments: 87,
    created_utc: 1716605000,
    userVote: null,
    comments: [
      { id: "c1", author: "critic", body: "Check out the new sci-fi releases — surprisingly good this year." }
    ]
  },

  {
    id: "t3_007",
    title: "Music hits different when you listen at night",
    selftext:
      "There’s something about nighttime that makes music feel way more emotional and immersive.",
    url: "",
    post_hint: "self",
    author: "nightlistener",
    subreddit: "Music",
    ups: 5532,
    num_comments: 144,
    created_utc: 1716606000,
    userVote: null,
    comments: [
      { id: "c1", author: "lofiFan", body: "Night + headphones = perfect combo." }
    ]
  },

  {
    id: "t3_008",
    title: "Why do certain songs randomly give you nostalgia?",
    selftext:
      "Even songs I just discovered sometimes feel like I’ve known them for years. It’s weird how music triggers memory like that.",
    url: "",
    post_hint: "self",
    author: "memoryloop",
    subreddit: "Music",
    ups: 3112,
    num_comments: 76,
    created_utc: 1716607000,
    userVote: null,
    comments: [
      { id: "c1", author: "psychNerd", body: "Music is strongly tied to emotional memory centers." }
    ]
  },

  {
    id: "t3_009",
    title: "Home feed feels more addictive than any subreddit",
    selftext:
      "Once you start scrolling Home, you just keep going. It’s like you never run out of content.",
    url: "",
    post_hint: "self",
    author: "scrollTrap",
    subreddit: "Home",
    ups: 9021,
    num_comments: 301,
    created_utc: 1716608000,
    userVote: null,
    comments: [
      { id: "c1", author: "addict", body: "Home feed is basically infinite dopamine." }
    ]
  },

  {
    id: "t3_010",
    title: "Is Reddit-style infinite scroll actually bad for focus?",
    selftext:
      "I’ve noticed I can spend way more time on Home feed than on individual subreddits. Wondering if it affects attention span.",
    url: "",
    post_hint: "self",
    author: "focusQuestion",
    subreddit: "Home",
    ups: 6400,
    num_comments: 220,
    created_utc: 1779686823,
    userVote: null,
    comments: [
      { id: "c1", author: "researcher", body: "Yes, variable reward systems increase engagement significantly." }
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
                post.ups += 1
                return 
            }

            else if (post.userVote === "up") {
                post.ups -= 2;
            }

            else {
                //this is if the userVote value is null so it treats it like normal and just goes down one value
                post.ups -= 1;
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
                post.ups -= 1;
                return 
            }

            else if (post.userVote === "down") {
                post.ups += 2;
            }

            else {
                post.ups += 1;
            }

            post.userVote = "up";
        }
    }
});

export default postSlice.reducer;
export const {downvote, upvote} = postSlice.actions;