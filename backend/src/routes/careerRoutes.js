const router = require('express').Router();
const career = require('../controllers/careerController');

router.post('/recommend', career.recommend);
router.get('/skill-gap/:id', career.skillGap);
router.get('/roadmap/:id', career.getRoadmap);
router.get('/:id', career.getById);

module.exports = router;
