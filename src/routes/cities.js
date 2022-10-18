const { Router } = require('express');
const {
    cities 
} = require('../controllers/cities.controller');

const router = Router();

router.get('/:city', cities);

module.exports = router;