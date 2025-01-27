const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json')

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home', {name: 'home'})
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit]
    res.render('subreddit', {...data});
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
