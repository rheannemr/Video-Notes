const Router = require('express').Router();
const Note = require('../models/notes');

Router.post('/delete', async (req, res) => {
	try {
		console.log('We got a note w/ ', req.body);
		const note = await Note.deleteMany({ videoId: req.body.videoId, name: req.body.name });
		res.status(201);
		res.send(note._id);
	} catch (err) {
		console.log('Error in the notes delete post route', err);
		res.status(501);
		res.send('Unexpected Error');
	}
});

Router.post('/user', async (req, res) => {
	try {
		console.log('We got a note w/ ', req.body);
		const note = await Note.find({ name: req.body.name });
		res.status(201);
		res.send(note);
	} catch (err) {
		console.log('Error in the user route', err);
		res.status(501);
		res.send('Unexpected Error');
	}
});

Router.get('/', async (req, res) => {
	try {
		console.log(req.query.user);
		const notes = await Note.find({ name: req.query.user });
		res.json(notes);
	} catch (err) {
		console.log('Error in the notes get route', err);
		res.status(501);
		res.send('Unexpected Error');
	}
});

Router.post('/', async (req, res) => {
	console.log('req.body from post route: ', req.body);
	try {
		console.log('We got a note w/ ', req.body);
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
