const express = require('express');

const messagesController = require('../controllers/messages.controller.js');

const messagesRouter = express.Router();

// Message endpoints
messagesRouter.get('/', messagesController.getMessages); // GET /messages
messagesRouter.post('/', messagesController.postMessages); // POST /messages

module.exports = messagesRouter;