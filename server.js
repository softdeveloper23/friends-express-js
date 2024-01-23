const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router.js');
const messagesRouter = require('./routes/messages.router.js');

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

// Express Static file middleware
app.use('/site', express.static(path.join(__dirname, 'public')));

// JSON Parsing middleware
app.use(express.json());

// Set endpoint for friends and messages
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}...`)
});