const path = require('path');

function getMessages(req, res) {
    res.render('messages', {
        title: 'Message to my Friends!',
        friend: 'Gandalf the Grey',
    });
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'));
}

function postMessages(req, res) {
    console.log('Updating messages...');
}

module.exports = {
    getMessages,
    postMessages,
};