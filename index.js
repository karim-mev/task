const express = require("express");
const app = express();
require("dotenv").config();
const users = require('./routes/users.routes');
const sequelize = require('./db/configSqlz');

app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.json);

app.get("/", (req, res) => {
    res.status(200).send("tf monkey")
})

app.use('/api', users);


app.listen(3001, () => {
    console.log(`my app is listening 3001`);
});