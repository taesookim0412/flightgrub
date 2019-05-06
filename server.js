const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(bodyparser.json());
app.use(express.static(__dirname + "/public/dist/public"));

require("./server/configs/mongoose.js")(mongoose);

app.get("*", (req, res, next) => {
    res.sendFile(path.resolve(__dirname + "/public/dist/public/index.html"));
});

app.listen(8000, () => console.log("Listening on port 8000"));