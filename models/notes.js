const mongoose = require("mongoose");

const notesSchema = mongoose.Schema({
    timestamp: Date.now(),
    body: String, required: "Please enter note, NOW!"
});

const Note = mongoose.model("Note", notesSchema)
module.exports = Note;