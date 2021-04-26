const Router = require("express").Router();
const Note = require("../models/notes");


Router.get("/", async (req, res) => {
    try {
        console.log(req.query.videoId)
        const notes = await Note.find()
        // find by id
        res.json(notes)
    } catch (err) {
        console.log("Error in the notes get route", err)
        res.status(501)
        res.send("oh no!")
    }
});

Router.post("/", async (req, res) => {
    console.log("req.body from post route: ", req.body)
    try {
        console.log("We got a note w/ ", req.body)
        const note = await Note.create(req.body)
        res.status(201)
        res.send(note._id)
    } catch (err) {
        console.log("Error in the notes post route", err)
        res.status(501)
        res.send("oh no!")
    }
});

Router.delete("/api/notes/:id", async (req, res) => {
    try {
        console.log(req.query.videoId)
        const notes = await Note.splice(req.params.id, 1)
        res.status(201)
        res.json(notes)
    } catch (err) {
        console.log("Error in the notes get route", err)
        res.status(501)
        res.send("oh no!")
    }
})

module.exports = Router;
