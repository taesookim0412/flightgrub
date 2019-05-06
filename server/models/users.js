const mongoose = require('mongoose');
module.exports = (mongoose) => {
    const UsersSchema = new mongoose.Schema({
        user: {type: String},
        pass: {type: String}
    });
    mongoose.model("users", UsersSchema);
}