const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
	videoId: {
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
	},
	name: {
		type: String
	}
});

const Note = mongoose.model('Note', notesSchema);
module.exports = Note;
