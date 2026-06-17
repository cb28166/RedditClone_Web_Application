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
        icon: "https://static.vecteezy.com/system/resources/previews/007/625/854/non_2x/house-icon-in-minimal-cartoon-style-free-vector.jpg",
        description: "Your personalized front page of posts."
    },

    {
        id: 2,
        name: "React",
        followers: 2400000,
        icon: "https://i.redd.it/sce38juf3sba1.png",
        description: "Frontend development, React projects, Redux, and UI discussions."
    },

    {
        id: 3,
        name: "Gaming",
        followers: 41200000,
        icon: "https://cdn-icons-png.flaticon.com/512/8002/8002111.png",
        description: "Gaming news, clips, discussions, memes, and recommendations."
    },

    {
        id: 4,
        name: "Movies",
        followers: 32800000,
        icon: "https://illustoon.com/photo/7630.png",
        description: "Movie discussions, reviews, trailers, and hot takes."
    },

    {
        id: 5,
        name: "Music",
        followers: 29100000,
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRYAhsy868LxycSZsR7pRTd_bL9IObry3WZA&s",
        description: "Music recommendations, albums, artists, and live performances."
    },

    {
        id: 6,
        name: "Technology",
        followers: 15800000,
        icon: "https://it.nmu.edu/sites/default/files/images/sym1.png",
        description: "Tech news, gadgets, software, and innovation discussions."
    },

    {
        id: 7,
        name: "Anime",
        followers: 12300000,
        icon: "https://static.vecteezy.com/system/resources/previews/029/890/086/non_2x/akatsuki-emblem-naruto-anime-naruto-red-cloud-art-isolated-symbol-logo-illustration-free-vector.jpg",
        description: "Anime recommendations, discussions, manga, and fan art."
    },

    {
        id: 8,
        name: "Memes",
        followers: 50400000,
        icon: "https://play-lh.googleusercontent.com/b670f0GqE2V8DaTuz3sRv7xvA2YFF7RuM1b26sZb-WWB8UDZVzA61A3qm4OQd3yj0qY=w240-h480-rw",
        description: "The internet’s favorite place for cursed and funny content."
    },

    {
        id: 9,
        name: "Fitness",
        followers: 9800000,
        icon: "https://i.pinimg.com/736x/42/9d/63/429d631659a11a9eb666b103d811470a.jpg",
        description: "Workout advice, gym progress, nutrition, and fitness goals."
    },

    {
        id: 10,
        name: "Food",
        followers: 8700000,
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvHsG0zV_EVPIadZWWYYGuNWaseGFgg9ExQQ&s",
        description: "Recipes, restaurant pics, cooking tips, and food photography."
    },

    {
        id: 11,
        name: "Space",
        followers: 6400000,
        icon: "https://logo-icons.com/cdn/shop/files/1126-logo-1713386413.986.svg?v=1713403311",
        description: "Astronomy, NASA updates, black holes, and space exploration."
    },

    {
        id: 12,
        name: "Art",
        followers: 7200000,
        icon: "https://thumbs.dreamstime.com/b/colored-icon-vector-design-wooden-artist-s-palette-colored-icon-vector-design-wooden-artist-s-palette-paints-brushes-107152650.jpg",
        description: "Digital art, paintings, sketches, and creative inspiration."
    },

    {
        id: 13,
        name: "Soccer",
        followers: 3590,
        icon: "https://st2.depositphotos.com/2574235/12391/v/950/depositphotos_123918566-stock-illustration-soccer-ball-symbol.jpg",
        description: "All about soccer and discussions over the sport"
    }
    //all mock data added just to show everything

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