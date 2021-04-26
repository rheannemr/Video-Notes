const Router = require("express").Router();
const Note = require("../models/notes");

Router.post("/delete", async (req, res) => {
    console.log("request work hopefully")
    try {
        console.log("We got a note w/ ", req.body)
        const note = await Note.deleteMany({ videoId: req.body.videoId })
        res.status(201)
        res.send(note._id)
    } catch (err) {
        console.log("Error in the notes delete post route", err)
        res.status(501)
        res.send("oh no!")
    }
});

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



// Router.param("notes", function(req, res, next, notes) {
//     req.collection = db.collection(notes);
//     return next();
//   });

// Router.del("/collections/:notes/:id", function(req, res, next) {
//     req.collection.removeById(req.params.id, function(err, output) {
//       if (err) {
//         return next(err);
//       }
//       res.send(output === 1 ? { msg: "success" } : { msg: "error" });
//     });
//   });


//  Router.delete("/", async (req, res) => {
//      try {
//          console.log(req.query.videoId)
//          const notes = await Note.splice(req.params.id, 1)
//          res.status(201)
//          res.json(notes)
//      } catch (err) {
//          console.log("Error in the notes get route", err)
//          res.status(501)
//          res.send("oh no!")
//      }
//  })

module.exports = Router;
