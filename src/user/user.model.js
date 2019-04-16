const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    name : {
        type: String,
        default: "",
        required: true,
    },

    email : {
        type: String,
        default: '',
        required: false,
    },

    watchLists: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Movie",
            require: false,
        }
    ],

});

const User = mongoose.model("User", UserSchema);
module.exports = User;