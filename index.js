const app = require("express")();
require("dotenv").config();
const sequelize = require('./db/configSqlz');

app.get("/", (req, res) => {
    res.status(200).send("tf monkey")
})


app.listen(4001, () => {
    console.log(`my app is listening 4000`);
});