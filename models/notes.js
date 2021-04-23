const mongoose = require("mongoose");
// const User = require("./users")

const notesSchema = mongoose.Schema({
    title: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    body: {
        type: String
    },

    username: {
        type: String
    },
    password: {
        type: String
    }

});


const Note = mongoose.model("Note", notesSchema)
module.exports = Note;