
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Investor = require('../models/investor');
const startup = require('../models/startup');

module.exports = (app) => {
    app.post('/investor-signup', (req, res) => {
        //This route will handle how artist are signed up
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
                return res.status(500).json({
                    error: err
                });
            } else {
                const user = new Investor({
                    account_id: new mongoose.Types.ObjectId(),
                    email: req.body.email,
                    password: hash,
                    name: req.body.name

                });
                user.save().then(result => {
                    const JWTToken = jwt.sign({

                            _id: result.account_id
                        },
                        process.env.SECRET, {
                            expiresIn: '2h'
                        });
                    console.log(result);
                    return res.json(JWTToken).status(200);
                }).catch(error => {
                    console.log(error);
                    res.status(500).json({
                        error: err
                    });

                });
            }
        })








    })
}