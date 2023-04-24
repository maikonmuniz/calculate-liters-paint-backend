const router = require('express').Router();
const calculatePaintWallController = require('../../controllers/calculatePaintWall/calculatePaintWallController.js');

router.post('/calculateLitersPaintWill', calculatePaintWallController.calculate);

module.exports = router;