const Router = require("express").Router();
const Note = require("../models/notes");

Router.get("/", async (req, res) => {
    try {
        const notes = await Note.find()
        res.json(notes)
        console.log("We're getting all notes from Router.get('/')")
    } catch (err) {
        res.status(501)
        res.send("oh no!")
        console.log("Error in the notes get route", err)
    }
});

Router.post("/", async (req, res) => {
    console.log("req.body from post route: ", req.body)
    try {

        const note = await Note.create(req.body)
        res.status(201)
        res.send(note._id)
        console.log("We got a note w/ ", req.body)
    } catch (err) {
        res.status(501)
        res.send("oh no!")
        console.log("Error in the notes post route", err)
    }
});


module.exports = Router;
