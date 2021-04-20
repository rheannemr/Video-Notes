const mongoose = require("mongoose");

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
    users: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
});


const Note = mongoose.model("Note", notesSchema)
module.exports = Note;