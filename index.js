const express = require('express')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './process.env') })
const app = express();
const port = 5000;
const mongoDB = require('./db')
mongoDB();
const cors = require('cors')

const corsOptions = {
    // origin: allowedOrigins,
    origin: '*',
    methods: ['GET', 'POST', "PUT"],
    allowedHeaders: ['Content-Type', 'auth-token'],
};
app.use(cors(corsOptions))

app.use(express.json())


app.get('/', function (req, res) {
    console.log("/user request called");
    res.send('welcome to backend').status(200);
});
app.use('/api', require('./Routes/CreateUser'))
app.use('/api', require('./Routes/CreateClass'))
// app.use('/api',require('./Routes/DisplayData'))
app.listen(port, () => {

    console.log("Listening on port 5000")
})


// this is for render ---------------
const cron = require("node-cron");
// Creating a cron job which runs on every 10 second
cron.schedule("0 */45 * * * *", function () {
    console.log("running a task every 10 minutes");
});

app.listen(3000);
