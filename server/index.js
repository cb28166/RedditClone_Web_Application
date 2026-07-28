import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send('Hello World')
});

app.get('/api/reddit/:subreddit', async (req, res) => {
    const subreddit = req.params.subreddit;

    const response = await fetch(
        `https://api.reddit.com/r/${subreddit}/hot.json`,
        {
            headers: {
                'User-Agent': 'Mozilla/5.0'
            }
        }
    );

    console.log('Status:', response.status);
    console.log('Content-Type:', response.headers.get('content-type'));
    console.log('URL:', response.url);

    const text = await response.text();

    console.log(text.slice(0, 200));

    res.send(`Request Completed`);
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
})