const mongoose = require("mongoose");

const notesSchema = mongoose.Schema({
    date: { type: Date, default: Date.now },
    body: {type: String, required: "Please enter note, NOW!" }
});

const Note = mongoose.model("Note", notesSchema)
module.exports = Note;