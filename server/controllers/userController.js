const db = require("../models/movieModels");

const usersController = {};

usersController.addUser = (req, res, next) => {
    userQ = `INSERT INTO "public.Users"
    VALUES ($1, $2)`
    const {username, password} = req.body;
    const values = [username, password]
    db.query(userQ, values, (err, qres) => {
        //console.log(value)
        if (err) {
          console.log(err);
        }
        res.locals = qres;
        console.log(res.locals);
        return next();
      });
}

usersController.verifyUser = (req, res, next) => {
    userQ = `SELECT password FROM "public.Users"
    WHERE username = $1`
    const {username, password} = req.body;
    value = [username]
    db.query(userQ, value, (err, qres) => {
        //console.log(value)
        if (err) {
            res.locals.valid = false
            console.log(err);
        }
        //console.log(qres.rows)
        if (qres.rows[0].password === password) res.locals.valid = true;
        else res.locals.valid = false
        console.log(res.locals);
        return next();
      });
}



module.exports = usersController;