const express = require('express');

const app = express()

// app.use(() => {
//     console.log('we got a new request')
// })

app.get('/', (req, res) => {
    res.send('This is the homepage!')
})

app.get('/cats', (req, res) => {
    res.send('Meow ^^')
})

app.get('/dogs', (req, res) => {
    res.send('Woof ^^')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})