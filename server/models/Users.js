const mongoose = require("mongoose");

// User schema
const UserSchema = new mongoose.Schema({
    name: { type: mongoose.Schema.Types.String, required: true },
    email: { type: mongoose.Schema.Types.String, required: true },
    age: { type: mongoose.Schema.Types.Number, required: true }
});

// User model
const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
