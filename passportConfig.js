const Note = require("./models/notes");
const bcyrpt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
    passport.use(
        new localStrategy((username, password, done) => {
            Note.findOne({ username: username }, (err, user) => {
                if (err) throw err;
                if (!user) return done(null, false)
                bcyrpt.compare(password, user.password, (err, res) => {
                    if (err) throw err;
                    if (res === true) {
                        return done(null, user)
                    } else {
                        return done(null, false);
                    }
                });
            });
        })
    );

    passport.serializeUser((user, cb) => {
        cb(null, user.id);

    })
    passport.deserializeUser((id, cb) => {
        Note.findOne({ _id: id }, (err, user) => {
            cb(err, user);
        });
    });
};