const router = require('express').Router();
const user = require('../controllers/userController');

router.get('/profile', user.profile);
router.put('/profile', user.updateProfile);

module.exports = router;
