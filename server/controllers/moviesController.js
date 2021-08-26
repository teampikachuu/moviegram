const db = require("../models/movieModels");

const moviesController = {};


moviesController.getToWatch = (req, res, next) => {
    const movieQ = `SELECT * 
    FROM "public.Movies" 
    WHERE username = $1 AND status = 'unwatched'`
    const value = [req.query.username]
    console.log(req.query, value[0])
    db.query(movieQ, value, (err, qres) => {
        //console.log(value)
        if (err) {
          console.log(err);
        }
        res.locals = qres;
        console.log(res.locals);
        return next();
      });
}

moviesController.addMovie = (req, res, next) => {
  const movieQ = `INSERT INTO "public.Movies" 
  ("movie_name", "status", "score", "username") 
  VALUES ($1, $2, $3, $4, $5)`
  const {movieName, status, score, username} = req.body
  const values = [movieName, status, score, usernameimgURL]
  console.log(req.body)
  console.log(values)
  db.query(movieQ, values, (err, qres) => {
    //console.log(value)
    if (err) {
      console.log(err);
    }
    res.locals = qres;
    console.log(res.locals);
    return next();
  });
}

moviesController.getWatched = (req, res, next) => {
  const movieQ = `SELECT * 
  FROM "public.Movies" 
  WHERE username = $1 AND status = 'watched'`
  const value = [req.query.username]
  //console.log(req.query, value[0])
  db.query(movieQ, value, (err, qres) => {
      //console.log(value)
      if (err) {
        console.log(err);
      }
      res.locals = qres;
      console.log(res.locals);
      return next();
    });
}

moviesController.updateStatus = (req, res, next) => {
  const movieQ = `UPDATE "public.Movies" 
  SET status = $1 
  WHERE id = $2`
  const values = [req.body.status, req.query.id]
  db.query(movieQ, values, (err, qres) => {
    //console.log(value)
    if (err) {
      console.log(err);
    }
    res.locals = qres;
    console.log(res.locals);
    return next();
  });
}

moviesController.updateScore = (req, res, next) => {
  const movieQ = `UPDATE "public.Movies" 
  SET score = $1 
  WHERE id = $2`
  const values = [req.body.score, req.query.id]
  db.query(movieQ, values, (err, qres) => {
    //console.log(value)
    if (err) {
      console.log(err);
    }
    res.locals = qres;
    console.log(res.locals);
    return next();
  });
}

module.exports = moviesController;