const express = require('express');

const moviesController = require('../controllers/moviesController');

const router = express.Router();

router.get('/toWatch',
    moviesController.getToWatch,
  (req, res) => res.status(200).json(res.locals.rows)
);

router.get('/watched',
    moviesController.getWatched,
  (req, res) => res.status(200).json(res.locals.rows)
);

router.patch('/score',
  moviesController.updateScore,
  (req, res) => res.sendStatus(200)
)

router.patch('/status',
  moviesController.updateStatus,
  (req, res) => res.sendStatus(200)
)

module.exports = router;