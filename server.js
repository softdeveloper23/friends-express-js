const express = require('express');

const friendsController = require('./controllers/friends.controller');
const messagesController = require('./controllers/messages.controller');

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

// Friend endpoints
app.post('/friends', friendsController.postFriend); // POST /friends
app.get('/friends', friendsController.getFriends); // GET /friends
app.get('/friends/:friendId', friendsController.getFriend) // GET /friends/:friendId

// Message endpoints
app.get('/messages', messagesController.getMessages); // GET /messages
app.post('/messages', messagesController.postMessages); // POST /messages

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}...`)
});