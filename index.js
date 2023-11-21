const express = require("express");
const app = express();
require("dotenv").config();
const users = require('./routes/users.routes');
const tasks = require('./routes/task.routes');
const progress = require('./routes/progress.routes');
const category = require('./routes/category.routes');
const deadline = require('./routes/deadline.routes');
const sequelize = require('./db/configSqlz');

app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.json);

app.get("/", (req, res) => {
    res.status(200).send("tf monkey")
})

app.use('/api', users);
app.use('/api/tasks', tasks);
app.use('/api/progress', progress);
app.use('/api/category', category);
app.use('/api/deadline', deadline);


app.listen(3001, () => {
    console.log(`my app is listening 3001`);
});