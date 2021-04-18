const mongoose = require("mongoose");

const notesSchema = mongoose.Schema({
    title: { type: String },
    date: { type: Date, default: Date.now },
    body: { type: String },
    username: { type: String, required: "Please enter username" },
    password: { type: String, required: "please enter password" }
});

const Note = mongoose.model("Note", notesSchema)
module.exports = Note;