let router = require('express').Router();

const ChatController = require('../../controllers/Chat');

router.post('/sendMessage', ChatController.sendMessage);

module.exports = router;
