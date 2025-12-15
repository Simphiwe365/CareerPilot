const router = require('express').Router();
const chat = require('../controllers/chatController');

router.post('/message', chat.message);
router.get('/history', chat.history);
router.delete('/history', chat.clear);

module.exports = router;
