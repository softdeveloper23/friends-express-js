const express = require('express');

const friendsController = require('../controllers/friends.controller');

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
    console.log('ip address: ', req.ip);
    next();
});

// Friends Router
friendsRouter.post('/', friendsController.postFriend); // POST /friends
friendsRouter.get('/', friendsController.getFriends); // GET /friends
friendsRouter.get('/:friendId', friendsController.getFriend) // GET /friends/:friendId

module.exports = friendsRouter;