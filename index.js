const app = require("express")();
require("dotenv").config();
const users = require('./routes/users');
const sequelize = require('./db/configSqlz');

app.use(express.json());
app.use(bodyParser.json());

const bodyParser = require('body-parser');

app.get("/", (req, res) => {
    res.status(200).send("tf monkey")
})

app.use('/api', users);


app.listen(4001, () => {
    console.log(`my app is listening 4000`);
});