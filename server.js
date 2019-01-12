const express = require('express');
const app = express();
const db = require('./db/db');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;




app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

require('dotenv').config()

const auth = require('./routes/authConfig');
auth(app);






app.listen(port, () => console.log(`listening on port: ${port}`));


module.exports = app;