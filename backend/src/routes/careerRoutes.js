const router = require('express').Router();
const career = require('../controllers/careerController');

router.post('/recommend', career.recommend);
router.get('/:id', career.getById);
router.get('/skill-gap/:id', career.skillGap);

module.exports = router;
