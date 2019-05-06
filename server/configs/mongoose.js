const fs = require('fs');
const path = require('path');

module.exports = (mongoose, AutoIncrement) => {
    mongoose.connect("mongodb://localhost/flightgrub", {useNewUrlParser: true, useFindAndModify: true, useCreateIndex: true});
    const model_path = path.join(__dirname, "./../models");
    fs.readdirSync(model_path).forEach((value) => {
        if (value.indexOf('.js') > 0) {
            require(model_path + "/" + value)(mongoose);
        }
    })
}