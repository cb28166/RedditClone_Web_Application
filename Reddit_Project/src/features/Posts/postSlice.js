import { createSlice } from "@reduxjs/toolkit";


const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [
          {
    id: "t3_home_001",
    title: "Finally finished reorganizing my entire apartment after months of procrastination",
    selftext:
      "I broke everything down into zones and it honestly changed how I feel at home. Everything has a place now and it’s way easier to keep clean.",
    url: "",
    post_hint: "self",
    author: "organized_life",
    subreddit: "Home",
    ups: 1842,
    num_comments: 12,
    created_utc: 1716600000,
    comments: [
      { id: "c1", author: "cleanfreak", body: "Zone cleaning is a game changer honestly." },
      { id: "c2", author: "messylife", body: "I need to try this because my room is chaos." },
      { id: "c3", author: "minimalist", body: "Less stuff makes everything easier to maintain." }
    ]
  },
  {
    id: "t3_home_002",
    title: "My cozy reading corner setup after 3 months of tweaking",
    selftext: "",
    url: "https://images.unsplash.com/photo-1",
    post_hint: "image",
    author: "cozy_builder",
    subreddit: "Home",
    ups: 2403,
    num_comments: 18,
    created_utc: 1716600500,
    comments: [
      { id: "c1", author: "bookworm", body: "This looks like the perfect reading spot." },
      { id: "c2", author: "aestheticfan", body: "The lighting is actually perfect wow." }
    ]
  },

  {
    id: "t3_home_003",
    title: "What’s one home upgrade that made your life way easier?",
    selftext:
      "Thinking about small improvements like smart lighting, better storage, or kitchen upgrades. Curious what made the biggest difference for you.",
    url: "",
    post_hint: "self",
    author: "homeplanner",
    subreddit: "Home",
    ups: 965,
    num_comments: 27,
    created_utc: 1716601000,
    comments: [
      { id: "c1", author: "techhome", body: "Smart bulbs changed everything for me." },
      { id: "c2", author: "kitchenlover", body: "Pull-out drawers in cabinets = life saver." },
      { id: "c3", author: "builderguy", body: "A good mattress upgrade honestly." }
    ]
  },

  {
    id: "t3_home_004",
    title: "Before and after: my living room transformation",
    selftext: "",
    url: "https://images.unsplash.com/photo-2",
    post_hint: "image",
    author: "roomrevamp",
    subreddit: "Home",
    ups: 3102,
    num_comments: 44,
    created_utc: 1716601200,
    comments: [
      { id: "c1", author: "designlover", body: "This looks like a completely different apartment." },
      { id: "c2", author: "interiornerd", body: "The color palette is super clean." },
      { id: "c3", author: "wowuser", body: "I need to do this to my place asap." }
    ]
  },

  {
    id: "t3_home_005",
    title: "I started doing 10-minute daily resets and my home stays clean now",
    selftext:
      "Every night I just reset the main spaces before bed. Takes 10 minutes but it prevents everything from piling up.",
    url: "",
    post_hint: "self",
    author: "habitbuilder",
    subreddit: "Home",
    ups: 1520,
    num_comments: 9,
    created_utc: 1716601400,
    comments: [
      { id: "c1", author: "discipline", body: "Small habits like this are underrated." },
      { id: "c2", author: "lazybuttrying", body: "I should really start doing this." }
    ]
  },

  {
    id: "t3_home_006",
    title: "My kitchen organization system finally feels efficient",
    selftext:
      "Labelled everything, grouped items by usage, and cleared out clutter. Cooking feels way less stressful now.",
    url: "",
    post_hint: "self",
    author: "kitchenflow",
    subreddit: "Home",
    ups: 2011,
    num_comments: 14,
    created_utc: 1716601600,
    comments: [
      { id: "c1", author: "chefhome", body: "Organization makes cooking 10x better." },
      { id: "c2", author: "homecook", body: "I need to label my stuff too." }
    ]
  },

  {
    id: "t3_home_007",
    title: "Small apartment hack: using vertical space changed everything",
    selftext:
      "Installed wall shelves and hanging storage. It freed up so much floor space I didn’t realize I was wasting.",
    url: "",
    post_hint: "self",
    author: "spaceoptimizer",
    subreddit: "Home",
    ups: 1744,
    num_comments: 11,
    created_utc: 1716601800,
    comments: [
      { id: "c1", author: "tinyhome", body: "Vertical storage is so underrated." },
      { id: "c2", author: "designfan", body: "Shelves make such a big difference visually too." }
    ]
  },

  {
    id: "t3_home_008",
    title: "My bedroom setup after going for a minimalist style",
    selftext: "",
    url: "https://images.unsplash.com/photo-3",
    post_hint: "image",
    author: "minimalspace",
    subreddit: "Home",
    ups: 2890,
    num_comments: 23,
    created_utc: 1716602000,
    comments: [
      { id: "c1", author: "minimalist", body: "This is exactly the vibe I’m going for." },
      { id: "c2", author: "calmspace", body: "So clean it feels peaceful." },
      { id: "c3", author: "messyroom", body: "My room could never look like this 😭" }
    ]
  },
  {
    id: "t3_memes_001",
    title: "Me fixing one bug and suddenly 12 new ones appear",
    selftext: "",
    url: "https://images.unsplash.com/photo-1",
    post_hint: "image",
    author: "debugging_soul",
    subreddit: "Memes",
    ups: 18200,
    num_comments: 54,
    created_utc: 1716600000,
    comments: [
      { id: "c1", author: "devhumor", body: "This is not a bug, it’s a feature chain reaction." },
      { id: "c2", author: "coderlife", body: "I feel personally attacked." },
      { id: "c3", author: "frontenddev", body: "At this point I just accept the chaos." }
    ]
  },

  {
    id: "t3_memes_002",
    title: "When your code works but you don’t know why",
    selftext:
      "I’m afraid to touch anything now because it might break everything.",
    url: "",
    post_hint: "self",
    author: "imposter_dev",
    subreddit: "Memes",
    ups: 13450,
    num_comments: 38,
    created_utc: 1716600500,
    comments: [
      { id: "c1", author: "seniordev", body: "If it works, you ship it and never look back." },
      { id: "c2", author: "juniorcoder", body: "This is my entire career right now." }
    ]
  },

  {
    id: "t3_memes_003",
    title: "POV: You said 'one more match' at 2 AM",
    selftext: "",
    url: "https://images.unsplash.com/photo-2",
    post_hint: "image",
    author: "gamerbrain",
    subreddit: "Memes",
    ups: 22100,
    num_comments: 91,
    created_utc: 1716601000,
    comments: [
      { id: "c1", author: "gamersunite", body: "Next thing you know it’s sunrise." },
      { id: "c2", author: "sleepdeprived", body: "Every single time without fail." },
      { id: "c3", author: "rankedgrinder", body: "I regret nothing." }
    ]
  },

  {
    id: "t3_memes_004",
    title: "Me reading stack overflow answers from 2012 that still work",
    selftext: "",
    url: "",
    post_hint: "self",
    author: "oldschooldev",
    subreddit: "Memes",
    ups: 16780,
    num_comments: 29,
    created_utc: 1716601200,
    comments: [
      { id: "c1", author: "stackoverflowlord", body: "If it works, it’s eternal." },
      { id: "c2", author: "devhistory", body: "The ancient knowledge still holds." }
    ]
  },

  {
    id: "t3_memes_005",
    title: "When your friend says 'just make it responsive'",
    selftext:
      "And suddenly you're redesigning the entire UI for 8 screen sizes.",
    url: "",
    post_hint: "self",
    author: "frontendstruggle",
    subreddit: "Memes",
    ups: 19840,
    num_comments: 47,
    created_utc: 1716601400,
    comments: [
      { id: "c1", author: "csswizard", body: "Just add flexbox bro (it’s never that simple)." },
      { id: "c2", author: "uiuxdev", body: "Responsive design is pain." }
    ]
  },

  {
    id: "t3_memes_006",
    title: "When production works but localhost is broken",
    selftext: "",
    url: "https://images.unsplash.com/photo-3",
    post_hint: "image",
    author: "deploypanic",
    subreddit: "Memes",
    ups: 25000,
    num_comments: 112,
    created_utc: 1716601600,
    comments: [
      { id: "c1", author: "devopsguy", body: "The laws of physics are different in production." },
      { id: "c2", author: "backenddev", body: "This is why I fear localhost more than prod." }
    ]
  },

  {
    id: "t3_memes_007",
    title: "Me trying to explain my bug to someone and realizing I fixed it mid-sentence",
    selftext: "",
    url: "",
    post_hint: "self",
    author: "middebug",
    subreddit: "Memes",
    ups: 14500,
    num_comments: 21,
    created_utc: 1716601800,
    comments: [
      { id: "c1", author: "listener", body: "Talking through bugs is the real debugger." },
      { id: "c2", author: "pairprogrammer", body: "Rubber duck debugging strikes again." }
    ]
  },

  {
    id: "t3_memes_008",
    title: "When your code works on the first try and you don’t trust it",
    selftext:
      "I immediately assume I broke something else somewhere.",
    url: "",
    post_hint: "self",
    author: "suspiciousdev",
    subreddit: "Memes",
    ups: 31000,
    num_comments: 66,
    created_utc: 1716602000,
    comments: [
      { id: "c1", author: "devlife", body: "Never trust a first try success." },
      { id: "c2", author: "bughunter", body: "There is always a hidden bug waiting." },
      { id: "c3", author: "optimistdev", body: "Or maybe… just maybe… it works 😳" }
    ]
  },
  {
    id: "t3_gaming_001",
    title: "What game completely consumed your life the first time you played it?",
    selftext:
      "For me it was Skyrim. I literally forgot what sleep was for like a week.",
    url: "",
    post_hint: "self",
    author: "questaddict",
    subreddit: "Gaming",
    ups: 14200,
    num_comments: 63,
    created_utc: 1716600000,
    comments: [
      { id: "c1", author: "rpgfan", body: "Skyrim is basically digital crack." },
      { id: "c2", author: "eldenringlover", body: "Elden Ring did this to me recently." },
      { id: "c3", author: "nostalgia", body: "Runescape back in the day ruined my sleep schedule." }
    ]
  },

  {
    id: "t3_gaming_002",
    title: "My current gaming setup after upgrading my desk and monitor",
    selftext: "",
    url: "https://images.unsplash.com/photo-1",
    post_hint: "image",
    author: "setupking",
    subreddit: "Gaming",
    ups: 18900,
    num_comments: 41,
    created_utc: 1716600500,
    comments: [
      { id: "c1", author: "pcmasterrace", body: "Clean setup, respect." },
      { id: "c2", author: "budgetgamer", body: "I need this but my wallet disagrees." }
    ]
  },

  {
    id: "t3_gaming_003",
    title: "Best open-world games that actually respect your time?",
    selftext:
      "Looking for games that don’t feel like endless grind but still have depth and exploration.",
    url: "",
    post_hint: "self",
    author: "efficientgamer",
    subreddit: "Gaming",
    ups: 8700,
    num_comments: 52,
    created_utc: 1716601000,
    comments: [
      { id: "c1", author: "casualgamer", body: "Ghost of Tsushima is perfect for this." },
      { id: "c2", author: "rpglover", body: "Outer Wilds is short but incredible." },
      { id: "c3", author: "grinder", body: "I still play grindy games anyway lol." }
    ]
  },

  {
    id: "t3_gaming_004",
    title: "That moment when you finally beat a boss after 20 tries",
    selftext: "",
    url: "https://images.unsplash.com/photo-2",
    post_hint: "image",
    author: "bossfighter",
    subreddit: "Gaming",
    ups: 22100,
    num_comments: 88,
    created_utc: 1716601200,
    comments: [
      { id: "c1", author: "ragequitter", body: "And then you immediately need a break." },
      { id: "c2", author: "tryhard", body: "That dopamine hit is unmatched." }
    ]
  },

  {
    id: "t3_gaming_005",
    title: "PC vs Console — what are you playing on in 2026?",
    selftext:
      "Curious if most people are still loyal to one platform or switching between both.",
    url: "",
    post_hint: "self",
    author: "platformdebate",
    subreddit: "Gaming",
    ups: 10200,
    num_comments: 140,
    created_utc: 1716601400,
    comments: [
      { id: "c1", author: "pcmasterrace", body: "PC forever. Mods alone win it." },
      { id: "c2", author: "consolefan", body: "Console is just more relaxing honestly." },
      { id: "c3", author: "hybridgamer", body: "I use both depending on the game." }
    ]
  },

  {
    id: "t3_gaming_006",
    title: "My favorite cozy indie games list (hidden gems edition)",
    selftext:
      "Games that are relaxing, simple, but still super memorable.",
    url: "",
    post_hint: "self",
    author: "indieexplorer",
    subreddit: "Gaming",
    ups: 7600,
    num_comments: 29,
    created_utc: 1716601600,
    comments: [
      { id: "c1", author: "cozyplayer", body: "Stardew Valley is forever comfort." },
      { id: "c2", author: "indiefan", body: "You should add Celeste to this list." }
    ]
  },

  {
    id: "t3_gaming_007",
    title: "This is what peak immersion looks like in modern gaming",
    selftext: "",
    url: "https://images.unsplash.com/photo-3",
    post_hint: "image",
    author: "immersedgamer",
    subreddit: "Gaming",
    ups: 26500,
    num_comments: 73,
    created_utc: 1716601800,
    comments: [
      { id: "c1", author: "graphicslover", body: "We’ve come so far in gaming visuals." },
      { id: "c2", author: "nostalgia", body: "Still miss PS2 era vibes though." }
    ]
  },

  {
    id: "t3_gaming_008",
    title: "What’s a game everyone loves but you just couldn’t get into?",
    selftext:
      "I tried multiple times but it just didn’t click for me.",
    url: "",
    post_hint: "self",
    author: "controversialtake",
    subreddit: "Gaming",
    ups: 11800,
    num_comments: 96,
    created_utc: 1716602000,
    comments: [
      { id: "c1", author: "unpopularopinion", body: "Witcher 3 for me. Don’t hate me." },
      { id: "c2", author: "witcherfan", body: "I’m calling the guards." },
      { id: "c3", author: "neutralgamer", body: "Totally valid honestly." }
    ]
  },

  {
    id: "t3_movies_001",
    title: "What movie completely changed your perspective on life?",
    selftext:
      "For me it was Interstellar. The scale of time and space just messed with my head in the best way.",
    url: "",
    post_hint: "self",
    author: "cinephile42",
    subreddit: "Movies",
    ups: 15800,
    num_comments: 74,
    created_utc: 1716600000,
    comments: [
      { id: "c1", author: "filmlover", body: "Interstellar is a masterpiece no debate." },
      { id: "c2", author: "spacefan", body: "That docking scene still gives me chills." },
      { id: "c3", author: "moviewatcher", body: "Inception did this for me." }
    ]
  },

  {
    id: "t3_movies_002",
    title: "Best cinematography you’ve ever seen in a film?",
    selftext: "",
    url: "https://images.unsplash.com/photo-1",
    post_hint: "image",
    author: "framehunter",
    subreddit: "Movies",
    ups: 13200,
    num_comments: 51,
    created_utc: 1716600500,
    comments: [
      { id: "c1", author: "visualartist", body: "Blade Runner 2049 is insane visually." },
      { id: "c2", author: "directorfan", body: "Dune (2021) deserves more credit." }
    ]
  },

  {
    id: "t3_movies_003",
    title: "Underrated movies that deserve more attention",
    selftext:
      "Drop some hidden gems that people don’t talk about enough.",
    url: "",
    post_hint: "self",
    author: "hiddenfilms",
    subreddit: "Movies",
    ups: 9200,
    num_comments: 62,
    created_utc: 1716601000,
    comments: [
      { id: "c1", author: "indiefan", body: "Coherence (2013) is amazing." },
      { id: "c2", author: "thrillerlover", body: "Prisoners is underrated imo." }
    ]
  },

  {
    id: "t3_movies_004",
    title: "That moment when the plot twist completely blindsides you",
    selftext: "",
    url: "https://images.unsplash.com/photo-2",
    post_hint: "image",
    author: "twistlover",
    subreddit: "Movies",
    ups: 20100,
    num_comments: 89,
    created_utc: 1716601200,
    comments: [
      { id: "c1", author: "shockvalue", body: "Fight Club got me good the first time." },
      { id: "c2", author: "spoilerfree", body: "I wish I could erase my memory and rewatch it." }
    ]
  },

  {
    id: "t3_movies_005",
    title: "What’s a movie you can rewatch infinitely?",
    selftext:
      "Some movies just never get old no matter how many times you watch them.",
    url: "",
    post_hint: "self",
    author: "rewatcher",
    subreddit: "Movies",
    ups: 11000,
    num_comments: 45,
    created_utc: 1716601400,
    comments: [
      { id: "c1", author: "comfortwatcher", body: "The Dark Knight for sure." },
      { id: "c2", author: "nostalgia", body: "Harry Potter series always." }
    ]
  },

  {
    id: "t3_movies_006",
    title: "Best opening scene in movie history?",
    selftext: "",
    url: "",
    post_hint: "self",
    author: "introlover",
    subreddit: "Movies",
    ups: 9800,
    num_comments: 33,
    created_utc: 1716601600,
    comments: [
      { id: "c1", author: "cinemageek", body: "Saving Private Ryan opening is insane." },
      { id: "c2", author: "actionfan", body: "The Dark Knight bank robbery scene too." }
    ]
  },

  {
    id: "t3_movies_007",
    title: "Iconic movie scenes that live rent free in your head",
    selftext: "",
    url: "https://images.unsplash.com/photo-3",
    post_hint: "image",
    author: "memoriesfilm",
    subreddit: "Movies",
    ups: 17600,
    num_comments: 58,
    created_utc: 1716601800,
    comments: [
      { id: "c1", author: "filmbrain", body: "Titanic ending scene hits every time." },
      { id: "c2", author: "classicfan", body: "You can’t forget Shawshank ending." }
    ]
  },

  {
    id: "t3_movies_008",
    title: "What’s a movie everyone praises but you didn’t like?",
    selftext:
      "Be honest — no judgment. We all have that one controversial take.",
    url: "",
    post_hint: "self",
    author: "hot_take",
    subreddit: "Movies",
    ups: 8400,
    num_comments: 120,
    created_utc: 1716602000,
    comments: [
      { id: "c1", author: "unpopular", body: "I didn’t love Avatar honestly." },
      { id: "c2", author: "defender", body: "That’s a bold take lol." },
      { id: "c3", author: "neutral", body: "Everyone has different taste." }
    ]
  },
  {
    id: "t3_music_001",
    title: "What album changed your taste in music forever?",
    selftext:
      "Mine was Blonde by Frank Ocean. I started hearing music differently after that.",
    url: "",
    post_hint: "self",
    author: "soundjourney",
    subreddit: "Music",
    ups: 17200,
    num_comments: 88,
    created_utc: 1716600000,
    comments: [
      { id: "c1", author: "musicfan", body: "Blonde is timeless." },
      { id: "c2", author: "rnblover", body: "Frank Ocean never misses." }
    ]
  },

  {
    id: "t3_music_002",
    title: "Current playlist vibes: what are you listening to lately?",
    selftext:
      "Looking for new tracks to add to my rotation.",
    url: "",
    post_hint: "self",
    author: "playlistbuilder",
    subreddit: "Music",
    ups: 9400,
    num_comments: 61,
    created_utc: 1716600500,
    comments: [
      { id: "c1", author: "spotifyuser", body: "Try some Tame Impala." },
      { id: "c2", author: "lofihead", body: "Lo-fi beats always work." }
    ]
  },

  {
    id: "t3_music_003",
    title: "Best live performance you’ve ever watched?",
    selftext: "",
    url: "https://images.unsplash.com/photo-1",
    post_hint: "image",
    author: "livefan",
    subreddit: "Music",
    ups: 14500,
    num_comments: 72,
    created_utc: 1716601000,
    comments: [
      { id: "c1", author: "concertgoer", body: "Queen at Live Aid is legendary." },
      { id: "c2", author: "rockfan", body: "Nirvana MTV Unplugged hits different." }
    ]
  },

  {
    id: "t3_music_004",
    title: "Songs that instantly boost your mood?",
    selftext:
      "Need recommendations for feel-good tracks.",
    url: "",
    post_hint: "self",
    author: "moodboost",
    subreddit: "Music",
    ups: 7600,
    num_comments: 40,
    created_utc: 1716601200,
    comments: [
      { id: "c1", author: "happylistener", body: "Uptown Funk never fails." },
      { id: "c2", author: "popfan", body: "Pharrell’s Happy is perfect." }
    ]
  },

  {
    id: "t3_music_005",
    title: "Vinyl collecting — worth it or just hype?",
    selftext:
      "Thinking of starting a vinyl collection but not sure if it’s worth the money.",
    url: "",
    post_hint: "self",
    author: "vinylcurious",
    subreddit: "Music",
    ups: 8900,
    num_comments: 55,
    created_utc: 1716601400,
    comments: [
      { id: "c1", author: "collector", body: "It’s worth it if you love the ritual." },
      { id: "c2", author: "digitalonly", body: "Streaming is just more practical tbh." }
    ]
  },

  {
    id: "t3_music_006",
    title: "Most underrated artist right now?",
    selftext: "",
    url: "",
    post_hint: "self",
    author: "undergroundhunter",
    subreddit: "Music",
    ups: 10200,
    num_comments: 66,
    created_utc: 1716601600,
    comments: [
      { id: "c1", author: "discoverer", body: "Arlo Parks deserves more attention." },
      { id: "c2", author: "indiehead", body: "Japanese Breakfast is underrated." }
    ]
  },

  {
    id: "t3_music_007",
    title: "This album cover is pure art",
    selftext: "",
    url: "https://images.unsplash.com/photo-2",
    post_hint: "image",
    author: "albumartlover",
    subreddit: "Music",
    ups: 11800,
    num_comments: 29,
    created_utc: 1716601800,
    comments: [
      { id: "c1", author: "designer", body: "Album art is underrated as a medium." },
      { id: "c2", author: "visualmusic", body: "This gives serious aesthetic vibes." }
    ]
  },

  {
    id: "t3_music_008",
    title: "What’s a song you never get tired of?",
    selftext:
      "Even after years, it still hits the same every time.",
    url: "",
    post_hint: "self",
    author: "timelesslistener",
    subreddit: "Music",
    ups: 13400,
    num_comments: 91,
    created_utc: 1716602000,
    comments: [
      { id: "c1", author: "classiclover", body: "Bohemian Rhapsody for me." },
      { id: "c2", author: "repeatmode", body: "I’ve played the same song for years lol." }
    ]
  },
  {
    id: "t3_tech_001",
    title: "AI tools are evolving faster than most people realize",
    selftext:
      "It feels like every few months we get a massive leap in capability. Curious where people think this is heading long term.",
    url: "",
    post_hint: "self",
    author: "aiwatcher",
    subreddit: "Technology",
    ups: 18200,
    num_comments: 94,
    created_utc: 1716600000,
    comments: [
      { id: "c1", author: "mlengineer", body: "We’re just getting started honestly." },
      { id: "c2", author: "skepticdev", body: "Hype is real but so are limitations." }
    ]
  },

  {
    id: "t3_tech_002",
    title: "My minimalist coding setup for maximum focus",
    selftext: "",
    url: "https://images.unsplash.com/photo-1",
    post_hint: "image",
    author: "devsetup",
    subreddit: "Technology",
    ups: 14200,
    num_comments: 38,
    created_utc: 1716600500,
    comments: [
      { id: "c1", author: "productivitynerd", body: "Clean setups boost productivity a lot." },
      { id: "c2", author: "coderlife", body: "Less clutter = better thinking." }
    ]
  },

  {
    id: "t3_tech_003",
    title: "What tech trend do you think is overhyped right now?",
    selftext:
      "Curious what people think is getting too much attention without real value yet.",
    url: "",
    post_hint: "self",
    author: "techdebate",
    subreddit: "Technology",
    ups: 9800,
    num_comments: 120,
    created_utc: 1716601000,
    comments: [
      { id: "c1", author: "realist", body: "Crypto still feels overhyped." },
      { id: "c2", author: "aioptimist", body: "Some AI tools are overpromised too." }
    ]
  },

  {
    id: "t3_tech_004",
    title: "Future laptops are getting insanely thin",
    selftext: "",
    url: "https://images.unsplash.com/photo-2",
    post_hint: "image",
    author: "hardwarefan",
    subreddit: "Technology",
    ups: 16000,
    num_comments: 55,
    created_utc: 1716601200,
    comments: [
      { id: "c1", author: "gadgetlover", body: "Battery life better keep up though." },
      { id: "c2", author: "engineer", body: "Thermals are the real challenge." }
    ]
  },

  {
    id: "t3_tech_005",
    title: "Is coding still worth learning in the age of AI?",
    selftext:
      "With AI generating code, is traditional programming still valuable?",
    url: "",
    post_hint: "self",
    author: "careerquestion",
    subreddit: "Technology",
    ups: 12500,
    num_comments: 140,
    created_utc: 1716601400,
    comments: [
      { id: "c1", author: "seniordev", body: "Yes — understanding fundamentals matters more than ever." },
      { id: "c2", author: "aiuser", body: "AI helps, but doesn’t replace thinking." }
    ]
  },

  {
    id: "t3_tech_006",
    title: "Cybersecurity tips everyone should know",
    selftext:
      "Simple habits that can prevent most common attacks.",
    url: "",
    post_hint: "self",
    author: "securityguy",
    subreddit: "Technology",
    ups: 8700,
    num_comments: 31,
    created_utc: 1716601600,
    comments: [
      { id: "c1", author: "user123", body: "2FA should be mandatory everywhere." },
      { id: "c2", author: "infosec", body: "Password managers are underrated." }
    ]
  },

  {
    id: "t3_tech_007",
    title: "The future of smart homes looks wild",
    selftext: "",
    url: "https://images.unsplash.com/photo-3",
    post_hint: "image",
    author: "smarthomefan",
    subreddit: "Technology",
    ups: 19100,
    num_comments: 62,
    created_utc: 1716601800,
    comments: [
      { id: "c1", author: "homeautomator", body: "Everything will be voice controlled soon." },
      { id: "c2", author: "privacyconcern", body: "Feels a bit invasive though." }
    ]
  },

  {
    id: "t3_tech_008",
    title: "What programming language should beginners learn in 2026?",
    selftext:
      "Trying to recommend something to a friend just starting out.",
    url: "",
    post_hint: "self",
    author: "beginnerhelp",
    subreddit: "Technology",
    ups: 10400,
    num_comments: 77,
    created_utc: 1716602000,
    comments: [
      { id: "c1", author: "pythonfan", body: "Python is still the easiest start." },
      { id: "c2", author: "webdev", body: "JavaScript if they want web dev." }
    ]
  },
  {
    id: "t3_fitness_001",
    title: "6 month transformation progress — consistency really works",
    selftext:
      "Started at 195 lbs, now down to 180 with noticeable muscle gain and fat loss.",
    url: "",
    post_hint: "self",
    author: "gymjourney",
    subreddit: "Fitness",
    ups: 17600,
    num_comments: 88,
    created_utc: 1716600000,
    comments: [
      { id: "c1", author: "trainer", body: "Consistency beats intensity every time." },
      { id: "c2", author: "gymrat", body: "Respect for staying consistent." }
    ]
  },

  {
    id: "t3_fitness_002",
    title: "Gym setup inspiration for home workouts",
    selftext: "",
    url: "https://images.unsplash.com/photo-1",
    post_hint: "image",
    author: "homegym",
    subreddit: "Fitness",
    ups: 14200,
    num_comments: 39,
    created_utc: 1716600500,
    comments: [
      { id: "c1", author: "fitlife", body: "Home gyms are underrated." },
      { id: "c2", author: "budgetfit", body: "Trying to build something like this." }
    ]
  },

  {
    id: "t3_fitness_003",
    title: "What’s the best beginner workout routine?",
    selftext:
      "Trying to start lifting but overwhelmed by all the programs online.",
    url: "",
    post_hint: "self",
    author: "newlifter",
    subreddit: "Fitness",
    ups: 12000,
    num_comments: 110,
    created_utc: 1716601000,
    comments: [
      { id: "c1", author: "coach", body: "Start with full body 3x a week." },
      { id: "c2", author: "experienced", body: "Don’t overcomplicate it at first." }
    ]
  },

  {
    id: "t3_fitness_004",
    title: "Perfect form matters more than heavy weight",
    selftext:
      "I used to ego lift until I got injured. Now I focus on form first.",
    url: "",
    post_hint: "self",
    author: "injuryless",
    subreddit: "Fitness",
    ups: 9800,
    num_comments: 42,
    created_utc: 1716601200,
    comments: [
      { id: "c1", author: "liftersafety", body: "This is how injuries happen." },
      { id: "c2", author: "smartgym", body: "Form > ego always." }
    ]
  },

  {
    id: "t3_fitness_005",
    title: "Best pre-workout meals that actually work?",
    selftext:
      "Looking for something that gives energy without feeling heavy.",
    url: "",
    post_hint: "self",
    author: "nutritionask",
    subreddit: "Fitness",
    ups: 8700,
    num_comments: 58,
    created_utc: 1716601400,
    comments: [
      { id: "c1", author: "dietcoach", body: "Banana + oats works well." },
      { id: "c2", author: "gymgoer", body: "Coffee + banana is my go-to." }
    ]
  },

  {
    id: "t3_fitness_006",
    title: "Running vs lifting — what changed your body more?",
    selftext: "",
    url: "https://images.unsplash.com/photo-2",
    post_hint: "image",
    author: "cardiovslift",
    subreddit: "Fitness",
    ups: 13500,
    num_comments: 92,
    created_utc: 1716601600,
    comments: [
      { id: "c1", author: "lifter", body: "Lifting changed my physique way more." },
      { id: "c2", author: "runner", body: "Running changed my endurance completely." }
    ]
  },

  {
    id: "t3_fitness_007",
    title: "How do you stay motivated long-term?",
    selftext:
      "I start strong but struggle staying consistent after a few weeks.",
    url: "",
    post_hint: "self",
    author: "motivationhelp",
    subreddit: "Fitness",
    ups: 11100,
    num_comments: 77,
    created_utc: 1716601800,
    comments: [
      { id: "c1", author: "discipline", body: "Stop relying on motivation, build habits." },
      { id: "c2", author: "realist", body: "Some days you just show up anyway." }
    ]
  },

  {
    id: "t3_fitness_008",
    title: "Best physique transformations are built over years, not weeks",
    selftext: "",
    url: "",
    post_hint: "self",
    author: "longtermfit",
    subreddit: "Fitness",
    ups: 19000,
    num_comments: 66,
    created_utc: 1716602000,
    comments: [
      { id: "c1", author: "patient", body: "People underestimate consistency." },
      { id: "c2", author: "gymvet", body: "This is the truth most beginners ignore." }
    ]
  },
  {
    id: "t3_anime_001",
    title: "Which anime had the best character development ever?",
    selftext:
      "For me it’s Attack on Titan — the evolution of the characters is insane.",
    url: "",
    post_hint: "self",
    author: "otakudev",
    subreddit: "Anime",
    ups: 19800,
    num_comments: 210,
    created_utc: 1716600000,
    comments: [
      { id: "c1", author: "aotfan", body: "AOT character arcs are unmatched." },
      { id: "c2", author: "fmablover", body: "Fullmetal Alchemist is up there too." }
    ]
  },

  {
    id: "t3_anime_002",
    title: "Anime art style appreciation post",
    selftext: "",
    url: "https://images.unsplash.com/photo-1",
    post_hint: "image",
    author: "artweeb",
    subreddit: "Anime",
    ups: 14500,
    num_comments: 48,
    created_utc: 1716600500,
    comments: [
      { id: "c1", author: "artist", body: "The color work is insane in modern anime." },
      { id: "c2", author: "weeb123", body: "This looks like a wallpaper instantly." }
    ]
  },

  {
    id: "t3_anime_003",
    title: "What anime should I start if I’ve never watched any?",
    selftext:
      "Looking for beginner-friendly recommendations.",
    url: "",
    post_hint: "self",
    author: "newfan",
    subreddit: "Anime",
    ups: 13200,
    num_comments: 180,
    created_utc: 1716601000,
    comments: [
      { id: "c1", author: "starter", body: "Death Note is perfect for beginners." },
      { id: "c2", author: "casualwatcher", body: "My Hero Academia is a good start too." }
    ]
  },

  {
    id: "t3_anime_004",
    title: "Most emotional anime moment that broke you?",
    selftext: "",
    url: "",
    post_hint: "self",
    author: "cryingweeb",
    subreddit: "Anime",
    ups: 17600,
    num_comments: 95,
    created_utc: 1716601200,
    comments: [
      { id: "c1", author: "sadfan", body: "Clannad After Story destroyed me." },
      { id: "c2", author: "animepain", body: "Grave of the Fireflies still hurts." }
    ]
  },

  {
    id: "t3_anime_005",
    title: "Best fight scene in anime history?",
    selftext: "",
    url: "https://images.unsplash.com/photo-2",
    post_hint: "image",
    author: "fightfan",
    subreddit: "Anime",
    ups: 22000,
    num_comments: 130,
    created_utc: 1716601400,
    comments: [
      { id: "c1", author: "narutofan", body: "Naruto vs Sasuke final fight is iconic." },
      { id: "c2", author: "jjkfan", body: "Gojo scenes are insane visually." }
    ]
  },

  {
    id: "t3_anime_006",
    title: "Anime that got better every season?",
    selftext:
      "Some shows just keep improving over time instead of dropping off.",
    url: "",
    post_hint: "self",
    author: "seasonwatcher",
    subreddit: "Anime",
    ups: 9800,
    num_comments: 60,
    created_utc: 1716601600,
    comments: [
      { id: "c1", author: "progressfan", body: "Attack on Titan again honestly." },
      { id: "c2", author: "serieslover", body: "Demon Slayer animation keeps improving." }
    ]
  },

  {
    id: "t3_anime_007",
    title: "Best anime openings of all time?",
    selftext: "",
    url: "https://images.unsplash.com/photo-3",
    post_hint: "image",
    author: "openerfan",
    subreddit: "Anime",
    ups: 16500,
    num_comments: 73,
    created_utc: 1716601800,
    comments: [
      { id: "c1", author: "musicweeb", body: "Tokyo Ghoul opening is legendary." },
      { id: "c2", author: "nostalgia", body: "Naruto openings never miss." }
    ]
  },

  {
    id: "t3_anime_008",
    title: "What anime do you think is overrated?",
    selftext:
      "Be honest — no hate, just opinions.",
    url: "",
    post_hint: "self",
    author: "hotweebtake",
    subreddit: "Anime",
    ups: 11200,
    num_comments: 140,
    created_utc: 1716602000,
    comments: [
      { id: "c1", author: "opinion", body: "I couldn’t get into Sword Art Online." },
      { id: "c2", author: "defender", body: "SAO gets too much hate honestly." }
    ]
  },
  {
    id: "t3_food_001",
    title: "What’s your go-to comfort food after a long day?",
    selftext:
      "For me it’s always a big bowl of pasta. Simple but hits every time.",
    url: "",
    post_hint: "self",
    author: "hungrydev",
    subreddit: "Food",
    ups: 16800,
    num_comments: 92,
    created_utc: 1716600000,
    comments: [
      { id: "c1", author: "foodie", body: "Mac and cheese never fails." },
      { id: "c2", author: "chefhome", body: "Rice + eggs is underrated comfort food." }
    ]
  },

  {
    id: "t3_food_002",
    title: "Homemade burger night done right 🍔",
    selftext: "",
    url: "https://images.unsplash.com/photo-1",
    post_hint: "image",
    author: "grillmaster",
    subreddit: "Food",
    ups: 22100,
    num_comments: 61,
    created_utc: 1716600500,
    comments: [
      { id: "c1", author: "burgerlover", body: "That crust looks insane." },
      { id: "c2", author: "foodcritic", body: "Would destroy this instantly." }
    ]
  },

  {
    id: "t3_food_003",
    title: "Best 20-minute meals for busy nights?",
    selftext:
      "Looking for quick recipes that don’t sacrifice taste.",
    url: "",
    post_hint: "self",
    author: "quickcook",
    subreddit: "Food",
    ups: 11900,
    num_comments: 80,
    created_utc: 1716601000,
    comments: [
      { id: "c1", author: "mealprep", body: "Stir fry is always the answer." },
      { id: "c2", author: "lazychef", body: "Tacos take like 10 minutes max." }
    ]
  },

  {
    id: "t3_food_004",
    title: "Perfectly plated steak dinner",
    selftext: "",
    url: "https://images.unsplash.com/photo-2",
    post_hint: "image",
    author: "steaklover",
    subreddit: "Food",
    ups: 19800,
    num_comments: 47,
    created_utc: 1716601200,
    comments: [
      { id: "c1", author: "meatenthusiast", body: "That sear is perfect." },
      { id: "c2", author: "chef", body: "Restaurant quality plating." }
    ]
  },

  {
    id: "t3_food_005",
    title: "What’s a food you hated as a kid but love now?",
    selftext: "",
    url: "",
    post_hint: "self",
    author: "tastechange",
    subreddit: "Food",
    ups: 10400,
    num_comments: 73,
    created_utc: 1716601400,
    comments: [
      { id: "c1", author: "grownup", body: "Brussels sprouts 100%." },
      { id: "c2", author: "pickykid", body: "Olives for me." }
    ]
  },

  {
    id: "t3_food_006",
    title: "Fresh sushi spread 🍣",
    selftext: "",
    url: "https://images.unsplash.com/photo-3",
    post_hint: "image",
    author: "sushilover",
    subreddit: "Food",
    ups: 24500,
    num_comments: 88,
    created_utc: 1716601600,
    comments: [
      { id: "c1", author: "pickykid", body: "Olives for me." }
    ]
  },
  {
    id: "t3_art_001",
    title: "What art style do you feel most drawn to?",
    selftext:
      "I’ve always been fascinated by surrealism, but I’m curious what others connect with.",
    url: "",
    post_hint: "self",
    author: "brushthinker",
    subreddit: "Art",
    ups: 15400,
    num_comments: 82,
    created_utc: 1716600000,
    comments: [
      { id: "c1", author: "artlover", body: "Impressionism feels so calming." },
      { id: "c2", author: "digitalartist", body: "I love modern digital surrealism." }
    ]
  },

  {
    id: "t3_art_002",
    title: "Digital painting progress — 1 year of practice",
    selftext: "",
    url: "https://images.unsplash.com/photo-1",
    post_hint: "image",
    author: "pixelpainter",
    subreddit: "Art",
    ups: 19800,
    num_comments: 61,
    created_utc: 1716600500,
    comments: [
      { id: "c1", author: "artist", body: "Huge improvement, keep going!" },
      { id: "c2", author: "learner", body: "This motivates me to keep practicing." }
    ]
  },

  {
    id: "t3_art_003",
    title: "How do you overcome artist block?",
    selftext:
      "I’ve been stuck creatively for weeks and nothing feels inspiring anymore.",
    url: "",
    post_hint: "self",
    author: "stuckartist",
    subreddit: "Art",
    ups: 11200,
    num_comments: 74,
    created_utc: 1716601000,
    comments: [
      { id: "c1", author: "creativeflow", body: "Try switching mediums for a bit." },
      { id: "c2", author: "painter", body: "I go outside and sketch random things." }
    ]
  },

  {
    id: "t3_art_004",
    title: "Abstract art piece inspired by emotion",
    selftext: "",
    url: "https://images.unsplash.com/photo-2",
    post_hint: "image",
    author: "emotioncanvas",
    subreddit: "Art",
    ups: 17600,
    num_comments: 49,
    created_utc: 1716601200,
    comments: [
      { id: "c1", author: "viewer", body: "This feels very powerful visually." },
      { id: "c2", author: "critic", body: "Love the color balance here." }
    ]
  },

  {
    id: "t3_art_005",
    title: "Traditional vs digital art — which do you prefer?",
    selftext: "",
    url: "",
    post_hint: "self",
    author: "artdebate",
    subreddit: "Art",
    ups: 9800,
    num_comments: 91,
    created_utc: 1716601400,
    comments: [
      { id: "c1", author: "traditionalist", body: "Nothing beats physical paint and canvas." },
      { id: "c2", author: "digitalartist", body: "Digital gives way more flexibility." }
    ]
  },

  {
    id: "t3_art_006",
    title: "Sketchbook page dump — daily drawing habit",
    selftext: "",
    url: "https://images.unsplash.com/photo-3",
    post_hint: "image",
    author: "sketchdaily",
    subreddit: "Art",
    ups: 14200,
    num_comments: 36,
    created_utc: 1716601600,
    comments: [
      { id: "c1", author: "student", body: "Consistency is key, nice work." },
      { id: "c2", author: "mentor", body: "Great line confidence here." }
    ]
  },

  {
    id: "t3_art_007",
    title: "What inspires your creativity the most?",
    selftext:
      "Music, nature, emotions — curious what drives other artists.",
    url: "",
    post_hint: "self",
    author: "creativequestion",
    subreddit: "Art",
    ups: 10100,
    num_comments: 58,
    created_utc: 1716601800,
    comments: [
      { id: "c1", author: "musicianartist", body: "Music is my biggest inspiration." },
      { id: "c2", author: "naturelover", body: "Nature always resets my creativity." }
    ]
  },

  {
    id: "t3_art_008",
    title: "Surreal digital artwork experiment",
    selftext: "",
    url: "https://images.unsplash.com/photo-4",
    post_hint: "image",
    author: "dreamartist",
    subreddit: "Art",
    ups: 22300,
    num_comments: 67,
    created_utc: 1716602000,
    comments: [
      { id: "c1", author: "surrealfan", body: "This feels like a dream sequence." },
      { id: "c2", author: "designer", body: "Amazing composition and lighting." }
    ]
  },
  {
    id: "t3_soccer_001",
    title: "Greatest football player of all time — Messi or Ronaldo?",
    selftext:
      "Let the debate begin again 😅",
    url: "",
    post_hint: "self",
    author: "goatdebate",
    subreddit: "Soccer",
    ups: 32000,
    num_comments: 410,
    created_utc: 1716600000,
    comments: [
      { id: "c1", author: "messi_fan", body: "Messi clears, no debate." },
      { id: "c2", author: "ronaldo_fan", body: "Ronaldo is the ultimate goal scorer." }
    ]
  },

  {
    id: "t3_soccer_002",
    title: "Insane stadium atmosphere last night 🔥",
    selftext: "",
    url: "https://images.unsplash.com/photo-1",
    post_hint: "image",
    author: "matchdayfan",
    subreddit: "Soccer",
    ups: 21800,
    num_comments: 92,
    created_utc: 1716600500,
    comments: [
      { id: "c1", author: "supporter", body: "Crowd energy looks unreal." },
      { id: "c2", author: "ultra", body: "Nothing beats live football atmosphere." }
    ]
  },

  {
    id: "t3_soccer_003",
    title: "Best World Cup moment in history?",
    selftext:
      "So many iconic moments — what stands out to you the most?",
    url: "",
    post_hint: "self",
    author: "worldcupfan",
    subreddit: "Soccer",
    ups: 18400,
    num_comments: 150,
    created_utc: 1716601000,
    comments: [
      { id: "c1", author: "argentinafan", body: "2014 Germany vs Argentina final was insane." },
      { id: "c2", author: "nostalgia", body: "2010 Spain winning it all." }
    ]
  },

  {
    id: "t3_soccer_004",
    title: "Perfect free kick technique breakdown",
    selftext: "",
    url: "https://images.unsplash.com/photo-2",
    post_hint: "image",
    author: "setpiecepro",
    subreddit: "Soccer",
    ups: 14200,
    num_comments: 47,
    created_utc: 1716601200,
    comments: [
      { id: "c1", author: "coach", body: "Body positioning is everything here." },
      { id: "c2", author: "player", body: "Need to practice this more." }
    ]
  },

  {
    id: "t3_soccer_005",
    title: "Which club has the best current squad depth?",
    selftext:
      "Talking purely squad strength across competitions.",
    url: "",
    post_hint: "self",
    author: "footballanalyst",
    subreddit: "Soccer",
    ups: 13100,
    num_comments: 98,
    created_utc: 1716601400,
    comments: [
      { id: "c1", author: "cityfan", body: "Man City depth is insane." },
      { id: "c2", author: "realfan", body: "Real Madrid always finds a way." }
    ]
  },

  {
    id: "t3_soccer_006",
    title: "Top 10 goals that still give chills",
    selftext: "",
    url: "https://images.unsplash.com/photo-3",
    post_hint: "image",
    author: "goalcollector",
    subreddit: "Soccer",
    ups: 26000,
    num_comments: 73,
    created_utc: 1716601600,
    comments: [
      { id: "c1", author: "fan1", body: "Ronaldo bicycle kick is legendary." },
      { id: "c2", author: "fan2", body: "Messi solo runs are unmatched." }
    ]
  },

  {
    id: "t3_soccer_007",
    title: "VAR — helping football or ruining the flow?",
    selftext:
      "Controversial topic but it’s changed the game a lot.",
    url: "",
    post_hint: "self",
    author: "refdiscussion",
    subreddit: "Soccer",
    ups: 15500,
    num_comments: 220,
    created_utc: 1716601800,
    comments: [
      { id: "c1", author: "oldschoolfan", body: "Ruining the emotion of the game." },
      { id: "c2", author: "modernfan", body: "It makes decisions fair though." }
    ]
  },

  {
    id: "t3_soccer_008",
    title: "Best young talent in world football right now?",
    selftext: "",
    url: "",
    post_hint: "self",
    author: "nextgenwatch",
    subreddit: "Soccer",
    ups: 19300,
    num_comments: 140,
    created_utc: 1716602000,
    comments: [
      { id: "c1", author: "fanboy", body: "Bellingham is on another level." },
      { id: "c2", author: "scout", body: "Endrick looks promising too." }
    ]
  }
        ],
    userVotes: {}         
    },
    reducers: {
        downvote: (state, action) => {
            const post = state.posts.find(p => p.id === action.payload)

            if (!post) {
                return 
            }

            const currentVote = state.userVotes[post.id];

            if (currentVote === "down") {
                delete state.userVotes[post.id];
                post.ups += 1
                return 
            }

            else if (currentVote === "up") {
                post.ups -= 2;
            }

            else {
                //this is if the userVote value is null so it treats it like normal and just goes down one value
                post.ups -= 1;
            }

            state.userVotes[post.id] = "down";
        },
        upvote: (state, action) => {
            const post = state.posts.find(p => p.id === action.payload)
            if (!post) {
                return
            }

            const currentVote = state.userVotes[post.id];

            if (currentVote === "up") {
                delete state.userVotes[post.id];
                post.ups -= 1;
                return 
            }

            else if (currentVote === "down") {
                post.ups += 2;
            }

            else {
                post.ups += 1;
            }

            state.userVotes[post.id] = "up";
        }
    }
});

export default postSlice.reducer;
export const {downvote, upvote} = postSlice.actions;