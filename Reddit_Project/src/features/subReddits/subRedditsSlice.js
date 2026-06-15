import { createSlice } from "@reduxjs/toolkit";


const subRedditSlice = createSlice({
    name: "subReddits",
    initialState: {
        selectedSubReddit: "Home",
        subReddits: [
    {
        id: 1,
        name: "Home",
        followers: 99999999,
        icon: "https://api.dicebear.com/7.x/shapes/svg?seed=Home",
        description: "Your personalized front page of posts."
    },

    {
        id: 2,
        name: "React",
        followers: 2400000,
        icon: "https://api.dicebear.com/7.x/shapes/svg?seed=React",
        description: "Frontend development, React projects, Redux, and UI discussions."
    },

    {
        id: 3,
        name: "Gaming",
        followers: 41200000,
        icon: "https://api.dicebear.com/7.x/shapes/svg?seed=Gaming",
        description: "Gaming news, clips, discussions, memes, and recommendations."
    },

    {
        id: 4,
        name: "Movies",
        followers: 32800000,
        icon: "https://api.dicebear.com/7.x/shapes/svg?seed=Movies",
        description: "Movie discussions, reviews, trailers, and hot takes."
    },

    {
        id: 5,
        name: "Music",
        followers: 29100000,
        icon: "https://api.dicebear.com/7.x/shapes/svg?seed=Music",
        description: "Music recommendations, albums, artists, and live performances."
    },

    {
        id: 6,
        name: "Technology",
        followers: 15800000,
        icon: "https://api.dicebear.com/7.x/shapes/svg?seed=Technology",
        description: "Tech news, gadgets, software, and innovation discussions."
    },

    {
        id: 7,
        name: "Anime",
        followers: 12300000,
        icon: "https://api.dicebear.com/7.x/shapes/svg?seed=Anime",
        description: "Anime recommendations, discussions, manga, and fan art."
    },

    {
        id: 8,
        name: "Memes",
        followers: 50400000,
        icon: "https://api.dicebear.com/7.x/shapes/svg?seed=Memes",
        description: "The internet’s favorite place for cursed and funny content."
    },

    {
        id: 9,
        name: "Fitness",
        followers: 9800000,
        icon: "https://api.dicebear.com/7.x/shapes/svg?seed=Fitness",
        description: "Workout advice, gym progress, nutrition, and fitness goals."
    },

    {
        id: 10,
        name: "Food",
        followers: 8700000,
        icon: "https://api.dicebear.com/7.x/shapes/svg?seed=Food",
        description: "Recipes, restaurant pics, cooking tips, and food photography."
    },

    {
        id: 11,
        name: "Space",
        followers: 6400000,
        icon: "https://api.dicebear.com/7.x/shapes/svg?seed=Space",
        description: "Astronomy, NASA updates, black holes, and space exploration."
    },

    {
        id: 12,
        name: "Art",
        followers: 7200000,
        icon: "https://api.dicebear.com/7.x/shapes/svg?seed=Art",
        description: "Digital art, paintings, sketches, and creative inspiration."
    },

    {
        id: 13,
        name: "Soccer",
        followers: 3590,
        icon: "https://api.dicebear.com/7.x/shapes/svg?seed=Art",
        description: "All about soccer and discussions over the sport"
    }
    ]
    },
    reducers: {
        setSelectedSubReddit: (state, action) => {
            state.selectedSubReddit = action.payload
        }
    }
})



export default subRedditSlice.reducer;
export const { setSelectedSubReddit } = subRedditSlice.actions;