const router = require('express').Router();
const cv = require('../controllers/cvController');

router.post('/upload', cv.upload);
router.post('/parse', cv.parse);

module.exports = router;
