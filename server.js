const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const path = require('path')

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());


app.use(express.static(path.join(__dirname, './client/build')))
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server Runnning On PORT ${PORT} `);
});




