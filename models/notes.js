const mongoose = require("mongoose");
// const User = require("./users")

const notesSchema = mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    title: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    body: {
        type: String
    }


});


const Note = mongoose.model("Note", notesSchema)
module.exports = Note;