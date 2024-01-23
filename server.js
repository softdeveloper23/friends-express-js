const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
    {
        id: 0,
        name: 'Monkey D. Luffy',
    },
    {
        id: 1,
        name: 'Usopp',
    },
    {
        id: 2,
        name: 'Nami',
    },
];

app.get('/friends', (req, res) => {
    res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: 'Friend does not exist'
        });
    }
})

app.get('/messages', (req, res) => {
    res.send('<ul><li><h1>This is Express.js!!!</h1></li></ul>');
});

app.post('/messages', (req, res) => {
    console.log('Updating messages...');
});

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}...`)
});