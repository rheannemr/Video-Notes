const Router = require("express").Router();
// const Note = require("../models/notes");
const bcrypt = require('bcrypt');

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

Router.post("/signup", async (req, res, err, doc) => {
    console.log("!!! HELLO FROM SIGNUP ROUTE!!")
    if (err) {
        throw err;
    }
    if (doc) {
        res.send("User Already Exists")
    } else {
        const { username, passowrd } = req.body;
        const newUser = new User({
            username,
            passowrd,
        });
        console.log(newUser, "NEW USER TEST!!!");
        const salt = await bcrypt.genSalt(15);
        newUser.password = await bcrypt.hash(password, salt);
        await newUser.save();
        res.send("User Created");
    }
})

// Router.post("/signup", (req, res) => {
//     console.log("hello from /signup post route!!")
//     Note.findOne({ username: req.body.username }, async (err, doc) => {
//         if (err) throw err;
//         if (doc) res.send("User Already Exists");
//         if (!doc) {
//             const { username, passowrd } = req.body;
//             // const hashedPassword = await bcrypt.hash(req.body.password, 10);
//             const newUser = new User({
//                 username: req.body,
//                 password: hashedPassword,
//             });
//             const salt = await bcrypt.genSalt(15);
//             newUser.password = await bcrypt.hash(password, salt);
//             await newUser.save();
//             res.send("User Created");
//             console.log("newUser console.log: ", newUser);
//         }
//     });
// });

Router.get("/user", async (req, res) => {
    const userPassword = await Note.find()
    res.json(userPassword)
        // Note.find({})
        //     .then(data => {
        //         res.json(data)
        //     })
        .catch(err => {
            res.json(err)
        });
    // res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});

module.exports = Router;
