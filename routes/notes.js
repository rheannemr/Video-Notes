const Router = require('express').Router();
const Note = require('../models/notes');

// Deletes Card component with video and notes
Router.post('/delete', async (req, res) => {
	try {
		const note = await Note.deleteMany({ videoId: req.body.videoId, name: req.body.name });
		res.status(201);
		res.send(note._id);
	} catch (err) {
		console.log('Error in the notes delete post route', err);
		res.status(501);
		res.send('Unexpected Error');
	}
});

// User 
Router.post('/user', async (req, res) => {
	try {
		const note = await Note.find({ name: req.body.name });
		res.send(note);
	} catch (err) {
		res.status(501);
		res.send('Unexpected Error');
	}
});

// Gets all notes associated with user
Router.get('/', async (req, res) => {
	try {
		const notes = await Note.find({ name: req.query.user });
		res.status(201);
		res.json(notes);
	} catch (err) {
		console.log('Error in the notes get route', err);
		res.status(501);
		res.send('Unexpected Error');
	}
});

// Creates new note
Router.post('/', async (req, res) => {
	try {
		const note = await Note.create(req.body);
		res.status(201);
		res.send(note._id);
	} catch (err) {
		console.log('Error in the notes post route', err);
		res.status(501);
		res.send('Unexpected Error');
	}
});

module.exports = Router;
