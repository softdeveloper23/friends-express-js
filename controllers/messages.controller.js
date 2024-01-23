function getMessages(req, res) {
    res.send('<ul><li><h1>This is Express.js!!!</h1></li></ul>');
}

function postMessages(req, res) {
    console.log('Updating messages...');
}

module.exports = {
    getMessages,
    postMessages,
};