const Router = require("express").Router();
const Note = require("../models/notes");
const UserModel = require("../models/users");

Router.get("/", async (req, res) => {
    try {
        const notes = await Note.find()
        res.json(notes)
        console.log("We're getting all notes from Router.get('/')")
    } catch (err) {
        res.status(501)
        res.send("oh no! Guess we'll never know what hRouterened")
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
        res.send("oh no! Guess we'll never know what hRouterened")
        console.log("Error in the notes post route", err)
    }
});

// -----------------------------Passprot Routes-------------------------------------

Router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("No User Exists");
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                res.send("Successfully Authenticated");
                console.log(req.user);
            });
        }
    })(req, res, next);
});

Router.post("/signup", (req, res) => {
    UserModel.findOne({ username: req.body.username }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User Already Exists");
        if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);

            const newUser = new User({
                username: req.body.username,
                password: hashedPassword,
            });
            await newUser.save();
            res.send("User Created");
        }
    });
});

Router.get("/user", (req, res) => {
    res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});

module.exports = Router;
