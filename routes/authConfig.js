const mongoose = require('mongoose');
const Investor = require('../models/investor');
const Startup = require('../models/startup');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
                    name: req.body.name,
                    Age: req.body.age,
                    bio: req.body.bio,
                    occupation: req.body.occupation

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
        });

});

app.post('/startup', (req, res) => {

    console.log('this is the value of req.body.email', req.body.email)
        console.log('password has been saved', req.body.password)

        let newBody = req.body;
        console.log('this is the value of req.body.search', newBody.email)


        //This route will handle how artist are signed up
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
                return res.status(500).json({
                    error: err
                });
            } else {
                const user = new Startup({
                    Account_id: new mongoose.Types.ObjectId(),
                    email: req.body.email,
                    password: hash,
                    
                });
                user.save().then(result => {
                    const JWTToken = jwt.sign({

                            _id: result.Account_id
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