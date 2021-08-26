const express = require('express');

const moviesController = require('../controllers/moviesController');
const usersController = require('../controllers/userController');

const router = express.Router();

router.get('/toWatch',
    moviesController.getToWatch,
  (req, res) => res.status(200).json(res.locals.rows)
);

router.get('/watched',
    moviesController.getWatched,
  (req, res) => res.status(200).json(res.locals.rows)
);

router.post('/movies',
    moviesController.addMovie,
  (req, res) => res.sendStatus(200)
);

router.post('/users', 
  usersController.addUser,
  (req, res) => res.sendStatus(200)
);

router.get('/users',
  usersController.verifyUser,
  (req, res) => {
    if (res.locals.valid) res.send("logged in")
    else res.send("not logged in")
  }
  )

router.patch('/score',
  moviesController.updateScore,
  (req, res) => res.sendStatus(200)
)

router.patch('/status',
  moviesController.updateStatus,
  (req, res) => res.sendStatus(200)
)

module.exports = router;